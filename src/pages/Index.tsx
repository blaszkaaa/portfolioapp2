
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import AboutSection from "@/components/AboutSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProductSlider />
      <AboutSection />
      <TestimonialsSlider />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
