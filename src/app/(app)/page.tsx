import HeroSection from "@/components/section/HeroSection";
import Experience from "@/components/section/Experience";
import Stacks from "@/components/section/Stacks";
import Services from "@/components/section/Services";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <Stacks />
      <Services />
      <Projects />
      <Contact />
      <footer className="pb-12 text-center text-xs text-[#A7B1B8]">
        © {new Date().getFullYear()} Rickson Dev — feito com Next.js
      </footer>
    </>
  );
}
