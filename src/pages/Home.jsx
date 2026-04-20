import Hero from "../components/home/Hero";
import StatSection from "../components/home/StatSection";
import TripPlanner from "../components/home/TripPlanner";
import PreferenceSelector from "../components/home/PreferenceSelector";
import CitySnapshot from "../components/home/CitySnapshot";

import CulinaryCulture from "../components/home/CulinaryCulture";
import DigitalDashboard from "../components/home/DigitalDashboard";
import Storytelling from "../components/home/Storytelling";
import CallToAction from "../components/home/CallToAction";
import WeatherWidget from "../components/home/WeatherWidget";
import SmartCityIntro from "../components/home/SmartCityIntro";

import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";



export default function Home() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="w-full flex flex-col bg-transparent text-slate-900 dark:text-white transition-colors duration-700 selection:bg-[#00A8FF]/30 selection:text-white relative min-h-screen">
            
            {/* Background Video Layer - Zoom Resistant & Fixed */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="night-video"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-[100vw] h-[100vh] object-cover opacity-50 dark:opacity-40"
                                style={{ 
                                    // Zoom resistance trick: ensure it's always at least filling the screen
                                    minWidth: '100%',
                                    minHeight: '100%',
                                }}
                            >
                                <source src="/Bandung malam.mp4" type="video/mp4" />
                            </video>
                            {/* Dark Mode Overlay */}
                            <div className="absolute inset-0 bg-black/40" />
                            {/* Gradient Overlay for scrolling readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#0B1120]/95 pointer-events-none" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="day-video"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-[100vw] h-[100vh] object-cover opacity-60"
                                style={{ 
                                    minWidth: '100%',
                                    minHeight: '100%',
                                }}
                            >
                                <source src="/Bandung pagi.mp4" type="video/mp4" />
                            </video>
                            {/* Light Mode Overlay for readability without blurring the video */}
                            <div className="absolute inset-0 bg-white/50" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative z-10">
                <Hero />
                <section className="px-6 -mt-16 mb-8 relative z-20">
                    <div className="max-w-7xl mx-auto">
                        <WeatherWidget />
                    </div>
                </section>
                
                <div className="relative z-10 w-full flex flex-col pt-16 mt-12 drop-shadow-sm bg-[#FDFBF7] dark:bg-[#030303] rounded-t-[3rem] 2xl:rounded-t-[4rem] shadow-2xl transition-colors duration-700 border-t border-slate-200 dark:border-white/5 pb-24">
                    <StatSection />

                    
                    <SmartCityIntro />

                    
                    <CitySnapshot />

                    <CulinaryCulture />
                    <DigitalDashboard />
                    <CallToAction />
                </div>
            </div>

        </div>
    );
}