// components
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import TechStack from "@/components/TechStack/TechStack";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

type PageProps = {
  params: Promise<{
    lang: "sv" | "en";
  }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return (
    <main className="py-8">
      <Hero lang={lang} />
      <About lang={lang} />
      <TechStack lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
