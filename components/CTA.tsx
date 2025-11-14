export default function CTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-black pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Kom igång med AI
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Boka ett kostnadsfritt samtal för att diskutera er organisations AI-potential
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900/50 rounded-xl p-8 md:p-12 border border-neutral-800 max-w-2xl mx-auto mb-16">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Namn"
                className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all"
              />
              <input
                type="email"
                placeholder="E-post"
                className="px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Företag"
              className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all"
            />
            <textarea
              placeholder="Beskriv er AI-utmaning eller projektidé"
              rows={4}
              className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-all resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-neutral-50 text-black rounded-lg font-semibold hover:bg-neutral-200 transition-all"
            >
              Skicka förfrågan
            </button>
          </form>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16 text-center">
          <div>
            <div className="text-2xl font-bold text-neutral-50 mb-2">48h</div>
            <div className="text-sm text-neutral-400">Svarstid</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-50 mb-2">Kostnadsfritt</div>
            <div className="text-sm text-neutral-400">Första mötet</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-neutral-50 mb-2">Konfidentiellt</div>
            <div className="text-sm text-neutral-400">NDA vid behov</div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="text-neutral-500">
              © 2024 AI Solutions Sweden AB
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-500 hover:text-neutral-400 transition-colors">Integritet</a>
              <a href="#" className="text-neutral-500 hover:text-neutral-400 transition-colors">Villkor</a>
              <a href="#" className="text-neutral-500 hover:text-neutral-400 transition-colors">info@aisolutions.se</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
