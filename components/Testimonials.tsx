import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

export default function Testimonials() {
  const testimonials = [
    {
      author: {
        name: "Anders Lindström",
        handle: "VD, TechNord AB",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Implementeringen av AI-agenter reducerade vår hanteringstid med 65%. ROI på under 4 månader. Professionell leverans från start till mål."
    },
    {
      author: {
        name: "Maria Johansson",
        handle: "CTO, Nordic Logistics",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Processkartläggning och automation av våra arbetsflöden. Systemet hanterar nu 10,000+ dokument per dag utan manuell hantering."
    },
    {
      author: {
        name: "Erik Svensson",
        handle: "IT-Chef, Svenska Finansgruppen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Röstassistenten för kundsupport överträffade alla förväntningar. 24/7 tillgänglighet och 94% kundnöjdhet. Bästa investeringen på år."
    },
    {
      author: {
        name: "Sofia Bergman",
        handle: "Produktionschef, Innovex Manufacturing",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Computer vision-systemet identifierar produktionsdefekter med 99.8% noggrannhet. Reducerade våra kvalitetskostnader med 40%."
    },
    {
      author: {
        name: "Johan Andersson",
        handle: "Grundare, HealthTech Solutions",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "AI-driven schemaläggning och patienthantering. Missade möten ner med 87%, administrativ tid reducerad med 55%. Otroligt resultat."
    },
    {
      author: {
        name: "Lisa Karlsson",
        handle: "E-handelschef, Nordic Retail Group",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Chatboten hanterar 75% av alla kundförfrågningar. Supportkostnader ner 58%, samtidigt som kundnöjdheten ökade. Win-win."
    }
  ]

  return (
    <TestimonialsSection
      title="Förtroende från svenska företagsledare"
      description="Dokumenterade resultat från organisationer som implementerat AI-lösningar med mätbar affärsnytta"
      testimonials={testimonials}
    />
  )
}
