import { AnimatePresence, motion } from "framer-motion";
import { useBooking } from "../BookingContext";

export default function BookingModal() {
  const { bookingOpen, setBookingOpen } = useBooking();

  return (
    <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#161311]/50 backdrop-blur-sm z-[200] flex items-center justify-center p-6"
            onClick={(e) => e.target === e.currentTarget && setBookingOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#161311]/10 shadow-2xl p-8 w-full max-w-md relative"
            >
              <button
                onClick={() => setBookingOpen(false)}
                className="absolute top-4 right-4 text-[#161311]/30 hover:text-[#161311] text-2xl leading-none"
              >
                ×
              </button>
              <div className="font-mono text-[#FF4D1C] text-xs tracking-widest uppercase mb-2">Free Consultation</div>
              <h3 className="font-display text-3xl font-black uppercase text-[#161311] mb-6">Book Your Spot</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name"    className="w-full bg-[#F5F0EB] border border-[#161311]/12 text-[#161311] placeholder-[#161311]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D1C] transition-colors" />
                <input type="tel"  placeholder="Phone Number" className="w-full bg-[#F5F0EB] border border-[#161311]/12 text-[#161311] placeholder-[#161311]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D1C] transition-colors" />
                <div className="flex gap-3">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className="flex-1 cursor-pointer">
                      <input type="radio" name="gender" value={g} className="peer sr-only" />
                      <div className="border border-[#161311]/15 peer-checked:border-[#FF4D1C] peer-checked:text-[#FF4D1C] text-[#161311]/40 text-xs font-mono tracking-wider uppercase py-2 text-center transition-all duration-200 bg-[#F5F0EB]">
                        {g}
                      </div>
                    </label>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#e8421a" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#FF4D1C] text-white font-bold text-sm tracking-[0.25em] uppercase py-4 transition-colors duration-300"
                >
                  Confirm Booking
                </motion.button>
                <p className="text-center text-[#161311]/35 text-xs font-mono">
                  Or call us directly:{" "}
                  <a href="tel:+919874563210" className="text-[#FF4D1C] hover:underline">
                    +91-9874563210
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  )
}
