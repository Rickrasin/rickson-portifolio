import Hero from "@/components/section/Hero";
import Experience from "@/components/section/Experience";
import Stacks from "@/components/section/Stacks";
import Services from "@/components/section/Services";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <main className="min-h-dvh ">
      {" "}
      {/* conteúdo recuado no desktop */}
      <main className="px-5 md:px-8 py-8 space-y-8 overflow-x-hidden">
        <Hero />
        <Experience />
        <Stacks />
        <Services />
        <Projects />
        <Contact />
        <footer className="pb-12 text-center text-xs text-[#A7B1B8]">
          © {new Date().getFullYear()} Rickson Dev — feito com Next.js
        </footer>
      </main>
    </main>
  );
}
