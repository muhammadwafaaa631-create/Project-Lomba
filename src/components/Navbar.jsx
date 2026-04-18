import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const location = useLocation();
  const historyRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (historyRef.current && !historyRef.current.contains(event.target)) {
        setIsHistoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsHistoryOpen(false);
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "History", 
      path: "/history",
      subLinks: [
        { name: "Masa Awal", path: "/history/masa-awal" },
        { name: "Masa Kolonial", path: "/history/kolonial" },
        { name: "Peristiwa Penting", path: "/history/peristiwa-penting" },
        { name: "Bandung Modern", path: "/history/modern" },
      ]

    },
    { name: "Wisata", path: "/wisata" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7]/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl md:text-2xl font-bold tracking-tight">
          <span className="text-slate-900 dark:text-white">Kota</span>
          <span className="text-[#00A8FF]">Digital</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              ref={link.name === "History" ? historyRef : null}
            >
              {link.subLinks ? (
                <button
                  onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                  className={`pb-1 transition-colors flex items-center gap-1 outline-none ${
                    location.pathname.startsWith(link.path)
                      ? "text-[#00A8FF] border-b-2 border-[#00A8FF]"
                      : "text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  <svg className={`w-4 h-4 transition-transform ${isHistoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`pb-1 transition-colors ${
                    location.pathname === link.path
                      ? "text-[#00A8FF] border-b-2 border-[#00A8FF]"
                      : "text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.subLinks && (
                <div className={`absolute left-0 mt-2 w-56 bg-[#111827] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 shadow-2xl ${
                  isHistoryOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}>
                  <div className="py-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block px-5 py-3 text-sm transition-colors hover:bg-[#00A8FF]/10 ${
                          location.pathname === sub.path ? "text-[#00A8FF] bg-[#00A8FF]/5" : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                    {/* Optional: link to main history page if needed */}
                    <div className="border-t border-white/5 mt-1">
                      <Link
                        to="/history"
                        className="block px-5 py-3 text-xs text-gray-500 hover:text-white transition-colors"
                      >
                        Lihat Garis Waktu Utama
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Theme Toggle & CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={19} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={19} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <Link
            to="/wisata"
            className="bg-[#0092E4] hover:bg-[#007ABF] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,168,255,0.3)]"
          >
            Mulai Jelajah
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] dark:bg-[#111827] border-t border-gray-200 dark:border-gray-800 absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                <Link
                  to={link.path}
                  onClick={() => !link.subLinks && setIsOpen(false)}
                  className={`text-lg font-medium flex justify-between items-center ${
                    location.pathname === link.path ? "text-[#00A8FF]" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-4 flex flex-col gap-3 border-l border-gray-800 my-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-base ${
                          location.pathname === sub.path ? "text-[#00A8FF]" : "text-gray-400"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-between items-center mt-2 border-t border-gray-200 dark:border-gray-800 pt-4">
              <span className="text-gray-600 dark:text-gray-300 font-medium">Tema Tampilan</span>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
              </button>
            </div>
            
            <Link
              to="/wisata"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-[#0092E4] text-white text-center px-6 py-3 rounded-full text-base font-semibold w-full"
            >
              Mulai Jelajah
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}