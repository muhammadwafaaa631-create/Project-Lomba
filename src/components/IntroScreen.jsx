import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set duration to 3.5 seconds to allow animations to finish and text to be read
    const timer = setTimeout(() => {
      handleComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 500); // 500ms allows the fade-out animation to complete smoothly
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={handleComplete} // Can be skipped by clicking
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.5, filter: "blur(20px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center relative group"
          >
            {/* Soft Blue Glow */}
            <div className="absolute inset-0 bg-[#00A8FF] blur-[80px] opacity-20 rounded-full w-[150%] h-[150%] left-[-25%] top-[-25%] pointer-events-none" />
            
            {/* Logo Image */}
            <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 mb-8 flex items-center justify-center bg-white/[0.02] backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,168,255,0.15)] overflow-hidden">
                <img 
                  src="/dreamina.jpeg" 
                  alt="Dreamina Logo" 
                  className="w-full h-full object-cover"
                />
            </div>
            
            {/* Title & Tagline */}
            <div className="text-center relative z-10">
              <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter mb-2"
              >
                Bandung
              </motion.h1>
              <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-xs sm:text-sm font-bold text-[#00A8FF] tracking-[0.4em] uppercase"
              >
                Smart City
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
