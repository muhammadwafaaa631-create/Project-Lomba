export default function CitySnapshot() {
  const stats = [
    { label: "Populasi", value: "10.5M+", desc: "Jiwa" },
    { label: "Julukan", value: "Jantung Nusantara", desc: "Beragam Budaya" },
    { label: "Infrastruktur", value: "Kota Cahaya Digital", desc: "Koneksi Cepat" },
    { label: "Ketersambungan", value: "100%", desc: "Bebas Hambatan" },
  ];

  return (
    <section className="pb-24 pt-12 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="px-6 py-10 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center justify-center hover:border-[#0092E4]/30 transition-all hover:-translate-y-1 shadow-lg dark:shadow-none"
            >
              <p className="text-[#00A8FF] text-sm font-semibold tracking-wide mb-2 uppercase">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
