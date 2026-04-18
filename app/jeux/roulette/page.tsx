import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import FAQ from "../../components/FAQ";
import Newsletter from "../../components/Newsletter";

export const metadata: Metadata = {
  title: "Roulette en Ligne : Guide Complet, Types de Paris & Stratégies",
  description:
    "Tout savoir sur la roulette en ligne : règles, types de paris, différences européenne/américaine, stratégies de mise et conseils pour jouer de manière éclairée.",
};

const faqItems = [
  {
    question: "Quelle est la différence entre la roulette européenne et américaine ?",
    answer:
      "La roulette européenne possède 37 cases (numéros 1-36 + un zéro), offrant un avantage maison de 2,7%. La roulette américaine comporte 38 cases (numéros 1-36 + zéro + double zéro), avec un avantage maison de 5,26%. La version européenne est donc mathématiquement plus avantageuse pour le joueur.",
  },
  {
    question: "Existe-t-il une stratégie gagnante à la roulette ?",
    answer:
      "Non, aucune stratégie ne peut surmonter l'avantage mathématique du casino à la roulette. Les systèmes de mise comme la Martingale, Fibonacci ou D'Alembert peuvent gérer votre bankroll, mais ils ne modifient pas les probabilités fondamentales. Chaque tour est indépendant et le résultat est entièrement aléatoire.",
  },
  {
    question: "Quel est le meilleur pari à la roulette ?",
    answer:
      "Les paris extérieurs (rouge/noir, pair/impair, 1-18/19-36) offrent les meilleures chances de gain avec une probabilité de 48,6% en roulette européenne. Les paris intérieurs offrent des gains plus élevés mais avec des probabilités plus faibles. Le pari le plus favorable est sur une roulette européenne avec la règle 'La Partage' qui réduit l'avantage maison à 1,35% sur les paris pairs.",
  },
  {
    question: "La roulette en ligne est-elle truquée ?",
    answer:
      "Non, les roulettes en ligne des casinos licenciés par l'ANJ utilisent des générateurs de nombres aléatoires (RNG) certifiés par des laboratoires indépendants. Les résultats sont vérifiés et audités régulièrement. La roulette en direct utilise de vraies roues physiques filmées en temps réel, offrant une transparence totale.",
  },
  {
    question: "Qu'est-ce que la règle 'La Partage' à la roulette ?",
    answer:
      "La règle 'La Partage' s'applique à certaines tables de roulette européenne. Lorsque la bille atterrit sur le zéro, les joueurs ayant misé sur les chances simples (rouge/noir, pair/impair, etc.) récupèrent la moitié de leur mise au lieu de la perdre entièrement. Cette règle réduit l'avantage maison de 2,7% à 1,35%.",
  },
];

export default function RoulettePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Jeux", href: "/jeux/" },
              { label: "Roulette" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
            Roulette en Ligne : Guide Complet
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Types de paris, variantes, stratégies de mise et tout ce que vous devez savoir pour jouer à la roulette en ligne.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Table of Contents */}
        <nav className="bg-surface rounded-xl p-6 mb-10 border border-border">
          <h2 className="font-bold text-primary mb-3">Sommaire</h2>
          <ol className="space-y-1 text-sm text-accent list-decimal list-inside">
            <li><a href="#fonctionnement" className="hover:underline">Comment fonctionne la roulette</a></li>
            <li><a href="#variantes" className="hover:underline">Variantes : européenne, américaine, française</a></li>
            <li><a href="#paris" className="hover:underline">Types de paris et probabilités</a></li>
            <li><a href="#strategies" className="hover:underline">Stratégies de mise</a></li>
            <li><a href="#conseils" className="hover:underline">Conseils pour les joueurs</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="prose max-w-none mb-10">
          <p className="text-lg text-text leading-relaxed">
            La roulette est le symbole iconique du casino. Ce jeu élégant, inventé en France au XVIIIe siècle, continue de fasciner des millions de joueurs à travers le monde. Sa simplicité apparente — deviner où la bille va s&apos;arrêter — cache un système de paris riche et varié qui offre de multiples façons de jouer.
          </p>
          <p className="text-text-light leading-relaxed mt-4">
            Que vous soyez attiré par les paris prudents sur les chances simples ou par l&apos;excitation d&apos;un pari en plein sur un numéro unique, la roulette en ligne vous offre toutes les options d&apos;un casino physique avec le confort de jouer depuis chez vous. Ce guide vous explique tout ce que vous devez savoir pour profiter pleinement de ce jeu classique.
          </p>
        </section>

        {/* Fonctionnement */}
        <section id="fonctionnement" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Comment fonctionne la roulette</h2>
          <p className="text-text-light mb-4">
            La roulette se compose d&apos;une roue numérotée et d&apos;un tapis de jeu où les joueurs placent leurs paris. Le croupier lance une bille dans la roue en rotation ; lorsque la roue ralentit, la bille se pose dans une case numérotée. Si le numéro ou la catégorie de votre pari correspond au résultat, vous gagnez.
          </p>
          <p className="text-text-light mb-4">
            Les numéros alternent entre rouge et noir, à l&apos;exception du zéro (et du double zéro en version américaine) qui est en vert. Cette case verte est la source de l&apos;avantage du casino : sans elle, les paris sur rouge/noir seraient parfaitement équilibrés.
          </p>
        </section>

        {/* Variantes */}
        <section id="variantes" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Variantes de la roulette</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-border">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Caractéristique</th>
                  <th className="text-center px-4 py-3 font-semibold">Européenne</th>
                  <th className="text-center px-4 py-3 font-semibold">Américaine</th>
                  <th className="text-center px-4 py-3 font-semibold">Française</th>
                </tr>
              </thead>
              <tbody className="text-sm text-text">
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium">Cases</td>
                  <td className="px-4 py-3 text-center">37 (0-36)</td>
                  <td className="px-4 py-3 text-center">38 (0, 00, 1-36)</td>
                  <td className="px-4 py-3 text-center">37 (0-36)</td>
                </tr>
                <tr className="border-b border-border bg-surface">
                  <td className="px-4 py-3 font-medium">Avantage maison</td>
                  <td className="px-4 py-3 text-center text-success font-semibold">2,70%</td>
                  <td className="px-4 py-3 text-center text-danger font-semibold">5,26%</td>
                  <td className="px-4 py-3 text-center text-success font-semibold">1,35%*</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium">Règle La Partage</td>
                  <td className="px-4 py-3 text-center">Parfois</td>
                  <td className="px-4 py-3 text-center">Non</td>
                  <td className="px-4 py-3 text-center">Oui</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Recommandation</td>
                  <td className="px-4 py-3 text-center">Excellent choix</td>
                  <td className="px-4 py-3 text-center">À éviter</td>
                  <td className="px-4 py-3 text-center font-semibold text-accent">Meilleur choix</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light">
            * L&apos;avantage maison de 1,35% de la roulette française s&apos;applique aux paris sur les chances simples grâce à la règle La Partage.
          </p>
        </section>

        {/* Types de paris */}
        <section id="paris" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Types de paris et probabilités</h2>

          <h3 className="font-bold text-primary mb-3 mt-6">Paris intérieurs</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Type de pari</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-center px-4 py-3 font-semibold">Gain</th>
                  <th className="text-center px-4 py-3 font-semibold">Probabilité</th>
                </tr>
              </thead>
              <tbody className="text-text">
                {[
                  { name: "Plein (Straight)", desc: "Un seul numéro", gain: "35:1", prob: "2,7%" },
                  { name: "Cheval (Split)", desc: "Deux numéros adjacents", gain: "17:1", prob: "5,4%" },
                  { name: "Transversale (Street)", desc: "Trois numéros en ligne", gain: "11:1", prob: "8,1%" },
                  { name: "Carré (Corner)", desc: "Quatre numéros adjacents", gain: "8:1", prob: "10,8%" },
                  { name: "Sixain (Six Line)", desc: "Six numéros (2 lignes)", gain: "5:1", prob: "16,2%" },
                ].map((bet) => (
                  <tr key={bet.name} className="border-b border-border">
                    <td className="px-4 py-3 font-medium">{bet.name}</td>
                    <td className="px-4 py-3 text-text-light">{bet.desc}</td>
                    <td className="px-4 py-3 text-center font-semibold text-accent">{bet.gain}</td>
                    <td className="px-4 py-3 text-center">{bet.prob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-primary mb-3 mt-6">Paris extérieurs</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Type de pari</th>
                  <th className="text-left px-4 py-3 font-semibold">Description</th>
                  <th className="text-center px-4 py-3 font-semibold">Gain</th>
                  <th className="text-center px-4 py-3 font-semibold">Probabilité</th>
                </tr>
              </thead>
              <tbody className="text-text">
                {[
                  { name: "Rouge / Noir", desc: "Couleur du numéro", gain: "1:1", prob: "48,6%" },
                  { name: "Pair / Impair", desc: "Numéro pair ou impair", gain: "1:1", prob: "48,6%" },
                  { name: "Manque / Passe", desc: "1-18 ou 19-36", gain: "1:1", prob: "48,6%" },
                  { name: "Douzaine", desc: "1-12, 13-24, ou 25-36", gain: "2:1", prob: "32,4%" },
                  { name: "Colonne", desc: "Une des 3 colonnes verticales", gain: "2:1", prob: "32,4%" },
                ].map((bet) => (
                  <tr key={bet.name} className="border-b border-border">
                    <td className="px-4 py-3 font-medium">{bet.name}</td>
                    <td className="px-4 py-3 text-text-light">{bet.desc}</td>
                    <td className="px-4 py-3 text-center font-semibold text-accent">{bet.gain}</td>
                    <td className="px-4 py-3 text-center">{bet.prob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stratégies */}
        <section id="strategies" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Stratégies de mise</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-sm text-amber-900">
            <strong>Important :</strong> Aucune stratégie de mise ne peut surmonter l&apos;avantage mathématique du casino. Les systèmes suivants sont présentés à titre informatif. Ils permettent de structurer vos mises mais ne garantissent aucun profit.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Martingale",
                desc: "Doubler la mise après chaque perte, revenir à la mise de base après un gain. Simple mais risquée : une série de pertes peut atteindre les limites de la table ou de votre budget.",
                risk: "Élevé",
              },
              {
                name: "D'Alembert",
                desc: "Augmenter d'une unité après une perte, diminuer d'une unité après un gain. Plus progressive que la Martingale, avec des variations de mise moins brutales.",
                risk: "Modéré",
              },
              {
                name: "Fibonacci",
                desc: "Suivre la séquence de Fibonacci (1, 1, 2, 3, 5, 8...) pour les mises. Reculer de deux positions après un gain. Progression moins agressive que la Martingale.",
                risk: "Modéré",
              },
              {
                name: "Paroli (Martingale inversée)",
                desc: "Doubler la mise après chaque gain, revenir à la mise de base après une perte. Limiter à 3 doublement consécutifs. Risque limité avec potentiel de gains rapides.",
                risk: "Faible",
              },
            ].map((strat) => (
              <div key={strat.name} className="bg-white rounded-lg p-5 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-text">{strat.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    strat.risk === "Élevé" ? "bg-red-100 text-red-700" :
                    strat.risk === "Modéré" ? "bg-yellow-100 text-yellow-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    Risque {strat.risk}
                  </span>
                </div>
                <p className="text-sm text-text-light">{strat.desc}</p>
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
                "Privilégiez toujours la roulette européenne ou française à la roulette américaine. L'avantage maison est presque deux fois moins élevé.",
                "Recherchez les tables avec la règle 'La Partage' ou 'En Prison' qui réduisent davantage l'avantage de la maison sur les chances simples.",
                "Fixez un budget strict avant de commencer et arrêtez de jouer une fois ce budget atteint, que vous soyez en gain ou en perte.",
                "Les résultats précédents n'influencent jamais les résultats futurs. Le rouge n'est pas 'dû' après 10 noirs consécutifs — c'est le biais du joueur.",
                "Commencez avec les paris extérieurs (chances simples) si vous êtes débutant. Ils offrent les meilleures probabilités et permettent de jouer plus longtemps.",
                "La roulette en direct offre l'avantage de la transparence : vous pouvez voir la roue physique et le croupier en temps réel.",
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
          <strong>Rappel :</strong> La roulette est un jeu de pur hasard. Aucune stratégie ne peut garantir des gains. Jouez pour le plaisir, définissez vos limites et ne misez jamais plus que ce que vous pouvez vous permettre de perdre. En cas de besoin, appelez le 09 74 75 13 13.
        </div>

        {/* FAQ */}
        <FAQ items={faqItems} title="Questions fréquentes sur la roulette" />
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
