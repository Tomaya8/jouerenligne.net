import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import Newsletter from "../../components/Newsletter";
import FAQ from "../../components/FAQ";

export const metadata: Metadata = {
  title: "Machines à Sous en Ligne : Guide Complet, RTP & Stratégies",
  description:
    "Guide expert des machines à sous en ligne : fonctionnement, RTP, volatilité, types de slots, bonus et stratégies. Tout pour jouer aux slots en toute connaissance de cause.",
};

const slotsFAQ = [
  {
    question: "Qu'est-ce que le RTP d'une machine à sous ?",
    answer:
      "Le RTP (Return to Player) est le pourcentage théorique des mises que la machine à sous redistribue aux joueurs sur le long terme. Par exemple, un RTP de 96 % signifie que pour 100 € misés, la machine redistribue en moyenne 96 € et conserve 4 € comme avantage maison. Ce taux est calculé sur des millions de tours et ne garantit pas vos résultats sur une session individuelle.",
  },
  {
    question: "Quelle est la différence entre volatilité faible et élevée ?",
    answer:
      "La volatilité (ou variance) d'une machine à sous détermine la fréquence et la taille des gains. Une volatilité faible offre des gains fréquents mais de petite taille, idéale pour les budgets limités. Une volatilité élevée produit des gains rares mais potentiellement très importants, adaptée aux joueurs patients avec un budget conséquent. La volatilité moyenne offre un compromis entre les deux.",
  },
  {
    question: "Les machines à sous en ligne sont-elles truquées ?",
    answer:
      "Non, les machines à sous proposées par les casinos en ligne licenciés utilisent un générateur de nombres aléatoires (RNG) certifié par des laboratoires indépendants. Chaque tour est totalement aléatoire et indépendant des tours précédents. Les organismes comme eCOGRA, iTech Labs et GLI auditent régulièrement ces systèmes pour garantir l'équité des jeux.",
  },
  {
    question: "Peut-on gagner de l'argent aux machines à sous ?",
    answer:
      "Oui, il est possible de gagner de l'argent aux machines à sous, y compris des sommes très importantes grâce aux jackpots progressifs. Cependant, l'avantage mathématique est toujours en faveur du casino. Sur le long terme, la maison gagne toujours. Considérez le jeu comme un divertissement et non comme une source de revenus, et fixez toujours un budget strict.",
  },
  {
    question: "Quelles sont les meilleures machines à sous pour les débutants ?",
    answer:
      "Pour les débutants, nous recommandons de commencer par des machines à sous classiques à 3 rouleaux ou des vidéo slots à faible volatilité avec un RTP supérieur à 96 %. Des titres populaires comme Starburst (NetEnt), Book of Dead (Play'n GO) ou Gonzo's Quest (NetEnt) offrent des mécaniques simples et une bonne expérience d'apprentissage. Utilisez toujours le mode démo avant de jouer en argent réel.",
  },
];

export default function MachinesASousPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Jeux de Casino", href: "/jeux/" },
            { label: "Machines à Sous" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Machines à Sous en Ligne
            <br />
            <span className="text-gold-light">Guide Complet & Stratégies</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur les machines à sous en ligne : fonctionnement,
            RTP, volatilité, types de slots et conseils pour optimiser vos sessions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Qu&apos;est-ce qu&apos;une machine à sous en ligne ?
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Les machines à sous en ligne sont la transposition numérique des célèbres bandits manchots
              que l&apos;on trouve dans les casinos physiques. Elles représentent la catégorie de jeux
              la plus populaire dans les casinos en ligne, constituant plus de 70 % de l&apos;offre de la
              plupart des plateformes. Contrairement aux jeux de table comme le blackjack ou le poker,
              les machines à sous reposent entièrement sur le hasard, ce qui les rend accessibles à tous
              les profils de joueurs, du débutant au joueur expérimenté.
            </p>
            <p>
              Le principe est simple : vous placez une mise, vous lancez les rouleaux et vous espérez
              que les symboles s&apos;alignent sur une ou plusieurs lignes de paiement pour former des
              combinaisons gagnantes. Mais derrière cette simplicité apparente se cache une mécanique
              sophistiquée pilotée par des générateurs de nombres aléatoires (RNG) qui garantissent
              l&apos;équité et l&apos;imprévisibilité de chaque résultat.
            </p>
            <p>
              Les éditeurs de jeux comme NetEnt, Microgaming, Play&apos;n GO, Pragmatic Play et
              Yggdrasil rivalisent de créativité pour proposer des expériences toujours plus immersives,
              avec des graphismes de qualité cinématographique, des bandes sonores originales et des
              mécaniques de jeu innovantes qui renouvellent constamment l&apos;expérience.
            </p>
          </div>
        </section>

        {/* RTP Explanation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Comprendre le RTP (taux de redistribution)
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Le RTP, ou Return to Player (retour au joueur), est l&apos;indicateur le plus important
              pour évaluer une machine à sous. Exprimé en pourcentage, il représente la part théorique
              des mises que la machine redistribue aux joueurs sur le long terme. Un RTP de 96 % signifie
              que pour chaque 100 € misés en moyenne, 96 € sont redistribués et 4 € constituent
              l&apos;avantage de la maison.
            </p>
            <p>
              Il est essentiel de comprendre que le RTP est un calcul statistique basé sur des millions
              de tours. Sur une session individuelle, vos résultats peuvent varier considérablement
              par rapport à cette moyenne théorique. Vous pouvez tout à fait gagner bien plus que le
              RTP annoncé sur une session chanceuse, ou perdre davantage sur une session malchanceuse.
            </p>
          </div>
          <div className="bg-surface rounded-xl border border-border p-6 mt-4">
            <h3 className="font-bold text-text mb-3">Échelle de RTP : comment interpréter les chiffres</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-success shrink-0"></span>
                <span className="text-text"><strong>97 % et plus :</strong> Excellent RTP, jeux très généreux</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-accent shrink-0"></span>
                <span className="text-text"><strong>95 % - 96,99 % :</strong> Bon RTP, standard de l&apos;industrie</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-gold shrink-0"></span>
                <span className="text-text"><strong>93 % - 94,99 % :</strong> RTP moyen, à compenser par d&apos;autres atouts</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-danger shrink-0"></span>
                <span className="text-text"><strong>Moins de 93 % :</strong> RTP faible, à éviter sauf jackpots progressifs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Volatility */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">
            La volatilité : un concept clé
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              La volatilité, également appelée variance, est le second indicateur fondamental d&apos;une
              machine à sous. Elle mesure le rythme et l&apos;amplitude des gains. Comprendre la volatilité
              vous permet de choisir des jeux adaptés à votre style de jeu et à votre budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg border border-border p-5">
              <div className="text-success font-bold text-lg mb-2">Volatilité Faible</div>
              <p className="text-sm text-text-light mb-3">
                Gains fréquents mais de petite taille. Idéale pour les joueurs qui souhaitent
                prolonger leur session et gérer un budget limité. Les variations de solde sont modérées.
              </p>
              <p className="text-xs text-text-light">
                <strong>Budget recommandé :</strong> 50-100 fois la mise de base
              </p>
            </div>
            <div className="bg-white rounded-lg border border-border p-5">
              <div className="text-gold font-bold text-lg mb-2">Volatilité Moyenne</div>
              <p className="text-sm text-text-light mb-3">
                Équilibre entre fréquence et taille des gains. Un bon compromis pour la majorité
                des joueurs. Les périodes sèches sont modérées et les gains occasionnels compensent.
              </p>
              <p className="text-xs text-text-light">
                <strong>Budget recommandé :</strong> 100-200 fois la mise de base
              </p>
            </div>
            <div className="bg-white rounded-lg border border-border p-5">
              <div className="text-danger font-bold text-lg mb-2">Volatilité Élevée</div>
              <p className="text-sm text-text-light mb-3">
                Gains rares mais potentiellement très importants. Réservée aux joueurs patients
                avec un budget conséquent. Les périodes sans gain peuvent être longues.
              </p>
              <p className="text-xs text-text-light">
                <strong>Budget recommandé :</strong> 200-500 fois la mise de base
              </p>
            </div>
          </div>
        </section>

        {/* Types of Slots */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Les différents types de machines à sous
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              L&apos;univers des machines à sous en ligne est extrêmement diversifié. Voici les
              principales catégories que vous rencontrerez dans les casinos en ligne français :
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-text text-lg mb-2">Machines à sous classiques (3 rouleaux)</h3>
              <p className="text-sm text-text-light">
                Les slots classiques reprennent le format traditionnel des machines de casino avec
                3 rouleaux et un nombre limité de lignes de paiement (1 à 5). Les symboles typiques
                incluent les fruits, les barres et les 7. Elles offrent une expérience épurée et
                nostalgique, avec des règles simples et des gains réguliers. Parfaites pour les
                débutants ou les puristes.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-text text-lg mb-2">Vidéo slots (5 rouleaux et plus)</h3>
              <p className="text-sm text-text-light">
                Les vidéo slots modernes proposent 5 rouleaux ou davantage avec des dizaines, voire
                des milliers de lignes de paiement (systèmes Megaways). Elles intègrent des
                graphismes 3D, des animations cinématiques, des thèmes variés (mythologie, aventure,
                culture pop) et une multitude de fonctionnalités bonus : tours gratuits, wilds
                expansifs, multiplicateurs, mini-jeux interactifs et respins.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-text text-lg mb-2">Jackpots progressifs</h3>
              <p className="text-sm text-text-light">
                Les machines à jackpot progressif accumulent une fraction de chaque mise dans une
                cagnotte commune qui peut atteindre des millions d&apos;euros. Des titres comme Mega
                Moolah (Microgaming) et Mega Fortune (NetEnt) ont distribué des jackpots
                record dépassant les 20 millions d&apos;euros. Le RTP hors jackpot est généralement
                plus faible (88-94 %), mais le potentiel de gain est incomparable.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-text text-lg mb-2">Slots Megaways</h3>
              <p className="text-sm text-text-light">
                Développé par Big Time Gaming, le système Megaways propose un nombre variable de
                symboles sur chaque rouleau à chaque tour, créant jusqu&apos;à 117 649 façons de
                gagner. Cette mécanique innovante a été licenciée à de nombreux éditeurs et génère
                des jeux à très haute volatilité avec un potentiel de gains explosif.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-text text-lg mb-2">Slots à cascades (Cluster Pays)</h3>
              <p className="text-sm text-text-light">
                Les slots à cascades remplacent les lignes de paiement traditionnelles par un système
                de groupes. Les symboles gagnants disparaissent et sont remplacés par de nouveaux,
                permettant des enchaînements de gains en cascade sur un seul tour. Des jeux comme
                Reactoonz (Play&apos;n GO) et Sweet Bonanza (Pragmatic Play) sont parmi les plus
                populaires de cette catégorie.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Conseils pour jouer aux machines à sous
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Bien que les machines à sous soient des jeux de hasard pur, certaines bonnes pratiques
              peuvent vous aider à optimiser votre expérience et à gérer efficacement votre budget :
            </p>
          </div>
          <div className="bg-surface rounded-xl border border-border p-6 mt-4">
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">1.</span>
                <span>
                  <strong className="text-text">Choisissez des jeux à RTP élevé (96 %+).</strong> Sur le
                  long terme, un meilleur RTP signifie un avantage maison plus faible et des sessions
                  potentiellement plus longues pour le même budget.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">2.</span>
                <span>
                  <strong className="text-text">Adaptez la volatilité à votre budget.</strong> Avec un
                  petit budget, privilégiez les slots à faible volatilité pour des sessions plus longues.
                  Les gros budgets peuvent se permettre la haute volatilité.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">3.</span>
                <span>
                  <strong className="text-text">Utilisez le mode démo.</strong> Testez toujours un jeu
                  gratuitement avant de miser de l&apos;argent réel. Cela vous permet de comprendre les
                  mécaniques et d&apos;évaluer la fréquence des bonus.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">4.</span>
                <span>
                  <strong className="text-text">Fixez des limites strictes.</strong> Déterminez un budget
                  de session et ne le dépassez jamais. Fixez également un objectif de gain : si vous
                  l&apos;atteignez, arrêtez-vous.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">5.</span>
                <span>
                  <strong className="text-text">Profitez des bonus casino.</strong> Les tours gratuits et
                  les bonus de dépôt peuvent prolonger significativement vos sessions. Vérifiez toujours
                  les conditions de mise associées.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">6.</span>
                <span>
                  <strong className="text-text">Activez toutes les lignes de paiement.</strong> Sur les
                  slots multi-lignes, misez sur toutes les lignes pour maximiser vos chances de toucher
                  une combinaison gagnante. Réduisez plutôt la mise par ligne si nécessaire.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Providers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Les meilleurs éditeurs de machines à sous
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              La qualité d&apos;une machine à sous dépend en grande partie de l&apos;éditeur qui la
              développe. Voici les studios les plus réputés dont les jeux sont disponibles sur les
              casinos en ligne en France :
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              {
                name: "NetEnt",
                desc: "Pionnier du secteur, connu pour Starburst, Gonzo's Quest et Dead or Alive. Graphismes soignés et mécaniques innovantes.",
              },
              {
                name: "Pragmatic Play",
                desc: "L'un des studios les plus prolifiques, avec des hits comme Gates of Olympus, Sweet Bonanza et The Dog House.",
              },
              {
                name: "Play'n GO",
                desc: "Créateur de Book of Dead et Rich Wilde. Excellente qualité graphique et thèmes d'aventure immersifs.",
              },
              {
                name: "Microgaming",
                desc: "Le créateur de Mega Moolah, détenteur de records de jackpots progressifs. Un catalogue de plus de 800 jeux.",
              },
            ].map((provider) => (
              <div key={provider.name} className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-bold text-accent mb-1">{provider.name}</h3>
                <p className="text-sm text-text-light">{provider.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4">
        <FAQ items={slotsFAQ} title="Questions fréquentes sur les machines à sous" />
      </section>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/jeux/" className="text-accent font-medium hover:underline">
          ← Retour aux guides de jeux
        </Link>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: slotsFAQ.map((item) => ({
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
