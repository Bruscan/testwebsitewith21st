import { Bot, Phone, Workflow, Boxes } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI-agenter & chattbotar",
      description: "Självständiga AI-agenter som hanterar kundservice, support och interna frågor. Kan kopplas till chatt, e-post, formulär eller interna verktyg och avlastar personalen dygnet runt."
    },
    {
      icon: Phone,
      title: "Röstassistenter för telefonsamtal",
      description: "AI-röstassistenter som svarar i telefon, bokar tider, tar beställningar och hanterar återkommande frågor. Integreras med era befintliga system för alltid uppdaterad information."
    },
    {
      icon: Workflow,
      title: "Process- och verksamhetsautomation",
      description: "Vi identifierar manuella moment och bygger automatiserade arbetsflöden för t.ex. order, dokument, rapporter, lagersaldo och schemaläggning. Färre fel, mer tid för kärnverksamheten."
    },
    {
      icon: Boxes,
      title: "Systemintegration & speciallösningar",
      description: "Vi kopplar AI-lösningar till ert befintliga ekosystem – API:er, databaser, äldre system och skräddarsydda verktyg – och bygger även helt kundunika AI-lösningar när det behövs."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Unified gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-neutral-950/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Vad vi erbjuder
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-4xl mx-auto">
            Här är våra vanligaste typer av lösningar. Alla projekt skräddarsys efter era behov – från mindre automationer till helt nya AI-system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900/50 rounded-xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                    <Icon className="w-6 h-6 text-neutral-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-neutral-500">
            Hittar du inte exakt det du tänker på? Berätta vad ni vill uppnå, så tar vi fram en AI-lösning som passar.
          </p>
        </div>
      </div>
    </section>
  );
}
