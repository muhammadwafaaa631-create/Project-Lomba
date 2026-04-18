import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WisataHero from "../components/wisata/WisataHero";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Star, ArrowRight, ExternalLink, TrendingUp, Calendar, CreditCard } from "lucide-react";
import { ALL_DESTINATIONS } from "../data/destinations";
import BookingModal from "../components/wisata/BookingModal";


export default function Wisata() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDest, setSelectedDest] = useState(null);



  // Get search from URL params if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("search");
    if (q) {
      setSearchQuery(q);
      setActiveCategory("Semua");
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  }, [location.search]);

  const categories = ["Semua", "Alam", "Kuliner", "Edukasi", "Hiburan"];


  const filteredDestinations = useMemo(() => {
    return ALL_DESTINATIONS.filter((dest) => {
      // Map existing categories to requested ones
      const mappedCategory = (cat) => {
        if (cat === "Sejarah" || cat === "Budaya") return "Edukasi";
        if (cat === "Viral") return "Hiburan";
        return cat;
      };

      const matchCategory = activeCategory === "Semua" || mappedCategory(dest.category) === activeCategory;
      const matchSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleInfo = (dest) => {
    if (dest.bookingUrl) {
      window.open(dest.bookingUrl, '_blank');
    }
  };



  return (
    <div key="wisata-page-main" className="w-full min-h-screen bg-[#FDFBF7] dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors duration-700">
      <WisataHero />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Cari destinasi wisata..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:placeholder-gray-500 shadow-sm"
            />
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeCategory === cat 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-blue-500/50"
                }`}
              >
                {cat === "Viral" && <TrendingUp size={14} className={activeCategory === cat ? "text-white" : "text-blue-500"} />}
                {cat}
              </button>
            ))}
            <button className="p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div 
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-lg text-white text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1 ${
                      dest.category === "Viral" ? "bg-gradient-to-r from-orange-500 to-red-600" : "bg-blue-600"
                    }`}>
                      {dest.category === "Viral" && <TrendingUp size={10} />}
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors">
                      <Star size={18} fill={dest.rating >= 4.5 ? "white" : "none"} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold">{dest.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-widest">Mulai dari</span>
                      <span className="text-blue-600 dark:text-[#0092E4] font-bold">{dest.price}</span>
                    </div>
                    <button 
                      onClick={() => handleInfo(dest)}
                      className="text-sm font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl flex items-center gap-2 group/btn hover:scale-105 transition-all shadow-lg shadow-black/10 dark:shadow-white/5"
                    >
                      Informasi <ExternalLink size={14} />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto opacity-20 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tidak ditemukan destinasi</h3>
            <p className="text-gray-500">Gunakan kata kunci atau kategori lain.</p>
          </div>
        )}
      </div>
    </div>
  );
}