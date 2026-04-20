import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Map as MapIcon, Coffee, Star, Compass, Mountain, BookOpen, X } from "lucide-react";
import { ALL_DESTINATIONS } from "../data/destinations";
import { useTheme } from "../context/ThemeContext";
import WisataHero from "../components/wisata/WisataHero";
import BookingModal from "../components/wisata/BookingModal";
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet Default Icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom bounds to calculate lat & lng from mapX and mapY
const BANDUNG_BOUNDS = { north: -6.8, south: -7.1, west: 107.55, east: 107.75 };
const getLatLng = (x, y) => [
  BANDUNG_BOUNDS.north - (y / 100) * (BANDUNG_BOUNDS.north - BANDUNG_BOUNDS.south),
  BANDUNG_BOUNDS.west + (x / 100) * (BANDUNG_BOUNDS.east - BANDUNG_BOUNDS.west)
];

const mappedDestinations = ALL_DESTINATIONS.map(d => ({
  ...d,
  position: getLatLng(d.mapX || 50, d.mapY || 50)
}));

function MapUpdater({ activeDest }) {
  const map = useMap();
  useEffect(() => {
    if (activeDest) {
      // Zoom into marker with animation
      map.flyTo(activeDest.position, 14, {
        animate: true,
        duration: 1.5
      });
    }
  }, [activeDest, map]);
  return null;
}

export default function Wisata() {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // If navigating from other pages with search intent
    const params = new URLSearchParams(location.search);
    const q = params.get("search");
    if (q) {
      setSearchQuery(q);
      setActiveCategory("Semua");
      setTimeout(() => {
        document.getElementById('wisata-map')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [location.search]);

  const categories = [
    { name: "Semua", icon: Compass },
    { name: "Alam", icon: Mountain },
    { name: "Kuliner", icon: Coffee },
    { name: "Edukasi", icon: BookOpen },
    { name: "Hiburan", icon: Star }
  ];

  const filteredDestinations = useMemo(() => {
    return mappedDestinations.filter((dest) => {
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

  const activeDest = useMemo(() => {
    return filteredDestinations.find(d => d.id === activeMarkerId);
  }, [activeMarkerId, filteredDestinations]);

  // Leaflet Tile layers 
  const mapThemeUrl = isDark 
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  const createCustomIcon = (isActive, isViral) => {
    const activeClass = isActive 
        ? "scale-125 bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] z-[1000] border-blue-200" 
        : (isViral ? "bg-orange-500 text-white border-white scale-100 hover:scale-110" : "bg-white text-slate-800 border-white hover:scale-110 scale-100");
    const iconEmoji = isViral ? "🔥" : "📍";
    return L.divIcon({
      className: "custom-leaflet-marker",
      html: `<div class="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform border-[3px] ${activeClass}">
              <span class="text-lg leading-none">${iconEmoji}</span>
             </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });
  };

  const handleBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="w-full flex flex-col font-sans bg-[#FDFBF7] dark:bg-[#0B1120] min-h-screen">
      
      {/* 1. Hero Section (Entry Point) */}
      <WisataHero />

      {/* 2. Map Section (Core Feature) */}
      <section id="wisata-map" className="relative w-full h-[100dvh]">
        
        {/* Map Overlays (To prevent marker stacking issues under fixed UI elements) */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FDFBF7]/80 to-transparent dark:from-[#0B1120]/80 z-[400] pointer-events-none" />

        {/* React Leaflet Map */}
        <div className="absolute inset-0 z-0">
          <MapContainer 
            center={[-6.9147, 107.6098]} 
            zoom={12} 
            className="w-full h-full" 
            zoomControl={false}
          >
            <TileLayer url={mapThemeUrl} />
            <ZoomControl position="bottomright" />
            
            <MapUpdater activeDest={activeDest} />

            {/* Render Markers */}
            {filteredDestinations.map(dest => (
               <Marker 
                 key={dest.id} 
                 position={dest.position}
                 icon={createCustomIcon(activeMarkerId === dest.id, dest.category === "Viral")}
                 eventHandlers={{
                   click: () => setActiveMarkerId(dest.id)
                 }}
               />
            ))}
          </MapContainer>
        </div>

        {/* 7. Search & Filter UI (Floating over map) */}
        <div className="absolute top-6 left-0 w-full z-[1000] px-4 pointer-events-none mt-[80px]">
          <div className="max-w-4xl mx-auto flex flex-col items-center pointer-events-auto">
            
            {/* Search Bar */}
            <div className="w-full md:w-[500px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] p-2 mb-4 flex items-center transition-all focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:shadow-[0_8px_40px_rgba(59,130,246,0.2)]">
              <div className="pl-4 pr-3 text-slate-400">
                <Search size={22} className="stroke-[2.5]" />
              </div>
              <input 
                type="text" 
                placeholder="Cari wisata, kuliner, alam..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-white placeholder-slate-400 font-medium text-[15px]"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-2 transition-colors">
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2" style={{ scrollbarWidth: 'none' }}>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.name;
                return (
                  <button 
                    key={cat.name}
                    onClick={() => {
                        setActiveCategory(cat.name);
                        setActiveMarkerId(null); // reset selected card on filter
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-md border ${
                      isActive 
                      ? "bg-blue-600 text-white border-blue-600 shadow-blue-500/30" 
                      : "bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-transparent hover:scale-105"
                    }`}
                  >
                    <Icon size={16} />
                    {cat.name}
                  </button>
                )
              })}
            </div>

          </div>
        </div>

        {/* 4. Quick Info Card (Layer 1) & 6. Mobile bottom mini card */}
        <AnimatePresence>
          {activeDest && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 z-[1000] w-[calc(100%-2rem)] md:w-72 max-w-[280px] pointer-events-auto"
            >
              <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-200 dark:border-white/10">
                
                {/* Close Button */}
                <button 
                  onClick={() => setActiveMarkerId(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 hover:scale-110 transition-all"
                >
                  <X size={16} />
                </button>

                {/* Card Header Image */}
                <div className="h-32 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img src={activeDest.image} alt={activeDest.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-5 z-20">
                    <span className={`px-2 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-wider block mb-1.5 w-max shadow-sm ${activeDest.category === "Viral" ? "bg-orange-500" : "bg-[#0092E4]"}`}>
                      {activeDest.category}
                    </span>
                    <h3 className="text-xl font-bold text-white line-clamp-1">{activeDest.name}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <p className="text-[12px] text-slate-600 dark:text-gray-300 line-clamp-2 mb-4 leading-relaxed font-medium">
                    {activeDest.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 bg-slate-50 dark:bg-white/5 p-2.5 rounded-xl border border-slate-100 dark:border-white/5">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-0.5">Mulai dari</span>
                      <span className="text-sm font-black text-slate-900 dark:text-white">{activeDest.price}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-yellow-400/10 px-2.5 py-1.5 rounded-xl border border-yellow-400/20">
                      <Star size={14} className="fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">{activeDest.rating}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href={activeDest.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 py-2 rounded-xl text-[12px] font-bold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors border border-transparent"
                    >
                      Detail
                    </a>
                    <button 
                      onClick={handleBooking}
                      className="flex items-center justify-center px-3 py-2 rounded-xl text-[12px] font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md shadow-blue-500/30 hover:shadow-blue-500/40 transition-all"
                    >
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* 5. Booking Modal (Layer 2) */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        destination={activeDest} 
      />

    </div>
  );
}