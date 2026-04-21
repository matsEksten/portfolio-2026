"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function About() {
  const { language } = useLanguage();
  const isSv = language === "sv";

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
            ? "Före detta tryckare som valde att börja om på ny kula och prova något nytt. När produktionen flyttades utomlands såg jag det som ett bra tillfälle att byta bana och satsa på en framtid som utvecklare. Med en nyfikenhet på hur digitala produkter är uppbyggda och en vilja att fortsätta lära och utvecklas jobbar jag mot att ta steget in i rollen som utvecklare."
            : "Former print operator who decided to start over and try something new. When production was moved abroad, I saw it as an opportunity to change direction and pursue a future as a developer. With a curiosity for how digital products are built and a desire to keep learning and growing, I’m working towards stepping into a developer role."}
        </p>

        <p>
          {isSv
            ? "Jag tycker om att skapa gränssnitt som känns enkla att använda och lätta att navigera i. För mig handlar det om att kombinera struktur och tillgänglighet till en genomtänkt helhet där användarupplevelsen är central."
            : "I enjoy creating interfaces that feel easy to use and intuitive to navigate. For me, it’s about combining structure and accessibility into a thoughtful whole, with the user experience at the center."}
        </p>
      </div>
    </section>
  );
}
