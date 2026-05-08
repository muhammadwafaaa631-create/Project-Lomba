import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, MapPin, Info } from "lucide-react";

export default function StorySection() {
  const [activeFact, setActiveFact] = useState(0);

  const facts = [
    { 
      title: "Gedung Sate", 
      text: "Selesai dibangun awal tahun 1920-an, gedung ini sejatinya diproyeksikan sebagai pusat pemerintahan Hindia Belanda pengganti Batavia karena iklim Bandung yang ideal.", 
      icon: Landmark 
    },
    { 
      title: "Titik Nol Kilometer", 
      text: "Terletak persis di Jalan Asia Afrika. Di titik inilah Gubernur Jenderal Daendels menancapkan tongkatnya (1810) mengawali mega-proyek pembentukan kota.", 
      icon: MapPin 
    },
    { 
      title: "Asal 'Kota Kembang'", 
      text: "Julukan ini kian populer pasca-KAA 1955, di mana panitia menghias wajah kota dengan ribuan bunga cantik untuk menyambut para delegasi luar negeri.", 
      icon: Info 
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative group perspective-1000">
            <motion.div 
               whileHover={{ rotateY: 5, rotateX: 5 }}
               transition={{ duration: 0.4 }}
               className="relative overflow-hidden rounded-[2rem] shadow-2xl z-10"
            >
              <img src="https://images.unsplash.com/photo-1548943487-a2e4142f3fb0?q=80&w=800" alt="Bandung Heritage" className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              
              {/* Overlay Fact display */}
              <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 text-white">
                      <div className="flex items-center gap-3 mb-2">
                         {(() => {
                           const Icon = facts[activeFact].icon;
                           return <Icon size={20} className="text-[#00A8FF]" />;
                         })()}
                         <h4 className="font-bold text-lg">{facts[activeFact].title}</h4>
                      </div>
                      <AnimatePresence mode="wait">
                          <motion.p 
                             key={activeFact}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="text-white/90 text-sm leading-relaxed"
                          >
                             {facts[activeFact].text}
                          </motion.p>
                      </AnimatePresence>
                  </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-full h-full border-4 border-[#0077C0] rounded-[2rem] -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 w-48 h-48 bg-[#00A8FF] rounded-full blur-[80px] -z-20 opacity-30" />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <span className="text-[#0077C0] font-bold tracking-widest uppercase text-sm mb-3 block">Fakta & Legenda</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Membangun Warisan Menerobos Batas.</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            Bukan sekadar kota di cekungan pegunungan, Bandung adalah panggung sejarah terbesar Jawa Barat. Tersimpan ratusan cerita dari era kolonialisme hingga kemerdekaan yang patut untuk dijelajahi.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
             {facts.map((fact, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveFact(index)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                     activeFact === index 
                       ? "bg-[#0077C0] border-[#0077C0] text-white shadow-xl translate-x-2" 
                       : "bg-white dark:bg-[#111827] border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:border-[#0077C0]/50"
                  }`}
                >
                   <div className="flex items-center gap-3">
                     <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${activeFact === index ? "bg-white/20" : "bg-slate-100 dark:bg-white/5"}`}>
                       {index + 1}
                     </span>
                     <span className="font-semibold">{fact.title}</span>
                   </div>
                </button>
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}
