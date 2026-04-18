import { Calendar, Clock, Users, ChevronRight, Shuffle } from "lucide-react";

export default function TripForm({ formData, handleInputChange, toggleVibe, generateItinerary, isGenerating, VIBES }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest pl-1">
            Tgl Kedatangan
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8FF]" size={18} />
            <input 
              type="date" 
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleInputChange}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00A8FF]/50 outline-none transition-all"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest pl-1">
            Jam Tiba
          </label>
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8FF]" size={18} />
            <input 
              type="time" 
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleInputChange}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00A8FF]/50 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest pl-1">
            Durasi (Hari)
          </label>
          <div className="flex bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
            <button 
              onClick={() => handleInputChange({ target: { name: 'duration', value: Math.max(1, formData.duration - 1) } })}
              className="px-4 py-3.5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-white transition-colors"
            >
              -
            </button>
            <input 
              type="number" 
              name="duration"
              value={formData.duration}
              readOnly
              className="w-full bg-transparent text-center font-bold text-slate-900 dark:text-white outline-none"
            />
            <button 
              onClick={() => handleInputChange({ target: { name: 'duration', value: Math.min(7, formData.duration + 1) } })}
              className="px-4 py-3.5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-white transition-colors"
            >
              +
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest pl-1">
            Jumlah Orang
          </label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8FF]" size={18} />
            <input 
              type="number" 
              name="peopleCount"
              min="1"
              value={formData.peopleCount}
              onChange={handleInputChange}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00A8FF]/50 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest pl-1">
          Liburan Vibes (Pilih Sesuai Mood)
        </label>
        <div className="flex flex-wrap gap-2">
          {VIBES.map((vibe) => (
            <button
              key={vibe.id}
              onClick={() => toggleVibe(vibe.id)}
              className={`px-4 py-2.5 rounded-xl border transition-all flex items-center gap-2 text-sm font-medium ${
                formData.selectedVibes.includes(vibe.id)
                  ? "bg-[#00A8FF] border-[#00A8FF] text-white shadow-lg shadow-[#00A8FF]/20"
                  : "bg-white dark:bg-transparent border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-[#00A8FF]/50"
              }`}
            >
              <span>{vibe.icon}</span>
              {vibe.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <button 
          onClick={() => generateItinerary(false)}
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-[#0092E4] to-[#007ABF] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-[#0092E4]/30 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0"
        >
          {isGenerating ? "Sedang Memproses..." : "Buat Jadwal"}
          {!isGenerating && <ChevronRight size={20} />}
        </button>
        <button 
          onClick={() => generateItinerary(true)}
          disabled={isGenerating}
          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
        >
          <Shuffle size={18} />
          Acak Saja
        </button>
      </div>
    </div>
  );
}
