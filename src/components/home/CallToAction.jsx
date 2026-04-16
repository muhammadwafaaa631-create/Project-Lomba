export default function CallToAction() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#0B1120] text-center border-t border-slate-200 dark:border-white/5 transition-colors duration-700">
      {/* Abstract Background Glow */}
      <div className="absolute inset-0 z-0 opacity-30 mt-[10vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#00A8FF]/20 rounded-[100%] blur-[100px] mix-blend-screen"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">Jadilah Bagian dari Perubahan.</h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Bergabunglah dengan kami untuk mewujudkan ekosistem kota digital cerdas demi pengalaman interaktif yang menyenangkan dan tak terlupakan.
        </p>
        <button className="bg-gradient-to-r from-[#0092E4] to-[#007ABF] text-white font-semibold text-lg px-8 py-3.5 rounded-full hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(0,168,255,0.4)]">
          Daftar KotaDigital
        </button>
      </div>
    </section>
  )
}
