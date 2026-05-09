"use client";

import { motion } from "framer-motion";
import SectionLabel from "../Resusable_components/SectionLabel";
import Image from "next/image";
import info from "@/assets/FAQ/FAQ2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B0B] py-32 px-6"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,77,28,0.08),transparent_30%)]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF4D1C]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div>
          <SectionLabel>About Us</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.9] text-[#F5EFE8] mb-8"
          >
            WHERE SCIENCE
            <br />
            MEETS <span className="text-[#FF4D1C]">SWEAT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="text-white/50 leading-relaxed text-base mb-6 max-w-xl"
          >
            Pirates Club is Coimbatore&apos;s most advanced, technologically
            updated fitness center. Located near VG Hospital, Thudiyalur — we
            are not just a gym.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="text-white/50 leading-relaxed text-base mb-10 max-w-xl"
          >
            We are a complete transformation ecosystem built on science,
            consistency, discipline, and elite coaching.
          </motion.p>

          {/* Premium Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.35,
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                icon: "⏰",
                label: "5:30 AM – 9:00 PM",
              },
              {
                icon: "📍",
                label: "Thudiyalur, CBE",
              },
              {
                icon: "⚥",
                label: "Unisex Gym",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  group relative overflow-hidden
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  px-5 py-5
                  rounded-2xl
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#FF4D1C]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-[#FF4D1C] text-lg">{item.icon}</span>

                  <span className="text-white/70 text-xs font-mono tracking-[0.2em] uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            RIGHT VISUAL BLOCK
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-10 bg-[#FF4D1C]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition duration-700" />

          {/* Main Card */}
          <div
            className="
              relative aspect-square
              overflow-hidden
              rounded-[36px]
              border border-white/10
              bg-[#141414]
            "
          >
            {/* Image */}
            <Image
              src={info}
              alt="Premium gym interior at Pirates Club in Thudiyalur Coimbatore"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="
    object-cover
    transition-all duration-700
    group-hover:scale-110
    group-hover:brightness-[0.35]
  "
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

            {/* Big Background Letter */}
            <span
              className="
                absolute inset-0
                flex items-center justify-center
                font-display
                text-[18rem]
                md:text-[24rem]
                font-black
                text-white/[0.03]
                z-10
                select-none
              "
            >
              B
            </span>

            {/* =========================================
                HOVER CONTENT
            ========================================= */}
            <div
              className="
                absolute inset-0 z-30
                flex flex-col justify-end
                p-8 md:p-10
              "
            >
              <div
                className="
                  translate-y-10 opacity-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all duration-700
                "
              >
                {/* Top Mini Label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-[1px] bg-[#FF4D1C]" />

                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF4D1C]">
                    Premium Fitness Club
                  </p>
                </div>

                {/* Main Text */}
                <h3 className="font-display text-5xl md:text-6xl font-black uppercase text-white leading-none mb-3">
                  No.
                  <br />
                  Excuses
                </h3>

                <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                  Elite coaching, premium equipment, and a
                  transformation-focused environment designed for serious
                  results.
                </p>

                {/* Bottom Row */}
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                      Only Results
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div
                    className="
                      relative overflow-hidden
                      w-14 h-14
                      rounded-full
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      flex items-center justify-center
                    "
                  >
                    <div className="absolute inset-0 bg-[#FF4D1C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                    <span className="relative z-10 text-white text-xl group-hover:translate-x-[2px] transition-transform duration-300">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shine Sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 z-20">
              <div className="absolute -left-52 top-0 h-full w-40 bg-white/10 blur-3xl rotate-12 group-hover:translate-x-[700px] transition-transform duration-1000" />
            </div>
          </div>

          {/* Premium Corner Borders */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#FF4D1C] opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#FF4D1C] opacity-0 group-hover:opacity-100 transition duration-500" />
        </motion.div>
      </div>
    </section>
  );
}
