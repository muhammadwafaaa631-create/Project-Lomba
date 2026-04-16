import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1627917887373-cf673e483e58?q=80&w=600", category: "Landmark", title: "Kawah Gunung" },
  { id: 2, src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600", category: "Old City", title: "Kawasan Bersejarah" },
  { id: 3, src: "https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=600", category: "Landmark", title: "Pusat Pemerintahan" },
  { id: 4, src: "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=600", category: "Culture", title: "Musik Klasik" },
  { id: 5, src: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=600", category: "Culture", title: "Tari Tradisi" },
  { id: 6, src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600", category: "Old City", title: "Jalan Pagi Tepi Kota" }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Old City", "Culture", "Landmark"];

  const displayedImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Archive & Aesthetic</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  filter === f ? "bg-[#0077C0] text-white shadow-md" : "bg-white dark:bg-[#111827] text-slate-500 dark:text-gray-400 hover:text-[#0077C0] border border-slate-200 dark:border-white/5 hover:bg-[#C7EEFF]/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md h-80 bg-white dark:bg-[#111827]"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D242B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white mb-1">{img.title}</h3>
                  <p className="text-[#C7EEFF] text-sm">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
