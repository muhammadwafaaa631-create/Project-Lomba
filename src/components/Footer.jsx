import { Link } from "react-router-dom";
import { Globe, MessageCircle, Code2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#FDFBF7] dark:bg-[#030303] border-t border-slate-200 dark:border-white/5 border-b-4 border-b-[#00A8FF] mt-auto transition-colors duration-700 relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Brand / Copy */}
                <div className="flex flex-col items-center md:items-start transition-opacity">
                    <div className="flex items-center gap-3 text-xl font-bold tracking-tight mb-2">
                      <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
                        <img src="/dreamina.jpeg" alt="Logo" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-slate-900 dark:text-white">Kota<span className="text-[#00A8FF]">Digital</span></span>
                    </div>
                    <p className="text-xs text-gray-500">© {new Date().getFullYear()} KotaDigital. Hak Cipta Dilindungi.</p>
                </div>

                {/* Footer Links */}
                <nav className="flex gap-6 text-xs text-slate-500 dark:text-gray-400 font-medium tracking-wide">
                    <Link to="/privasi" className="hover:text-[#00A8FF] transition-colors">Kebijakan Privasi</Link>
                    <Link to="/syarat" className="hover:text-[#00A8FF] transition-colors">Syarat Ketentuan</Link>
                    <Link to="/kontak" className="hover:text-[#00A8FF] transition-colors">Hubungi Kami</Link>
                </nav>

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-black-400">
                   <a href="#" className="hover:text-[#00A8FF] transition-colors p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-[#0092E4]/10">
                     <Globe size={16} />
                   </a>
                   <a href="#" className="hover:text-[#00A8FF] transition-colors p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-[#0092E4]/10">
                     <MessageCircle size={16} />
                   </a>
                   <a href="#" className="hover:text-[#00A8FF] transition-colors p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-[#0092E4]/10">
                     <Code2 size={16} />
                   </a>
                </div>

            </div>
        </footer>
    );
}