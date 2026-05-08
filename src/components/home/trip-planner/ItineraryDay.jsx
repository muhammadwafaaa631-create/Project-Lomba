import { motion } from "framer-motion";
import ActivityCard from "./ActivityCard";

export default function ItineraryDay({ data }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#00A8FF] flex items-center justify-center text-white font-black text-xl shadow-lg">
          {data.day}
        </div>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Hari ke-{data.day}</h4>
        <div className="flex-1 h-[2px] bg-slate-200 dark:bg-white/5 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.activities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} />
        ))}
      </div>
    </motion.div>
  );
}
