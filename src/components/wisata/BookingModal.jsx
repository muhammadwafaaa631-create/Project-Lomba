import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Phone, CheckCircle2, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function BookingModal({ isOpen, onClose, destination }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!destination) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    const priceStr = destination.price.replace(/[^0-9]/g, "");
    const price = parseInt(priceStr) || 0;
    return (price * formData.guests).toLocaleString("id-ID");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Construct WhatsApp message
      const message = `Halo Admin KotaDigital! Saya ingin memesan tiket untuk:%0A%0A*Destinasi:* ${destination.name}%0A*Tanggal:* ${formData.date}%0A*Jumlah:* ${formData.guests} Orang%0A*Atas Nama:* ${formData.name}%0A*No HP:* ${formData.phone}%0A%0AMohon informasi pembayarannya. Terima kasih!`;
      
      const waUrl = `https://wa.me/6281234567890?text=${message}`;
      
      // Auto redirect after a short delay
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Header Image */}
            <div className="h-48 relative overflow-hidden">
              <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-6 left-8">
                <h2 className="text-3xl font-black text-white">{destination.name}</h2>
                <p className="text-white/70 font-medium">Boking tiket masuk & tour guide</p>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              {isSuccess ? (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Booking Berhasil!</h3>
                  <p className="text-slate-500 dark:text-gray-400 mb-8">
                    Data pesanan kamu telah kami terima. Kamu akan dialihkan ke WhatsApp untuk konfirmasi pembayaran.
                  </p>
                  <div className="animate-pulse flex items-center justify-center gap-2 text-blue-500 font-bold">
                    Mengalihkan ke WhatsApp...
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Data Pemesan</label>
                      <div className="space-y-4">
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required
                            type="text" 
                            name="name"
                            placeholder="Nama Lengkap"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                          />
                        </div>

                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required
                            type="tel" 
                            name="phone"
                            placeholder="Nomor WhatsApp"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Tanggal</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Orang</label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required
                            type="number" 
                            min="1"
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-6 border border-slate-100 dark:border-white/10 flex flex-col">
                    <h3 className="text-lg font-bold mb-4">Ringkasan Pesanan</h3>
                    <div className="space-y-4 mb-auto">
                      <div className="flex justify-between text-slate-500 dark:text-gray-400">
                        <span>Harga per orang</span>
                        <span className="font-bold text-slate-700 dark:text-white">{destination.price}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 dark:text-gray-400">
                        <span>Jumlah Tiket</span>
                        <span className="font-bold text-slate-700 dark:text-white">{formData.guests}x</span>
                      </div>
                      <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-between items-end">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Total Bayar</span>
                          <span className="text-2xl font-black text-blue-600 dark:text-blue-400">Rp {calculateTotal()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Konfirmasi Pesanan <MessageCircle size={20} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      
                      <a 
                        href={destination.bookingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all text-sm"
                      >
                        Atau Beli di Traveloka <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
