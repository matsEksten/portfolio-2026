"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { TbFileCv } from "react-icons/tb";

export default function About() {
  const { language } = useLanguage();
  const isSv = language === "sv";

  const href = isSv ? "/cv/mats-eksten-cv-sv.pdf" : "/cv/mats-eksten-cv-en.pdf";

  return (
    <section id="about" className="mx-auto mt-20 max-w-4xl px-6 scroll-mt-32">
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-300" />
        <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-zinc-600">
          {isSv ? "Om mig" : "About"}
        </h2>
        <div className="h-px flex-1 bg-zinc-300" />
      </div>

      <div className="space-y-6 text-base leading-relaxed text-zinc-700 md:text-lg">
        <p>
          {isSv
            ? "Före detta tryckare som valde att börja om på ny kula och prova något nytt. När produktionen flyttades utomlands såg jag det som ett bra tillfälle att byta bana och rikta in mig på en framtid som utvecklare. Med ett intresse för kod, en nyfikenhet på hur digitala tjänster är uppbyggda och en vilja att fortsätta lära mig och utvecklas inom området bygger jag idag vidare på min kompetens inom systemutveckling."
            : "Former print operator who decided to start over and try something new. When production was moved abroad, I saw it as a good opportunity to change direction and pursue a future as a developer. With an interest in code, a curiosity about how digital services are built, and a desire to keep learning and developing within the field, I am now continuing to build my skills in software development."}
        </p>

        <p>
          {isSv
            ? "Jag har en examen i frontendutveckling från Medieinstitutet i Malmö och studerar nu systemutveckling med C# och .NET på Newton, även det i Malmö. Mitt mål är att bygga en bredare och mer komplett kunskapsbas, där mina grundkunskaper inom frontend utgör en del av den helhet jag nu försöker skapa när jag inriktar mig mer mot backend, databaser och systemutveckling. Det övergripande målet är att lägga grunden för en långsiktig yrkesroll inom utveckling."
            : "I have a degree in Frontend Development from Medieinstitutet in Malmö and am currently studying Software Development with C# and .NET at Newton, also in Malmö. My goal is to build a broader and more complete knowledge base, where my foundation in frontend development forms part of the wider profile I am now creating as I focus more on backend development, databases, and software development. The overall goal is to build a solid foundation for a long-term career in development."}
        </p>
        <div className="flex justify-center mt-12 md:hidden">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition"
          >
            <TbFileCv className="text-xl" />
            {isSv ? "CV" : "Resume"}
          </a>
        </div>
      </div>
    </section>
  );
}
