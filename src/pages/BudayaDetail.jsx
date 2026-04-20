import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Landmark, History, MapPin, Share2 } from "lucide-react";
import { CULTURAL_DATA } from "../data/culturalData";
import { useEffect } from "react";

export default function BudayaDetail() {
  const { id } = useParams();
  const item = CULTURAL_DATA.find((d) => d.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] dark:bg-[#030303]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Data tidak ditemukan</h2>
          <Link to="/budaya" className="text-[#00A8FF] hover:underline flex items-center gap-2 justify-center">
            <ChevronLeft size={18} /> Kembali ke Budaya
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#030303] transition-colors duration-700">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] dark:from-[#030303] via-black/20 to-transparent" />
        
        <div className="absolute top-32 left-6 z-20">
          <Link 
            to="/budaya" 
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/30 transition-all"
          >
            <ChevronLeft size={20} /> Kembali
          </Link>
        </div>

        <div className="absolute bottom-12 left-6 right-6 z-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-2 bg-[#00A8FF] text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-xl mb-4 inline-block">
              {item.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
               {item.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#00A8FF] rounded-full" />
                Deskripsi Budaya
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                {item.fullDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <History className="text-[#00A8FF]" />
                Asal-Usul & Sejarah
              </h2>
              <p className="text-lg text-slate-500 dark:text-gray-400 leading-relaxed italic">
                "{item.history}"
              </p>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#00A8FF] to-[#0047FF] text-white shadow-2xl shadow-[#00A8FF]/20"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin size={20} /> Lokasi Populer
              </h3>
              <p className="text-white/90 leading-relaxed mb-8">
                {item.location}
              </p>
              <button className="w-full py-4 bg-white/20 backdrop-blur-md rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/30 transition-all border border-white/20 text-sm tracking-widest uppercase">
                <Share2 size={16} /> Bagikan Budaya
              </button>
            </motion.div>

            <div className="p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Landmark size={18} className="text-[#00A8FF]" /> Info Terkait
               </h3>
               <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Status</span>
                    <span className="font-bold text-emerald-500">Lestari</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Akses Digital</span>
                    <span className="font-bold text-[#00A8FF]">Tersedia</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Kategori</span>
                    <span className="font-bold">{item.category}</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Recommended Section (Simple) */}
      <section className="py-24 px-6 border-t border-slate-200 dark:border-white/5">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Budaya Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {CULTURAL_DATA.filter(d => d.id !== item.id).slice(0, 3).map((rec) => (
                 <Link key={rec.id} to={`/budaya/${rec.id}`} className="group">
                    <div className="aspect-video rounded-3xl overflow-hidden mb-4">
                       <img src={rec.image} alt={rec.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold group-hover:text-[#00A8FF] transition-colors">{rec.title}</h4>
                 </Link>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
