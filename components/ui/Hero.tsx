"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import heroImage from "@/assets/hero/hero1.png";

import person1 from "@/assets/review/person1.jpg";
import person2 from "@/assets/review/person2.jpg";
import person3 from "@/assets/review/person3.jpg";

import star from "@/assets/review/star.png";

const reviews = [
  { name: "Member", img: person1 },
  { name: "Member", img: person2 },
  { name: "Member", img: person3 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black px-5 pt-30 md:pt-20"
    >
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* GLOWS */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FF4D1C]/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF4D1C]/10 blur-[140px] rounded-full" />

      {/* NOISE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')]" />

      {/* MAIN */}
      <div
        className="
          relative z-10
          flex flex-col-reverse lg:grid lg:grid-cols-2
          items-center
          gap-10 lg:gap-16
          max-w-7xl mx-auto
          min-h-screen
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div className="w-full max-w-2xl pb-14 lg:pb-0">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 rounded-full
              border border-[#FF4D1C]/20 bg-[#FF4D1C]/5 backdrop-blur-xl px-5 py-2 mb-8 "
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D1C] animate-pulse" />

            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF4D1C]">
              Best Gym · Thudiyalur · Coimbatore
            </span>
          </motion.div>

          {/* HEADING */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-display
                text-[clamp(3.8rem,16vw,8rem)]
                leading-[0.9]
                uppercase
                font-black
                text-white
              "
            >
              FORGE YOUR
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-display
                text-[clamp(3.8rem,16vw,8rem)]
                leading-[0.9]
                uppercase
                font-black
              "
              style={{
                WebkitTextStroke: "2px #FF4D1C",
                color: "transparent",
              }}
            >
              LIMITS
            </motion.h1>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              max-w-xl
              text-white/55
              text-base md:text-lg
              leading-relaxed
              mb-10
            "
          >
            Premium scientifically-backed training. Personalized
            nutrition. Real transformations. Every new day is a new
            opportunity to improve yourself and push beyond limits.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {/* PRIMARY */}
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="
                group relative overflow-hidden
                rounded-full
                bg-[#FF4D1C]
                px-8 md:px-10
                py-5
              "
            >
              <div
                className="
                  absolute -left-20 top-0
                  h-full w-16 rotate-12
                  bg-white/20 blur-2xl
                  group-hover:translate-x-[300px]
                  transition-transform duration-1000
                "
              />

              <span
                className="
                  relative z-10
                  font-mono
                  text-[11px]
                  tracking-[0.35em]
                  uppercase text-white
                "
              >
                Start Free Trial
              </span>
            </motion.button>

            {/* SECONDARY */}
            <motion.a
              href="tel:+918778840553"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                px-8 md:px-10
                py-5
                transition-all duration-300
                hover:border-[#FF4D1C]/40
              "
            >
              <span
                className="
                  font-mono
                  text-[11px]
                  tracking-[0.35em]
                  uppercase text-white
                "
              >
                Call Now
              </span>
            </motion.a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-6 md:gap-8"
          >
            {[
              {
                value: "500+",
                label: "Active Members",
                color: "text-white",
              },
              {
                value: "4.9",
                label: "Google Rating",
                color: "text-[#FF4D1C]",
              },
              {
                value: "24/7",
                label: "Motivation",
                color: "text-white",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 md:gap-8"
              >
                <div>
                  <h3
                    className={`font-display text-4xl md:text-5xl font-black ${item.color}`}
                  >
                    {item.value}
                  </h3>

                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                    {item.label}
                  </p>
                </div>

                {i !== 2 && (
                  <div className="w-px h-12 bg-white/10" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}
        <div
          className="
            relative
            flex justify-center items-center
            w-full
            pt-10 lg:pt-0
          "
        >
          {/* MAIN GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-[#FF4D1C]/20 blur-[120px] rounded-full" />

          {/* HERO IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-10"
          >
            <Image
              src={heroImage}
              alt="Pirates Club Fitness Model"
              priority
              sizes="(max-width: 768px) 95vw, 50vw"
              className="
                object-contain
                w-[115%] sm:w-[100%]
                max-w-[760px]
                h-auto
                drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]
              "
            />
          </motion.div>

          {/* =========================================
              REVIEW CARD
          ========================================= */}
                   <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              scale: 1,
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.5,
              },
              scale: {
                duration: 0.8,
                delay: 0.5,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className=" absolute -top-2 md:-top-5 -right-3 md:-right-15 z-50 "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#FF4D1C]/20 blur-2xl rounded-2xl" />

            {/* Main Card */}
            <div
              className=" relative overflow-hidden flex items-center gap-3 rounded-2xl border border-white/10
               bg-black/50  backdrop-blur-2xl  px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)] "
            >
              {/* Shine Sweep */}
              <div
                className=" absolute -left-20 top-0 h-full w-16 rotate-12   bg-white/10 blur-2xl animate-[shine_5s_linear_infinite] "
              />

              {/* Avatars */}
              <div className="flex -space-x-3">
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
            relative
            border-2 border-[#0B0B0B]
            rounded-full
            overflow-hidden
          "
                  >
                    <Image
                      src={review.img}
                      alt={review.name}
                      className="
              md:w-10 md:h-10
              w-7 h-7
              object-cover
            "
                    />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-1">
                  {Array(5)
                    .fill(0)
                    .map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        animate={{
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: starIndex * 0.15,
                        }}
                      >
                        <Image
                          src={star}
                          alt="Star"
                          className="
                  md:w-3.5 md:h-3.5
                  w-2 h-2
                "
                        />
                      </motion.div>
                    ))}
                </div>

                {/* Rating */}
                <h2
                  className="
          font-display
          md:text-lg text-sm
          font-semibold
          leading-none
          text-white
        "
                >
                  4.9/5 Ratings
                </h2>

                {/* Small Text */}
                <p
                  className="
          mt-1
          font-mono
          text-[9px] md:text-[10px]
          tracking-[0.25em]
          uppercase
          text-white/45
          hidden md:flex
        "
                >
                  Trusted By Athletes
                </p>
              </div>

              {/* Orange Dot */}
              <div className="absolute top-3 right-3">
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF4D1C] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D1C]" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              FLOATING CARD
          ========================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.8,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              bottom-4 sm:bottom-10
              left-0 sm:left-4 lg:-left-8
              z-30
            "
          >
            <div
              className="
                relative overflow-hidden
                rounded-[26px]
                border border-white/10
                bg-[#F5EFE8]
                px-5 sm:px-7
                py-4 sm:py-6
                shadow-[0_10px_60px_rgba(0,0,0,0.4)]
              "
            >
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">
                Elite Training
              </p>

              <h3 className="font-display text-xl sm:text-3xl leading-[1] font-black text-black">
                Build Your
                <br />

                <span className="text-[#FF4D1C]">
                  Ultimate Body
                </span>
              </h3>
            </div>
          </motion.div>

          {/* SHADOW */}
          <div className="absolute bottom-0 w-52 h-16 bg-black/50 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}