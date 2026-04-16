import { motion } from "framer-motion";

export default function Timeline() {
  const events = [
    { year: "1810", title: "Awal Kota", desc: "Bandung secara resmi didirikan oleh Kolonial Belanda. Pusat kota mulai dibangun mendekati area Jalan Raya Pos, perlahan tumbuh." },
    { year: "1920", title: "Paris van Java", desc: "Perkembangan pesat dengan munculnya arsitektur bergaya Art Deco Eropa. Bandung menjadi tempat persinggahan utama kebanggan." },
    { year: "1955", title: "Konferensi Asia-Afrika", desc: "Tuan rumah pertemuan bersejarah KAA, menyuarakan perdamaian dan menempatkan nama Bandung di radar peta politik dunia." },
    { year: "Sekarang", title: "Digital City", desc: "Melesat ke masa depan. Bertransformasi menjadi tulang punggung kekuatan kreatif dan ekosistem teknologi pintar di Asia Tenggara." }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-20 tracking-tight">Timeline Sejarah</h2>
        
        {/* Center Line for Desktop / Left Line for Mobile */}
        <div className="absolute left-6 md:left-1/2 top-40 bottom-10 w-1 bg-[#C7EEFF]/50 dark:bg-[#C7EEFF]/20 md:-translate-x-1/2 rounded-full hidden sm:block" />

        <div className="space-y-12 md:space-y-24">
          {events.map((evt, i) => {
             const isEven = i % 2 === 0;
             return (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6 }}
                 className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
               >
                 <div className="hidden md:block md:w-5/12" />
                 
                 {/* Dot Component */}
                 <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-[#0077C0] border-[6px] border-white dark:border-[#0B1120] shadow-md md:-translate-x-1/2 z-10 hidden sm:flex items-center justify-center top-0 md:top-auto mt-4 md:mt-0" />

                 {/* Content Bubble */}
                 <div className="w-full pl-0 sm:pl-16 md:pl-0 md:w-5/12">
                   <div className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-xl shadow-md border border-slate-100 dark:border-white/5 hover:shadow-xl dark:shadow-none transition-all relative">
                     {/* Triangle pointer targeting line */}
                     <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent ${isEven ? "border-r-[12px] border-r-white dark:border-r-[#111827] border-l-0 left-[-11px]" : "border-l-[12px] border-l-white dark:border-l-[#111827] border-r-0 right-[-11px]"}`} style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))" }} />
                     
                     <span className="inline-block text-[#0077C0] dark:text-[#00A8FF] font-black text-2xl mb-2">{evt.year}</span>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{evt.title}</h3>
                     <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-light">{evt.desc}</p>
                   </div>
                 </div>
               </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  )
}
