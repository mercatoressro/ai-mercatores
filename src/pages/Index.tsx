import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import OrganicNetwork from "@/components/OrganicNetwork";

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
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global ambient organic network — edges only, fades at content center */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <OrganicNetwork opacity={0.08} fadeCenterX={0.5} fadeCenterY={0.5} />
      </div>

      <div className="relative z-[1]">
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
    </div>
  );
};

export default Index;
