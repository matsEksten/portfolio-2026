"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

type ResumeButtonProps = {
  onClick?: () => void;
};

export default function ResumeButton({ onClick }: ResumeButtonProps) {
  const { language } = useLanguage();
  const isSv = language === "sv";
  const href = isSv ? "/cv/mats-eksten-cv-sv.pdf" : "/cv/mats-eksten-cv-en.pdf";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="rounded-full border border-violet-950 bg-violet-950 px-4 py-2 text-sm font-medium text-rose-50 shadow-sm transition-all duration-200 hover:opacity-85"
    >
      {isSv ? "CV" : "Resume"}
    </Link>
  );
}
