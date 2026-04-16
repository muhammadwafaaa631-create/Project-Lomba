import { Train, Zap, Shield } from "lucide-react";

export default function DigitalDashboard() {
  const features = [
    { 
      title: "Transportasi AI", 
      desc: "Sistem transportasi publik yang terintegrasi pengelolaannya melalui AI untuk lalu lintas yang efisien.", 
      icon: Train, 
      progress: "85%" 
    },
    { 
      title: "Energi Terbarukan", 
      desc: "Pasokan energi yang bergantung pada sumber ramah lingkungan dan termonitor secara real-time.", 
      icon: Zap, 
      progress: "60%" 
    },
    { 
      title: "Layanan Publik", 
      desc: "Akses birokrasi dan layanan darurat terpadu yang meminimalisir waktu tunggu penduduk.", 
      icon: Shield, 
      progress: "92%" 
    }
  ];

  return (
    <section className="py-16 bg-[#FDFBF7] dark:bg-[#0B1120] px-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Fitur Smart City</h2>
          <button className="text-[10px] uppercase tracking-wider font-bold text-[#00A8FF] bg-[#00A8FF]/10 px-4 py-2 rounded-full border border-[#00A8FF]/30 hover:bg-[#00A8FF]/20 transition">
            Lihat Semua
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200 dark:border-white/5 hover:border-[#0092E4]/30 transition-all flex flex-col justify-between shadow-sm dark:shadow-none">
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
