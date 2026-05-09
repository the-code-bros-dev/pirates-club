"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "../Resusable_components/SectionLabel";
import {
  MapPin,
  Navigation,
  Phone,
  Clock3,
} from "lucide-react";

export default function PremiumMap() {
  const [mapActive, setMapActive] = useState(false);

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#050505] py-28 px-6"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF4D1C]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF4D1C]/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <SectionLabel>Visit Us</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.9] text-[#F5EFE8]"
          >
            TRAIN AT THE
            <br />
            <span className="text-[#FF4D1C]">
              BEST GYM IN TOWN
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-white/45 leading-relaxed"
          >
            Premium equipment, elite coaching, and an
            environment designed for real transformation.
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">

          {/* ================= MAP ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onMouseLeave={() => setMapActive(false)}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] min-h-[500px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,77,28,0.20),transparent_60%)]" />

            {/* CLICK TO ACTIVATE OVERLAY */}
            {!mapActive && (
              <div
                onClick={() => setMapActive(true)}
                className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer"
              >
                <p className="text-white/70 text-sm tracking-widest uppercase">
                  Click to interact with map
                </p>
              </div>
            )}

            {/* MAP IFRAME */}
            <iframe
              src="https://www.google.com/maps?q=Basefit+Club+Coimbatore&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location Map"
              className={`
                absolute inset-0 w-full h-full
                grayscale contrast-125 brightness-[0.8]
                group-hover:grayscale-0
                transition duration-700
                ${mapActive ? "pointer-events-auto" : "pointer-events-none"}
              `}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />

            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="backdrop-blur-2xl bg-black/50 border border-white/10 rounded-3xl p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF4D1C] mb-3">
                      BaseFit Club
                    </p>

                    <h3 className="font-display text-3xl font-black uppercase text-white leading-none">
                      THUDIYALUR
                    </h3>

                    <p className="mt-4 text-white/55 max-w-md text-sm leading-relaxed">
                      Join Coimbatore’s premium fitness destination built for strength, aesthetics, and transformation.
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl border border-white/10 bg-white/5">
                    <MapPin size={28} className="text-[#FF4D1C]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= INFO PANEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,77,28,0.18),transparent_60%)]" />

            <div className="relative z-10">
              {/* ADDRESS */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <MapPin size={20} className="text-[#FF4D1C]" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                      Address
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      Thudiyalur, Coimbatore
                    </h3>
                  </div>
                </div>

                <p className="text-white/55 leading-relaxed">
                  Premium gym facility with world-class equipment, expert trainers, and elite transformation programs.
                </p>
              </div>

              {/* CONTACT */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Phone size={18} className="text-[#FF4D1C]" />
                  </div>

                  <div>
                    <p className="text-white/35 text-xs uppercase tracking-widest">
                      Contact
                    </p>
                    <p className="text-white font-medium">
                      +91 9874563210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Clock3 size={18} className="text-[#FF4D1C]" />
                  </div>

                  <div>
                    <p className="text-white/35 text-xs uppercase tracking-widest">
                      Working Hours
                    </p>
                    <p className="text-white font-medium">
                      5:00 AM — 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Basefit+Club+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-5"
              >
                <div className="absolute inset-0 bg-[#FF4D1C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                <Navigation className="relative z-10 text-white group-hover:translate-x-[2px] transition" />

                <span className="relative z-10 font-mono text-xs tracking-[0.25em] uppercase text-white">
                  Get Directions
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}