import SplineHero from '@/components/SplineHero';
import SystemIntegration from '@/components/SystemIntegration';
import AppShowcase from '@/components/AppShowcase';
import TrueFormSection from '@/components/TrueFormSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplineHero />
      <AppShowcase />
      <TrueFormSection />
      <SystemIntegration />
      <CTA />
      <Footer />
    </main>
  );
}
