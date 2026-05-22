"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";

// components
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerButton from "./HamburgerButton";
import ResumeButton from "./ResumeButton";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "" | "about" | "projects" | "contact"
  >("");

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const { language } = useLanguage();
  const isSv = language === "sv";

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

  // Track which section is currently active
  // so the matching nav link can be highlighted.
  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActiveSection("");
          return;
        }

        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (!visibleEntry) return;

        setActiveSection(
          visibleEntry.target.id as "about" | "projects" | "contact",
        );
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
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-rose-200 transition-transform duration-300 ease-in-out ${navbarVisible ? "translate-y-0" : "-translate-y-full"} md:translate-y-0`}
    >
      <div className="relative">
        <nav
          className="mx-auto flex max-w-8xl items-center justify-between px-10 py-6 xl:px-16"
          aria-label="Main navigation"
        >
          {/* Brand / home link */}
          <motion.div
            initial={isHomePage ? { opacity: 0, scale: 0.55 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.35,
              delay: isHomePage ? 1 : 0,
              ease: "easeOut",
            }}
          >
            <Link
              href="/"
              onClick={(e) => {
                setIsMenuOpen(false);

                if (isHomePage) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-lg font-semibold"
            >
              Mats Eksten
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            {!isHomePage && (
              <div className="md:hidden">
                <ResumeButton onClick={() => setIsMenuOpen(false)} />
              </div>
            )}
            {/* Language switcher */}
            <div className="flex items-center gap-3 md:hidden">
              <LanguageSwitcher />
            </div>

            {/* Mobile controls */}
            {isHomePage && (
              <div
                ref={mobileButtonRef}
                className="text-2xl flex items-center justify-center md:hidden"
              >
                <HamburgerButton
                  isOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                />
              </div>
            )}
            {/* Desktop navigation */}
            <motion.div
              initial={isHomePage ? { opacity: 0, y: -8 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: isHomePage ? 0.2 : 0,
              }}
              className="hidden md:flex items-center gap-6"
            >
              {isHomePage && (
                <div className="flex items-center gap-4">
                  <Link
                    href="#about"
                    className={`relative pb-1 transition-colors duration-200 ${
                      activeSection === "about"
                        ? "text-zinc-950 font-medium"
                        : "text-zinc-700 hover:text-zinc-950"
                    }`}
                  >
                    {isSv ? "Om mig" : "About"}
                    {activeSection === "about" && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full bg-zinc-950"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                  </Link>

                  <Link
                    href="#projects"
                    className={`relative pb-1 transition-colors duration-200 ${
                      activeSection === "projects"
                        ? "text-zinc-950 font-medium"
                        : "text-zinc-700 hover:text-zinc-950"
                    }`}
                  >
                    {isSv ? "Projekt" : "Projects"}
                    {activeSection === "projects" && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full bg-zinc-950"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                  </Link>

                  <Link
                    href="#contact"
                    className={`relative pb-1 transition-colors duration-200 ${
                      activeSection === "contact"
                        ? "text-zinc-950 font-medium"
                        : "text-zinc-700 hover:text-zinc-950"
                    }`}
                  >
                    {isSv ? "Kontakt" : "Contact"}
                    {activeSection === "contact" && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full bg-zinc-950"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                </div>
              )}

              <motion.div
                initial={isHomePage ? { opacity: 0, scale: 0.55 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: isHomePage ? 1 : 0,
                }}
                className="hidden md:block"
              >
                <ResumeButton onClick={() => setIsMenuOpen(false)} />
              </motion.div>

              <div className="flex items-center gap-3">
                <LanguageSwitcher />
              </div>
            </motion.div>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {isHomePage && (
        <div className="relative md:hidden">
          {isMenuOpen && (
            <div
              ref={mobileDropdownRef}
              className="absolute top-full left-0 w-full border-b border-zinc-800/15 bg-rose-200 px-6 pb-6 pt-4 shadow-sm rounded-b-xl md:hidden"
            >
              <div className="flex flex-col items-start gap-5">
                <div className="flex justify-start">
                  <ResumeButton onClick={() => setIsMenuOpen(false)} />
                </div>

                <div className="h-px w-full bg-zinc-800/15" />
                <Link
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full py-1 ${
                    activeSection === "about"
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  {isSv ? "Om mig" : "About"}
                </Link>

                <Link
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full py-1 ${
                    activeSection === "projects"
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  {isSv ? "Projekt" : "Projects"}
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full py-1 ${
                    activeSection === "contact"
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  {isSv ? "Kontakt" : "Contact"}
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
