import { motion } from "framer-motion";
import { History, MapPin, Palette, Cpu, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeGrid() {
  const sections = [
    {
      title: "Sejarah Bandung",
      desc: "Menelusuri jejak masa lalu kota dari asal-usul hingga era modern.",
      icon: History,
      link: "/history",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Wisata Kota",
      desc: "Destinasi pilihan terbaik mulai dari alam, kuliner, hingga hiburan.",
      icon: MapPin,
      link: "/wisata",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Budaya Lokal",
      desc: "Kekayaan tradisi, seni, dan identitas unik masyarakat Sunda.",
      icon: Palette,
      link: "/budaya",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Inovasi Digital",
      desc: "Transformasi menuju masa depan dengan integrasi teknologi canggih.",
      icon: Cpu,
      link: "#innovation",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <section className="px-6 relative z-30 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white/10 dark:bg-[#111827]/40 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  
                  {item.link.startsWith("#") ? (
                    <button 
                      onClick={() => document.getElementById(item.link.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center gap-2 text-[#00A8FF] text-xs font-black uppercase tracking-[0.2em] group-hover:gap-3 transition-all"
                    >
                      DETAIL <ChevronRight size={14} />
                    </button>
                  ) : (
                    <Link 
                      to={item.link}
                      className="flex items-center gap-2 text-[#00A8FF] text-xs font-black uppercase tracking-[0.2em] group-hover:gap-3 transition-all"
                    >
                      DETAIL <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
