import { motion } from "framer-motion";
import { Cpu, Globe, Zap } from "lucide-react";

export default function SmartCityIntro() {
  return (
    <section id="smart-city" className="py-24 bg-transparent transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/20 mb-6">
              <Cpu size={16} className="text-[#00A8FF]" />
              <span className="text-xs font-bold text-[#00A8FF] uppercase tracking-widest">Digital Transformation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Smart City Bandung: <br />
              <span className="text-[#00A8FF]">Masa Depan Inovasi</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
              Bandung sebagai kota yang mengembangkan teknologi digital, pelayanan publik berbasis aplikasi, dan inovasi untuk meningkatkan kualitas hidup masyarakat. Melalui integrasi teknologi canggih, kami menciptakan ekosistem perkotaan yang lebih efisien, transparan, dan berkelanjutan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Global Connectivity</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400">Terhubung secara digital dengan standar internasional.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Inovasi Berkelanjutan</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400">Pengembangan tiada henti untuk kenyamanan warga.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#00A8FF]/20 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=1000" 
              alt="Bandung Smart City" 
              className="relative z-10 rounded-[3rem] shadow-2xl border border-white/10"
            />
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 bg-white/10 dark:bg-[#111827]/30 backdrop-blur-xl p-6 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl"
            >
              <p className="text-[10px] font-bold text-[#00A8FF] uppercase tracking-widest mb-2">System Status</p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-slate-900 dark:text-white font-bold">Optimal Coverage</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
