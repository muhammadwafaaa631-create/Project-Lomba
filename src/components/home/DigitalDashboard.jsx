import { Shield, Train, ShoppingBag, Heart } from "lucide-react";

export default function DigitalDashboard() {
  const features = [
    { 
      title: "Smart Governance", 
      desc: "Layanan publik digital terintegrasi untuk birokrasi yang cepat, transparan, dan efisien.", 
      icon: Shield, 
      progress: "92%" 
    },
    { 
      title: "Smart Mobility", 
      desc: "Sistem transportasi & infrastruktur cerdas untuk mobilitas warga yang lancar dan terkoneksi.", 
      icon: Train, 
      progress: "85%" 
    },
    { 
      title: "Smart Economy", 
      desc: "Pemberdayaan UMKM & ekonomi kreatif melalui platform digital guna meningkatkan ekonomi daerah.", 
      icon: ShoppingBag, 
      progress: "78%" 
    },
    { 
      title: "Smart Living", 
      desc: "Peningkatan kualitas hidup & lingkungan melalui teknologi ramah lingkungan dan sanitasi cerdas.", 
      icon: Heart, 
      progress: "60%" 
    }
  ];


  return (
    <section id="innovation" className="py-24 bg-transparent px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Inovasi Digital Bandung</h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm">Empat pilar utama transformasi digital menuju Nusantara Digital City.</p>
          </div>
          <button className="hidden md:block text-[10px] uppercase tracking-wider font-bold text-[#00A8FF] bg-[#00A8FF]/10 px-4 py-2 rounded-full border border-[#00A8FF]/30 hover:bg-[#00A8FF]/20 transition mt-4 md:mt-0">
            Lihat Dashboard Kota
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10 hover:border-[#0092E4]/30 transition-all flex flex-col justify-between shadow-sm dark:shadow-none">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900/5 dark:bg-[#ffffff]/5 flex items-center justify-center mb-4 text-[#00A8FF] border border-slate-900/10 dark:border-white/10">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-2">{feat.title}</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-8">{feat.desc}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-1 text-xs">
                    <span className="text-gray-500">Adoption Rate</span>
                    <span className="text-gray-400 font-medium">{feat.progress}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1">
                    <div className="bg-[#00A8FF] h-full rounded-full" style={{ width: feat.progress }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
