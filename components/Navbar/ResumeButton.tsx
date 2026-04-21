"use client";

import Link from "next/link";
import { TbFileCv } from "react-icons/tb";
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
      className="flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-zinc-950 px-4 py-2 text-sm font-medium text-rose-50 transition-all duration-200 hover:scale-103 hover:bg-rose-50 hover:text-zinc-950 hover:shadow-lg-50"
    >
      <TbFileCv className="text-xl" />

      <span>{isSv ? "CV" : "Resume"}</span>
    </Link>
  );
}
