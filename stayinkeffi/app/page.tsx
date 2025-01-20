import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedHotels from "@/components/FeaturedHotels";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedHotels />
        <WhyChoose />
        <FAQSection />
        <CTASection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
