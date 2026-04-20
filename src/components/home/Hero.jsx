import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Cloud, CloudSun, MapPin } from "lucide-react";

export default function Hero() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-slate-900 dark:text-white pt-20 transition-colors duration-700">
      
      {/* 1. Cinematic Background Overlays (Content focus) */}
      <div className="absolute inset-0 z-0">
        {/* Consistent Gradient Gradients for readability against the dynamic video */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent dark:from-black dark:via-black/40 dark:to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-black/80 dark:via-transparent dark:to-transparent z-[1]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side (Preserved Content) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start pt-10 lg:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00A8FF] animate-pulse" />
            <span className="text-sm text-slate-600 dark:text-gray-300 font-medium tracking-wide">Platform Smart City v2.0</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Bandung Menuju
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#0047FF]">
              Smart City
            </span>
            <br />
            Modern
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-light max-w-lg mb-10 leading-relaxed">
            Eksplorasi informasi, sejarah, budaya, dan perkembangan digital kota Bandung dalam satu platform.
          </p>


          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 w-full"
          >
            <Link 
              to="#smart-city"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('smart-city')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#0092E4] to-[#007ABF] text-white px-8 py-3.5 rounded-full font-semibold shadow-[0_0_20px_rgba(0,168,255,0.3)] hover:shadow-[0_0_30px_rgba(0,168,255,0.5)] transition-all hover:-translate-y-1 block text-center"
            >
              Jelajahi Sekarang
            </Link>
            <Link 
              to="/about"
              className="bg-slate-900/5 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white px-8 py-3.5 border border-slate-900/10 dark:border-white/10 rounded-full font-semibold hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all hover:border-[#0092E4]/50"
            >
              Pelajari Fitur
            </Link>

          </motion.div>
          
          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-900/10 dark:border-white/10 pt-8 w-full"
          >
            <div>
              <h4 className="text-3xl font-bold font-mono text-slate-900 dark:text-white">50k<span className="text-[#00A8FF]">+</span></h4>
              <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Pengguna Aktif</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold font-mono text-white">120<span className="text-[#00A8FF]">+</span></h4>
              <p className="text-sm text-gray-400 mt-1">Destinasi</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold font-mono text-white">99<span className="text-[#00A8FF]">%</span></h4>
              <p className="text-sm text-gray-400 mt-1">Kepuasan</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side (Floating Widgets) */}
        <div className="relative h-full min-h-[500px] w-full flex flex-col items-center justify-center lg:items-end gap-8 pt-10">
          
          {/* 1. CLOCK WIDGET */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[340px] bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 shadow-2xl overflow-hidden group transition-all duration-700 lg:-mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/5 to-transparent transition-opacity group-hover:opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00A8FF]/20 flex items-center justify-center text-[#00A8FF]">
                  <Clock size={20} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Bandung, Indonesia</h5>
                  <p className="text-[11px] text-slate-500 dark:text-gray-400 font-medium">Local Time Center</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-5xl font-mono font-bold tracking-tighter text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg">
                  {formatTime(time)}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400">
                <CalendarIcon size={14} className="opacity-60" />
                <p className="text-xs font-medium uppercase tracking-widest">{formatDate(time)}</p>
              </div>
            </div>
            
            {/* Soft Glow Border */}
            <div className="absolute inset-0 border border-slate-200 dark:border-white/5 rounded-[2rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />
          </motion.div>



        </div>
      </div>
      
      {/* Floating Animation Script */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: subtleFloat 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: subtleFloat 7s ease-in-out infinite 1s;
        }
      `}} />
    </section>
  );
}

// Sub-component for icons to keep tidy
function CalendarIcon({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
