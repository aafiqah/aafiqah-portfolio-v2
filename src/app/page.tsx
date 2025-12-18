import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}