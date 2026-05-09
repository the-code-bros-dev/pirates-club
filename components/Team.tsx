import TeamCard from './Cards/TeamCard'
import { TEAM } from '@/utils/data'
import { motion } from 'framer-motion'
import SectionLabel from './Resusable_components/SectionLabel'

export default function Team() {
  return (
          <section id="team" className="py-22 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <SectionLabel>Expert Coaches</SectionLabel>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase text-cream-3 leading-tight"
                >
                  MEET YOUR <span className="text-[#FF4D1C]">SQUAD</span>
                </motion.h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                {TEAM.map((t, i) => (
                  <TeamCard key={i} {...t} index={i} />
                ))}
              </div>
            </div>
          </section>
    
  )
}
