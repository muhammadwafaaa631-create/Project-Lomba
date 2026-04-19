import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, User, Info, Image as ImageIcon, TrendingUp, Sparkles, MapPin, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, icon: Icon, children, theme, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative group hover:bg-slate-900/[0.08] dark:hover:bg-white/[0.08] transition-all duration-500 overflow-hidden shadow-2xl"
    >
        <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity ${theme.textColor} dark:text-white`}>
            <Icon className="w-24 h-24" />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 rounded-xl ${theme.accentBg} text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold tracking-tight uppercase opacity-80">{title}</h4>
            </div>
            {children}
        </div>
        <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ${theme.accentBg}`} />
    </motion.div>
);

const HistoryPageLayout = ({ 
    theme,
    content
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const activeItem = content.timeline[activeIndex];

    return (
        <div className={`relative min-h-screen w-full bg-[#FDFBF7] dark:bg-[#030303] text-slate-900 dark:text-white font-sans overflow-x-hidden selection:bg-blue-500/20 transition-colors duration-700`}>
            
            {/* 1. HERO SECTION */}
            <section ref={heroRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y: yParallax, opacity: opacityParallax }}
                    className="absolute inset-0 z-0"
                >
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-[3s] hover:scale-105"
                        style={{ backgroundImage: `url(${activeItem.image || content.hero.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/80 via-[#FDFBF7]/40 to-[#FDFBF7] dark:from-black/80 dark:via-black/40 dark:to-[#030303]" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-xl"
                    >
                        <Sparkles className={`w-4 h-4 ${theme.textColor}`} />
                        <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-80 text-slate-600 dark:text-white/80">History of Bandung</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 select-none"
                    >
                        {content.hero.subtitle}
                    </motion.h1>

                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={`h-px max-w-md mx-auto relative ${theme.accentBg}`}
                    >
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border ${theme.accentBorder} rounded-full bg-[#FDFBF7] dark:bg-black`} />
                    </motion.div>
                </div>
            </section>

            {/* 2. DYNAMIC TIMELINE (NAVIGATOR) */}
            <div ref={timelineRef} className="sticky top-0 z-50 bg-[#FDFBF7]/80 dark:bg-[#030303]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 transition-colors duration-700">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between gap-4">
                        {/* Prev Button */}
                        <button 
                            onClick={() => setActiveIndex(prev => prev > 0 ? prev - 1 : content.timeline.length - 1)}
                            className={`p-3 rounded-full flex-shrink-0 transition-all ${theme.textColor} hover:bg-slate-200 dark:hover:bg-white/10`}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Dates Scroll Container */}
                        <div className="flex items-center justify-between gap-8 overflow-x-auto no-scrollbar scroll-smooth flex-1 px-4">
                            {content.timeline.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`flex flex-col items-center gap-2 min-w-[120px] transition-all duration-500 group relative
                                        ${activeIndex === idx ? 'scale-110 opacity-100' : 'opacity-40 hover:opacity-100 scale-100'}`}
                                >
                                    <div className={`h-1 w-full absolute top-0 left-0 transition-all duration-700
                                        ${activeIndex === idx ? theme.accentBg : 'bg-transparent'}`} />
                                    <span className={`text-2xl font-black ${activeIndex === idx ? theme.textColor : 'text-slate-400 dark:text-white'}`}>
                                        {item.year}
                                    </span>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors
                                        ${activeIndex === idx ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-500'}`}>
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button 
                            onClick={() => setActiveIndex(prev => prev < content.timeline.length - 1 ? prev + 1 : 0)}
                            className={`p-3 rounded-full flex-shrink-0 transition-all ${theme.textColor} hover:bg-slate-200 dark:hover:bg-white/10 animate-pulse`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. DYNAMIC CONTENT AREA */}
            <main className="relative z-10 py-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        className="max-w-7xl mx-auto px-6 space-y-24"
                    >
                        {/* Main Spotlight Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-12">
                                <span className={`text-xs font-bold uppercase tracking-[0.4em] mb-4 block ${theme.textColor}`}>
                                    Timeline Item — {activeItem.year}
                                </span>
                                <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight mb-12">
                                    {activeItem.title}
                                </h2>
                            </div>
                            
                            <div className="lg:col-span-8">
                                <div className="space-y-8 text-xl text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                                    <p className="border-l-4 border-slate-200 dark:border-white/10 pl-8 italic">
                                        {activeItem.description}
                                    </p>
                                    {activeItem.longDescription && (
                                        <p className="pl-8 text-lg opacity-80">
                                            {activeItem.longDescription}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="lg:col-span-4 self-stretch">
                                <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-3xl group">
                                    <img 
                                        src={activeItem.image} 
                                        alt={activeItem.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[3rem]" />
                                    <div className={`absolute bottom-8 right-8 p-4 rounded-2xl ${theme.accentBg} text-white shadow-2xl`}>
                                        <ImageIcon className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Impact & Key Figures Dashboard */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <DashboardCard title="Legacy & Impact" icon={TrendingUp} theme={theme}>
                                <div className="space-y-8">
                                    <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed italic">
                                        "{activeItem.impactText || 'Setiap peristiwa besar meninggalkan jejak mendalam pada identitas kota Bandung.'}"
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {activeItem.impactPoints?.map((point, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${theme.accentBg}`} />
                                                <div>
                                                    <h5 className="font-bold mb-1 text-slate-800 dark:text-white/90">{point.title}</h5>
                                                    <p className="text-sm text-slate-500 dark:text-gray-400 leading-snug">{point.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </DashboardCard>

                            <DashboardCard title="Key Figures" icon={User} theme={theme} delay={0.1}>
                                <div className="grid grid-cols-1 gap-6">
                                    {activeItem.figures?.map((figure, i) => (
                                        <div key={i} className="flex gap-6 items-center bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-3xl hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors">
                                            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/20 flex-shrink-0">
                                                <img src={figure.image} alt={figure.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h5 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">{figure.name}</h5>
                                                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme.textColor}`}>{figure.role}</p>
                                                <p className="text-sm text-slate-500 dark:text-gray-400 font-light leading-snug italic line-clamp-2">"{figure.desc}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </DashboardCard>
                        </div>

                        {/* Secret Insights (Dynamic Facts) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {activeItem.facts?.map((fact, i) => (
                                <DashboardCard key={i} title="Secret Insight" icon={Sparkles} theme={theme} delay={i * 0.1}>
                                    <h5 className="text-xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">{fact.title}</h5>
                                    <p className="text-slate-500 dark:text-gray-400 leading-relaxed font-light italic">
                                        {fact.text}
                                    </p>
                                </DashboardCard>
                            ))}
                        </div>

                        {/* Cinematic Gallery */}
                        {activeItem.gallery && activeItem.gallery.length > 0 && (
                            <div className="space-y-12">
                                <div className="flex items-center gap-4">
                                    <ImageIcon className={theme.textColor} />
                                    <h3 className="text-2xl font-black tracking-widest uppercase">Archive Gallery</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {activeItem.gallery.map((img, i) => (
                                        <div key={i} className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                            <img src={img.image} alt={img.caption} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                                                <p className="text-sm font-bold tracking-tight">{img.caption}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Visit History CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-6 mt-32 text-center"
                >
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=1200')] bg-cover bg-center opacity-10 group-hover:scale-110 transition-transform duration-[5s]" />
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Rasakan Sejarahnya Secara Langsung</h3>
                            <p className="text-blue-100 mb-10 text-lg font-light max-w-xl mx-auto leading-relaxed">
                                Banyak lokasi bersejarah ini masih terjaga dan dapat dikunjungi sekarang. Jelajahi peta wisata sejarah kami.
                            </p>
                            <Link 
                                to="/wisata"
                                className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-blue-50 transition-all hover:-translate-y-1"
                            >
                                Kunjungi Lokasi Bersejarah Ini <MapPin size={20} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </main>


            {/* 4. FOOTER NAVIGATION */}
            <footer className="py-24 border-t border-slate-200 dark:border-white/5 px-6 bg-slate-50 dark:bg-black transition-colors duration-700">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    {content.navigation.prevLink ? (
                        <Link to={content.navigation.prevLink} className="group flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all group-hover:border-slate-900/30 dark:group-hover:border-white/30 group-hover:bg-slate-900/5 dark:group-hover:bg-white/5 shadow-inner">
                                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform text-slate-900 dark:text-white" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Previous Era</p>
                                <p className="text-xl font-bold tracking-tighter">{content.navigation.prevLabel}</p>
                            </div>
                        </Link>
                    ) : <div />}

                    {content.navigation.nextLink && (
                        <Link to={content.navigation.nextLink} className="group flex items-center gap-6 text-right">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Next Era</p>
                                <p className="text-xl font-bold tracking-tighter">{content.navigation.nextLabel}</p>
                            </div>
                            <div className={`w-16 h-16 rounded-full border ${theme.accentBorder || 'border-white/10'} flex items-center justify-center transition-all group-hover:scale-105 shadow-2xl ${theme.accentBg} text-white`}>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    )}
                </div>
            </footer>

            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
};

export default HistoryPageLayout;
