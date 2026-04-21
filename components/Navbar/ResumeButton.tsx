import Link from "next/link";

type ResumeButtonProps = {
  lang: "sv" | "en";
  onClick: () => void;
};

export default function ResumeButton({ lang }: ResumeButtonProps) {
  const isSv = lang === "sv";
  const href = isSv ? "/cv/mats-eksten-cv-sv.pdf" : "/cv/mats-eksten-cv-en.pdf";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-950/90 transition duration-200 hover:bg-zinc-950/90 hover:text-rose-50"
    >
      {isSv ? "CV" : "Resume"}
    </Link>
  );
}
