import React from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../Resusable_components/SectionLabel'
import { SERVICES } from '@/utils/data'

export default function Contact() {
  return (
        <section id="contact" className="py-22 px-6 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
              <div>
                <SectionLabel>Get In Touch</SectionLabel>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase text-cream-3 leading-tight mb-8"
                >
                  READY TO<br />
                  <span className="text-[#FF4D1C]">TRANSFORM?</span>
                </motion.h2>
                <div className="space-y-6">
                  {[
                    { icon: "📞", label: "Call Us",  val: "+91-8778840553",     href: "tel:+918778840553" },
                    { icon: "📧", label: "Email Us", val: "basefitclub@gmail.com", href: "mailto:basefitclub@gmail.com" },
                    { icon: "📍", label: "Find Us",  val: "1st Floor, Om Towers, Near VG Hospital, Thudiyalur, Coimbatore – 641034", href: "#" },
                    { icon: "⏰", label: "Hours",    val: "Mon–Sun: 5:30 AM – 9:00 PM", href: "#" },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 group"
                    >
                      <span className="text-2xl mt-0.5">{item.icon}</span>
                      <div>
                        <div className="font-mono text-[#FF4D1C] text-[10px] tracking-widest uppercase mb-1">{item.label}</div>
                        <div className="text-cream-3 text-sm group-hover:text-cream-3/50 transition-colors duration-300">{item.val}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
    
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="border border-[#161311]/10 p-8 bg-white shadow-sm">
                  <h3 className="font-display text-2xl font-black uppercase tracking-wide text-[#161311] mb-6">
                    Book Your <span className="text-[#FF4D1C]">Free Trial</span>
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Full Name",     placeholder: "Your name",        type: "text" },
                      { label: "Phone Number",  placeholder: "+91 XXXXX XXXXX",  type: "tel" },
                      { label: "Email Address", placeholder: "you@email.com",    type: "email" },
                    ].map((field, i) => (
                      <div key={i}>
                        <label className="font-mono text-[#161311]/40 text-[10px] tracking-widest uppercase block mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full bg-[#F5F0EB] border border-[#161311]/12 text-[#161311] placeholder-[#161311]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D1C] transition-colors duration-300"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="font-mono text-[#161311]/40 text-[10px] tracking-widest uppercase block mb-2">
                        I'm Interested In
                      </label>
                      <select className="w-full bg-[#F5F0EB] border border-[#161311]/12 text-[#161311]/60 px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D1C] transition-colors duration-300">
                        <option value="">Select a program</option>
                        {SERVICES.map((s, i) => <option key={i}>{s.title}</option>)}
                      </select>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#e8421a" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#FF4D1C] text-white font-bold text-sm tracking-[0.25em] uppercase py-4 mt-4 transition-colors duration-300"
                    >
                      Book Free Consultation →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
  )
}
