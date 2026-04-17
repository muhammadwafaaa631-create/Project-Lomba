import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { 
  Users, 
  Map, 
  Mountain, 
  Thermometer, 
  History as HistoryIcon, 
  Plane, 
  Layout, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe
} from "lucide-react";
import { CultureSection } from "../components/about/CultureSection";


export default function About() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-700 font-sans selection:bg-[#00A8FF]/30">
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A8FF]/10 text-[#00A8FF] mb-6 border border-[#00A8FF]/20">
              <Sparkles size={16} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Profil Kota</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Data & Profil <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#0047FF]">Kota Bandung</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Mengenal Bandung lebih dalam sebelum kamu menjelajahinya. Kota kreatif dengan sejarah yang kaya dan masa depan yang digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Statistik Kota */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Populasi" value={2500000} suffix="+" icon={Users} unit="Jiwa" decimal={0} />
          <StatCard label="Luas Wilayah" value={167.3} suffix="" icon={Map} unit="km²" decimal={1} />
          <StatCard label="Ketinggian" value={768} suffix="" icon={Mountain} unit="m dpl" decimal={0} />
          <StatCard label="Suhu Rata-rata" value={23.5} suffix="°C" icon={Thermometer} unit="" decimal={1} />
        </div>
      </section>

      {/* 3. Tentang Bandung & Short History */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-[#00A8FF] rounded-full" />
                Tentang Bandung
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                Bandung adalah ibu kota Provinsi Jawa Barat yang terletak di dataran tinggi, menawarkan udara yang sejuk dan pemandangan pegunungan yang menakjubkan. Kota ini dikenal sebagai pusat kreativitas, pendidikan, dan kuliner, menjadikannya destinasi favorit bagi wisatawan lokal maupun mancanegara.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <HistoryIcon size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sejarah Singkat</h3>
              <p className="text-slate-500 dark:text-gray-400 mb-8 leading-relaxed">
                Resmi berdiri pada 25 September 1810, Bandung telah melewati berbagai fase sejarah mulai dari masa kolonial Belanda hingga masa perjuangan kemerdekaan (Bandung Lautan Api). Setiap sudut kotanya menyimpan cerita heroik dan warisan arsitektur yang ikonik.
              </p>
              <Link to="/history" className="inline-flex items-center gap-2 text-[#00A8FF] font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest">
                Pelajari Selengkapnya <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right: Abstract UI / Mission */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#00A8FF]/20 to-transparent rounded-[3rem] border border-white/10 p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Misi KotaDigital</h2>
              <p className="text-slate-500 dark:text-gray-400 mb-8 leading-relaxed">
                Website ini dibentuk sebagai platform integrasi digital untuk membantu wisatawan mengeksplorasi keindahan Bandung dengan cara yang modern. Kami menggabungkan data histori dengan teknologi AI Planner untuk memberikan pengalaman perjalanan yang personal dan efisien.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-medium">Data Terpercaya & Akurat</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500">
                    <Globe size={20} />
                  </div>
                  <span className="font-medium">Platform Eksplorasi Terpadu</span>
                </div>
              </div>
            </div>
            {/* Minimal Decorative Ring */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-dashed border-[#00A8FF]/20 rounded-full animate-[spin_20s_linear_infinite]" />
          </motion.div>
        </div>
      </section>

      {/* Culture & Identity Section */}
      <CultureSection />


      {/* 4. Fitur Utama */}
      <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Apa yang Bisa Kamu Lakukan?</h2>
            <p className="text-slate-500 dark:text-gray-400">Jelajahi seluruh ekosistem digital kami</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Plane}
              title="Eksplor Wisata"
              desc="Temukan ratusan destinasi mulai dari alam, kuliner, hingga spot foto viral dengan informasi lengkap."
              link="/wisata"
              color="bg-blue-500"
            />
            <FeatureCard 
              icon={HistoryIcon}
              title="Pelajari Sejarah"
              desc="Simak timeline interaktif perjalanan panjang Kota Bandung dari masa ke masa."
              link="/history"
              color="bg-indigo-500"
            />
            <FeatureCard 
              icon={Layout}
              title="Buat Rencana Trip"
              desc="Gunakan fitur AI Planner kami untuk merancang itinerary instan dalam hitungan detik."
              link="/"
              color="bg-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Siap Menjelajahi Bandung?</h2>
            <p className="text-xl text-slate-500 dark:text-gray-400 mb-12 font-light">
              Mulai petualangan digitalmu sekarang dan temukan sisi lain dari Kota Kembang.
            </p>
            <Link 
              to="/"
              className="bg-gradient-to-r from-[#0092E4] to-[#007ABF] text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-[#00A8FF]/30 hover:shadow-[#00A8FF]/50 transition-all hover:-translate-y-1 block md:inline-block"
            >
              Mulai Rencanakan Sekarang
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, suffix, icon: Icon, unit, decimal }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => 
    current.toLocaleString("id-ID", { 
      minimumFractionDigits: decimal, 
      maximumFractionDigits: decimal 
    })
  );

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className="bg-white dark:bg-[#111827] border border-slate-100 dark:border-white/10 rounded-[2.5rem] p-8 text-center shadow-xl shadow-slate-200/50 dark:shadow-none translate-y-0 hover:-translate-y-2 transition-transform duration-500">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-[#00A8FF] mx-auto mb-6">
        <Icon size={24} />
      </div>
      <div className="flex items-center justify-center gap-1 mb-2">
        <motion.span className="text-3xl font-black tracking-tight">{displayValue}</motion.span>
        {suffix && <span className="text-3xl font-black text-[#00A8FF]">{suffix}</span>}
      </div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
      {unit && <p className="text-[10px] text-slate-400 dark:text-gray-600 mt-1">{unit}</p>}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, link, color }) {
  return (
    <Link to={link} className="group bg-white dark:bg-[#111827] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 hover:border-[#007ABF]/30 transition-all hover:shadow-2xl flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-2xl ${color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-500 dark:text-gray-400 leading-relaxed mb-6 font-light">{desc}</p>
      <div className="mt-auto flex items-center gap-2 text-[#00A8FF] font-bold group-hover:gap-4 transition-all">
        Mulai <ArrowRight size={18} />
      </div>
    </Link>
  );
}