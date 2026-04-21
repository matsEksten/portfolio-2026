import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Divider */}
        <div className="mb-10 flex items-center">
          <div className="h-px w-full bg-zinc-300" />
        </div>

        {/* Content */}
        <div className="pb-12 flex flex-col items-center gap-4 text-zinc-700">
          {/* Icons */}
          <div className="flex items-center gap-5 text-3xl">
            <Link
              href="https://www.linkedin.com/in/mats-eksten-44946a326/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 duration-200 hover:opacity-100 hover:scale-103"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://github.com/matsEksten/"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-90 duration-200 hover:opacity-100 hover:scale-103"
            >
              <FaGithub />
            </Link>
          </div>

          {/* Email */}
          <a
            href="mailto:mats.eksten@outlook.com"
            className="text-sm transition hover:text-zinc-950"
          >
            mats.eksten@outlook.com
          </a>

          {/* Copyright */}
          <p className="text-xs text-zinc-500 tracking-wide">
            Mats Eksten © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
