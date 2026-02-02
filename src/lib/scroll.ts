export function scrollToHash(href: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const url = new URL(href, window.location.href);
    const hash = url.hash;
    if (!hash) return false;

    const id = hash.slice(1);
    const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
    if (!el) return false;

    // Smooth scroll
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Keep the current pathname when href points to `/` (localized routes like /pt)
    const newPathname = url.pathname === window.location.pathname ? url.pathname : window.location.pathname;
    history.replaceState(null, "", newPathname + hash);
    return true;
  } catch (e) {
    return false;
  }
}
