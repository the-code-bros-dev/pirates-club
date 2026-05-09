import { motion } from "framer-motion";
import team1 from '@/assets/team/team1.jpg'
import team2 from '@/assets/team/team2.jpg'
import team3 from '@/assets/team/team3.jpg'
import team4 from '@/assets/team/team4.jpg'
import Image from "next/image";

const Teamimages = [team1, team2, team3, team4]

export default function TeamCard({ name, role, index }: { name: string, role: string, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group text-center hover:shadow shadow-orange-500 py-3"
    >
      <div className="relative mx-auto mb-5 w-36 h-36">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF4D1C] to-[#FF8A00] opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-105 blur-xl" />
        <div className="relative w-full h-full rounded-full border-2 border-[#161311]/10 group-hover:border-[#FF4D1C] transition-colors duration-500 bg-[#EDE8E2] flex items-center justify-center overflow-hidden">
        <Image src={Teamimages[index]} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <h4 className="font-display text-lg font-black uppercase tracking-wider text-cream-3 mb-1">{name}</h4>
      <p className="text-[#FF4D1C] text-xs font-mono tracking-widest uppercase">{role}</p>
    </motion.div>
  );
}