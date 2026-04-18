import Hero from "../components/home/Hero";
import StatSection from "../components/home/StatSection";
import TripPlanner from "../components/home/TripPlanner";
import PreferenceSelector from "../components/home/PreferenceSelector";
import CitySnapshot from "../components/home/CitySnapshot";
import Destinations from "../components/home/Destinations";
import CulinaryCulture from "../components/home/CulinaryCulture";
import DigitalDashboard from "../components/home/DigitalDashboard";
import Storytelling from "../components/home/Storytelling";
import CallToAction from "../components/home/CallToAction";
import WeatherWidget from "../components/home/WeatherWidget";
import SmartCityIntro from "../components/home/SmartCityIntro";
import HomeHighlights from "../components/home/HomeHighlights";
import ExploreBandung from "../components/home/ExploreBandung";



export default function Home() {
    return (
        <div className="w-full flex flex-col bg-transparent text-slate-900 dark:text-white transition-colors duration-700 selection:bg-[#00A8FF]/30 selection:text-white">
            <Hero />
            <section className="px-6 -mt-16 mb-8 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <WeatherWidget />
                </div>
            </section>
            
            <StatSection />
            <ExploreBandung />
            
            <SmartCityIntro />
            <HomeHighlights />
            
            <CitySnapshot />
            <Destinations />
            <CulinaryCulture />
            <DigitalDashboard />
            <CallToAction />

        </div>
    );
}