import { Phone, ShoppingCart, MessageSquare } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      icon: Phone,
      title: "AI-röstagent för restaurang",
      description: "Tar emot samtal, bokar bord, hanterar ändringar, svarar på frågor.",
      details: "Full integration med schema & API."
    },
    {
      icon: ShoppingCart,
      title: "E-handelsautomation",
      description: "Bots som uppdaterar produktdata, lager, priser och flöden automatiskt.",
      details: "Order → API → notifieringar → rapporter."
    },
    {
      icon: MessageSquare,
      title: "AI-kundserviceagent",
      description: "Automatiserar majoriteten av inkommande frågor i e-handel & tjänsteföretag.",
      details: "24/7 tillgänglighet med konsekvent kvalitet."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Vad vi redan har byggt
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900/50 rounded-xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-neutral-700 transition-colors mb-4">
                    <Icon className="w-7 h-7 text-neutral-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {caseItem.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    {caseItem.description}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {caseItem.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
