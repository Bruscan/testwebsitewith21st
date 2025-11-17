import { GlowingEffect } from './ui/glowing-effect';

export default function UseCases() {
  const useCases = [
    {
      industry: "E-handel",
      title: "Automatiserad Kundsupport",
      description: "Implementering av AI-driven support som hanterar 80% av kundärenden. Reducerade supportkostnader med 60% inom 6 månader.",
      results: ["60% lägre kostnader", "95% kundnöjdhet", "24/7 tillgänglighet"]
    },
    {
      industry: "Tillverkning",
      title: "AI-baserad Kvalitetskontroll",
      description: "Computer vision-system för realtidsidentifiering av produktionsdefekter. Reducerade felkostnader med 40%.",
      results: ["99.9% noggrannhet", "40% lägre felkostnader", "5x snabbare process"]
    },
    {
      industry: "Finans",
      title: "Intelligent Dokumenthantering",
      description: "Automatiserad läsning och kategorisering av dokument och fakturor. Processar tusentals dokument dagligen.",
      results: ["80% mindre manuellt arbete", "100% compliance", "Realtidsbearbetning"]
    },
    {
      industry: "Sjukvård",
      title: "Automatisk Schemaläggning",
      description: "Röstassistent för patientbokning och hantering av tidsomplaneringar. Reducerade administrativa uppgifter med 50%.",
      results: ["50% färre admin-uppgifter", "90% färre missade möten", "Förbättrad patientnöjdhet"]
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Kundcase
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Dokumenterade resultat från implementationer hos svenska företag
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative rounded-xl"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative bg-neutral-900/50 rounded-xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 h-full"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-neutral-800 rounded-md text-xs font-medium text-neutral-400 uppercase tracking-wide">
                  {useCase.industry}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-50 mb-3">
                {useCase.title}
              </h3>

              <p className="text-neutral-400 mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-medium text-neutral-500 mb-3 uppercase tracking-wide">Mätbara resultat</div>
                {useCase.results.map((result, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <span className="text-neutral-600 mr-3">→</span>
                    <span className="text-neutral-300">{result}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-6">
            Vill du diskutera hur vi kan hjälpa er organisation?
          </p>
          <button className="px-8 py-3 bg-neutral-50 text-black rounded-lg font-semibold hover:bg-neutral-200 transition-all">
            Boka ett möte
          </button>
        </div>
      </div>
    </section>
  );
}
