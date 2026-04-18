import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import FAQ from "../../components/FAQ";
import Newsletter from "../../components/Newsletter";

export const metadata: Metadata = {
  title: "Blackjack en Ligne : Règles, Stratégie de Base & Guide Complet",
  description:
    "Maîtrisez le blackjack en ligne avec notre guide complet : règles détaillées, tableau de stratégie de base, variantes populaires et conseils pour réduire l'avantage de la maison.",
};

const faqItems = [
  {
    question: "Quelle est la meilleure stratégie au blackjack ?",
    answer:
      "La stratégie de base est mathématiquement la meilleure approche au blackjack. Elle consiste à suivre un tableau qui indique la décision optimale (tirer, rester, doubler, séparer) pour chaque combinaison de votre main et de la carte visible du croupier. En suivant parfaitement la stratégie de base, vous pouvez réduire l'avantage de la maison à environ 0,5%.",
  },
  {
    question: "Quelle est la différence entre le blackjack européen et américain ?",
    answer:
      "La principale différence réside dans le moment où le croupier reçoit sa deuxième carte. Au blackjack américain, le croupier reçoit ses deux cartes immédiatement et vérifie s'il a un blackjack naturel. Au blackjack européen, le croupier ne reçoit sa deuxième carte qu'après que tous les joueurs ont joué. Cela affecte les décisions de doublement et de séparation.",
  },
  {
    question: "Peut-on compter les cartes au blackjack en ligne ?",
    answer:
      "Le comptage de cartes est théoriquement possible mais inefficace au blackjack en ligne. Les casinos en ligne utilisent des générateurs de nombres aléatoires (RNG) qui mélangent le sabot virtuel après chaque main, rendant le comptage inutile. Au live casino, les sabots sont mélangés fréquemment pour la même raison.",
  },
  {
    question: "Faut-il prendre l'assurance au blackjack ?",
    answer:
      "Non, l'assurance est statistiquement un mauvais pari. L'assurance paie 2:1 lorsque le croupier a un blackjack, mais la probabilité que la carte cachée soit un 10 n'est que d'environ 30,8%. Sur le long terme, l'assurance augmente l'avantage de la maison. La stratégie de base recommande de toujours refuser l'assurance.",
  },
  {
    question: "Quel est le RTP moyen du blackjack en ligne ?",
    answer:
      "Le blackjack offre l'un des meilleurs taux de retour au joueur de tous les jeux de casino. Avec la stratégie de base parfaite, le RTP du blackjack classique se situe entre 99,2% et 99,6% selon les règles spécifiques de la table. C'est bien supérieur à la plupart des machines à sous (95-97%).",
  },
];

export default function BlackjackPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Jeux", href: "/jeux/" },
              { label: "Blackjack" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
            Blackjack en Ligne : Guide Complet
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Règles, stratégie de base, variantes et conseils pour maximiser vos chances au blackjack en ligne.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Table of Contents */}
        <nav className="bg-surface rounded-xl p-6 mb-10 border border-border">
          <h2 className="font-bold text-primary mb-3">Sommaire</h2>
          <ol className="space-y-1 text-sm text-accent list-decimal list-inside">
            <li><a href="#regles" className="hover:underline">Règles du blackjack</a></li>
            <li><a href="#valeurs" className="hover:underline">Valeur des cartes</a></li>
            <li><a href="#deroulement" className="hover:underline">Déroulement d&apos;une partie</a></li>
            <li><a href="#strategie" className="hover:underline">Tableau de stratégie de base</a></li>
            <li><a href="#variantes" className="hover:underline">Variantes populaires</a></li>
            <li><a href="#conseils" className="hover:underline">Conseils pour les joueurs</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="prose max-w-none mb-10">
          <p className="text-lg text-text leading-relaxed">
            Le blackjack est le jeu de table le plus populaire au monde, et pour une bonne raison : c&apos;est l&apos;un des rares jeux de casino où les décisions du joueur influencent directement le résultat. Contrairement aux machines à sous ou à la roulette, le blackjack combine chance et stratégie, offrant aux joueurs informés la possibilité de réduire considérablement l&apos;avantage de la maison.
          </p>
          <p className="text-text-light leading-relaxed mt-4">
            Avec un taux de retour au joueur pouvant atteindre 99,5% lorsque la stratégie de base est appliquée correctement, le blackjack représente l&apos;une des meilleures opportunités pour les joueurs de casino en ligne. Ce guide complet vous donnera toutes les clés pour comprendre les règles, maîtriser la stratégie de base et choisir les meilleures variantes.
          </p>
        </section>

        {/* Règles */}
        <section id="regles" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Règles du blackjack</h2>
          <p className="text-text-light mb-4">
            L&apos;objectif du blackjack est simple : obtenir une main dont la valeur totale est plus proche de 21 que celle du croupier, sans dépasser 21. Si votre total dépasse 21, vous « sautez » (bust) et perdez votre mise, quelle que soit la main du croupier.
          </p>
          <p className="text-text-light mb-4">
            Le blackjack se joue contre le croupier, et non contre les autres joueurs à la table. Chaque joueur reçoit deux cartes face visible, tandis que le croupier reçoit une carte visible et une carte face cachée. Un « blackjack naturel » (un As et une carte valant 10) distribué en main initiale paie généralement 3:2.
          </p>
        </section>

        {/* Valeur des cartes */}
        <section id="valeurs" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Valeur des cartes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-border">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Carte</th>
                  <th className="text-left px-4 py-3 font-semibold">Valeur</th>
                </tr>
              </thead>
              <tbody className="text-text">
                <tr className="border-b border-border">
                  <td className="px-4 py-3">2 à 10</td>
                  <td className="px-4 py-3">Valeur faciale (2 = 2 points, 7 = 7 points, etc.)</td>
                </tr>
                <tr className="border-b border-border bg-surface">
                  <td className="px-4 py-3">Valet, Dame, Roi</td>
                  <td className="px-4 py-3">10 points chacun</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">As</td>
                  <td className="px-4 py-3">1 ou 11 points (au choix du joueur)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">
            L&apos;As est la carte la plus flexible : il vaut 11 tant que cela ne fait pas dépasser 21 (main « souple »), sinon il vaut 1 (main « rigide »). Par exemple, As + 6 = 17 souple, As + 6 + 8 = 15 rigide.
          </p>
        </section>

        {/* Déroulement */}
        <section id="deroulement" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Déroulement d&apos;une partie</h2>
          <div className="space-y-4">
            {[
              { step: "1. Mise", desc: "Le joueur place sa mise dans la zone prévue avant la distribution des cartes." },
              { step: "2. Distribution", desc: "Le croupier distribue deux cartes à chaque joueur (face visible) et deux cartes pour lui-même (une visible, une cachée)." },
              { step: "3. Décision du joueur", desc: "Le joueur choisit parmi les actions disponibles : Tirer (hit), Rester (stand), Doubler (double), Séparer (split), ou Abandonner (surrender) si disponible." },
              { step: "4. Tour du croupier", desc: "Le croupier révèle sa carte cachée et tire obligatoirement jusqu'à atteindre au minimum 17 (les règles varient selon les tables pour le 17 souple)." },
              { step: "5. Résultat", desc: "Les mains sont comparées. Le joueur le plus proche de 21 gagne. En cas d'égalité (push), la mise est rendue." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-white rounded-lg p-4 border border-border">
                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">
                  {item.step.split(".")[0]}
                </span>
                <div>
                  <p className="font-semibold text-text">{item.step.split(". ")[1]}</p>
                  <p className="text-sm text-text-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-surface rounded-lg p-5 border border-border">
            <h3 className="font-bold text-primary mb-3">Actions du joueur</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3 border border-border">
                <strong className="text-text">Tirer (Hit)</strong>
                <p className="text-text-light mt-1">Recevoir une carte supplémentaire pour augmenter la valeur de votre main.</p>
              </div>
              <div className="bg-white rounded p-3 border border-border">
                <strong className="text-text">Rester (Stand)</strong>
                <p className="text-text-light mt-1">Garder votre main actuelle et passer au joueur suivant ou au croupier.</p>
              </div>
              <div className="bg-white rounded p-3 border border-border">
                <strong className="text-text">Doubler (Double Down)</strong>
                <p className="text-text-light mt-1">Doubler votre mise et recevoir exactement une carte supplémentaire.</p>
              </div>
              <div className="bg-white rounded p-3 border border-border">
                <strong className="text-text">Séparer (Split)</strong>
                <p className="text-text-light mt-1">Si vos deux cartes sont identiques, les diviser en deux mains distinctes avec une mise égale sur chaque.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stratégie de base */}
        <section id="strategie" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Tableau de stratégie de base</h2>
          <p className="text-text-light mb-4">
            Le tableau de stratégie de base indique la décision mathématiquement optimale pour chaque situation. La colonne de gauche représente votre main, la rangée du haut la carte visible du croupier. En suivant ce tableau rigoureusement, vous minimisez l&apos;avantage de la maison.
          </p>

          {/* Hard totals */}
          <h3 className="font-bold text-primary mb-2 mt-6">Mains rigides (sans As comptant pour 11)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-xs md:text-sm bg-white rounded-lg overflow-hidden border border-border">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-2 py-2 font-semibold">Main</th>
                  <th className="px-2 py-2">2</th>
                  <th className="px-2 py-2">3</th>
                  <th className="px-2 py-2">4</th>
                  <th className="px-2 py-2">5</th>
                  <th className="px-2 py-2">6</th>
                  <th className="px-2 py-2">7</th>
                  <th className="px-2 py-2">8</th>
                  <th className="px-2 py-2">9</th>
                  <th className="px-2 py-2">10</th>
                  <th className="px-2 py-2">A</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  { hand: "17-20", vals: ["R", "R", "R", "R", "R", "R", "R", "R", "R", "R"] },
                  { hand: "16", vals: ["R", "R", "R", "R", "R", "T", "T", "T", "T", "T"] },
                  { hand: "15", vals: ["R", "R", "R", "R", "R", "T", "T", "T", "T", "T"] },
                  { hand: "13-14", vals: ["R", "R", "R", "R", "R", "T", "T", "T", "T", "T"] },
                  { hand: "12", vals: ["T", "T", "R", "R", "R", "T", "T", "T", "T", "T"] },
                  { hand: "11", vals: ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D"] },
                  { hand: "10", vals: ["D", "D", "D", "D", "D", "D", "D", "D", "T", "T"] },
                  { hand: "9", vals: ["T", "D", "D", "D", "D", "T", "T", "T", "T", "T"] },
                  { hand: "5-8", vals: ["T", "T", "T", "T", "T", "T", "T", "T", "T", "T"] },
                ].map((row) => (
                  <tr key={row.hand} className="border-b border-border">
                    <td className="px-2 py-2 font-semibold bg-surface text-text">{row.hand}</td>
                    {row.vals.map((v, i) => (
                      <td
                        key={i}
                        className={`px-2 py-2 font-medium ${
                          v === "R" ? "bg-green-100 text-green-800" :
                          v === "T" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 text-sm mb-6">
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 bg-green-100 border border-green-300 rounded inline-block"></span>
              <strong>R</strong> = Rester
            </span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 bg-red-100 border border-red-300 rounded inline-block"></span>
              <strong>T</strong> = Tirer
            </span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded inline-block"></span>
              <strong>D</strong> = Doubler (sinon Tirer)
            </span>
          </div>

          {/* Soft totals */}
          <h3 className="font-bold text-primary mb-2">Mains souples (avec un As comptant pour 11)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-xs md:text-sm bg-white rounded-lg overflow-hidden border border-border">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-2 py-2 font-semibold">Main</th>
                  <th className="px-2 py-2">2</th>
                  <th className="px-2 py-2">3</th>
                  <th className="px-2 py-2">4</th>
                  <th className="px-2 py-2">5</th>
                  <th className="px-2 py-2">6</th>
                  <th className="px-2 py-2">7</th>
                  <th className="px-2 py-2">8</th>
                  <th className="px-2 py-2">9</th>
                  <th className="px-2 py-2">10</th>
                  <th className="px-2 py-2">A</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  { hand: "A,9", vals: ["R", "R", "R", "R", "R", "R", "R", "R", "R", "R"] },
                  { hand: "A,8", vals: ["R", "R", "R", "R", "D", "R", "R", "R", "R", "R"] },
                  { hand: "A,7", vals: ["D", "D", "D", "D", "D", "R", "R", "T", "T", "T"] },
                  { hand: "A,6", vals: ["T", "D", "D", "D", "D", "T", "T", "T", "T", "T"] },
                  { hand: "A,4-5", vals: ["T", "T", "D", "D", "D", "T", "T", "T", "T", "T"] },
                  { hand: "A,2-3", vals: ["T", "T", "T", "D", "D", "T", "T", "T", "T", "T"] },
                ].map((row) => (
                  <tr key={row.hand} className="border-b border-border">
                    <td className="px-2 py-2 font-semibold bg-surface text-text">{row.hand}</td>
                    {row.vals.map((v, i) => (
                      <td
                        key={i}
                        className={`px-2 py-2 font-medium ${
                          v === "R" ? "bg-green-100 text-green-800" :
                          v === "T" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Variantes */}
        <section id="variantes" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Variantes populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Blackjack Classique",
                desc: "La version standard avec 6 à 8 jeux de cartes. Le croupier reste sur 17 souple. Blackjack naturel payé 3:2.",
                rtp: "99,5%",
              },
              {
                name: "Blackjack Européen",
                desc: "Le croupier ne reçoit sa deuxième carte qu'après les décisions des joueurs. Pas de vérification de blackjack anticipée.",
                rtp: "99,4%",
              },
              {
                name: "Blackjack Switch",
                desc: "Le joueur reçoit deux mains et peut échanger la deuxième carte de chaque main. Le blackjack naturel paie 1:1.",
                rtp: "99,9%",
              },
              {
                name: "Spanish 21",
                desc: "Joué sans les 10 (mais avec les figures). Règles libérales compensant l'absence des 10 : doublement sur n'importe quel nombre de cartes.",
                rtp: "99,2%",
              },
              {
                name: "Blackjack Surrender",
                desc: "Permet l'abandon (surrender) : récupérer la moitié de sa mise avant de jouer. Utile face à un 10 ou un As du croupier.",
                rtp: "99,6%",
              },
              {
                name: "Pontoon",
                desc: "Version britannique où les deux cartes du croupier sont face cachée. Les termes diffèrent : twist (tirer), stick (rester).",
                rtp: "99,4%",
              },
            ].map((v) => (
              <div key={v.name} className="bg-white rounded-lg p-5 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-text">{v.name}</h3>
                  <span className="text-xs bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded-full">
                    RTP {v.rtp}
                  </span>
                </div>
                <p className="text-sm text-text-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conseils */}
        <section id="conseils" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Conseils pour les joueurs</h2>
          <div className="bg-surface rounded-xl p-6 border border-border">
            <ul className="space-y-3">
              {[
                "Apprenez et appliquez la stratégie de base avant de jouer avec de l'argent réel. C'est la fondation de tout jeu de blackjack rentable.",
                "Choisissez des tables avec des règles favorables : blackjack payé 3:2 (évitez le 6:5), croupier reste sur 17 souple, doublement après séparation autorisé.",
                "Gérez votre bankroll : ne misez jamais plus de 5% de votre budget total sur une seule main. Fixez des limites de gains et de pertes.",
                "Ne prenez jamais l'assurance. Statistiquement, c'est toujours un mauvais pari, même lorsque le croupier montre un As.",
                "Séparez toujours les As et les 8. Ne séparez jamais les 10 ni les 5. Ce sont des règles fondamentales de la stratégie de base.",
                "Profitez du mode démo pour vous entraîner gratuitement avant de jouer en argent réel. La pratique renforce la mémoire du tableau de stratégie.",
                "Le blackjack en direct offre une expérience plus authentique et permet d'observer le mélange des cartes en temps réel.",
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

        {/* Responsible gaming reminder */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-sm text-amber-900">
          <strong>Rappel :</strong> Le blackjack reste un jeu de hasard malgré l&apos;élément de stratégie. L&apos;avantage mathématique est toujours en faveur du casino. Jouez pour le divertissement, fixez des limites et ne jouez jamais avec de l&apos;argent que vous ne pouvez pas vous permettre de perdre. En cas de difficulté, appelez le 09 74 75 13 13.
        </div>

        {/* FAQ */}
        <FAQ items={faqItems} title="Questions fréquentes sur le blackjack" />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Blackjack en Ligne : Règles, Stratégie de Base & Guide Complet",
            description: "Guide complet du blackjack en ligne : règles, stratégie de base, variantes et conseils.",
            inLanguage: "fr",
            publisher: { "@type": "Organization", name: "JouerEnLigne.net" },
          }),
        }}
      />
    </>
  );
}
