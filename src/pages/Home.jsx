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

export default function Home() {
    return (
        <div className="w-full flex flex-col bg-transparent text-slate-900 dark:text-white transition-colors duration-700 selection:bg-[#00A8FF]/30 selection:text-white">
            <Hero />
            <StatSection />
            <TripPlanner />
            <PreferenceSelector />
            <CitySnapshot />
            <Destinations />
            <CulinaryCulture />
            <Storytelling />
            <DigitalDashboard />
            <CallToAction />
        </div>
    );
}