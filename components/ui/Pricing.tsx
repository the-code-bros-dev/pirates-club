"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/Resusable_components/SectionLabel";

import {
  Check,
  ArrowUpRight,
  Crown,
  Flame,
} from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "1499",
    desc: "Perfect for beginners starting their fitness journey.",
    badge: "Starter",
    icon: Flame,
    popular: false,
    features: [
      "Gym Access",
      "Basic Workout Plan",
      "Locker Facility",
      "Cardio Zone Access",
      "Community Support",
    ],
  },

  {
    name: "Premium",
    price: "2999",
    desc: "Most loved plan for serious transformations.",
    badge: "Most Popular",
    icon: Crown,
    popular: true,
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Diet Consultation",
      "Strength Programs",
      "Unlimited Access",
      "Progress Tracking",
    ],
  },

  {
    name: "Elite",
    price: "4999",
    desc: "Advanced coaching & premium fitness experience.",
    badge: "Elite",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Premium",
      "1-on-1 Coaching",
      "Advanced Nutrition",
      "Transformation Program",
      "VIP Assistance",
      "Priority Support",
    ],
  },
];

/* =========================================================
   CARD
========================================================= */

function PricingCard({
  plan,
  i,
}: {
  plan: (typeof plans)[0];
  i: number;
}) {
  const Icon = plan.icon;

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
        duration: 0.6,
        delay: i * 0.08,
      }}
      whileHover={{
        y: -10,
      }}
      className={`
        group relative overflow-hidden
        rounded-[32px]
        border
        backdrop-blur-2xl
        transition-all duration-500
        h-full
        
        ${
          plan.popular
            ? "border-[#FF4D1C]/40 bg-[#141414]"
            : "border-white/10 bg-[#101010]"
        }
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-700
          bg-[radial-gradient(circle_at_top,rgba(255,77,28,0.25),transparent_60%)]
        "
      />

      {/* Popular */}
      {plan.popular && (
        <div
          className="
            absolute top-5 right-5 z-20
            rounded-full
            bg-[#FF4D1C]
            px-4 py-2
          "
        >
          <p
            className="
              font-mono text-[10px]
              tracking-[0.25em]
              uppercase text-white
            "
          >
            Most Popular
          </p>
        </div>
      )}

      <div className="relative z-20 p-8 flex flex-col h-full">

        {/* Top */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p
              className="
                font-mono text-[10px]
                tracking-[0.3em]
                uppercase
                text-[#FF4D1C]
                mb-3
              "
            >
              {plan.badge}
            </p>

            <h3
              className="
                font-display
                text-4xl
                font-black
                uppercase
                text-white
              "
            >
              {plan.name}
            </h3>
          </div>

          <div
            className="
              w-14 h-14 rounded-2xl
              border border-white/10
              bg-white/5
              flex items-center justify-center
            "
          >
            <Icon
              size={24}
              className="text-[#FF4D1C]"
            />
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-end gap-2">
            <h2
              className="
                font-display
                text-6xl
                font-black
                text-white
                leading-none
              "
            >
              ₹{plan.price}
            </h2>

            <span
              className="
                text-white/40
                mb-2
                uppercase
                tracking-widest
                text-xs
              "
            >
              /month
            </span>
          </div>

          <p className="mt-4 text-white/45 leading-relaxed">
            {plan.desc}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Features */}
        <div className="space-y-4 mb-10 flex-1">
          {plan.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4"
            >
              <div
                className="
                  flex items-center justify-center
                  w-8 h-8 rounded-full
                  border border-[#FF4D1C]/20
                  bg-[#FF4D1C]/10
                "
              >
                <Check
                  size={14}
                  className="text-[#FF4D1C]"
                />
              </div>

              <p className="text-white/75 text-sm">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className={`
            group/btn relative overflow-hidden
            w-full
            rounded-2xl
            py-4
            transition-all duration-500
            
            ${
              plan.popular
                ? "bg-[#FF4D1C]"
                : "border border-white/10 bg-white/5"
            }
          `}
        >
          {!plan.popular && (
            <div
              className="
                absolute inset-0
                bg-[#FF4D1C]
                translate-y-full
                group-hover/btn:translate-y-0
                transition-transform duration-500
              "
            />
          )}

          <div
            className="
              relative z-10
              flex items-center justify-center gap-3
            "
          >
            <span
              className="
                font-mono
                text-xs
                tracking-[0.25em]
                uppercase
                text-white
              "
            >
              Join Now
            </span>

            <ArrowUpRight
              size={16}
              className="
                text-white
                transition-transform duration-300
                group-hover/btn:translate-x-[2px]
                group-hover/btn:-translate-y-[2px]
              "
            />
          </div>
        </button>
      </div>

      {/* Shine */}
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-1000
          z-10
        "
      >
        <div
          className="
            absolute -left-52 top-0
            h-full w-40
            bg-white/10
            blur-3xl rotate-12
            group-hover:translate-x-[500px]
            transition-transform duration-1000
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Pricing() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================
      SCROLL TO CARD
  ========================================= */

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;

    const cardWidth =
      sliderRef.current.firstElementChild?.clientWidth || 0;

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

    const cardWidth =
      sliderRef.current.firstElementChild?.clientWidth || 0;

    const index = Math.round(scrollLeft / cardWidth);

    setActiveIndex(index);
  };

  return (
    <section
      id="pricing"
      className="
        relative overflow-hidden
        bg-[#050505]
        py-28 px-6
      "
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF4D1C]/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF4D1C]/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* =========================================
            HEADER
        ========================================= */}
        <div className="text-center mb-20">
          <SectionLabel>
            Membership Plans
          </SectionLabel>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              font-display
              text-[clamp(3rem,7vw,6rem)]
              font-black
              uppercase
              leading-[0.9]
              text-[#F5EFE8]
            "
          >
            CHOOSE YOUR
            <br />

            <span className="text-[#FF4D1C]">
              POWER LEVEL
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-white/45
              leading-relaxed
            "
          >
            Flexible plans crafted for every fitness goal —
            from beginners to elite athletes.
          </motion.p>
        </div>

        {/* =========================================
            DESKTOP GRID
        ========================================= */}

        <div className="hidden lg:grid grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PricingCard
              key={i}
              plan={plan}
              i={i}
            />
          ))}
        </div>

        {/* =========================================
            MOBILE SLIDER
        ========================================= */}

        <div className="lg:hidden">

          {/* Slider */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
              flex gap-5
              overflow-x-auto
              overflow-y-hidden
              snap-x snap-mandatory
              scrollbar-hide
              scroll-smooth
              pb-6
            "
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                className="
                  min-w-[88%]
                  sm:min-w-[60%]
                  snap-center
                "
              >
                <PricingCard
                  plan={plan}
                  i={i}
                />
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-3 flex justify-center gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`
                  h-2 rounded-full
                  transition-all duration-500
                  
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