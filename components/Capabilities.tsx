import { GlowingEffect } from './ui/glowing-effect';

export default function Capabilities() {
  const capabilities = [
    {
      category: "AI-utveckling",
      items: ["GPT & LLM Integration", "Custom AI-modeller", "RAG-system", "Fine-tuning"]
    },
    {
      category: "Automation",
      items: ["Workflow Automation", "RPA Implementation", "API Integration", "Data Pipeline"]
    },
    {
      category: "Konversations-AI",
      items: ["Voice AI", "Chatbotar", "Sentiment Analysis", "Multispråk"]
    },
    {
      category: "Enterprise AI",
      items: ["Computer Vision", "Prediktiv Analytics", "ML Operations", "AI-säkerhet"]
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Teknisk Expertis
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Heltäckande kompetens inom moderna AI-teknologier och implementationsmetodik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
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
              <div className="relative bg-neutral-900/30 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 h-full"
            >
              <h3 className="text-lg font-bold text-neutral-50 mb-4 pb-3 border-b border-neutral-800">
                {cap.category}
              </h3>
              <ul className="space-y-2.5">
                {cap.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-neutral-600 mr-2 mt-0.5">—</span>
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-6">
            Behöver er organisation en skräddarsydd lösning?
          </p>
          <button className="px-8 py-3 bg-neutral-50 text-black rounded-lg font-semibold hover:bg-neutral-200 transition-all">
            Kontakta oss
          </button>
        </div>
      </div>
    </section>
  );
}
