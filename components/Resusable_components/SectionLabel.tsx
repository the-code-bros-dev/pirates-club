import { motion } from "framer-motion";

export default function SectionLabel({ children, light = false }: { children: React.ReactNode, light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-4"
    >
      <div className="h-px w-10 bg-[#FF4D1C]" />
      <span className={`text-cream-3 font-mono text-xs tracking-[0.3em] uppercase font-bold`}>
        {children}
      </span>
    </motion.div>
  );
}
