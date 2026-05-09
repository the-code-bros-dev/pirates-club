import { useCounter } from "@/Hooks/useCounter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatCard({ value, suffix, label, index }: { value: number, suffix: string, label: string, index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, 2000, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group"
    >
      <div className="border border-[#161311]/10 bg-primary p-8 hover:border-[#FF4D1C]/50 transition-all duration-500 hover:bg-[#FF4D1C]/[0.03] shadow-sm">
        <div className="font-display text-6xl font-black text-cream-3 mb-2 tabular-nums">
          {count}
          <span className="text-[#FF4D1C]">{suffix}</span>
        </div>
        <p className="text-cream-3 text-sm tracking-widest uppercase font-mono">{label}</p>
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FF4D1C] group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
}
