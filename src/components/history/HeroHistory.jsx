export default function HeroHistory() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-[#FDFBF7] dark:bg-[#1D242B] transition-colors duration-700">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=1920" alt="Bandung Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#FDFBF7]/80 dark:bg-[#1D242B]/70 transition-colors duration-700" />
      </div>
      <div className="relative z-10 text-center px-4 w-full">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 drop-shadow-lg tracking-tight">History of Bandung</h1>
        <p className="text-slate-600 dark:text-[#C7EEFF] text-xl max-w-2xl mx-auto drop-shadow-md">Melacak jejak waktu dari kota warisan kolonial hingga menjadi poros masa depan digital.</p>
      </div>
    </section>
  )
}
