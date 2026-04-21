import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import TechStack from "@/components/TechStack/TechStack";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="py-8">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
