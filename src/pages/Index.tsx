import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/audit/Hero";
import ProblemSection from "@/components/audit/ProblemSection";
import ForWhomSection from "@/components/audit/ForWhomSection";
import AuditScopeSection from "@/components/audit/AuditScopeSection";
import MethodologySection from "@/components/audit/MethodologySection";
import PhaseDetailSection from "@/components/audit/PhaseDetailSection";
import DailyRoutineSection from "@/components/audit/DailyRoutineSection";
import OutputSection from "@/components/audit/OutputSection";
import WhyMercatoresSection from "@/components/audit/WhyMercatoresSection";
import DiagnosticForm from "@/components/audit/DiagnosticForm";
import { initScrollDepthTracking } from "@/lib/analytics";

const Index = () => {
  useEffect(() => initScrollDepthTracking(), []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ForWhomSection />
        <AuditScopeSection />
        <MethodologySection />
        <PhaseDetailSection />
        <DailyRoutineSection />
        <OutputSection />
        <WhyMercatoresSection />
        <DiagnosticForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
