import Image from "next/image";

type HeroProps = {
  lang: "sv" | "en";
};

export default function Hero({ lang }: HeroProps) {
  const isSv = lang === "sv";

  return (
    <section id="hero" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center">
        <div className="relative h-72 w-72 shrink-0 overflow-hidden rounded-full border border-zinc-300/60 md:h-96 md:w-96">
          <Image
            src="/images/profile/mats-eksten-profile.webp"
            alt="Mats Eksten"
            fill
            priority
            className="object-cover object-center scale-110"
          />
        </div>

        <div className="relative z-10 mt-6 flex max-w-2xl flex-col gap-3 text-center md:-ml-16 md:translate-y-12 md:max-w-md md:rounded-2xl md:bg-white md:p-8 md:text-left md:shadow-lg lg:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            {isSv ? "Frontendutvecklare" : "Frontend Developer"}
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            {isSv ? "Hej, jag är Mats" : "Hello, I'm Mats"}
          </h1>

          <p className="text-base leading-relaxed text-zinc-700">
            {isSv
              ? "Jag gillar att skapa användarvänliga gränssnitt där struktur och tillgänglighet formar en genomtänkt helhet. Jag drivs av nyfikenhet och en vilja att fortsätta utvecklas och fördjupa min förståelse för kod."
              : "I enjoy building user-friendly interfaces where structure and accessibility shape a thoughtful and cohesive experience. I’m driven by curiosity and a desire to keep learning and deepen my understanding of code."}
          </p>

          <a
            href={`/${lang}#contact`}
            className="mt-4 self-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 md:self-start"
          >
            {isSv ? "Kontakt" : "Contact"}
          </a>
        </div>
      </div>
    </section>
  );
}
