import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Castle, Building, Sword, Globe, Cpu, ChevronLeft, ChevronRight } from "lucide-react";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const events = [
    { 
      year: "Era Purba", 
      title: "Danau Bandung Purba", 
      desc: "Wilayah Bandung dahulunya adalah danau raksasa akibat letusan Gunung Sunda Purba. Air yang menyusut meninggalkan cekungan subur yang perlahan mulai dihuni oleh manusia prasejarah pendahulu.", 
      icon: Mountain,
      color: "text-emerald-500",
      bgBorder: "border-emerald-500",
      image: "https://images.unsplash.com/photo-1544473244-f6895e69ce8d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      year: "1810", 
      title: "Pusat Kota Baru", 
      desc: "Gubernur Jenderal Daendels memerintahkan pemindahan ibu kota kabupaten ke area Jalan Raya Pos. Peristiwa ini menandai lahirnya Kota Bandung secara resmi di bawah administrasi Kolonial Belanda.", 
      icon: Castle,
      color: "text-amber-500",
      bgBorder: "border-amber-500",
      image: "https://images.unsplash.com/photo-1584285404554-1590fc981f96?auto=format&fit=crop&q=80&w=800"
    },
    { 
      year: "1920-an", 
      title: "Paris van Java", 
      desc: "Kota ini mekar pesat sebagai pusat wisata dan mode. Percampuran budaya Eropa dan Sunda berpadu dalam arsitektur Art Deco, jalanan Braga yang rindang, menjadikannya kota paling modis di Hindia Belanda.", 
      icon: Building,
      color: "text-pink-500",
      bgBorder: "border-pink-500",
      image: "https://images.unsplash.com/photo-1627705191833-289b52a12513?auto=format&fit=crop&q=80&w=800"
    },
    { 
      year: "1946", 
      title: "Bandung Lautan Api", 
      desc: "Bukti patriotisme total. Ratusan ribu penduduk dengan rela membumihanguskan rumah dan harta benda mereka dalam satu malam agar tentara Sekutu tidak dapat menggunakan Bandung sebagai markas militer.", 
      icon: Sword,
      color: "text-red-500",
      bgBorder: "border-red-500",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    { 
      year: "1955", 
      title: "Konferensi Asia-Afrika", 
      desc: "Tuan rumah pertemuan bersejarah di Gedung Merdeka bagi 29 negara yang baru merdeka. Menghasilkan Deklarasi Dasasila Bandung yang menentang kolonialisme dan menyuarakan perdamaian dunia.", 
      icon: Globe,
      color: "text-blue-500",
      bgBorder: "border-blue-500",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
    },
    { 
      year: "Masa Kini", 
      title: "Nusantara Smart City", 
      desc: "Berubah wajah menjadi Silicon Valley-nya Indonesia. Bandung kini memimpin dalam ekonomi kreatif, ekosistem startup teknologi, inovasi pariwisata, dan layanan tata kelola kota yang sepenuhnya digital.", 
      icon: Cpu,
      color: "text-[#00A8FF]",
      bgBorder: "border-[#00A8FF]",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev < events.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const activeEvent = events[activeIndex];
  const Icon = activeEvent.icon;

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
            <span className="text-[#0077C0] font-bold tracking-widest uppercase text-sm mb-3 block">Perjalanan Waktu</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Evolusi Kronologi Sejarah</h2>
        </div>

        {/* Timeline Navigation: Dates and Arrow Buttons */}
        <div className="flex flex-col items-center justify-center mb-16 relative z-20">
           <div className="flex items-center w-full max-w-4xl">
              <button 
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`p-3 bg-white dark:bg-[#111827] shadow-md rounded-full text-slate-400 hover:text-[#00A8FF] hover:shadow-xl transition-all mr-2 md:mr-4 shrink-0 border border-slate-100 dark:border-white/5 ${activeIndex === 0 ? 'invisible' : ''}`}
              >
                 <ChevronLeft size={24} />
              </button>
              
              <div className="flex-1 flex overflow-x-auto no-scrollbar justify-start md:justify-center items-center py-4 relative gap-2 sm:gap-4 md:gap-8 mask-linear">
                 {/* Connecting Line behind dates */}
                 <div className="absolute left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 top-1/2 -translate-y-1/2 -z-10" />

                 {events.map((evt, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button 
                         key={idx} 
                         onClick={() => setActiveIndex(idx)}
                         className={`relative flex flex-col items-center flex-shrink-0 group transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'}`}
                      >
                         <div className={`w-4 h-4 rounded-full border-4 mb-3 transition-colors ${isActive ? evt.bgBorder + ' bg-white dark:bg-[#0B1120] ring-4 ring-' + evt.bgBorder.replace('border-','') + '/20' : 'border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-800'}`} />
                         <span className={`text-xs md:text-sm font-bold whitespace-nowrap transition-colors ${isActive ? evt.color : 'text-slate-500 dark:text-slate-400'}`}>
                           {evt.year}
                         </span>
                      </button>
                    )
                 })}
              </div>

              <button 
                onClick={handleNext}
                disabled={activeIndex === events.length - 1}
                className={`p-3 bg-white dark:bg-[#111827] shadow-md rounded-full text-slate-400 hover:text-[#00A8FF] hover:shadow-xl transition-all ml-2 md:ml-4 shrink-0 border border-slate-100 dark:border-white/5 ${activeIndex === events.length - 1 ? 'invisible' : 'animate-pulse'}`}
              >
                 <ChevronRight size={24} />
              </button>
           </div>
        </div>

        {/* Detailed Era Display */}
        <div className="relative bg-white dark:bg-[#111827] rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 p-8 md:p-12 overflow-hidden min-h-[450px]">
           <AnimatePresence mode="wait">
             <motion.div 
               key={activeIndex}
               initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
               animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
               transition={{ duration: 0.5 }}
               className="flex flex-col md:flex-row items-center gap-10 h-full relative z-10"
             >
                {/* Content Left */}
                <div className="w-full md:w-1/2">
                   <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${activeEvent.bgBorder.replace('border-', 'bg-')}/10 pointer-events-none`}>
                         <Icon size={32} className={`${activeEvent.color}`} />
                      </div>
                      <div>
                        <span className={`text-2xl md:text-3xl font-black block tracking-tighter ${activeEvent.color}`}>{activeEvent.year}</span>
                      </div>
                   </div>
                   
                   <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                     {activeEvent.title}
                   </h3>
                   
                   <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                     {activeEvent.desc}
                   </p>
                </div>
                
                {/* Image Right */}
                <div className="w-full md:w-1/2">
                   <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px]">
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/40 z-10" />
                      <img src={activeEvent.image} alt={activeEvent.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000" />
                   </div>
                   <div className={`absolute -right-10 -bottom-10 w-64 h-64 blur-[100px] rounded-full opacity-20 pointer-events-none ${activeEvent.bgBorder.replace('border-', 'bg-')}`} />
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
