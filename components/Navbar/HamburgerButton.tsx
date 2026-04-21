type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerButton({
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="relative flex h-10 w-10 items-center justify-center md:hidden"
    >
      <span
        className={`absolute h-0.5 w-7 rounded-full bg-zinc-900 transition-all duration-300 ${
          isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-2"
        }`}
      />
      <span
        className={`absolute top-1/2 h-0.5 w-7 -translate-y-1/2 rounded-full bg-zinc-900 transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-7 rounded-full bg-zinc-900 transition-all duration-300 ${
          isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-2"
        }`}
      />
    </button>
  );
}
