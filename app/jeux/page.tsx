import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Jeux de Casino en Ligne : Guides & Stratégies",
  description:
    "Découvrez nos guides complets sur les jeux de casino en ligne : machines à sous, blackjack, roulette et casino en direct. Stratégies, règles et conseils d'experts.",
};

const gameCategories = [
  {
    title: "Machines à Sous",
    slug: "machines-a-sous",
    icon: "🎰",
    description:
      "Explorez le monde des machines à sous en ligne : types de slots, RTP, volatilité, fonctionnalités bonus et stratégies pour maximiser vos sessions de jeu.",
    highlights: ["RTP et volatilité", "Tours gratuits", "Jackpots progressifs"],
  },
  {
    title: "Blackjack",
    slug: "blackjack",
    icon: "🃏",
    description:
      "Maîtrisez le blackjack en ligne grâce à notre guide complet : stratégie de base, comptage des cartes, variantes populaires et conseils pour réduire l'avantage de la maison.",
    highlights: ["Stratégie de base", "Variantes", "Tableau stratégique"],
  },
  {
    title: "Roulette",
    slug: "roulette",
    icon: "🎡",
    description:
      "Tout savoir sur la roulette en ligne : types de paris, différences entre roulette européenne et américaine, systèmes de mise et probabilités détaillées.",
    highlights: ["Européenne vs Américaine", "Types de paris", "Systèmes de mise"],
  },
  {
    title: "Casino en Direct",
    slug: "casino-en-direct",
    icon: "📹",
    description:
      "Vivez l'expérience du casino en direct depuis chez vous : croupiers en temps réel, jeux disponibles, meilleurs fournisseurs et conseils pour en profiter pleinement.",
    highlights: ["Croupiers en direct", "Providers", "Jeux disponibles"],
  },
];

const jeuxFAQ = [
  {
    question: "Quels sont les jeux de casino en ligne les plus populaires ?",
    answer:
      "Les jeux de casino en ligne les plus populaires en France sont les machines à sous (qui représentent plus de 70 % de l'offre), le blackjack, la roulette et les jeux de casino en direct. Chaque catégorie offre des centaines de variantes avec des règles et des thèmes différents pour satisfaire tous les profils de joueurs.",
  },
  {
    question: "Peut-on jouer gratuitement aux jeux de casino en ligne ?",
    answer:
      "Oui, la plupart des casinos en ligne proposent un mode démo (ou mode fun) qui permet de jouer gratuitement sans risquer d'argent réel. C'est une excellente façon de découvrir les règles d'un jeu, de tester des stratégies ou simplement de s'amuser. Seuls les jeux avec croupiers en direct ne sont généralement pas disponibles en mode gratuit.",
  },
  {
    question: "Les jeux de casino en ligne sont-ils truqués ?",
    answer:
      "Non, les jeux de casino en ligne proposés par des opérateurs licenciés utilisent des générateurs de nombres aléatoires (RNG) certifiés par des organismes indépendants comme eCOGRA, iTech Labs ou GLI. Ces audits garantissent que les résultats sont totalement aléatoires et équitables. Jouez toujours sur des plateformes disposant d'une licence valide.",
  },
  {
    question: "Quel jeu de casino offre les meilleures chances de gagner ?",
    answer:
      "Le blackjack est généralement considéré comme le jeu de casino avec le plus faible avantage de la maison (environ 0,5 % avec une stratégie optimale). La roulette européenne offre également de bonnes probabilités avec un avantage maison de 2,7 %. Les machines à sous varient considérablement, avec des taux de redistribution (RTP) allant de 90 % à plus de 98 %.",
  },
  {
    question: "Comment choisir le bon jeu de casino en ligne ?",
    answer:
      "Le choix dépend de vos préférences : si vous aimez l'action rapide et les gros gains potentiels, optez pour les machines à sous à forte volatilité. Si vous préférez la stratégie, le blackjack est idéal. Pour une expérience sociale et immersive, le casino en direct est recommandé. Commencez toujours en mode démo pour trouver le jeu qui vous convient.",
  },
];

export default function JeuxPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Jeux de Casino" }]} />
      </div>

      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Jeux de Casino en Ligne
            <br />
            <span className="text-gold-light">Guides & Stratégies</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez nos guides complets pour maîtriser chaque jeu de casino en ligne.
            Règles, stratégies et conseils d&apos;experts pour jouer de manière éclairée.
          </p>
        </div>
      </section>

      {/* Game Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          Explorez nos guides de jeux
        </h2>
        <p className="text-text-light mb-8 max-w-3xl">
          Que vous soyez débutant ou joueur expérimenté, nos guides détaillés vous fournissent
          toutes les informations nécessaires pour comprendre les règles, affiner vos stratégies
          et profiter pleinement de chaque session.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gameCategories.map((game) => (
            <Link
              key={game.slug}
              href={`/jeux/${game.slug}/`}
              className="card-hover bg-white rounded-xl border border-border p-6 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl shrink-0">{game.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-text-light mb-3">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-accent font-medium text-sm group-hover:underline">
                  Lire le guide complet →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Informational Section */}
      <section className="bg-surface py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Comprendre les jeux de casino en ligne
          </h2>
          <div className="prose max-w-none text-text-light space-y-4">
            <p>
              Les jeux de casino en ligne offrent une expérience de divertissement accessible depuis
              n&apos;importe quel appareil connecté à internet. En France, les plateformes licenciées par
              l&apos;Autorité Nationale des Jeux (ANJ) proposent un catalogue varié de jeux, allant des
              machines à sous aux tables de jeu en direct avec de vrais croupiers.
            </p>
            <p>
              Chaque catégorie de jeu possède ses propres caractéristiques en termes de règles, de
              probabilités et de stratégies. Les machines à sous reposent principalement sur le hasard,
              tandis que le blackjack et le poker permettent d&apos;influencer les résultats grâce à des
              décisions stratégiques. La roulette combine quant à elle hasard pur et choix de paris
              avec des probabilités variables.
            </p>
            <p>
              Nos guides sont conçus pour vous aider à comprendre les mécaniques de chaque jeu,
              à identifier les meilleures opportunités et à adopter une approche de jeu responsable.
              Nous expliquons les concepts essentiels comme le taux de redistribution (RTP),
              la volatilité, l&apos;avantage de la maison et les différentes stratégies éprouvées.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-lg border border-border p-5 text-center">
              <div className="text-3xl font-bold text-accent mb-1">4</div>
              <div className="text-sm text-text-light">Catégories de jeux</div>
            </div>
            <div className="bg-white rounded-lg border border-border p-5 text-center">
              <div className="text-3xl font-bold text-accent mb-1">98%+</div>
              <div className="text-sm text-text-light">Meilleurs RTP disponibles</div>
            </div>
            <div className="bg-white rounded-lg border border-border p-5 text-center">
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-text-light">Disponibilité en ligne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Conseils essentiels pour les joueurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Fixez un budget",
              text: "Définissez toujours un budget de jeu avant de commencer et respectez-le scrupuleusement. Ne jouez jamais avec de l'argent dont vous avez besoin pour vos dépenses quotidiennes.",
            },
            {
              title: "Apprenez les règles",
              text: "Prenez le temps de comprendre les règles et les probabilités de chaque jeu avant de miser de l'argent réel. Utilisez le mode démo pour vous entraîner sans risque.",
            },
            {
              title: "Choisissez des jeux à bon RTP",
              text: "Privilégiez les jeux avec un taux de redistribution (RTP) élevé. Au blackjack, une stratégie optimale peut réduire l'avantage maison à moins de 0,5 %.",
            },
            {
              title: "Jouez responsablement",
              text: "Le jeu doit rester un divertissement. Si vous ressentez une perte de contrôle, faites une pause et contactez le 09 74 75 13 13 pour obtenir de l'aide.",
            },
          ].map((tip) => (
            <div key={tip.title} className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-text mb-2">{tip.title}</h3>
              <p className="text-sm text-text-light">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4">
        <FAQ items={jeuxFAQ} title="Questions fréquentes sur les jeux de casino" />
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
            mainEntity: jeuxFAQ.map((item) => ({
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
