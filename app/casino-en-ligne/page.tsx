import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import CasinoCard from "../components/CasinoCard";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import { casinos } from "../data/casinos";

export const metadata: Metadata = {
  title: "Meilleurs Casinos en Ligne en France 2025 — Comparatif & Avis",
  description:
    "Comparatif des meilleurs casinos en ligne francais en 2025. Avis d'experts, bonus de bienvenue, jeux, methodes de paiement et licences ANJ. Guide complet pour bien choisir.",
};

const casinoFAQ = [
  {
    question: "Quels sont les meilleurs casinos en ligne en France en 2025 ?",
    answer:
      "Les meilleurs casinos en ligne en France en 2025 sont ceux qui detiennent une licence ANJ, proposent un large catalogue de jeux, offrent des bonus avec des conditions de mise raisonnables et assurent des retraits rapides. Notre comparatif classe les plateformes selon ces criteres objectifs pour vous aider a faire le meilleur choix.",
  },
  {
    question: "Comment savoir si un casino en ligne est fiable ?",
    answer:
      "Un casino en ligne fiable doit obligatoirement detenir une licence de l'Autorite Nationale des Jeux (ANJ) pour operer legalement en France. Verifiez egalement la presence d'un chiffrement SSL, les certifications d'equite des jeux (eCOGRA, iTech Labs), les avis des joueurs et la transparence des conditions de bonus.",
  },
  {
    question: "Quel est le depot minimum pour jouer dans un casino en ligne ?",
    answer:
      "Le depot minimum varie selon les casinos en ligne, mais il se situe generalement entre 10EUR et 20EUR. Certaines plateformes acceptent des depots a partir de 5EUR. Nous vous conseillons de commencer avec un petit budget pour vous familiariser avec la plateforme avant d'augmenter vos mises.",
  },
  {
    question: "Les gains au casino en ligne sont-ils imposables en France ?",
    answer:
      "En France, les gains occasionnels au casino en ligne ne sont pas soumis a l'impot sur le revenu. Toutefois, si le jeu constitue votre activite principale ou si les gains sont reguliers et significatifs, ils peuvent etre consideres comme des revenus imposables. Consultez un conseiller fiscal en cas de doute.",
  },
  {
    question: "Peut-on jouer au casino en ligne sur mobile ?",
    answer:
      "Oui, la grande majorite des casinos en ligne francais sont entierement optimises pour le jeu sur mobile. Certains proposent des applications dediees pour iOS et Android, tandis que d'autres offrent une version mobile responsive accessible directement depuis le navigateur de votre smartphone ou tablette.",
  },
  {
    question: "Quelles sont les methodes de paiement acceptees ?",
    answer:
      "Les casinos en ligne francais acceptent generalement les cartes bancaires (Visa, Mastercard), les portefeuilles electroniques (Skrill, Neteller, PayPal), les virements bancaires et parfois les cryptomonnaies. Les delais de retrait varient de quelques heures (portefeuilles electroniques) a 5 jours ouvrables (virements).",
  },
  {
    question: "Comment fonctionnent les conditions de mise des bonus ?",
    answer:
      "Les conditions de mise (ou wagering) indiquent combien de fois vous devez jouer le montant du bonus avant de pouvoir retirer vos gains. Par exemple, un bonus de 100EUR avec des conditions x30 signifie que vous devez miser 3000EUR au total. Les machines a sous comptent generalement a 100%, tandis que les jeux de table comptent a 10%.",
  },
];

export default function CasinoEnLignePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Casinos en ligne" }]} />
      </div>

      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Meilleurs Casinos en Ligne en France
            <br />
            <span className="text-gold-light">Comparatif 2025</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Notre equipe d&apos;experts a teste et analyse les casinos en ligne les plus populaires
            pour vous proposer un classement objectif base sur la securite, les bonus, les jeux et
            la qualite du service client.
          </p>
        </div>
      </section>

      {/* Casino Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Top casinos en ligne 2025
        </h2>
        <p className="text-text-light mb-8">
          Tous les casinos presentes sont licencies par l&apos;ANJ et testes par notre equipe.
        </p>
        <div className="space-y-4">
          {casinos.map((casino, i) => (
            <div key={casino.slug} className="relative">
              {i < 3 && (
                <span className="absolute -top-3 left-4 z-10 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                  #{i + 1} du classement
                </span>
              )}
              <CasinoCard casino={casino} />
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparatif" className="bg-surface py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Tableau comparatif des casinos
          </h2>
          <p className="text-text-light mb-8">
            Comparez rapidement les caracteristiques cles de chaque casino en un coup d&apos;oeil.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-border text-sm">
              <thead>
                <tr className="border-b border-border bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Casino</th>
                  <th className="text-left px-4 py-3 font-semibold">Bonus</th>
                  <th className="text-center px-4 py-3 font-semibold">Note</th>
                  <th className="text-center px-4 py-3 font-semibold rounded-tr-xl">Licence</th>
                </tr>
              </thead>
              <tbody>
                {casinos.map((casino, i) => (
                  <tr
                    key={casino.slug}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
                  >
                    <td className="px-4 py-3 font-semibold text-primary">{casino.name}</td>
                    <td className="px-4 py-3 text-gold font-medium">{casino.bonus}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1">
                        <svg className="w-4 h-4 star-filled" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {casino.rating}/5
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-success/10 text-success text-xs font-semibold px-2 py-1 rounded-full">
                        {casino.license}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Comment choisir le meilleur casino en ligne en France ?
          </h2>

          <p className="text-text-light leading-relaxed mb-4">
            Le marche des casinos en ligne en France a considerablement evolue depuis la regulation
            mise en place par l&apos;Autorite Nationale des Jeux (ANJ). Aujourd&apos;hui, les joueurs
            francais ont acces a des plateformes securisees, regulees et proposant une experience de
            jeu de qualite. Cependant, face a la multitude d&apos;options disponibles, il peut etre
            difficile de faire le bon choix. Ce guide vous accompagne dans votre selection en detaillant
            les criteres essentiels a prendre en compte.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">
            La licence ANJ : votre premiere garantie de securite
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            La licence delivree par l&apos;Autorite Nationale des Jeux est le critere fondamental pour
            identifier un casino en ligne fiable en France. Cette licence garantit que l&apos;operateur
            respecte un ensemble de normes strictes en matiere de protection des joueurs, d&apos;equite
            des jeux et de securite des transactions financieres. Un casino non licencie par l&apos;ANJ
            opere illegalement sur le territoire francais et n&apos;offre aucune garantie quant a la
            securite de vos fonds. Tous les casinos presentes dans notre comparatif detiennent cette
            licence, vous assurant un cadre de jeu reglemente et transparent.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">
            Les bonus de bienvenue : comprendre les offres
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            Les bonus de bienvenue constituent souvent le premier element que les joueurs comparent
            entre les casinos. Ces offres peuvent prendre differentes formes : bonus sur depot (le
            casino double ou triple votre premier versement), tours gratuits sur des machines a sous
            selectionnees, ou des combinaisons des deux. Toutefois, un bonus eleve n&apos;est pas
            necessairement synonyme de bonne affaire. Il est crucial d&apos;examiner les conditions de
            mise (wagering requirements) qui determinent combien de fois vous devez jouer le montant
            du bonus avant de pouvoir retirer vos gains. Des conditions de mise de x30 sont considerees
            comme raisonnables, tandis que des conditions superieures a x40 peuvent rendre le bonus
            difficile a convertir en gains reels.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">
            Le catalogue de jeux : variete et qualite
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            Un bon casino en ligne doit proposer un catalogue de jeux diversifie et alimenter par des
            editeurs de logiciels reconnus. Les meilleurs editeurs du marche incluent NetEnt, Microgaming,
            Evolution Gaming, Play&apos;n GO et Pragmatic Play. Un catalogue complet comprend generalement
            des machines a sous (classiques et video), des jeux de table (blackjack, roulette, baccarat,
            poker), un casino en direct avec des croupiers professionnels et des jeux a jackpot progressif.
            La presence d&apos;un casino live de qualite est devenue un critere important, car il offre
            une experience immersive comparable a celle d&apos;un casino physique, avec l&apos;avantage
            du confort de votre domicile.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">
            Les methodes de paiement et la rapidite des retraits
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            La diversite des methodes de paiement et la rapidite des retraits sont des indicateurs
            importants de la fiabilite d&apos;un casino en ligne. Les meilleures plateformes acceptent
            une variete de moyens de paiement : cartes bancaires (Visa, Mastercard), portefeuilles
            electroniques (Skrill, Neteller, PayPal), virements bancaires et parfois les cryptomonnaies.
            Concernant les retraits, les delais varient considerablement d&apos;un casino a l&apos;autre.
            Les portefeuilles electroniques offrent generalement les retraits les plus rapides (quelques
            heures a 24 heures), tandis que les virements bancaires peuvent prendre entre 3 et 5 jours
            ouvrables. Un casino de confiance traite les demandes de retrait rapidement et sans frais
            caches.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">
            Le service client : un critere souvent neglige
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            La qualite du service client est un aspect que de nombreux joueurs sous-estiment lors du
            choix d&apos;un casino en ligne. Pourtant, il est essentiel de pouvoir compter sur une
            assistance reactive et competente en cas de probleme. Les meilleurs casinos proposent un
            support multicanal comprenant un live chat disponible 24h/24 et 7j/7, une adresse e-mail
            et parfois un numero de telephone. La presence d&apos;un support francophone est un atout
            majeur pour les joueurs residant en France. N&apos;hesitez pas a tester le service client
            avant de vous inscrire en posant quelques questions via le chat en direct pour evaluer le
            temps de reponse et la qualite des reponses fournies.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">
            Le jeu responsable : une priorite absolue
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            Les jeux d&apos;argent doivent rester un divertissement et ne jamais devenir une source de
            stress financier. Les casinos en ligne licencies par l&apos;ANJ sont tenus de proposer des
            outils de jeu responsable : limites de depot, limites de mise, limites de perte,
            auto-exclusion temporaire ou definitive. Nous vous encourageons vivement a utiliser ces
            outils pour garder le controle de votre pratique de jeu. Si vous ressentez des difficultes
            liees au jeu, contactez Joueurs Info Service au 09 74 75 13 13 (appel non surtaxe) ou
            consultez le site joueurs-info-service.fr. Tous les casinos que nous recommandons integrent
            ces mesures de protection et s&apos;engagent a promouvoir un environnement de jeu sain et
            responsable.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4">
        <FAQ items={casinoFAQ} title="Questions frequentes sur les casinos en ligne" />
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: casinoFAQ.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
