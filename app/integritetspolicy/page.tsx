import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Back button at top */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Tillbaka till startsidan</span>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Integritetspolicy
        </h1>
        <p className="text-neutral-400 mb-12">Senast uppdaterad: Januari 2025</p>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Vilka uppgifter samlar vi in?</h2>
            <p>
              När du kontaktar oss via vårt kontaktformulär samlar vi in följande personuppgifter:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Företagsnamn (frivilligt)</li>
              <li>Meddelande/förfrågan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Varför samlar vi in dessa uppgifter?</h2>
            <p>
              Vi samlar in dina personuppgifter för att kunna:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Svara på dina förfrågningar</li>
              <li>Ge dig information om våra tjänster</li>
              <li>Kommunicera med dig om eventuella projekt eller samarbeten</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">Rättslig grund:</strong> Ditt samtycke när du fyller i och skickar formuläret, samt vårt berättigade intresse att kunna svara på förfrågningar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Hur lagrar vi dina uppgifter?</h2>
            <p>
              Dina uppgifter skickas till oss via e-post och lagras i vår e-postklient. Vi använder tjänsten Resend för att skicka e-post.
              Inga uppgifter lagras i externa databaser eller CRM-system utan ditt godkännande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Hur länge sparar vi dina uppgifter?</h2>
            <p>
              Vi sparar dina personuppgifter så länge det är nödvändigt för att hantera din förfrågan.
              Om vi inte har någon pågående kommunikation raderas dina uppgifter inom 12 månader, eller tidigare om du begär det.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Delar vi dina uppgifter med tredje part?</h2>
            <p>
              Vi delar inte dina personuppgifter med tredje part för marknadsföring. Vi använder endast Resend som e-posttjänst för att
              leverera meddelanden till oss. Resend är GDPR-kompatibelt och behandlar data enligt EU:s dataskyddsförordning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Dina rättigheter enligt GDPR</h2>
            <p>Du har rätt att:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong className="text-white">Få tillgång till dina uppgifter</strong> - Du kan begära en kopia av de uppgifter vi har om dig</li>
              <li><strong className="text-white">Rätta uppgifter</strong> - Om uppgifterna är felaktiga kan du begära rättelse</li>
              <li><strong className="text-white">Radera uppgifter</strong> - Du kan begära att vi raderar dina personuppgifter</li>
              <li><strong className="text-white">Begränsa behandling</strong> - Du kan begära att vi begränsar hur vi använder dina uppgifter</li>
              <li><strong className="text-white">Invända mot behandling</strong> - Du kan invända mot vår behandling av dina uppgifter</li>
              <li><strong className="text-white">Dataportabilitet</strong> - Du kan begära att få ut dina uppgifter i ett maskinläsbart format</li>
            </ul>
            <p className="mt-4">
              För att utöva någon av dessa rättigheter, kontakta oss på: <a href="mailto:kontakt@bataksolutions.se" className="text-blue-400 hover:text-blue-300 underline">kontakt@bataksolutions.se</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
            <p>
              Vår webbplats använder för närvarande inga cookies för spårning eller analys. Om detta ändras i framtiden
              kommer vi att uppdatera denna policy och informera dig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Kontakta oss</h2>
            <p>
              Om du har frågor om denna integritetspolicy eller hur vi hanterar dina personuppgifter, kontakta oss:
            </p>
            <div className="mt-4 space-y-1">
              <p><strong className="text-white">Batak Solutions AB</strong></p>
              <p>Barkåkravägen 102D, Ängelholm</p>
              <p>E-post: <a href="mailto:kontakt@bataksolutions.se" className="text-blue-400 hover:text-blue-300 underline">kontakt@bataksolutions.se</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Ändringar av policyn</h2>
            <p>
              Vi kan komma att uppdatera denna integritetspolicy. Den senaste versionen finns alltid tillgänglig på denna sida.
              Större ändringar kommer att kommuniceras via vår webbplats.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
