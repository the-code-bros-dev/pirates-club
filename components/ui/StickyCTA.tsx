"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Dumbbell,
  ChevronLeft,
} from "lucide-react";

import { useBooking } from "../BookingContext";

export default function StickyCTA() {
  const { setBookingOpen } = useBooking();

  const [expanded, setExpanded] = useState(true);

  /* =========================================
     AUTO MINIMIZE ON SCROLL
  ========================================= */
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // scrolling down
      if (currentScroll > lastScroll + 10) {
        setExpanded(false);
      }

      // scrolling up
      if (currentScroll < lastScroll - 10) {
        setExpanded(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* =========================================
    MOBILE CTA (UPGRADED DOCK STYLE)
========================================= */}
<motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="
    fixed bottom-4 left-1/2 -translate-x-1/2
    z-50 w-[94%] max-w-md md:hidden
  "
>
  {/* Glow */}
  <div className="absolute inset-0 bg-[#FF4D1C]/20 blur-2xl rounded-[30px]" />

  {/* Container */}
  <div className="
    relative flex items-center justify-between
    px-4 py-3
    rounded-[26px]
    border border-white/10
    bg-black/70
    backdrop-blur-xl
    shadow-[0_10px_40px_rgba(0,0,0,0.5)]
  ">
    
    {/* CALL */}
    <a href="tel:+919874563210" className="flex-1 flex justify-center">
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center gap-1"
      >
        <div className="
          w-11 h-11 flex items-center justify-center
          rounded-full bg-white/10 border border-white/10
        ">
          <Phone size={18} className="text-white" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
          Call
        </span>
      </motion.div>
    </a>

    {/* TRIAL (CENTER FOCUS) */}
    <button
      onClick={() => setBookingOpen(true)}
      className="flex-1 flex justify-center"
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-1"
      >
        <div className="
          w-14 h-14 flex items-center justify-center
          rounded-full bg-[#FF4D1C]
          shadow-[0_8px_25px_rgba(255,77,28,0.5)]
        ">
          <Dumbbell size={20} className="text-white" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-white uppercase">
          Trial
        </span>
      </motion.div>
    </button>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/919874563210"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex justify-center"
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center gap-1"
      >
        <div className="
          w-11 h-11 flex items-center justify-center
          rounded-full bg-[#25D366]
          shadow-lg
        ">
          <MessageCircle size={18} className="text-white" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
          Chat
        </span>
      </motion.div>
    </a>

  </div>
</motion.div>


      {/* =========================================
    DESKTOP DOCK CTA (UPGRADED)
========================================= */}
<div className="hidden md:flex fixed bottom-6 right-6 z-50 items-center">
  <AnimatePresence>
    {expanded && (
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.9 }}
        transition={{ duration: 0.35 }}
        className="relative mr-3"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-[#FF4D1C]/10 blur-2xl rounded-2xl" />

        {/* Dock Container */}
        <div className="relative flex items-end gap-3 px-4 py-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          
          {/* CALL */}
          <a href="tel:+919874563210" className="group relative">
            <motion.div
              whileHover={{ scale: 1.25, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center"
            >
              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 px-2 py-1 text-[10px] font-mono tracking-widest uppercase bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Call
              </span>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                <Phone size={20} className="text-white" />
              </div>
            </motion.div>
          </a>

          {/* TRIAL (highlighted) */}
          <button onClick={() => setBookingOpen(true)} className="group relative">
            <motion.div
              whileHover={{ scale: 1.3, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center"
            >
              <span className="absolute bottom-full mb-2 px-2 py-1 text-[10px] font-mono tracking-widest uppercase bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Book Trial
              </span>

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF4D1C] shadow-[0_10px_30px_rgba(255,77,28,0.5)]">
                <Dumbbell size={22} className="text-white" />
              </div>
            </motion.div>
          </button>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919874563210"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.25, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center"
            >
              <span className="absolute bottom-full mb-2 px-2 py-1 text-[10px] font-mono tracking-widest uppercase bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                WhatsApp
              </span>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] shadow-lg">
                <MessageCircle size={20} className="text-white" />
              </div>
            </motion.div>
          </a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* FLOAT TOGGLE BUTTON */}
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={() => setExpanded(!expanded)}
    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF4D1C] shadow-[0_10px_40px_rgba(255,77,28,0.45)]"
  >
    <motion.div
      animate={{ rotate: expanded ? 0 : 180 }}
      transition={{ duration: 0.3 }}
    >
      <ChevronLeft size={24} className="text-white" />
    </motion.div>
  </motion.button>
</div>
    </>
  );
}