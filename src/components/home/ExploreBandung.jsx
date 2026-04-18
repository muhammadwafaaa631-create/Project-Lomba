import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, BookOpen, Music, Cpu } from "lucide-react";

const CATEGORIES = [
  { id: "wisata", label: "Wisata", icon: Mountain },
  { id: "sejarah", label: "Sejarah", icon: BookOpen },
  { id: "budaya", label: "Budaya", icon: Music },
  { id: "smart-city", label: "Smart City", icon: Cpu }
];

const EXPLORE_DATA = {
  wisata: [
    {
      id: "w1",
      title: "Gunung Tangkuban Parahu",
      desc: "Kawah vulkanik memukau dengan pemandangan alam spektakuler yang melegenda.",
      image: "https://images.unsplash.com/photo-1544473244-f6895e69ce8d?auto=format&fit=crop&q=80&w=800",
      link: "/wisata"
    },
    {
      id: "w2",
      title: "Jalan Braga",
      desc: "Suasana memori masa lalu Kolonial Belanda bertabur kafe estetik nan klasik.",
      image: "https://images.unsplash.com/photo-1627705191833-289b52a12513?auto=format&fit=crop&q=80&w=800",
      link: "/wisata"
    },
    {
      id: "w3",
      title: "Kawah Putih Ciwidey",
      desc: "Danau kawah vulkanik berwarna putih kehijauan dengan hawa pegunungan yang sangat sejuk.",
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800",
      link: "/wisata"
    }
  ],
  sejarah: [
    {
      id: "s1",
      title: "Gedung Sate",
      desc: "Pusat pemerintahan dengan arsitektur ikonik yang menjadi lambang identitas Jawa Barat.",
      image: "https://images.unsplash.com/photo-1584285404554-1590fc981f96?auto=format&fit=crop&q=80&w=800",
      link: "/history"
    },
    {
      id: "s2",
      title: "Museum KAA",
      desc: "Lokasi pertemuan bersejarah bangsa Asia & Afrika dalam menyuarakan kemerdekaan abadi.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
      link: "/history/peristiwa-penting"
    },
    {
      id: "s3",
      title: "Monumen Bandung Lautan Api",
      desc: "Monumen pengorbanan heroik warga yang membumihanguskan kotanya demi kemerdekaan.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      link: "/history/peristiwa-penting"
    }
  ],
  budaya: [
    {
      id: "b1",
      title: "Saung Angklung Udjo",
      desc: "Pusat pelestarian interaktif yang menampilkan mahakarya pertunjukan musik Angklung asli.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      link: "/about"
    },
    {
      id: "b2",
      title: "Kuliner Sunda",
      desc: "Ragam kekayaan rasa otentik bumbu kacang dan lalapan warisan Parahyangan.",
      image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800",
      link: "/about"
    },
    {
      id: "b3",
      title: "Seni Tari Jaipong",
      desc: "Tarian energik khas Sunda yang menjadi cerminan keluwesan & dinamika warga lokal.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      link: "/about"
    }
  ],
  "smart-city": [
    {
      id: "sc1",
      title: "Smart Governance",
      desc: "Digitalisasi perizinan dan layanan publik kota yang responsif dalam hitungan detik.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      link: "/"
    },
    {
      id: "sc2",
      title: "Smart Mobility",
      desc: "Integrasi sistem lalu lintas dan transportasi publik yang terpantau real-time.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
      link: "/"
    },
    {
      id: "sc3",
      title: "Smart Economy",
      desc: "Membangun ketangguhan UMKM melalui ekosistem dompet digital dan transaksi cashless.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
      link: "/"
    }
  ]
};

export default function ExploreBandung() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#0B1120] transition-colors duration-700 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A8FF]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Jelajahi <span className="text-[#00A8FF]">Bandung</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg">
            Pilih kategori untuk melihat berbagai sisi kota Bandung secara interaktif.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? "bg-[#00A8FF] text-white shadow-[0_0_20px_rgba(0,168,255,0.4)]" 
                    : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/10"
                }`}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Grid */}
        <div className="min-h-[500px] md:min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {EXPLORE_DATA[activeTab].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link 
                    to={item.link} 
                    className="group block bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-lg hover:shadow-2xl dark:hover:shadow-[#00A8FF]/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00A8FF] transition-colors">{item.title}</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                        {item.desc}
                      </p>
                      
                      <div className="flex items-center text-[#00A8FF] font-semibold text-sm group-hover:gap-2 transition-all">
                        Lihat Selengkapnya <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
