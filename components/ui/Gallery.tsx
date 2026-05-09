"use client";

import SectionLabel from "../Resusable_components/SectionLabel";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { TRANSFORMATIONS } from "@/utils/data";
import Image from "next/image";

/* =========================================
   CARD COMPONENT
========================================= */
function Card({ t, i }: { t: (typeof TRANSFORMATIONS)[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: i * 0.08,
      }}
      whileHover={{ y: -10 }}
      className="group relative aspect-[3/4] overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#141414]"
    >
      {/* Outer Border */}
      <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] border border-white/10 z-30 group-hover:border-[#FF4D1C]/40 transition-all duration-700" />

      {/* Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,77,28,0.35),transparent_60%)] z-10" />

      {/* Image */}
      <Image
        src={t.img}
        alt={t.name}
        fill
        sizes="(max-width: 640px) 85vw,
         (max-width: 1024px) 48vw,
         25vw"
        className="object-cover transition-all duration-700 group-hover:scale-[1.08] group-hover:brightness-[0.55]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 z-10" />

      {/* Top Tag */}
      <div className="absolute top-3 left-3 z-40">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/70">
            {t.tag}
          </p>
        </div>
      </div>

      {/* Floating Number */}
      <div className="absolute top-4 right-5 z-20">
        <span className="font-display text-6xl sm:text-7xl font-black text-white/[0.04]">
          0{i + 1}
        </span>
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 z-40 flex flex-col justify-end p-5 sm:p-7">
        <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
          {/* Premium Mini Line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 sm:w-12 h-[1px] bg-[#FF4D1C]" />

            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#FF4D1C]">
              Elite Transformation
            </p>
          </div>

          {/* Name */}
          <h3 className="font-display text-[1.5rem] sm:text-[2rem] leading-none font-black uppercase text-white">
            {t.name}
          </h3>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-[260px]">
            Discipline, consistency, and expert coaching completely reshaped
            this transformation journey.
          </p>

          {/* Bottom Area */}
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                Success Story
              </p>
            </div>

            {/* Arrow Button */}
            <div className="relative overflow-hidden w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF4D1C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <span className="relative z-10 text-white text-lg group-hover:translate-x-[2px] transition-transform duration-300">
                ↗
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Shine Sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 z-20">
        <div className="absolute -left-52 top-0 h-full w-40 bg-white/10 blur-3xl rotate-12 group-hover:translate-x-[500px] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Gallery() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;

    sliderRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollLeft = sliderRef.current.scrollLeft;

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;

    const index = Math.round(scrollLeft / cardWidth);

    setActiveIndex(index);
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0B0B0B] py-28 px-6 before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.45))]"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,77,28,0.12),transparent_30%)]" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4D1C]/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF4D1C]/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 lg:flex lg:items-end lg:justify-between gap-12">
          <div className="max-w-3xl">
            <SectionLabel>Success Stories</SectionLabel>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.9] text-[#F5EFE8]"
            >
              REAL PEOPLE.
              <br />
              <span className="text-[#FF4D1C]">REAL RESULTS.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 lg:mt-0 max-w-md"
          >
            <p className="text-white/45 leading-relaxed text-sm">
              Every transformation reflects discipline, consistency, and
              commitment.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            DESKTOP GRID
        ========================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {TRANSFORMATIONS.map((t, i) => (
            <Card key={i} t={t} i={i} />
          ))}
        </div>

        {/* =========================================
            MOBILE / TABLET SLIDER
        ========================================= */}
        <div className="lg:hidden">
          {/* Slider */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
              flex gap-4 overflow-x-auto pb-6
              snap-x snap-mandatory
              scrollbar-hide
            "
          >
            {TRANSFORMATIONS.map((t, i) => (
              <div key={i} className="min-w-[85%] sm:min-w-[48%] snap-center">
                <Card t={t} i={i} />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-2 flex justify-center gap-2">
            {TRANSFORMATIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`
        h-2 rounded-full transition-all duration-300
        ${
          activeIndex === i
            ? "w-8 bg-[#FF4D1C]"
            : "w-2 bg-white/20 hover:bg-white/40"
        }
      `}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://instagram.com/basefitclub"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4"
          >
            {/* Hover Fill */}
            <div className="absolute inset-0 bg-[#FF4D1C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-white">
                More on Instagram
              </span>

              <span className="text-white transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
