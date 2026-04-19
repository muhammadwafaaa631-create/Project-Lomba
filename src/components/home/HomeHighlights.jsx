import { motion } from "framer-motion";
import { History, Map, Palette, Cpu, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeHighlights() {
  const highlights = [
    {
      title: "Sejarah Bandung",
      desc: "Menelusuri jejak masa lalu kota dari asal-usul hingga era modern.",
      icon: History,
      path: "/history",
      color: "bg-amber-500"
    },
    {
      title: "Wisata Kota",
      desc: "Destinasi pilihan terbaik mulai dari alam, kuliner, hingga hiburan.",
      icon: Map,
      path: "/wisata",
      color: "bg-blue-500"
    },
    {
      title: "Budaya Lokal",
      desc: "Kekayaan tradisi, seni, dan identitas unik masyarakat Sunda.",
      icon: Palette,
      path: "/about",
      color: "bg-emerald-500"
    },
    {
      title: "Inovasi Digital",
      desc: "Transformasi menuju masa depan dengan integrasi teknologi canggih.",
      icon: Cpu,
      path: "#innovation", // Scroll to innovation section
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-24 bg-transparent transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Eksplorasi Bandung</h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
            Temukan berbagai sisi Kota Bandung dalam satu platform digital yang informatif dan modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <Link to={item.path} className="block h-full p-8 rounded-[2rem] bg-white/70 dark:bg-[#0B1120]/70 backdrop-blur-xl border border-white/50 dark:border-white/10 hover:border-[#00A8FF]/30 transition-all hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-[0.03] blur-3xl`} />
                  
                  <div className={`w-14 h-14 rounded-2xl ${item.color}/10 flex items-center justify-center text-slate-900 dark:text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={28} className={item.color.replace('bg-', 'text-')} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#00A8FF] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    Detail <ChevronRight size={14} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
