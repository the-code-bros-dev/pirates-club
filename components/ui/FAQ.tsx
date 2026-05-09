"use client";

import FAQItem from "../Resusable_components/FAQItem";
import { FAQS } from "@/utils/data";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "../Resusable_components/SectionLabel";
import Image from "next/image";

import img1 from "@/assets/FAQ/FAQ1.jpg";
import img2 from "@/assets/FAQ/FAQ2.jpg";
import img3 from "@/assets/FAQ/FAQ3.jpg";
import img4 from "@/assets/FAQ/FAQ4.jpg";

import { useEffect, useState } from "react";

const inspiredImages = [img1, img2, img3, img4];

export default function FAQ() {
  const [currentImage, setCurrentImage] = useState(0);

  /* =========================================
     AUTO IMAGE ROTATION
  ========================================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % inspiredImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-28 px-6">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4D1C]/10 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <SectionLabel>Got Questions?</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase text-[#F5EFE8] leading-[0.95]"
          >
            WE&apos;VE GOT <span className="text-[#FF4D1C]">ANSWERS</span>
          </motion.h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image Section */}
          <div className="relative flex justify-center">
            {/* Decorative Glow */}
            <div className="absolute w-[350px] h-[350px] bg-[#FF4D1C]/15 blur-[120px] rounded-full" />

            {/* Image Stack */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 bg-[#141414]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={inspiredImages[currentImage]}
                    alt="Premium gym coaching session at Pirates Club Coimbatore"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70">
                    Premium Coaching
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute -bottom-8 flex gap-2">
              {inspiredImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`
                    h-2 rounded-full transition-all duration-500
                    ${
                      currentImage === i
                        ? "w-8 bg-[#FF4D1C]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            {FAQS.map((f, i) => (
              <FAQItem key={i} {...f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
