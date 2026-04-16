import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, Map, Layout, Sparkles } from "lucide-react";

const STATS = [
  { 
    id: 1, 
    label: "Pengunjung", 
    value: 1200, 
    suffix: "+", 
    icon: Users,
    color: "from-blue-500 to-cyan-400"
  },
  { 
    id: 2, 
    label: "Tempat Wisata", 
    value: 150, 
    suffix: "+", 
    icon: Map,
    color: "from-blue-600 to-indigo-500"
  },
  { 
    id: 3, 
    label: "Rencana Dibuat", 
    value: 850, 
    suffix: "+", 
    icon: Layout,
    color: "from-indigo-600 to-purple-500"
  },
  { 
    id: 4, 
    label: "Destinasi Populer", 
    value: 45, 
    suffix: "+", 
    icon: Sparkles,
    color: "from-cyan-500 to-blue-500"
  }
];

export default function StatSection() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-black transition-colors duration-700 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Count up animation logic
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(stat.value);
    }
  }, [isInView, spring, stat.value]);

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-500"
    >
      {/* Icon Wrapper */}
      <div className="mb-4 relative">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500">
          <Icon size={28} />
        </div>
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <motion.span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {displayValue}
          </motion.span>
          <span className="text-4xl md:text-5xl font-black text-[#00A8FF] ml-1">
            {stat.suffix}
          </span>
        </div>
        
        <p className="mt-2 text-slate-500 dark:text-gray-400 font-medium uppercase tracking-widest text-[10px] md:text-xs">
          {stat.label}
        </p>
      </div>

      {/* Decorative Border Bottom (Active on Hover) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-16 rounded-full" />
    </motion.div>
  );
}
