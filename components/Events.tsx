import React from 'react'
import { motion } from 'framer-motion'
import { useBooking } from './BookingContext';

export default function Events() {
    const {setBookingOpen} = useBooking()
  return (
    <section className="py-18 px-4 bg-[#FF4D1C] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "radial-gradient(circle, #161311 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }} />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div>
                <div className="font-mono text-white/60 text-xs tracking-widest uppercase mb-2">Weekly Event</div>
                <h3 className="font-display text-4xl md:text-5xl font-black uppercase text-white leading-tight">
                  Group Functional<br />Workouts
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="text-center">
                  <div className="font-display font-black text-white text-2xl">TUE + THU</div>
                  <div className="font-mono text-white/60 text-xs tracking-widest uppercase">Every Week</div>
                </div>
                <div className="w-px h-12 bg-white/25 hidden sm:block" />
                <div className="text-center">
                  <div className="font-display font-black text-white text-2xl">8:00 AM</div>
                  <div className="font-mono text-white/60 text-xs tracking-widest uppercase">Sharp · Don't Be Late</div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBookingOpen(true)}
                  className="bg-white text-[#FF4D1C] hover:bg-[#F5F0EB] font-bold text-xs tracking-[0.25em] uppercase px-8 py-4 transition-colors duration-300"
                >
                  Join Now
                </motion.button>
              </div>
            </div>
          </section>
  )
}
