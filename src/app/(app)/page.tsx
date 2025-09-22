import HeroSection from "@/components/pages/HomePage/HeroSection";
import Experience from "@/components/pages/HomePage/ExperienceSection";
import Stacks from "@/components/pages/HomePage/StackSection";
import Services from "@/components/pages/HomePage/ServicesSection";
import Projects from "@/components/pages/HomePage/ProjectsSection";
import Contact from "@/components/pages/HomePage/ContactSection";
import { PROJECTS, STACKS, FEATURED_STACK_IDS } from "@/lib/data";

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
