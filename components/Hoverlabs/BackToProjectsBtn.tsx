"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function BackToProjectsBtn() {
  const { language: lang } = useLanguage();
  const isSv = lang === "sv";

  return (
    <div className="mt-10 flex justify-center">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
      >
        <FiArrowLeft className="text-base" />
        {isSv ? "Tillbaka till projekt" : "Back to projects"}
      </Link>
    </div>
  );
}
