import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import TechStack from "@/components/TechStack/TechStack";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  return (
    <>
      <main className="py-8">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
