import { Zap } from 'lucide-react';

export default function AIPipeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="bg-neutral-900/50 rounded-2xl p-12 border border-neutral-800">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-neutral-800 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-neutral-300" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                AI-driven utvecklingspipeline
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Vi använder en intern AI-pipeline som automatiskt skapar prototyper, appstrukturer och betalflöden.
                Det gör att vi kan bygga AI-lösningar snabbare och mer kostnadseffektivt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
