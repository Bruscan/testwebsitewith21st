import DatabaseWithRestApi from './ui/database-with-rest-api';
import { CheckCircle2 } from 'lucide-react';

export default function SystemIntegration() {
  return (
    <section id="integration" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              AI-integrering med alla system
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto">
            Oavsett om ni arbetar med moderna API:er, gamla interna system, hemmasnickrad kod eller specialbyggda plattformar – våra AI-lösningar kan integreras sömlöst. Vi automatiserar processer tvärs över alla tekniska miljöer.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bullet Points */}
          <div className="space-y-6">
            {[
              'API & webhook-integration',
              'SQL / NoSQL / filbaserade system',
              'Lokala servrar & molnplattformar',
              'Legacy-kod och gamla skript',
              'Interna verktyg & specialsystem'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-neutral-400 group-hover:text-neutral-200 transition-colors" />
                </div>
                <p className="text-lg text-neutral-300 group-hover:text-neutral-100 transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Animated Component */}
          <div className="flex justify-center lg:justify-end">
            <DatabaseWithRestApi
              badgeTexts={{
                first: 'API',
                second: 'Databaser',
                third: 'Legacy',
                fourth: 'Script'
              }}
              buttonTexts={{
                first: 'Integration',
                second: 'Automation'
              }}
              title="Smidig integration oavsett system"
              circleText="AI"
              lightColor="#00A6F5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
