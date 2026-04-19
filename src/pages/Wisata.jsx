import { useState, useMemo, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Star, ArrowRight, MapPin, TrendingUp, Compass, Map as MapIcon, Coffee } from "lucide-react";
import { ALL_DESTINATIONS } from "../data/destinations";
import { useTheme } from "../context/ThemeContext";

export default function Wisata() {
  const location = useLocation();
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);
  const carouselRef = useRef(null);

  // Initialize from URL search if preset
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("search");
    if (q) {
      setSearchQuery(q);
      setActiveCategory("Semua");
    }
  }, [location.search]);

  const categories = [
    { name: "Semua", icon: Compass },
    { name: "Alam", icon: MapIcon },
    { name: "Kuliner", icon: Coffee },
    { name: "Edukasi", icon: Filter },
    { name: "Hiburan", icon: Star }
  ];

  const filteredDestinations = useMemo(() => {
    return ALL_DESTINATIONS.filter((dest) => {
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

  // Click on marker -> scroll to card
  const handleMarkerClick = (id, index) => {
    setActiveMarker(id);
    if (carouselRef.current) {
      // Approximate card width 360px + 24px gap = 384px. Calculate scroll offset.
      const cardWidth = window.innerWidth >= 768 ? 384 : 324;
      carouselRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  const handleInfo = (dest) => {
    if (dest.bookingUrl) {
      window.open(dest.bookingUrl, '_blank');
    }
  };

  return (
    <div key="wisata-map-layout" className="relative w-full h-[100dvh] overflow-hidden bg-[#FDFBF7] dark:bg-[#0B1120] font-sans selection:bg-[#00A8FF]/30">
      
      {/* Background Map Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.img 
              key="map-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src="/maps/map-dark.png" 
              alt="Dark Map" 
              className="w-full h-full object-cover opacity-90 scale-105"
            />
          ) : (
            <motion.img 
              key="map-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src="/maps/map-light.png" 
              alt="Light Map" 
              className="w-full h-full object-cover opacity-80 scale-105 filter contrast-125 saturate-50"
            />
          )}
        </AnimatePresence>
        
        {/* Subtle overlay gradient to make UI elements pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#FDFBF7]/90 dark:from-black/40 dark:via-transparent dark:to-[#0B1120] pointer-events-none" />
      </div>

      {/* Floating Top Header (Search & Filter) */}
      <div className="absolute top-6 left-0 w-full z-20 px-6 pointer-events-none mt-[80px]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 pointer-events-auto">
          {/* Main Search Panel */}
          <div className="relative w-full md:w-[400px] bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 flex items-center">
            <div className="pl-4 pr-3 text-slate-400 dark:text-gray-500">
              <Search size={22} className="stroke-[2.5]" />
            </div>
            <input 
              type="text" 
              placeholder="Cari destinasi..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 font-medium text-[15px]"
            />
            <button className="w-10 h-10 rounded-full bg-[#00A8FF] flex items-center justify-center text-white shadow-lg shadow-[#00A8FF]/30 hover:scale-105 transition-transform shrink-0">
              <Filter size={18} />
            </button>
          </div>

          {/* Pill Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar flex-1 pl-2" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button 
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-5 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 shrink-0 border backdrop-blur-xl ${
                    isActive 
                    ? "bg-[#0092E4] text-white border-[#0092E4] shadow-lg shadow-[#0092E4]/20" 
                    : "bg-white/70 dark:bg-[#111827]/70 text-slate-700 dark:text-gray-300 border-white/60 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/20 shadow-sm"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-white" : "text-slate-500 dark:text-gray-400"} />
                  {cat.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Interactive Map Markers */}
      <div className="absolute inset-0 z-10 w-full h-[calc(100vh-280px)] mt-[140px] pointer-events-none">
        <div className="relative w-full h-full max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredDestinations.map((dest, idx) => {
              if(!dest.mapX || !dest.mapY) return null; // Skip if no coords
              
              const isViral = dest.category === "Viral" || dest.category === "Hiburan";
              const isActive = activeMarker === dest.id;

              return (
                <motion.button
                  key={`marker-${dest.id}`}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: idx * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleMarkerClick(dest.id, idx)}
                  style={{ left: `${dest.mapX}%`, top: `${dest.mapY}%` }}
                  className={`absolute group pointer-events-auto -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-${isActive ? '20' : '10'}`}
                >
                  <div className={`
                    w-12 h-12 rounded-[1.2rem] flex items-center justify-center transform transition-all shadow-xl backdrop-blur-md border 
                    ${isActive ? "scale-125 bg-[#00A8FF] text-white ring-4 ring-[#00A8FF]/20 border-transparent" : 
                      isViral ? "bg-white/95 dark:bg-[#1f2937]/90 text-orange-500 hover:scale-110 border-white/50 dark:border-white/10" : 
                      "bg-white/95 dark:bg-[#1f2937]/90 text-slate-800 dark:text-white hover:scale-110 border-white/50 dark:border-white/10"}
                  `}>
                    {isViral ? <TrendingUp size={20} /> : <MapPin size={22} className={isActive ? "fill-white text-white" : "fill-[#00A8FF] text-white dark:text-[#111827]"} />}
                  </div>
                  
                  {/* Tooltip that shows on hover or active */}
                  <div className={`mt-2 px-4 py-2 rounded-xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] whitespace-nowrap border border-white/60 dark:border-white/10 transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                    {dest.name}
                  </div>
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Horizontal Carousel */}
      <div className="absolute bottom-6 left-0 w-full z-30">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-8 pt-4 snap-x no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setActiveMarker(dest.id)}
                className={`min-w-[300px] md:min-w-[360px] snap-center bg-white/85 dark:bg-[#111827]/85 backdrop-blur-2xl rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] flex flex-col cursor-pointer hover:-translate-y-2 
                  ${activeMarker === dest.id 
                    ? 'border-[#008AE6] ring-4 ring-[#00A8FF]/20 scale-100 opacity-100' 
                    : 'border-white/60 dark:border-white/10 hover:border-[#00A8FF]/50 scale-95 opacity-80 hover:opacity-100'
                  }
                `}
              >
                <div className="h-48 w-full relative overflow-hidden p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 rounded-[1.5rem] m-2 pointer-events-none" />
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-xl text-white text-[10px] font-bold uppercase tracking-wider border border-white/30 shadow-xl flex items-center gap-1.5">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" /> {dest.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 z-20">
                     <span className={`px-2 py-1 rounded-md text-white text-[9px] font-bold uppercase tracking-widest shadow-md ${
                        dest.category === "Viral" ? "bg-orange-500" : "bg-[#0092E4]"
                      }`}>
                        {dest.category}
                      </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">{dest.name}</h3>
                    <p className="text-[13px] text-slate-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4 font-medium">
                      {dest.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[9px] text-[#00A8FF] uppercase font-black tracking-widest block mb-0.5">Est. Biaya</span>
                      <span className="text-slate-900 dark:text-white font-black text-[15px]">{dest.price}</span>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleInfo(dest); }}
                      className="w-11 h-11 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:scale-110 hover:bg-[#00A8FF] dark:hover:bg-[#00A8FF] hover:text-white dark:hover:text-white transition-all shadow-lg"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredDestinations.length === 0 && (
              <div className="w-full flex items-center justify-center min-h-[200px] p-8 bg-white/50 dark:bg-[#111827]/50 backdrop-blur-md rounded-3xl border border-white/20">
                <div className="text-center">
                  <Search size={40} className="mx-auto text-slate-300 dark:text-gray-600 mb-3" />
                  <p className="text-lg font-bold text-slate-900 dark:text-white">Tidak ada rute ditemukan</p>
                  <p className="text-sm text-slate-500">Coba ubah kriteria pencarian Anda.</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}