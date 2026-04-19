import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import heroLight from "../../assets/wisata/hero-light.png";
import heroDark from "../../assets/wisata/hero-dark.png";
import { MapPin, Phone, Umbrella, ArrowRight } from "lucide-react";

export default function WisataHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#FDFBF7] dark:bg-[#0B1120] transition-colors duration-700">
      
      {/* 1. Illustration Layers (Cross-fade) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="dark-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div 
                className="w-full h-full bg-cover bg-right md:bg-center scale-105 animate-slow-zoom"
                style={{ backgroundImage: `url(${heroDark})` }}
              />
              {/* Rain Particle Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none rain-container opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-[5]" />
            </motion.div>
          ) : (
            <motion.div
              key="light-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div 
                className="w-full h-full bg-cover bg-right md:bg-center scale-105 animate-slow-zoom"
                style={{ backgroundImage: `url(${heroLight})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent z-[5]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-[#00A8FF]/10 border border-blue-500/20 dark:border-[#00A8FF]/20 backdrop-blur-sm mb-6">
            <MapPin size={14} className="text-blue-600 dark:text-[#00A8FF]" />
            <span className="text-xs font-bold text-blue-700 dark:text-[#00A8FF] uppercase tracking-widest">Destinasi Bandung</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6">
            Jelajahi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-[#00A8FF] dark:to-[#0047FF]">
              Kota Kembang
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-md mb-10 leading-relaxed italic">
            "Seorang wisatawan baru saja tiba, melangkahkan kaki di antara gedung ikonik dan pepohonan rindang Bandung..."
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0B1120] px-8 py-4 rounded-2xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
              Lihat Destinasi
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10">
              {isDark ? (
                <Umbrella className="text-blue-500 animate-bounce" size={24} />
              ) : (
                <Phone className="text-green-600 animate-pulse" size={24} />
              )}
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {isDark ? "Sedia Payung Sebelum Hujan" : "Cek Maps & Cuaca Cerah"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Character "Walking" Simulation (Subtle shift) */}
      <motion.div
        animate={{ 
          x: isDark ? [0, 5, 0] : [0, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block"
      />

      {/* Styled Rain & Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rain {
          0% { background-position: 0% 0%; }
          100% { background-position: 10% 100%; }
        }
        .rain-container {
          background-image: url('https://raw.githubusercontent.com/pajasevi/CSS-Rain-Effect/master/rain.png');
          animation: rain 0.3s linear infinite;
        }
        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s linear infinite alternate;
        }
      `}} />
    </section>
  );
}
