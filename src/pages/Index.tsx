import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import TechFoundation from "@/components/TechFoundation";
import WhyFail from "@/components/WhyFail";
import HowItWorks from "@/components/HowItWorks";
import ForWhom from "@/components/ForWhom";
import Impact from "@/components/Impact";
import Philosophy from "@/components/Philosophy";
import HundredChanges from "@/components/HundredChanges";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CliqSalesForm from "@/components/CliqSalesForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <SectionDivider variant="glow" />
        <PainPoints />
        <SectionDivider variant="subtle" />
        <Solutions />
        <SectionDivider variant="gradient" />
        <TechFoundation />
        <SectionDivider variant="subtle" />
        <WhyFail />
        <SectionDivider variant="subtle" />
        <HowItWorks />
        <SectionDivider variant="glow" />
        <ForWhom />
        <SectionDivider variant="subtle" />
        <Impact />
        <SectionDivider variant="gradient" />
        <HundredChanges />
        <SectionDivider variant="glow" />
        <Philosophy />
        <SectionDivider variant="glow" />
        <FAQSection />
        <SectionDivider variant="subtle" />
        <CTASection />
        <CliqSalesForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
