import SplineHero from '@/components/SplineHero';
import Services from '@/components/Services';
import SystemIntegration from '@/components/SystemIntegration';
import Capabilities from '@/components/Capabilities';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import TechStack from '@/components/TechStack';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplineHero />
      <Services />
      <SystemIntegration />
      <Capabilities />
      <UseCases />
      <Testimonials />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}
