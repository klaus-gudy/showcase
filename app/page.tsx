import AboutMeSection from "@/components/core/AboutMeSection";
import Header from "@/components/core/Header";
import HeroSection from "@/components/core/HeroSection";
import ProjectSection from "@/components/core/ProjectSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
        {/* experience */}
        {/* education and certificates */}
        {/* testimonials and teams */}
        {/* contact */}
        {/* footer */}
      </main>
    </div>
  );
}
