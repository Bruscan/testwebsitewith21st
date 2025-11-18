'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Navigation } from "@/components/Navigation";
import { useState, useEffect, useRef } from 'react';

export default function SplineHero() {
  const titleWords = 'AI & Automation'.split(' ');
  const subtitle = 'Intelligenta AI-lösningar för svenska företag.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return; // Prevent re-animation

    // Animate navigation first (immediately)
    if (!navVisible) {
      const timeout = setTimeout(() => {
        setNavVisible(true);
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => {
        setVisibleWords(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    } else if (!subtitleVisible) {
      const timeout = setTimeout(() => {
        setSubtitleVisible(true);
        hasAnimatedRef.current = true;
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, subtitleVisible, navVisible, titleWords.length]);

  return (
    <div className="w-full h-screen bg-black/[0.96] relative overflow-hidden">
      <Navigation
        logo={{ text: 'Batak Solutions' }}
        navigation={[
          { name: 'Hem', href: '#' },
          { name: 'Integration', href: '#integration' },
          { name: 'Kontakt', href: '#contact' },
        ]}
        loginText="Kontakta oss"
        loginHref="#contact"
        isDark={true}
        isVisible={navVisible}
        animationDelay="0s"
      />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-10">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Gradient overlay for better text visibility - extended fade to black */}
      <div className="absolute inset-0 z-[15] bg-gradient-to-b from-black/70 via-black/30 to-black/95 pointer-events-none"></div>

      {/* Bottom gradient to smoothly fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[16] bg-gradient-to-b from-transparent to-black/[0.96] pointer-events-none"></div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 pointer-events-none">
        <div className="text-center max-w-5xl">
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6">
              {titleWords.map((word, index) => (
                <div
                  key={index}
                  className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase ${
                    index < visibleWords ? 'fade-in' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    opacity: index < visibleWords ? undefined : 0
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={`text-lg md:text-2xl lg:text-3xl text-neutral-300 mb-12 max-w-3xl mx-auto ${
            subtitleVisible ? 'fade-in-subtitle' : ''
          }`}
          style={{ opacity: subtitleVisible ? undefined : 0 }}>
            {subtitle}
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            subtitleVisible ? 'fade-in-subtitle' : ''
          }`} style={{ animationDelay: '0.3s', opacity: subtitleVisible ? undefined : 0 }}>
            <a href="#contact" className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-all hover:scale-105 shadow-2xl pointer-events-auto">
              Boka gratis konsultation
            </a>
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/30 pointer-events-auto"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
            >
              Se våra lösningar →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
