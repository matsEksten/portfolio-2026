"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => setLanguage("sv")}
        disabled={language === "sv"}
        className={
          language === "sv"
            ? "font-semibold text-zinc-900 cursor-default"
            : "text-zinc-600 cursor-pointer"
        }
      >
        SV
      </button>

      <span>/</span>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        disabled={language === "en"}
        className={
          language === "en"
            ? "font-semibold text-zinc-900 cursor-default"
            : "text-zinc-600 cursor-pointer"
        }
      >
        EN
      </button>
    </div>
  );
}
