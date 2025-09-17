import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Stacks from "@/components/Stacks";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-dvh bg-black text-white">
      {" "}
      {/* <- preto absoluto */}
      {/* sidebar fixa no desktop */}
      <Sidebar />
      {/* conteúdo recuado no desktop */}
      <main className="px-5 md:px-8 py-8 space-y-8 md:ml-[280px] overflow-x-hidden">
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
    </div>
  );
}
