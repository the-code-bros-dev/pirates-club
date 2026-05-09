import { motion } from 'framer-motion'
import React from 'react'

export default function Marquee() {
  return (
          <div className="bg-[#FF4D1C] py-4 overflow-hidden relative">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap"
              style={{ width: "fit-content" }}
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center">
                  {["Weight Training", "Cardio", "Personal Training", "Group Workouts", "Fat Loss", "Muscle Gain", "Nutrition Consulting"].map((t, j) => (
                    <span key={j} className="font-display font-black text-white uppercase tracking-widest text-sm flex items-center gap-6">
                      {t} <span className="text-white/40">◆</span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
  )
}
