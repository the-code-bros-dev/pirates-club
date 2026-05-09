import { motion, useScroll } from 'framer-motion';

export default function ProgressBar() {
      const { scrollYProgress } = useScroll();
  return (
    <div>      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF4D1C] to-[#FF8A00] origin-left z-[100]"
      />
      </div>
  )
}
