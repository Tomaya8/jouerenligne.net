import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import FAQ from "../../components/FAQ";
import Newsletter from "../../components/Newsletter";

export const metadata: Metadata = {
  title: "Casino en Direct : Guide Complet du Live Casino en Ligne",
  description:
    "Découvrez le casino en direct : jeux avec croupiers réels en streaming HD, meilleurs fournisseurs, jeux disponibles et conseils pour une expérience optimale.",
};

const faqItems = [
  {
    question: "Comment fonctionne le casino en direct ?",
    answer:
      "Le casino en direct utilise la technologie de streaming vidéo HD pour connecter les joueurs en ligne à de vrais croupiers dans des studios professionnels. Vous placez vos paris via l'interface du jeu, et le croupier gère les cartes, la roue ou les dés en temps réel. Les résultats sont déterminés physiquement, pas par un logiciel, offrant une transparence totale.",
  },
  {
    question: "Le casino en direct est-il sûr ?",
    answer:
      "Oui, le casino en direct proposé par les opérateurs licenciés par l'ANJ est parfaitement sûr. Les studios sont surveillés en permanence, les jeux sont audités par des organismes indépendants, et les résultats sont enregistrés pour vérification. La technologie OCR (reconnaissance optique de caractères) enregistre automatiquement chaque carte et résultat.",
  },
  {
    question: "Quels jeux sont disponibles en casino en direct ?",
    answer:
      "Les principaux jeux disponibles en live casino sont : le blackjack, la roulette, le baccarat, le poker (Casino Hold'em, Three Card Poker), les game shows (Crazy Time, Dream Catcher, Monopoly Live), le craps en direct, et le sic bo. Evolution Gaming et Pragmatic Play Live sont les principaux fournisseurs.",
  },
  {
    question: "Quelle connexion internet faut-il pour le casino en direct ?",
    answer:
      "Une connexion internet stable d'au moins 5 Mbps est recommandée pour une expérience fluide en casino en direct. Le streaming HD nécessite une bande passante suffisante pour éviter les interruptions. Le Wi-Fi est généralement suffisant, mais une connexion filaire offre plus de stabilité. La plupart des jeux live sont aussi accessibles sur mobile en 4G/5G.",
  },
  {
    question: "Peut-on jouer gratuitement au casino en direct ?",
    answer:
      "La plupart des jeux de casino en direct ne sont pas disponibles en mode gratuit car ils impliquent de vrais croupiers en temps réel. Cependant, certains casinos permettent de regarder les tables en mode spectateur avant de jouer. Pour vous familiariser avec les règles, utilisez les versions RNG (logiciel) gratuites des mêmes jeux.",
  },
];

export default function CasinoEnDirectPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Jeux", href: "/jeux/" },
              { label: "Casino en direct" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
            Casino en Direct : Le Live Casino en Ligne
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Jouez avec de vrais croupiers en streaming HD. L&apos;expérience du casino physique depuis votre écran.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Table of Contents */}
        <nav className="bg-surface rounded-xl p-6 mb-10 border border-border">
          <h2 className="font-bold text-primary mb-3">Sommaire</h2>
          <ol className="space-y-1 text-sm text-accent list-decimal list-inside">
            <li><a href="#fonctionnement" className="hover:underline">Comment fonctionne le casino en direct</a></li>
            <li><a href="#jeux" className="hover:underline">Jeux disponibles en live</a></li>
            <li><a href="#fournisseurs" className="hover:underline">Meilleurs fournisseurs</a></li>
            <li><a href="#avantages" className="hover:underline">Avantages et inconvénients</a></li>
            <li><a href="#conseils" className="hover:underline">Conseils pour profiter du live casino</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="prose max-w-none mb-10">
          <p className="text-lg text-text leading-relaxed">
            Le casino en direct représente l&apos;évolution la plus significative de l&apos;industrie des jeux en ligne ces dernières années. En combinant la commodité du jeu en ligne avec l&apos;authenticité d&apos;un vrai casino, le live casino offre une expérience immersive unique : de vrais croupiers, de vraies cartes et de vraies roues, le tout diffusé en streaming haute définition directement sur votre écran.
          </p>
          <p className="text-text-light leading-relaxed mt-4">
            Grâce aux avancées technologiques en matière de streaming vidéo et de reconnaissance optique, les casinos en direct offrent aujourd&apos;hui une expérience aussi fiable et transparente qu&apos;un casino physique. Les joueurs peuvent interagir avec les croupiers via un chat en direct, observer chaque mouvement en temps réel et profiter d&apos;une ambiance authentique depuis le confort de leur domicile.
          </p>
        </section>

        {/* Fonctionnement */}
        <section id="fonctionnement" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Comment fonctionne le casino en direct</h2>
          <p className="text-text-light mb-6">
            Le casino en direct repose sur un système sophistiqué qui combine technologie de pointe et interaction humaine. Voici les éléments clés qui rendent cette expérience possible :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Studios professionnels",
                desc: "Les jeux sont filmés dans des studios spécialement conçus, équipés de multiples caméras HD, d'un éclairage professionnel et d'un mobilier de casino authentique. Certains studios recréent l'ambiance de casinos célèbres.",
              },
              {
                title: "Croupiers formés",
                desc: "Les croupiers en direct sont des professionnels formés qui gèrent le jeu, distribuent les cartes et interagissent avec les joueurs via le chat. Ils parlent souvent plusieurs langues, dont le français.",
              },
              {
                title: "Technologie OCR",
                desc: "La reconnaissance optique de caractères (OCR) capture automatiquement chaque carte distribuée et chaque résultat de la roue, les convertissant en données numériques affichées sur l'interface du joueur.",
              },
              {
                title: "Streaming multi-caméras",
                desc: "Plusieurs caméras filment sous différents angles (vue générale, gros plan sur les cartes, vue de la roue) permettant aux joueurs de suivre chaque détail du jeu en temps réel.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-5 border border-border">
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jeux disponibles */}
        <section id="jeux" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Jeux disponibles en live casino</h2>
          <div className="space-y-4">
            {[
              {
                name: "Blackjack en direct",
                desc: "Le jeu de table le plus populaire en live casino. Disponible en de nombreuses variantes : Classic, VIP, Infinite (nombre illimité de joueurs), Speed Blackjack. Les tables proposent des mises allant de 0,50€ à 10 000€+.",
                tables: "50-200 tables par casino",
              },
              {
                name: "Roulette en direct",
                desc: "Roulette européenne, française et immersive. Certaines tables utilisent une roue physique automatisée pour des tours plus rapides. Lightning Roulette ajoute des multiplicateurs aléatoires jusqu'à 500x.",
                tables: "30-100 tables",
              },
              {
                name: "Baccarat en direct",
                desc: "Très populaire auprès des high-rollers. Versions Speed Baccarat, Squeeze Baccarat (le croupier dévoile lentement les cartes) et No Commission Baccarat disponibles.",
                tables: "20-80 tables",
              },
              {
                name: "Game Shows",
                desc: "Une catégorie unique au live casino : Crazy Time, Dream Catcher, Monopoly Live, Deal or No Deal, Lightning Dice. Ces jeux combinent éléments de jeux télévisés et paris, avec des présentateurs dynamiques et des multiplicateurs spectaculaires.",
                tables: "10-20 jeux",
              },
              {
                name: "Poker en direct",
                desc: "Casino Hold'em, Three Card Poker, Caribbean Stud et Ultimate Texas Hold'em. Le joueur affronte le croupier, pas les autres joueurs. Des tables avec des enchères bonus et des jackpots progressifs sont disponibles.",
                tables: "10-30 tables",
              },
            ].map((game) => (
              <div key={game.name} className="bg-white rounded-lg p-5 border border-border flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-text mb-1">{game.name}</h3>
                  <p className="text-sm text-text-light">{game.desc}</p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs bg-accent/10 text-accent font-medium px-3 py-1 rounded-full">
                    {game.tables}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fournisseurs */}
        <section id="fournisseurs" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Meilleurs fournisseurs de casino en direct</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Evolution Gaming",
                desc: "Leader incontesté du live casino avec les studios les plus sophistiqués et le catalogue le plus large. Créateur des game shows (Crazy Time, Monopoly Live).",
                highlight: "N°1 mondial",
              },
              {
                name: "Pragmatic Play Live",
                desc: "En forte croissance avec des tables compétitives, notamment pour le blackjack et la roulette. Studios dédiés au marché francophone.",
                highlight: "Croissance rapide",
              },
              {
                name: "Playtech Live",
                desc: "Fournisseur historique proposant des tables exclusives et des solutions sur mesure. Spécialisé dans les tables VIP et les salons privés.",
                highlight: "Tables VIP",
              },
            ].map((provider) => (
              <div key={provider.name} className="bg-gradient-to-br from-surface to-white rounded-lg p-5 border border-border">
                <span className="text-xs bg-gold/20 text-gold font-semibold px-2 py-0.5 rounded-full">
                  {provider.highlight}
                </span>
                <h3 className="font-bold text-text mt-3 mb-2">{provider.name}</h3>
                <p className="text-sm text-text-light">{provider.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Avantages/Inconvénients */}
        <section id="avantages" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Avantages et inconvénients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-green-800 mb-3">Avantages</h3>
              <ul className="space-y-2">
                {[
                  "Expérience authentique avec de vrais croupiers",
                  "Transparence totale : tout est visible en temps réel",
                  "Interaction sociale via le chat en direct",
                  "Ambiance de casino sans se déplacer",
                  "Large choix de tables et limites de mises",
                  "Disponible 24h/24 et 7j/7",
                  "Jeux exclusifs (game shows) introuvables en casino physique",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-green-800">
                    <span className="text-green-600 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-800 mb-3">Inconvénients</h3>
              <ul className="space-y-2">
                {[
                  "Nécessite une bonne connexion internet",
                  "Rythme de jeu plus lent que les jeux RNG",
                  "Pas de mode de jeu gratuit en général",
                  "Mises minimales souvent plus élevées",
                  "Consommation de données mobile importante",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-red-800">
                    <span className="text-red-600 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Conseils */}
        <section id="conseils" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Conseils pour profiter du live casino</h2>
          <div className="bg-surface rounded-xl p-6 border border-border">
            <ul className="space-y-3">
              {[
                "Testez votre connexion internet avant de jouer. Une déconnexion pendant une main peut être frustrante, même si les paris sont protégés.",
                "Commencez par les tables à petites mises (0,50€ - 1€) pour vous familiariser avec l'interface et le rythme du jeu en direct.",
                "Utilisez le chat avec modération et respectez le croupier et les autres joueurs. Les comportements inappropriés peuvent entraîner une exclusion.",
                "Profitez du mode spectateur quand il est disponible pour observer le jeu avant de miser votre argent.",
                "Les tables francophones sont disponibles chez la plupart des opérateurs — recherchez les tables avec un croupier parlant français pour une meilleure expérience.",
                "Fixez des limites de temps et de budget. L'immersion du live casino peut faire oublier le temps qui passe.",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="bg-accent text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-text-light text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Responsible gaming */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-sm text-amber-900">
          <strong>Rappel :</strong> Le casino en direct utilise de vrais équipements, mais les résultats restent aléatoires. Jouez pour le divertissement et fixez des limites avant de commencer. En cas de difficulté, appelez le 09 74 75 13 13 (appel non surtaxé).
        </div>

        {/* FAQ */}
        <FAQ items={faqItems} title="Questions fréquentes sur le casino en direct" />
      </article>

      <Newsletter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  );
}
