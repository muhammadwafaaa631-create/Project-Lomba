import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, CloudLightning, Wind, Droplets, Loader2, Thermometer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchWeather = async () => {
    try {
      setLoading(true);
      // Koordinat Bandung: -6.9175, 107.6191
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=-6.9175&longitude=107.6191&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=Asia%2FJakarta'
      );
      
      if (!response.ok) throw new Error('Gagal mengambil data cuaca');
      
      const data = await response.json();
      setWeather(data.current);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    // Refresh setiap 15 menit
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);
    // Jam real time
    const timeInterval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  const getWeatherIcon = (code) => {
    if (code === 0) return <Sun className="text-yellow-400" size={48} />;
    if (code >= 1 && code <= 3) return <Cloud className="text-gray-400" size={48} />;
    if (code >= 51 && code <= 67) return <CloudRain className="text-blue-400" size={48} />;
    if (code >= 80 && code <= 82) return <CloudRain className="text-blue-400" size={48} />;
    if (code >= 95) return <CloudLightning className="text-purple-400" size={48} />;
    return <Cloud className="text-gray-400" size={48} />;
  };

  const getWeatherDesc = (code) => {
    if (code === 0) return 'Cerah';
    if (code >= 1 && code <= 3) return 'Berawan';
    if (code >= 51 && code <= 67) return 'Hujan';
    if (code >= 80 && code <= 82) return 'Hujan Deras';
    if (code >= 95) return 'Badai Petir';
    return 'Berawan';
  };

  const getWeatherTips = (code, temp) => {
    if (code >= 51) return {
      tip: "Bawa payung atau jas hujan jika ingin keluar.",
      activity: "Sangat cocok untuk wisata kuliner indoor."
    };
    if (temp > 28) return {
      tip: "Gunakan pakaian tipis dan jangan lupa sunscreen.",
      activity: "Waktu yang tepat untuk mengunjungi Bandung utara yang sejuk."
    };
    if (temp < 22) return {
      tip: "Udara cukup dingin, gunakan jaket atau sweater.",
      activity: "Nikmati kopi hangat di Braga atau Dago."
    };
    return {
      tip: "Cuaca ideal untuk jalan-jalan santai.",
      activity: "Jelajahi taman-taman kota Bandung."
    };
  };

  const tips = getWeatherTips(weather?.weather_code, weather?.temperature_2m);


  if (loading && !weather) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl h-64">
        <Loader2 className="animate-spin text-[#00A8FF] mb-4" size={32} />
        <p className="text-slate-500 dark:text-gray-400 text-sm animate-pulse">Memuat data cuaca...</p>
      </div>
    );
  }

  if (error && !weather) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#111827] rounded-3xl border border-red-200 dark:border-red-900/30 shadow-xl h-64">
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        <button 
          onClick={fetchWeather}
          className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-semibold hover:bg-red-100 transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      <div className="bg-white dark:bg-[#111827] p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl transition-all duration-300 hover:border-[#00A8FF]/30 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Side: Temperature & Location */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-[#00A8FF] uppercase tracking-[0.2em]">Real-time Updates</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-3xl font-bold mb-1">Bandung, Jawa Barat</h3>
            <p className="text-slate-500 dark:text-gray-400 text-sm">Indonesia • {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} WIB</p>
          </div>

          {/* Middle: Icon & Condition */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-[#00A8FF]/20 rounded-full" />
              <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                {getWeatherIcon(weather?.weather_code)}
              </div>
            </div>
            <p className="text-slate-900 dark:text-white font-semibold text-xl">{getWeatherDesc(weather?.weather_code)}</p>
          </div>

          {/* Right Side: Stats */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <div className="bg-slate-50 dark:bg-white/5 px-6 py-4 rounded-2xl flex flex-col items-center border border-slate-100 dark:border-white/10 w-32">
              <Thermometer className="text-orange-400 mb-2" size={20} />
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{Math.round(weather?.temperature_2m)}°C</p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-widest font-medium">Suhu</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 px-6 py-4 rounded-2xl flex flex-col items-center border border-slate-100 dark:border-white/10 w-32">
              <Droplets className="text-blue-400 mb-2" size={20} />
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{weather?.relative_humidity_2m}%</p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-widest font-medium">Lembap</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 px-6 py-4 rounded-2xl flex flex-col items-center border border-slate-100 dark:border-white/10 w-32">
              <Wind className="text-slate-400 mb-2" size={20} />
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{Math.round(weather?.wind_speed_10m)} <span className="text-xs">km/j</span></p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-widest font-medium">Angin</p>
            </div>
          </div>
        </div>

        {/* Suggestion Section */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center gap-6">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111827] bg-slate-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-900 dark:text-white text-sm font-medium mb-0.5">
              💡 <span className="text-[#00A8FF]">Tips Bandung:</span> {tips.tip}
            </p>
            <p className="text-slate-500 dark:text-gray-400 text-xs">
              Saran: {tips.activity}
            </p>
          </div>
          <button 
            onClick={fetchWeather}
            className="text-[10px] font-bold text-slate-400 hover:text-[#00A8FF] transition-colors uppercase tracking-widest flex items-center gap-2"
          >
            <Loader2 size={12} className={loading ? "animate-spin" : ""} />
            Perbarui data
          </button>
        </div>
      </div>
    </motion.div>

  );
};

export default WeatherWidget;
