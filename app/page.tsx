import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Techskills from "@/components/techskills";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Techskills />
      <Projects />
    </div>
  );
}
