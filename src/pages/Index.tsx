import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";

const PainPoints = lazy(() => import("@/components/PainPoints"));
const Solutions = lazy(() => import("@/components/Solutions"));
const TechFoundation = lazy(() => import("@/components/TechFoundation"));
const WhyFail = lazy(() => import("@/components/WhyFail"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const ForWhom = lazy(() => import("@/components/ForWhom"));
const Impact = lazy(() => import("@/components/Impact"));
const Philosophy = lazy(() => import("@/components/Philosophy"));
const HundredChanges = lazy(() => import("@/components/HundredChanges"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const CliqSalesForm = lazy(() => import("@/components/CliqSalesForm"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
      <HeroSection />
      <Suspense fallback={null}>
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
      </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
