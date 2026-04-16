import type { Project } from "./types";

export const projectsEn: Project[] = [
  {
    id: "zupchat",
    title: "ZupChat",
    description:
      "Real-time chat application built with React, TypeScript and Firebase. Authentication, real-time messaging, image sharing and access-code protected chat rooms.\nFocus on clean architecture and stable mobile-first design.\n\nDemo: demo@demo.com / demo123",
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
      "Responsive website for a cultural association with a playful design and clear structure.\nIncludes pages for content, images, links and contact.\nBuilt with Vue, Pug and Vuetify.",
    imageSrc: "/images/projects/MKS.webp",
    liveUrl: "https://mexikanskakollektivet.mx10.se/",
    tech: [
      { name: "Vue", icon: "/icons/vuedotjs.svg" },
      { name: "Vuetify", icon: "/icons/vuetify.svg" },
      { name: "Pug", icon: "/icons/pug.svg" },
    ],
  },
];
