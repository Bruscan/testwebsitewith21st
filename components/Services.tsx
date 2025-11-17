import { GlowingEffect } from './ui/glowing-effect';

export default function Services() {
  const services = [
    {
      title: "AI-Agenter",
      description: "Autonoma system som hanterar kundservice, analyserar data och fattar beslut i realtid. Skalbar automation för moderna företag."
    },
    {
      title: "Röstassistenter",
      description: "Naturlig språkförståelse för telefonsupport och kundinteraktion. Reducera supportkostnader med intelligent automation."
    },
    {
      title: "Processautomation",
      description: "Automatisera repetitiva arbetsflöden och datahantering. Frigör tid för värdeskapande arbete genom intelligent automation."
    },
    {
      title: "Systemintegration",
      description: "Sömlös koppling mellan system, API:er och plattformar. Effektivisera dataflöden och eliminera manuella processer."
    },
    {
      title: "Data & Analytics",
      description: "AI-driven analys och prediktiv intelligens från stora datamängder. Datadrivna beslut för strategisk fördel."
    },
    {
      title: "Chatbotar",
      description: "Intelligent support för webb, mobil och sociala medier. 24/7 tillgänglighet med konsekvent användarupplevelse."
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Unified gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-neutral-950/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Våra Tjänster
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Professionell AI-implementation från strategi till drift. Vi levererar mätbara resultat genom beprövad teknologi och branschexpertis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative bg-neutral-900/50 p-8 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-neutral-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute top-4 right-4 w-2 h-2 bg-neutral-700 rounded-full group-hover:bg-neutral-500 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
