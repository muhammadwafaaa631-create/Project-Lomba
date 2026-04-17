import { motion } from "framer-motion";

export function CultureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
