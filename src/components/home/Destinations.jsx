export default function Destinations() {
  const destinations = [
    { title: "Kawah Putih", image: "https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=1200" },
    { title: "Gedung Sate", image: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1200" }
  ];

  return (
    <section className="py-16 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-4">Sorotan Kota</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden group h-[300px] cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              <img 
                src={dest.image} 
                alt={dest.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white tracking-wide">{dest.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
