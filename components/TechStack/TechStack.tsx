"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const techItems = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextwhite.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Framer Motion", icon: "/icons/framer.svg" },
  { name: "Node.js", icon: "/icons/nodedotjs.svg" },
  { name: "Prisma", icon: "/icons/prisma.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];
export default function TechStack() {
  const { language: lang } = useLanguage();
  const isSv = lang === "sv";
  return (
    <section
      id="tech"
      className="mt-24 w-full bg-zinc-950/90 text-white scroll-mt-32"
    >
      {" "}
      <div className="mx-auto max-w-4xl px-6 py-20">
        {" "}
        <div className="mb-12 flex items-center gap-4">
          {" "}
          <div className="h-px flex-1 bg-white/20" />{" "}
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-white/80">
            {" "}
            {isSv ? "Tekniker" : "Tech stack"}{" "}
          </h2>{" "}
          <div className="h-px flex-1 bg-white/20" />{" "}
        </div>{" "}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {" "}
          {techItems.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 text-center"
            >
              {" "}
              <div className="flex h-16 w-16 items-center justify-center">
                {" "}
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />{" "}
              </div>{" "}
              <p className="text-sm font-medium text-white/85">
                {tech.name}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
