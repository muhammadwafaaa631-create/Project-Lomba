import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ThumbsUp, ThumbsDown, Edit3, MapPin, ExternalLink, TrendingUp, Search } from "lucide-react";

export default function ActivityCard({ activity }) {
  const [votes, setVotes] = useState({ up: activity.votesUp, down: activity.votesDown });
  const [userVote, setUserVote] = useState(null);

  const handleVote = (type) => {
    if (userVote === type) {
      setVotes(prev => ({ ...prev, [type]: prev[type] - 1 }));
      setUserVote(null);
    } else {
      setVotes(prev => ({
        up: type === 'up' ? prev.up + 1 : (userVote === 'up' ? prev.up - 1 : prev.up),
        down: type === 'down' ? prev.down + 1 : (userVote === 'down' ? prev.down - 1 : prev.down),
      }));
      setUserVote(type);
    }
  };

  return (
    <div className="group relative bg-white dark:bg-[#111827] border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest w-fit">
          <Clock size={12} />
          {activity.time}
        </div>
        {activity.isViral && (
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-500 text-white text-[10px] font-black uppercase animate-pulse">
            <TrendingUp size={10} />
            Viral
          </div>
        )}
      </div>
      
      <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
        {activity.placeName}
      </h5>
      <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 line-clamp-2">
        {activity.description}
      </p>

      <div className="mt-auto">
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-4 mb-4">
          <div className="flex items-center gap-1">
            <button onClick={() => handleVote('up')} className={`p-1.5 rounded-lg transition-colors ${userVote === 'up' ? "bg-green-500/10 text-green-500" : "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400"}`}>
              <ThumbsUp size={14} />
              <span className="text-[10px] font-bold ml-1">{votes.up}</span>
            </button>
            <button onClick={() => handleVote('down')} className={`p-1.5 rounded-lg transition-colors ${userVote === 'down' ? "bg-red-500/10 text-red-500" : "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400"}`}>
              <ThumbsDown size={14} />
              <span className="text-[10px] font-bold ml-1">{votes.down}</span>
            </button>
          </div>
          
          <Link 
            to={`/wisata?search=${encodeURIComponent(activity.placeName)}`}
            className="flex items-center gap-1 text-[10px] font-bold text-[#00A8FF] hover:underline"
          >
            <Search size={12} /> Gallery
          </Link>
        </div>

        <a 
          href={activity.bookingUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF] hover:text-white py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
        >
          Lihat & Pesan <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
        </a>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        <MapPin size={10} className="text-[#00A8FF]" />
        Bandung, Jawa Barat
      </div>
    </div>
  );
}
