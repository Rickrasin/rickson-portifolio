import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.EMAIL_FROM;
const emailTo = process.env.EMAIL_TO;

if (!resendApiKey || !emailFrom || !emailTo) {
  console.warn(
    "[/api/contact] Missing envs: RESEND_API_KEY/EMAIL_FROM/EMAIL_TO"
  );
}

const resend = new Resend(resendApiKey);

// ======= helpers =======
function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function sanitize(s: string) {
  return s.replace(/[\u0000-\u001F\u007F]/g, "").slice(0, 5000);
}

const WINDOW_MS = 60_000;
const MAX_REQS = 5;
const hits = new Map<string, { count: number; ts: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return { ok: true, remaining: MAX_REQS - 1 };
  }
  if (rec.count >= MAX_REQS) return { ok: false, remaining: 0 };
  rec.count++;
  return { ok: true, remaining: MAX_REQS - rec.count };
}

// ======= handler =======
export async function POST(req: Request) {
  try {
    if (
      req.headers.get("content-type")?.includes("application/json") !== true
    ) {
      return NextResponse.json(
        { error: "Invalid content-type" },
        { status: 415 }
      );
    }
    if (!resendApiKey || !emailFrom || !emailTo) {
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "0.0.0.0";

    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests, try again soon." },
        { status: 429, headers: { "X-RateLimit-Remaining": "0" } }
      );
    }

    const body = (await req.json().catch(() => null)) as {
      name?: string;
      email?: string;
      message?: string;
      hp?: string;
    } | null;

    if (!body) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    if (body.hp && body.hp.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = sanitize((body.name ?? "").trim());
    const email = sanitize((body.email ?? "").trim());
    const message = sanitize((body.message ?? "").trim());

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    else if (!isValidEmail(email)) errors.email = "Email is invalid";
    if (!message) errors.message = "Message is required";

    if (Object.keys(errors).length) {
      return NextResponse.json(
        { error: "Missing fields", fields: errors },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `Novo contato de ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error("[/api/contact] Resend error:", error);
      return NextResponse.json(
        { error: "Email provider error" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { ok: true },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (e) {
    console.error("[/api/contact] Unexpected error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
