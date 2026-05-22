import type { Project } from "./types";

export const projectsEn: Project[] = [
  {
    id: "zupchat",
    title: "ZupChat",
    description:
      "Realtime chat application built with React, TypeScript and Firebase. Authentication, realtime messaging, image sharing and profile management across multiple chat rooms.\nFocused on clear architecture and stable mobile-first design.\n\nDemo: demo@demo.com / demo123",
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
      "React project built with React and TypeScript.\nFetches data from the TMDB API using TanStack Query.\nUses React Context for dark/light mode and localStorage to persist user preferences.",
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
    title: "Mexikaska Kollektivet Skåne",
    description:
      "Responsive website for a cultural association with playful design and multilingual content. Includes image grid presentation, links and contact.\nBuilt with Vue, Pug and Vuetify.",
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
      "Digital platform for a startup project developing modular garden robots.\nThe work included responsive interfaces, user management, authentication, onboarding, email verification and API integration.",
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
