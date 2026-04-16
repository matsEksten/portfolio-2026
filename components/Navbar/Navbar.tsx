import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";

// components
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  lang: "sv" | "en";
};

export default function Navbar({ lang }: NavbarProps) {
  const isSv = lang === "sv";

  return (
    <header className="sticky top-4 z-50 border-b border-rose-300/50 bg-rose-200/70 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-10 py-6"
        aria-label="Main navigation"
      >
        {/* Left */}
        <div>
          <Link href={`/${lang}`} className="text-lg font-semibold">
            Mats Eksten
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Links */}
          <div className="flex items-center gap-4">
            <Link href={`/${lang}#about`}>{isSv ? "Om mig" : "About"}</Link>

            <Link href={`/${lang}#projects`}>
              {isSv ? "Projekt" : "Projects"}
            </Link>

            <Link href={`/${lang}#contact`}>
              {isSv ? "Kontakt" : "Contact"}
            </Link>
          </div>

          {/* Theme + Language */}
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Toggle theme">
              <MdOutlineDarkMode size={20} />
            </button>

            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </nav>
    </header>
  );
}
