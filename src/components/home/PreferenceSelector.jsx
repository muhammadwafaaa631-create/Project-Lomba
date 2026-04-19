import { useState } from "react";
import { TreePine, Utensils, Building, Cpu, Globe, MapPin, Zap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Alam", "Kuliner", "Budaya", "Teknologi"];

export default function PreferenceSelector() {
  const [activeTab, setActiveTab] = useState("Alam");

  const renderCards = () => {
    // Generate dummy cards based on tab
    const cards = [
      { id: 1, title: "Hutan Digital", desc: "Sistem ekologi pintar yang terintegrasi di seluruh penjuru kota.", icon: TreePine },
      { id: 2, title: "Gastronomi AI", desc: "Rekomendasi kuliner berbasis AI yang sesuai dengan preferensimu.", icon: Utensils },
      { id: 3, title: "Barisan Virtual", desc: "Tur budaya interaktif tanpa batas ruang dan waktu.", icon: Building },
      { id: 4, title: "Pusat Kecepatan", desc: "Infrastruktur internet gigabit yang mendukung gaya hidup dinamis.", icon: Zap },
    ];

    return cards.map((card) => {
      const Icon = card.icon;
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: card.id * 0.1 }}
          key={card.id + activeTab} 
          className="bg-white dark:bg-[#111827] rounded-xl p-6 border border-slate-200 dark:border-white/5 hover:border-[#0092E4]/30 transition-all group"
        >
          <div className="mb-4 text-[#00A8FF]">
            <Icon size={24} />
          </div>
          <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-2">{card.title}</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{card.desc}</p>
        </motion.div>
      )
    });
  };

  return (
    <section className="pt-24 pb-12 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Personalisasi Pengalamanmu</h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm">Sesuaikan rute dan tempat tujuan berdasarkan preferensi unik gaya hidup Anda.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-slate-900/5 dark:bg-[#1A2333] p-1.5 rounded-full border border-slate-200 dark:border-transparent">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? "bg-[#0092E4] text-white shadow-lg" 
                    : "text-slate-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {renderCards()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
