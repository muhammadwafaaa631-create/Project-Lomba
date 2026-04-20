import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Palette, Music, Utensils, Theater, Landmark, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CULTURAL_DATA } from "../data/culturalData";

const CATEGORIES = [
  { name: "Semua", icon: Landmark },
  { name: "Tradisi & Kearifan Lokal", icon: Theater },
  { name: "Seni Pertunjukan", icon: Music },
  { name: "Kesenian Tradisional", icon: Palette },
  { name: "Kuliner", icon: Utensils }
];

export default function Budaya() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return CULTURAL_DATA.filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSearch;
    });
  }, [searchQuery]);

  // Group filtered data by category
  const groupedData = useMemo(() => {
    const groups = {};
    CATEGORIES.filter(cat => cat.name !== "Semua").forEach(cat => {
      groups[cat.name] = filteredData.filter(item => item.category === cat.name);
    });
    return groups;
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#030303] transition-colors duration-700 pt-32 pb-24 px-6 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A8FF]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A8FF]/10 text-[#00A8FF] text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Landmark size={14} /> Warisan Budaya Bandung
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
            >
              Menjelajahi Kekayaan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#0047FF]">Budaya & Tradisi</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed"
            >
              Temukan keindahan seni tradisional, kearifan lokal yang mendalam, dan kelezatan kuliner warisan leluhur di Kota Bandung.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 w-full md:w-[350px]"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400 group-focus-within:text-[#00A8FF] transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Cari budaya..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00A8FF]/20 focus:border-[#00A8FF] transition-all backdrop-blur-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Filter Section */}
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-8 mb-12">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 whitespace-nowrap border shadow-sm backdrop-blur-xl ${
                    isActive 
                      ? "bg-[#00A8FF] text-white border-[#00A8FF] shadow-xl shadow-[#00A8FF]/30 scale-105" 
                      : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-[#00A8FF]/50"
                  }`}
                >
                  <Icon size={16} />
                  {cat.name}
                </button>
              );
            })}
        </div>

        {/* Categorized Content Shelf */}
        <div className="space-y-32">
          {CATEGORIES.filter(cat => cat.name !== "Semua").map((cat) => {
            if (activeCategory !== "Semua" && activeCategory !== cat.name) return null;

            const items = groupedData[cat.name];
            if (items.length === 0) return null;

            return (
              <motion.div 
                key={cat.name} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A8FF] text-white flex items-center justify-center shadow-lg shadow-[#00A8FF]/20">
                    <cat.icon size={22} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">{cat.name}</h2>
                    <div className="flex items-center gap-2">
                       <div className="h-1 w-20 bg-[#00A8FF] rounded-full" />
                       <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#00A8FF]">{items.length} Karya Warisan</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="h-full bg-white dark:bg-[#0B1120]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col hover:border-[#00A8FF]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A8FF]/10 hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 p-2 rounded-[2.5rem]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="p-8 flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#00A8FF] transition-colors">{item.title}</h3>
                          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                            {item.desc}
                          </p>
                          
                          <Link 
                            to={`/budaya/${item.id}`}
                            className="flex items-center gap-2 text-[#00A8FF] text-xs font-black uppercase tracking-[0.2em] group-hover:gap-3 transition-all cursor-pointer"
                          >
                            Pelajari Lebih Lanjut <ChevronRight size={14} strokeWidth={3} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
          {Object.values(groupedData).flat().length === 0 && (
            <div className="py-24 text-center">
              <Landmark size={64} className="mx-auto text-slate-300 dark:text-gray-800 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Tidak ditemukan</h3>
              <p className="text-slate-500">Coba ubah kata kunci pencarian Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
