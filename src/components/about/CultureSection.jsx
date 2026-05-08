import { motion } from "framer-motion";
import { CultureCard } from "./CultureCard";

export function CultureSection() {
  const cultures = [
    {
      icon: "⚽",
      title: "Persib Bandung",
      description: "Klub sepak bola kebanggaan kota dengan dukungan fanatik Bobotoh",
    },
    {
      icon: "🎭",
      title: "Budaya Sunda",
      description: "Kearifan lokal, seni, dan tradisi yang masih terjaga",
    },
    {
      icon: "🍜",
      title: "Kuliner Khas",
      description: "Surga makanan dari jajanan hingga kuliner legendaris",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-xs font-bold uppercase tracking-wider">
              Identitas & Karakter
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Budaya & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Identitas Kota
              </span>
            </h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed">
              <p>
                Bandung tidak hanya dikenal sebagai kota kreatif, tetapi juga
                memiliki identitas budaya yang kuat. Mulai dari kuliner khas,
                gaya hidup anak muda, hingga semangat komunitas yang tinggi,
                semuanya membentuk karakter unik kota ini.
              </p>
              <p>
                Dalam dunia olahraga, Bandung memiliki kebanggaan besar terhadap
                klub sepak bolanya, yaitu Persib Bandung. Klub ini bukan sekadar
                tim, tetapi juga simbol persatuan masyarakat dengan basis
                pendukung yang sangat loyal, dikenal sebagai Bobotoh.
              </p>
            </div>
          </motion.div>

          {/* Right: Cards Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cultures.map((item, index) => (
              <div
                key={index}
                className={index === 2 ? "sm:col-span-2 lg:col-span-1 lg:w-full" : ""}
              >
                <CultureCard {...item} />
              </div>
            ))}
            {/* Decorative Element */}
            <div className="hidden lg:flex items-center justify-center p-6 border-2 border-dashed border-blue-500/10 rounded-2xl opacity-50">
                <span className="text-blue-500/20 font-black text-4xl transform -rotate-12">BANDUNG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
