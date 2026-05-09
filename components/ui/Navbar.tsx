"use client";
import { NAV_LINKS } from '@/utils/data';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import { useBooking } from '../BookingContext';

export default function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const {setBookingOpen} = useBooking();

      useEffect(() => {
          const onScroll = () => setScrolled(window.scrollY > 50);
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
        }, []);
      

  return (
    <div>
    <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-200 transition-all duration-500 ${
          scrolled
            ? "bg-[#F5F0EB]/6 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#" whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF4D1C] flex items-center justify-center font-display font-black text-white text-lg">
              B
            </div>
            <div>
              <div className="font-display font-black text-cream-3 text-lg tracking-wider leading-tight">Pirates </div>
              <div className="font-mono text-[#FF4D1C] text-[9px] tracking-[0.4em] uppercase -mt-0.5">Club · Coimbatore</div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-cream-3 hover:text-cream-3 hover:bg-[#FF4D1C] rounded-xl p-2 text-sm tracking-[0.2em] uppercase font-mono transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setBookingOpen(true)}
              className="hidden md:block bg-[#FF4D1C] hover:bg-[#e8421a] text-white text-xs font-bold tracking-[0.25em] uppercase px-6 py-3 transition-colors duration-300"
            >
              Book Free Trial
            </motion.button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-cream-3 hover:text-cream-1 p-2"
            >
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#F5F0EB] border-t border-[#161311]/8 overflow-hidden shadow-md"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#161311]/60 hover:text-[#FF4D1C] text-sm font-mono tracking-widest uppercase transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <button
                  onClick={() => { setBookingOpen(true); setMenuOpen(false); }}
                  className="bg-[#FF4D1C] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 mt-2"
                >
                  Book Free Trial
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      </div>
  )
}
