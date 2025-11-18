import Image from 'next/image';

export default function TrueFormSection() {
  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full">
              <span className="text-sm text-neutral-400">Vår egen app</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                TrueForm AI
              </span>
            </h2>

            <p className="text-xl text-neutral-300">
              Din personliga AI träningsassistent
            </p>

            <div className="space-y-4 text-lg text-neutral-400">
              <p>
                TrueForm AI är en intelligent träningsapp som använder AI för att hjälpa dig nå dina träningsmål snabbare och smartare.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5"></div>
                  <p>
                    <span className="text-neutral-200 font-semibold">AI bildanalys</span> – Ta bilder av din progression och få AI driven utvärdering av din utveckling
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5"></div>
                  <p>
                    <span className="text-neutral-200 font-semibold">Smarta träningsscheman</span> – AI genererade träningsprogram anpassade efter dina mål och nivå
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5"></div>
                  <p>
                    <span className="text-neutral-200 font-semibold">Progressionsspårning</span> – Följ din utveckling med detaljerad statistik och insikter
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://apps.apple.com/se/app/trueform-ai-body-scanner/id6745799401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-50 text-black rounded-lg font-semibold hover:bg-neutral-200 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Ladda ner i App Store
              </a>
            </div>
          </div>

          {/* Right: App Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <Image
                src="/trueform-ai.png"
                alt="TrueForm AI App"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
