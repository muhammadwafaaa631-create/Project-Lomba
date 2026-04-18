import HeroHistory from "../components/history/HeroHistory";
import Timeline from "../components/history/Timeline";
import StorySection from "../components/history/StorySection";
import Gallery from "../components/history/Gallery";
import CallToAction from "../components/home/CallToAction";

export default function History() {
    return (
        <div className="w-full flex flex-col bg-transparent transition-colors duration-700">
            <HeroHistory />
            <Timeline />
            <StorySection />
            <Gallery />
            <CallToAction />
        </div>
    );
}
