"use client"

import Image from 'next/image';

export default function AppShowcase() {
  const apps = [
    { id: 1, name: "AI och e-handel", image: "/apps/AI och e-handel ikoner.png" },
    { id: 2, name: "App 10 sep", image: "/apps/ChatGPT Image 10 sep. 2025 13_11_19.png" },
    { id: 3, name: "App 11 okt", image: "/apps/ChatGPT Image 11 okt. 2025 13_57_49.png" },
    { id: 4, name: "App 12 aug", image: "/apps/ChatGPT Image 12 aug. 2025 13_30_22.png" },
    { id: 5, name: "App 13 juli", image: "/apps/ChatGPT Image 13 juli 2025 15_42_19.png" },
    { id: 6, name: "App 18 okt", image: "/apps/ChatGPT Image 18 okt. 2025 15_43_00.png" },
    { id: 7, name: "App 18 sep", image: "/apps/ChatGPT Image 18 sep. 2025 14_38_23.png" },
    { id: 8, name: "App 2 juli", image: "/apps/ChatGPT Image 2 juli 2025 18_05_43.png" },
    { id: 9, name: "App 20 sep", image: "/apps/ChatGPT Image 20 sep. 2025 18_02_01.png" },
    { id: 10, name: "App 21 apr", image: "/apps/ChatGPT Image 21 apr. 2025 19_36_37.png" },
    { id: 11, name: "App 26 juni", image: "/apps/ChatGPT Image 26 juni 2025 18_50_10.png" },
    { id: 12, name: "App 28 juni", image: "/apps/ChatGPT Image 28 juni 2025 20_28_10.png" },
    { id: 13, name: "App 30 juni", image: "/apps/ChatGPT Image 30 juni 2025 16_40_39.png" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedApps = [...apps, ...apps];

  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Våra egna AI applikationer
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto">
            Publicerade appar i App Store. AI lösningar vi utvecklat och lanserat själva för att visa vad som är möjligt
          </p>
        </div>

        {/* Scrolling App Icons */}
        <div className="relative py-12">
          {/* Scrolling container */}
          <div className="overflow-x-hidden">
            <div className="flex gap-6 animate-scroll py-4">
              {duplicatedApps.map((app, index) => (
                <div
                  key={`${app.id}-${index}`}
                  className="flex-shrink-0 w-24 h-24 relative group"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-900/50 border border-neutral-800 transition-all duration-300 group-hover:scale-110 group-hover:border-neutral-700 group-hover:shadow-xl">
                    <Image
                      src={app.image}
                      alt={app.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
