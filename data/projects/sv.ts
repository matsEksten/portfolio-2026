import type { Project } from "./types";

export const projectsSv: Project[] = [
  {
    id: "zupchat",
    title: "ZupChat",
    description:
      "Realtidschatt byggd med React, TypeScript och Firebase. Autentisering, realtidsmeddelanden, bilddelning och profilhantering i flera chattrum.\nFokus på tydlig arkitektur och stabil mobile-first design.\n\nDemo: demo@demo.com / demo123",
    imageSrc: "/images/projects/zupchat.webp",
    liveUrl: "https://zupchat.mx10.se/",
    githubUrl: "https://github.com/matsEksten/zupchat",
    tech: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    ],
  },
  {
    id: "movie-mania",
    title: "Movie Mania",
    description:
      "React-projekt byggt med React och TypeScript.\nHämtar data från TMDB API med TanStack Query.\nAnvänder React Context för dark/light mode och localStorage för att spara användarens val.",
    imageSrc: "/images/projects/moviemania.webp",
    liveUrl: "https://mymoviemaniatmdbapp.netlify.app/",
    githubUrl:
      "https://github.com/the-hive-resistance/fed24-js2-uppgift-2-matsEksten",
    tech: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "TanStack Query", icon: "/icons/tanstack.svg" },
      { name: "React Bootstrap", icon: "/icons/reactbootstrap.svg" },
    ],
  },
  {
    id: "mexikanska-kollektivet",
    title: "Mexikanska Kollektivet Skåne",
    description:
      "Responsiv webbplats för en kulturförening med lekfull design och flerspråkigt innehåll. Innehåller bildpresentation i grid, länkar och kontakt.\nByggd med Vue, Pug och Vuetify.",
    imageSrc: "/images/projects/MKS.webp",
    liveUrl: "https://mexikanskakollektivet.mx10.se/",
    tech: [
      { name: "Vue", icon: "/icons/vuedotjs.svg" },
      { name: "Vuetify", icon: "/icons/vuetify.svg" },
      { name: "Pug", icon: "/icons/pug.svg" },
    ],
  },
  {
    id: "hoverlabs",
    title: "Hoverlabs",
    description:
      "Digital plattform för ett startup-projekt som utvecklar modulära trädgårdsrobotar.\nArbetet inkluderade responsiva gränssnitt, användarhantering, autentisering, onboarding, e-postverifiering och API-integration.",
    imageSrc: "/images/projects/hover-labs.jpg",
    caseStudyUrl: "/projects/hoverlabs",
    tech: [
      { name: "Next.js", icon: "/icons/nextdotjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Sass", icon: "/icons/sass.svg" },
      { name: "Zod", icon: "/icons/zod.svg" },
    ],
  },
];
