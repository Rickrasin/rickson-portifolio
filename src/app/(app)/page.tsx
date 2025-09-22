import HeroSection from "@/components/section/HeroSection";
import Experience from "@/components/section/Experience";
import Stacks from "@/components/section/StackSection";
import Services from "@/components/section/Services";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";
import { PROJECTS, STACKS, FEATURED_STACK_IDS } from "@/lib/data/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience projects={PROJECTS} />
      <Stacks stacks={STACKS} featuredIds={FEATURED_STACK_IDS} />
      <Services />
      <Projects />
      <Contact />
      <footer className="pb-12 text-center text-xs">
        © {new Date().getFullYear()} Rickson Dev — feito com Next.js
      </footer>
    </>
  );
}
