import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import VarietySection from "@/components/VarietySection";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      
      <Hero />
      
      <FeaturedSection />

      <VarietySection />

      <JourneySection />

      <AboutSection />

      <Footer />
      
      <Chatbot />
    </main>
  );
}
