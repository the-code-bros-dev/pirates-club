"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/dist/shared/lib/image-external";
import Image from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  desc: string;
  index: number;
}

export default function ServiceCard({ img, title, desc, index }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="
  group relative
  h-full overflow-hidden
  md:rounded-[30px]
  rounded-2xl
  border border-white/10
  bg-[#141414]
"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,77,28,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-700 z-10" />

      {/* Image */}
      <div className="relative md:h-72 h-45 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="
            object-cover
            transition-all duration-700
            group-hover:scale-110
            group-hover:brightness-[0.6]
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />

        {/* Floating Number */}
        <div className="absolute top-5 right-5 z-20">
          <span className="font-display text-6xl font-black text-white/[0.08]">
            0{index + 1}
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-5 left-5 z-20">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70">
              Premium
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 md:p-5 p-3">
        {/* Mini Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="md:w-10 w-2 h-[1px] bg-[#FF4D1C]" />

          <p className="font-mono text-[8px] md:text-[10px] tracking-[0.25em] uppercase text-[#FF4D1C]">
            Elite Service
          </p>
        </div>

        {/* Title */}
        <h3 className="font-display md:text-3xl text-base font-black tracking-wide uppercase leading-none text-white mb-2 group-hover:text-[#FF4D1C] transition duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/50 md:text-sm text-[12px] leading-relaxed">
          {desc}
        </p>

        {/* Bottom */}
        <div className=" flex items-center justify-between">
          <p className="font-mono text-[8px] md:text-[10px] tracking-[0.25em] uppercase text-white/35">
            Learn More
          </p>

          {/* Arrow */}
          <div
            className="
              relative overflow-hidden
              md:w-12 md:h-12 h-8 w-8 rounded-full
              border border-white/10
              bg-white/5 backdrop-blur-xl
              flex items-center justify-center
            "
          >
            <div className="absolute inset-0 bg-[#FF4D1C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <span className="relative z-10 text-white text-lg group-hover:translate-x-[2px] transition-transform duration-300">
              ↗
            </span>
          </div>
        </div>
      </div>

      {/* Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 z-30">
        <div className="absolute -left-52 top-0 h-full w-40 bg-white/10 blur-3xl rotate-12 group-hover:translate-x-[500px] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}
