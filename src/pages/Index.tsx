import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import WhyFail from "@/components/WhyFail";
import HowItWorks from "@/components/HowItWorks";
import ForWhom from "@/components/ForWhom";
import Impact from "@/components/Impact";
import Philosophy from "@/components/Philosophy";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <PainPoints />
      <Solutions />
      <WhyFail />
      <HowItWorks />
      <ForWhom />
      <Impact />
      <Philosophy />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
