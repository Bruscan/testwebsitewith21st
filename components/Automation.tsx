import { CheckCircle2 } from 'lucide-react';

export default function Automation() {
  const automationAreas = [
    "Kundservice",
    "Schema & personalhantering",
    "Dokument & fakturor",
    "Rapporter & analys",
    "CRM-flöden",
    "Telefonsamtal & bokningar",
    "Orderflöden & lagersynk",
    "Produktdata & prissättning",
    "Intern kommunikation",
    "Notiser / e-post / uppgifter"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Automation som skapar verklig effekt
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-4xl mx-auto">
            Exempel på områden där vi ofta bygger AI- och automationslösningar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto border border-white/5 rounded-2xl bg-white/0 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {automationAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-neutral-400 group-hover:text-neutral-200 transition-colors" />
                </div>
                <p className="text-base text-neutral-300 group-hover:text-neutral-100 transition-colors">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
