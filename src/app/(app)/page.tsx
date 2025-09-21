import HeroSection from "@/components/section/HeroSection";
import Experience from "@/components/section/Experience";
import Stacks from "@/components/section/Stacks";
import Services from "@/components/section/Services";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";
import { PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience projects={PROJECTS} />
      <Stacks />
      <Services />
      <Projects />
      <Contact />
      <footer className="pb-12 text-center text-xs">
        © {new Date().getFullYear()} Rickson Dev — feito com Next.js
      </footer>
    </>
  );
}
