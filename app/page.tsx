import SplineHero from '@/components/SplineHero';
import Services from '@/components/Services';
import Automation from '@/components/Automation';
import SystemIntegration from '@/components/SystemIntegration';
import Cases from '@/components/Cases';
import AppShowcase from '@/components/AppShowcase';
import TrueFormSection from '@/components/TrueFormSection';
import AIPipeline from '@/components/AIPipeline';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <SplineHero />

      {/* 2. Tjänster */}
      <Services />

      {/* 3. Vad vi faktiskt kan automatisera */}
      <Automation />

      {/* 4. Integrering med alla system */}
      <SystemIntegration />

      {/* 5. Case */}
      <Cases />

      {/* 6. Våra egna AI-applikationer */}
      <AppShowcase />
      <TrueFormSection />

      {/* 7. Intern AI-pipeline */}
      <AIPipeline />

      {/* 8. CTA */}
      <CTA />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
