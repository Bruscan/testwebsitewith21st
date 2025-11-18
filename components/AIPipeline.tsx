import { Zap } from 'lucide-react';

export default function AIPipeline() {
  const steps = [
    {
      number: "1",
      title: "Snabb prototyp",
      description: "AI hjälper oss att ta fram första versionen av flöden och gränssnitt på timmar i stället för veckor."
    },
    {
      number: "2",
      title: "Stabil appstruktur",
      description: "Kod och arkitektur tas fram och justeras med hjälp av AI-verktyg så att lösningen går att bygga vidare på."
    },
    {
      number: "3",
      title: "Klar för betalning",
      description: "Vi kopplar på betalflöden och licenshantering tidigt så att lösningen kan börja användas direkt."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              AI-driven utvecklingspipeline
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Så bygger vi AI-lösningar snabbare – utan att tumma på kvaliteten.
          </p>
        </div>

        <div className="border border-white/5 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-black p-6 md:p-10">
          {/* Icon + Intro */}
          <div className="flex items-start gap-4 mb-10 max-w-5xl">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-neutral-300" />
              </div>
            </div>
            <div>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Vi använder en intern AI-driven utvecklingsprocess som hjälper oss att snabbt ta fram prototyper, appstrukturer och betalflöden. Det gör att vi kan leverera lösningar snabbare och mer kostnadseffektivt.
              </p>
            </div>
          </div>

          {/* Three Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white/5 rounded-xl p-6 border border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[15px] text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
