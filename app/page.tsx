import SplineHero from '@/components/SplineHero';
import Services from '@/components/Services';
import Capabilities from '@/components/Capabilities';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import TechStack from '@/components/TechStack';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplineHero />
      <Services />
      <Capabilities />
      <UseCases />
      <Testimonials />
      <TechStack />
      <CTA />
    </main>
  );
}
