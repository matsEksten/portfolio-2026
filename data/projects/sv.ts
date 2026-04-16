import type { Project } from "./types";

export const projectsSv: Project[] = [
  {
    id: "zupchat",
    title: "ZupChat",
    description:
      "Realtidschatt byggd med React, TypeScript och Firebase. Autentisering, realtidsmeddelanden, bilddelning och chattrum skyddade med accesskod.\nFokus på tydlig arkitektur och stabil mobile-first design.\n\nDemo: demo@demo.com / demo123",
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
      "Responsiv webbplats för en kulturförening med fokus på lekfull design och tydlig struktur.\nInnehåller sidor för innehåll, bilder, länkar och kontakt.\nByggd med Vue, Pug och Vuetify.",
    imageSrc: "/images/projects/MKS.webp",
    liveUrl: "https://mexikanskakollektivet.mx10.se/",
    tech: [
      { name: "Vue", icon: "/icons/vuedotjs.svg" },
      { name: "Vuetify", icon: "/icons/vuetify.svg" },
      { name: "Pug", icon: "/icons/pug.svg" },
    ],
  },
];
