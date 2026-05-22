"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function HoverlabsIntro() {
  const { language: lang } = useLanguage();
  const isSv = lang === "sv";

  return (
    <section className="mx-auto mt-16 max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Hoverlabs
        </h2>
        <p className="whitespace-pre-line text-base leading-relaxed text-zinc-700">
          {isSv
            ? "Hoverlabs är ett startup-projekt som utvecklar modulära trädgårdsrobotar med modern teknik, avsedda för underhåll av utemiljöer under årets olika säsonger. I projektet arbetade jag med att utveckla deras digitala plattform, vilket bland annat innebar responsiva gränssnitt, användarupplevelse, användarhantering och autentisering med e-postverifiering, onboarding och profilhantering.\n\nPlattformen är framtagen för att fungera som en investerar- och marknadsföringssida för att nå ut till intressenter. Därför byggdes kontakt- och investerarformulär med Resend samt spamskydd med Cloudflare Turnstile. Innehållet hämtades via API-integration, så att texter och media kan hanteras från backend i stället för att uppdateras direkt i kodbasen. Applikationen byggdes med Next.js och TypeScript, serverbaserad autentisering, API-drivet innehåll och Zod-validering."
            : "Hoverlabs is a startup project developing modular garden robots with modern technology, designed for maintaining outdoor environments across different seasons. In the project, I worked on developing the company’s digital platform, which included responsive interfaces, user experience, user management and authentication with email verification, onboarding and profile management.\n\nThe platform is designed to function as an investor and marketing site for reaching potential stakeholders. Contact and investor forms were built with Resend together with spam protection using Cloudflare Turnstile. Content was fetched through API integration, allowing text and media to be managed from the backend instead of being updated directly in the codebase. The application was built with Next.js and TypeScript, server-based authentication, API-driven content and Zod validation."}
        </p>
      </motion.div>
    </section>
  );
}
