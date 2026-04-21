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
      className="rounded-full border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-950/90 transition duration-200 hover:bg-zinc-950/90 hover:text-rose-50"
    >
      {isSv ? "CV" : "Resume"}
    </Link>
  );
}
