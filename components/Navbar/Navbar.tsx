"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";

// components
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerButton from "./HamburgerButton";
import ResumeButton from "./ResumeButton";

type NavbarProps = {
  lang: "sv" | "en";
};

export default function Navbar({ lang }: NavbarProps) {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isSv = lang === "sv";

  console.log(activeSection);

  // Separate refs let the mobile menu close on outside click
  // while keeping the hamburger button and full-width dropdown independent.
  const mobileButtonRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu when the user clicks outside
  // both the hamburger button and the dropdown panel.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return;

      const target = event.target as Node;

      const clickedInsideButton =
        mobileButtonRef.current?.contains(target) ?? false;

      const clickedInsideDropdown =
        mobileDropdownRef.current?.contains(target) ?? false;

      if (!clickedInsideButton && !clickedInsideDropdown) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // On mobile, hide the navbar while scrolling down
  // and show it again when scrolling up to free up screen space.
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isMenuOpen) {
        setNavbarVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      const scrollDifference = currentScrollY - lastScrollY;

      // Ignore very small scroll movements to avoid a flickering navbar.
      if (Math.abs(scrollDifference) < 10) return;

      if (currentScrollY <= 0) {
        setNavbarVisible(true);
      } else if (scrollDifference > 0) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Clear the active section and remove the hash near the top of the page
  // so language switching does not jump the user down to a section.
  useEffect(() => {
    const handleTopOfPage = () => {
      if (window.scrollY < 120) {
        setActiveSection("");
        window.history.replaceState(null, "", `/${lang}`);
      }
    };

    window.addEventListener("scroll", handleTopOfPage);

    return () => {
      window.removeEventListener("scroll", handleTopOfPage);
    };
  }, [lang]);

  // Track which main section is currently active.
  // This powers both the active nav state and hash sync in the URL.
  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActiveSection("");
          // Update the URL without triggering a new navigation or scroll jump.
          window.history.replaceState(null, "", `/${lang}`);
          return;
        }

        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (!visibleEntry) return;

        const newActiveSection = visibleEntry.target.id;
        setActiveSection(newActiveSection);

        const newUrl = `/${lang}#${newActiveSection}`;
        // Update the URL without triggering a new navigation or scroll jump.
        window.history.replaceState(null, "", newUrl);
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [lang]);

  return (
    <header
      className={`sticky top-0 z-50 bg-rose-200 md:top-4 transition-transform duration-300 ease-in-out ${navbarVisible ? "translate-y-0" : "-translate-y-full"} md:translate-y-0`}
    >
      <div className="relative">
        <nav
          className="mx-auto flex max-w-8xl items-center justify-between px-10 py-6 xl:px-16"
          aria-label="Main navigation"
        >
          {/* Brand / home link */}
          <div>
            <Link href={`/${lang}`} className="text-lg font-semibold">
              Mats Eksten
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-3 md:hidden">
              <LanguageSwitcher lang={lang} />
            </div>

            {/* Mobile controls */}
            <div
              ref={mobileButtonRef}
              className="text-2xl flex items-center justify-center md:hidden"
            >
              <HamburgerButton
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            </div>
            {/* Desktop navigation */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
              className="hidden md:flex items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <Link href={`/${lang}#about`}>{isSv ? "Om mig" : "About"}</Link>
                <Link href={`/${lang}#projects`}>
                  {isSv ? "Projekt" : "Projects"}
                </Link>
                <Link href={`/${lang}#contact`}>
                  {isSv ? "Kontakt" : "Contact"}
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.55 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.5 }}
                className="hidden md:block"
              >
                <ResumeButton
                  lang={lang}
                  onClick={() => setIsMenuOpen(false)}
                />
              </motion.div>

              <div className="flex items-center gap-3">
                <LanguageSwitcher lang={lang} />
              </div>
            </motion.div>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <div className="md:hidden relative flex items-center gap-6">
        {isMenuOpen && (
          <div
            ref={mobileDropdownRef}
            className="absolute top-full left-0 w-full border-b border-zinc-800/15 bg-rose-200 px-6 pb-6 pt-4 shadow-sm rounded-b-xl md:hidden"
          >
            <div className="flex flex-col items-start gap-5">
              <div className="w-full">
                <ResumeButton
                  lang={lang}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              <div className="h-px w-full bg-zinc-800/15" />
              <Link
                href={`/${lang}#about`}
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-1"
              >
                {isSv ? "Om mig" : "About"}
              </Link>

              <Link
                href={`/${lang}#projects`}
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-1"
              >
                {isSv ? "Projekt" : "Projects"}
              </Link>

              <Link
                href={`/${lang}#contact`}
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-1"
              >
                {isSv ? "Kontakt" : "Contact"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
