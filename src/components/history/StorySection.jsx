export default function StorySection() {
  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1548943487-a2e4142f3fb0?q=80&w=800" alt="Bandung Heritage" className="w-full h-[500px] object-cover rounded-xl shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-full h-full border-4 border-[#0077C0] rounded-xl -z-10" />
            <div className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 w-48 h-48 bg-[#C7EEFF] rounded-full blur-[60px] -z-20" />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <span className="text-[#0077C0] font-bold tracking-widest uppercase text-sm mb-3 block">Legenda Hidup</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Membangun Warisan Menerobos Batas.</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            Bukan sekadar kota di cekungan pegunungan, Bandung adalah panggung teater terbesar Jawa Barat. Dari jalanan Braga yang mengabadikan tawa parahyangan era keemasan, hingga revolusi teknologi yang melahirkan startup-startup kelas dunia.
          </p>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Warga lokal selalu memegang prinsip "Someah Hade ke Semah" – keramahan adalah kunci yang membuat siapa pun selalu rindu untuk pulang ke pelukan kota ini.
          </p>
        </div>
      </div>
    </section>
  )
}
