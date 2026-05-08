import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Sparkles, 
  Shuffle, 
  Share2, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";

import TripForm from "./trip-planner/TripForm";
import ItineraryDay from "./trip-planner/ItineraryDay";
import { ALL_DESTINATIONS } from "../../data/destinations";

const VIBES = [
  { id: "viral", label: "Viral / Trending", icon: "🔥" },
  { id: "alam", label: "Alam", icon: "🌲" },
  { id: "santai", label: "Santai / Cafe", icon: "☕" },
  { id: "hiburan", label: "Hiburan", icon: "🎡" },
  { id: "belanja", label: "Belanja", icon: "🛍️" },
  { id: "instagramable", label: "Instagramable", icon: "📸" },
];

export default function TripPlanner() {
  const [formData, setFormData] = useState({
    arrivalDate: "2024-05-20",
    arrivalTime: "09:00",
    duration: 2,
    peopleCount: 2,
    selectedVibes: ["viral", "instagramable"]
  });

  const [itinerary, setItinerary] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleVibe = (vibeId) => {
    setFormData(prev => {
      const vibes = prev.selectedVibes.includes(vibeId)
        ? prev.selectedVibes.filter(id => id !== vibeId)
        : [...prev.selectedVibes, vibeId];
      return { ...prev, selectedVibes: vibes };
    });
  };

  const generateItinerary = (isRandom = false) => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const days = [];
      const usedPlaces = new Set();
      
      const currentVibes = isRandom ? VIBES.map(v => v.id) : formData.selectedVibes;
      const vibePool = currentVibes.length > 0 ? currentVibes : VIBES.map(v => v.id);

      for (let i = 1; i <= formData.duration; i++) {
        const dayItinerary = {
          day: i,
          activities: [
            { time: "Pagi", ...getRandomPlace(vibePool, usedPlaces) },
            { time: "Siang", ...getRandomPlace(vibePool, usedPlaces) },
            { time: "Malam", ...getRandomPlace(vibePool, usedPlaces) }
          ]
        };
        days.push(dayItinerary);
      }
      
      setItinerary(days);
      setIsGenerating(false);
    }, 1200);
  };

  const getRandomPlace = (vibePool, usedPlaces) => {
    const randomVibe = vibePool[Math.floor(Math.random() * vibePool.length)];
    const places = ALL_DESTINATIONS.filter(d => d.vibe === randomVibe || d.category.toLowerCase() === randomVibe);
    
    // Safety check if no places found for vibe
    let pool = places.length > 0 ? places : ALL_DESTINATIONS;
    
    let availablePlaces = pool.filter(p => !usedPlaces.has(p.name));
    if (availablePlaces.length === 0) availablePlaces = pool;
    
    const place = availablePlaces[Math.floor(Math.random() * availablePlaces.length)];
    usedPlaces.add(place.name);
    
    return {
      placeName: place.name,
      description: place.description,
      bookingUrl: place.bookingUrl,
      votesUp: Math.floor(Math.random() * 5),
      votesDown: 0,
      isViral: place.category === "Viral"
    };
  };

  const handleShare = () => {
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  return (
    <div id="trip-planner-section" className="relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 -translate-y-[99%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-slate-50 dark:fill-[#0B1120] transition-colors duration-700">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#0B1120] dark:to-black px-6 transition-colors duration-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A8FF]/10 text-[#00A8FF] mb-4"
            >
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">AI Planner</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              Rencanakan Trip Kamu ke Bandung
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Tentukan tanggal, durasi, dan vibes liburanmu, lalu dapatkan itinerary otomatis yang bisa kamu diskusikan bersama teman.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} 
              className="lg:col-span-5 bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl"
            >
              <TripForm formData={formData} handleInputChange={handleInputChange} toggleVibe={toggleVibe} generateItinerary={generateItinerary} isGenerating={isGenerating} VIBES={VIBES} />
            </motion.div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!itinerary && !isGenerating ? (
                  <motion.div key="placeholder" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="h-full min-h-[500px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl text-center p-12">
                    <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 text-slate-400">
                      <Calendar size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Belum Ada Rencana</h3>
                    <p className="text-slate-500 dark:text-gray-400 max-w-xs mx-auto mb-8">Isi form di sebelah kiri untuk melihat rekomendasi perjalanan seru sesuai selera kamu.</p>
                    <button onClick={() => generateItinerary(true)} className="inline-flex items-center gap-2 text-[#00A8FF] font-semibold hover:underline">
                      <Shuffle size={18} /> Atau coba acak saja
                    </button>
                  </motion.div>
                ) : isGenerating ? (
                   <motion.div key="generating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full min-h-[500px] flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 border-4 border-[#00A8FF]/20 border-t-[#00A8FF] rounded-full animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="text-[#00A8FF] animate-pulse" size={32} />
                      </div>
                    </div>
                    <p className="mt-8 text-xl font-medium text-slate-900 dark:text-white animate-pulse">Menghitung rute terbaik...</p>
                  </motion.div>
                ) : (
                  <motion.div key="itinerary" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Rencana Perjalanan Kamu</h3>
                        <p className="text-slate-500 dark:text-gray-400">{formData.duration} Hari di Bandung • {formData.peopleCount} Orang</p>
                      </div>
                      <button onClick={handleShare} className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                        <Share2 size={18} /> Bagikan Rencana
                      </button>
                    </div>
                    <div className="space-y-8">
                      {itinerary.map((dayData, idx) => (
                        <ItineraryDay key={idx} data={dayData} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showShareToast && (
          <motion.div initial={{ opacity: 0, y: 50, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 50, x: "-50%" }} className="fixed bottom-10 left-1/2 z-[100] bg-slate-900 dark:bg-white text-white dark:text-black px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10">
            <CheckCircle2 className="text-[#00A8FF]" />
            <div>
              <p className="font-bold text-sm">Link Berhasil Disalin!</p>
              <p className="text-xs opacity-70">Bagikan di WhatsApp atau grup diskusi tim.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
