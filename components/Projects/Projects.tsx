"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { useLanguage } from "@/components/providers/LanguageProvider";

// data
import { projectsEn } from "@/data/projects/en";
import { projectsSv } from "@/data/projects/sv";

export default function Projects() {
  const { language: lang } = useLanguage();
  const isSv = lang === "sv";

  const projects = isSv ? projectsSv : projectsEn;

  return (
    <section
      id="projects"
      className="mx-auto mt-20 max-w-6xl px-6 scroll-mt-32 md:mt-30"
    >
      <div className="mb-14 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-300" />
        <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-zinc-600">
          {isSv ? "Mina Projekt" : "My Projects"}
        </h2>
        <div className="h-px flex-1 bg-zinc-300" />
      </div>

      <div className="grid grid-cols-1 gap-y-12 md:gap-y-24 xl:grid-cols-2 xl:gap-x-10">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Mobile version */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-xl bg-white shadow-md md:hidden"
            >
              <div className="relative aspect-3/2 overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  preload
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 30vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-br from-zinc-900/70 via-transparent to-white/20" />

                <div className="absolute left-4 top-4 z-10 flex gap-3 rounded-xl bg-white/75 px-4 py-2 shadow-sm backdrop-blur-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:opacity-80"
                    >
                      <FaExternalLinkAlt className="text-base" />
                      <span>Live</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:opacity-80"
                    >
                      <FaGithub className="text-base" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 p-5">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="whitespace-pre-line text-sm leading-[1.65] text-zinc-600/90">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                        duration: 0.5,
                        delay: 0.2 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={25}
                        height={25}
                      />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900/75 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Desktop version */}
            <div className="hidden md:flex md:items-start md:justify-center">
              <motion.div
                initial={{ x: -30, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="overflow-hidden rounded-t-xl shadow-md md:w-[45%] md:shrink-0 md:rounded-xl lg:w-[40%] xl:w-[60%]"
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 30vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-br from-zinc-900/70 via-transparent to-white/20" />

                  <div className="absolute left-4 top-4 z-10 flex gap-3 rounded-xl bg-white/75 px-4 py-2 shadow-sm backdrop-blur-sm">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:opacity-80"
                      >
                        <FaExternalLinkAlt className="text-base" />
                        <span>Live</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:opacity-80"
                      >
                        <FaGithub className="text-base" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="z-10 flex flex-col justify-between gap-4 rounded-b-xl bg-white p-5 shadow-md md:min-h-[250px] md:w-[48%] md:-ml-12 md:translate-y-10 md:rounded-xl lg:min-h-[300px] lg:w-[40%] xl:min-h-[360px] xl:w-[54%] xl:-ml-20"
              >
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="whitespace-pre-line text-sm leading-[1.65] text-zinc-600/90">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                        duration: 0.5,
                        delay: 0.2 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={25}
                        height={25}
                      />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900/75 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
