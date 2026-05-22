"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HoverlabsPhoneCardProps = {
  phone: string;
  index: number;
};

export default function HoverlabsPhoneCard({
  phone,
  index,
}: HoverlabsPhoneCardProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: {
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut",
        },
        opacity: {
          duration: 0.2,
          delay: index * 0.18,
        },
      }}
      className="relative mx-auto aspect-9/16 w-full max-w-[160px] drop-shadow-2xl md:max-w-[220px]"
    >
      <Image
        src={phone}
        alt={`Hoverlabs mobile screenshot ${index + 1}`}
        fill
        sizes="(max-width: 768px) 30vw, 220px"
        className="object-contain"
      />
    </motion.div>
  );
}
