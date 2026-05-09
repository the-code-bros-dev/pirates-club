"use client";

import { useRef, useState } from "react";
import ServiceCard from "../Cards/ServiceCard";
import { SERVICES } from "@/utils/data";
import { motion } from "framer-motion";
import SectionLabel from "../Resusable_components/SectionLabel";

export default function Services() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================
     SCROLL TO CARD
  ========================================= */
  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;

    sliderRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /* =========================================
     ACTIVE DOT
  ========================================= */
  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollLeft = sliderRef.current.scrollLeft;

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;

    const index = Math.round(scrollLeft / cardWidth);

    setActiveIndex(index);
  };

  return (
    <section id="services" className="relative bg-[#0B0B0B] py-22 px-4 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF4D1C]/10 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-3xl">
            <SectionLabel>What We Offer</SectionLabel>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.9] text-[#F5EFE8]"
            >
              9 WAYS WE MAKE YOU{" "}
              <span className="text-[#FF4D1C]">UNSTOPPABLE</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-sm leading-relaxed text-white/45"
          >
            Elite coaching, science-based training, and premium facilities
            designed to unlock your strongest version.
          </motion.p>
        </div>
        <div>
          <div className="pt-4 overflow-visible">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="
                flex md:gap-5 gap-2 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6"
            >
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  className="
                  min-w-[80%]
                  sm:min-w-[30%]
                  snap-center
                "
                >
                  <ServiceCard {...s} index={i} />
                </div>
              ))}
            </div>
          </div>
          {/* =========================================
              DOTS
          ========================================= */}
          <div className="mt-4 flex justify-center gap-2">
            {SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`
                  h-2 rounded-full transition-all duration-500
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
      </div>
    </section>
  );
}
