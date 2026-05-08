import { Shield, Train, ShoppingBag, Heart } from "lucide-react";

export default function DigitalDashboard() {
  const features = [
    { 
      title: "Bandung Sadayana", 
      desc: "Super App resmi Kota Bandung yang menyatukan seluruh layanan publik dalam satu genggaman.", 
      icon: Shield, 
      action: "Buka Aplikasi",
      link: "https://play.google.com/store/apps/details?id=gov.bdg.smartcitybdg&hl=id",
      color: "text-blue-500",
      bgScale: "w-[85%]" 
    },
    { 
      title: "Aduan Warga", 
      desc: "Platform interaksi dan pengaduan warga secara langsung kepada pemerintah secara cepat dan transparan.", 
      icon: Heart, 
      action: "Lapor Sekarang",
      link: "https://jabarprov.go.id/layanan/aduanwarga",
      color: "text-emerald-500",
      bgScale: "w-[95%]"
    },
    { 
      title: "ATCS Live CCTV", 
      desc: "Pantau kondisi arus lalu lintas Kota Bandung secara real-time di berbagai persimpangan jalan.", 
      icon: Train, 
      action: "Lihat Pantauan",
      link: "https://pelindung.bandung.go.id/",
      color: "text-amber-500",
      bgScale: "w-[100%]"
    },
    { 
      title: "Layanan Darurat 112", 
      desc: "Layanan bebas pulsa 24 jam untuk penanganan kegawatdaruratan medis, medis, bencana dan keamanan.", 
      icon: Shield, 
      action: "Hubungi 112",
      link: "tel:112",
      color: "text-red-500",
      bgScale: "w-[100%]"
    }
  ];

  return (
    <section id="innovation" className="py-24 bg-transparent px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Portal Layanan Digital</h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm">Akses berbagai platform resmi terintegrasi milik Pemerintah Kota Bandung.</p>
          </div>
          <button className="hidden md:block text-sm uppercase tracking-wider font-bold text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 shadow-xl transition mt-4 md:mt-0">
            Jelajahi Semua Layanan
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-5 ${feat.color} border border-slate-200 dark:border-white/10`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-3">{feat.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8">{feat.desc}</p>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={feat.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white text-sm text-center font-bold hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all border border-slate-200 dark:border-white/5"
                  >
                    {feat.action}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
