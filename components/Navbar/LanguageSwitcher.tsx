"use client";

import { useRouter } from "next/navigation";

type LanguageSwitcherProps = {
  lang: "sv" | "en";
};

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();

  function handleLanguageChange(nextLang: "sv" | "en") {
    if (nextLang === lang) return;

    const currentHash = window.location.hash;
    router.push(`/${nextLang}${currentHash}`);
  }

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => handleLanguageChange("sv")}
        disabled={lang === "sv"}
        className={
          lang === "sv"
            ? "font-semibold text-zinc-900 cursor-default"
            : "text-zinc-600 cursor-pointer"
        }
      >
        SV
      </button>

      <span>/</span>

      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        disabled={lang === "en"}
        className={
          lang === "en"
            ? "font-semibold text-zinc-900 cursor-default"
            : "text-zinc-600 cursor-pointer"
        }
      >
        EN
      </button>
    </div>
  );
}
