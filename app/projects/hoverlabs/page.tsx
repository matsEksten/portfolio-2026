import Image from "next/image";
import HoverlabsPhoneCard from "@/components/Hoverlabs/HoverlabsPhoneCard";
import HoverlabsIntro from "@/components/Hoverlabs/HoverlabsIntro";
import BackToProjectsBtn from "@/components/Hoverlabs/BackToProjectsBtn";

const phones = [
  "/images/projects/hoverlabs/hoverlabs-phone-1-2.png",
  "/images/projects/hoverlabs/hoverlabs-phone-2.png",
  "/images/projects/hoverlabs/hoverlabs-phone-3.png",
];

export default function HoverlabsPage() {
  return (
    <main className="py-8">
      <section className="mx-auto max-w-7xl px-0 md:px-6">
        <div className="relative overflow-hidden md:rounded-3xl md:shadow-lg">
          <div className="relative aspect-16/8">
            <Image
              src="/images/projects/hoverlabs/hoverlabs-hero-1.webp"
              alt="Hoverlabs"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* The center phone is hidden on mobile to keep the layout less crowded. */}
        <div className="relative z-10 mx-auto -mt-10 grid max-w-4xl grid-cols-2 gap-3 px-4 md:-mt-24 md:grid-cols-3 md:gap-8">
          {phones.map((phone, index) => (
            <div key={phone} className={index === 1 ? "hidden md:block" : ""}>
              <HoverlabsPhoneCard phone={phone} index={index} />
            </div>
          ))}
        </div>
      </section>

      <HoverlabsIntro />

      <BackToProjectsBtn />
    </main>
  );
}
