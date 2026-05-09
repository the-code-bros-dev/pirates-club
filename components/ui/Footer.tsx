import { SERVICES } from '@/utils/data'
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[#161311]/10 py-16 px-6 bg-[#161311]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF4D1C] flex items-center justify-center font-display font-black text-white text-lg">B</div>
                <div>
                  <div className="font-display font-black text-white text-lg tracking-wider">Pirates  CLUB</div>
                  <div className="font-mono text-[#FF4D1C] text-[9px] tracking-[0.4em] uppercase">Thudiyalur · Coimbatore</div>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Premium scientifically-updated fitness center for exercise, fitness, and nutrition.
                Located near VG Hospital, Thudiyalur.
              </p>
            </div>
            <div>
              <div className="font-mono text-white/30 text-[10px] tracking-widest uppercase mb-4">Services</div>
              <div className="space-y-2">
                {SERVICES.slice(0, 5).map((s, i) => (
                  <a key={i} href="#services" className="block text-white/50 hover:text-[#FF4D1C] text-sm transition-colors duration-200">
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-white/30 text-[10px] tracking-widest uppercase mb-4">Follow Us</div>
              <div className="space-y-2">
                {[
                  { name: "Instagram", url: "https://instagram.com/basefitclub" },
                  { name: "Facebook",  url: "https://www.facebook.com/basefitclub/" },
                  { name: "WhatsApp",  url: "https://wa.me/918778840553" },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="block text-white/50 hover:text-[#FF4D1C] text-sm transition-colors duration-200">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-white/20 text-xs tracking-widest">
              © 2026 Pirates  Club. All rights reserved.
            </p>
            <p className="font-mono text-white/20 text-xs tracking-widest">
              DESIGNED WITH ❤️ FOR COIMBATORE
            </p>
          </div>
        </div>
      </footer>
  )
}
