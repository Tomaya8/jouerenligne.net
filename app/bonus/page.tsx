import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import { casinos } from "../data/casinos";

export const metadata: Metadata = {
  title: "Bonus Casino en Ligne 2025 : Comparatif des Meilleures Offres",
  description:
    "Comparatif complet des bonus casino en ligne 2025 : bonus de bienvenue, tours gratuits, bonus sans dépôt et cashback. Trouvez la meilleure offre pour jouer en toute sécurité.",
  keywords: [
    "bonus casino en ligne",
    "bonus de bienvenue casino",
    "tours gratuits casino",
    "bonus sans dépôt",
    "cashback casino",
    "promotions casino",
    "wagering requirements",
  ],
};

const bonusFAQ = [
  {
    question: "Qu'est-ce qu'un bonus de bienvenue de casino en ligne ?",
    answer:
      "Un bonus de bienvenue est une offre promotionnelle destinée aux nouveaux joueurs lors de leur inscription ou de leur premier dépôt sur un casino en ligne. Il peut prendre la forme d'un pourcentage sur le dépôt (ex. 100% jusqu'à 500€), de tours gratuits, ou d'une combinaison des deux. Ce bonus est soumis à des conditions de mise qu'il faut remplir avant de pouvoir retirer les gains.",
  },
  {
    question: "Qu'est-ce que les conditions de mise (wagering) ?",
    answer:
      "Les conditions de mise, aussi appelées wagering requirements, indiquent combien de fois vous devez jouer le montant du bonus avant de pouvoir retirer vos gains. Par exemple, un bonus de 100€ avec une condition de mise x35 signifie que vous devez miser un total de 3 500€ avant de pouvoir effectuer un retrait. Les conditions varient généralement entre x20 et x50 selon les casinos.",
  },
  {
    question: "Peut-on cumuler plusieurs bonus casino ?",
    answer:
      "En général, il n'est pas possible de cumuler plusieurs bonus simultanément sur un même casino en ligne. Vous devez terminer les conditions de mise d'un bonus avant d'en activer un nouveau. Cependant, certains casinos proposent des packs de bienvenue répartis sur plusieurs dépôts, ce qui vous permet de profiter de bonus successifs.",
  },
  {
    question: "Les bonus sans dépôt sont-ils vraiment gratuits ?",
    answer:
      "Les bonus sans dépôt sont effectivement offerts sans nécessiter de dépôt initial. Toutefois, ils sont soumis à des conditions de mise souvent plus élevées (x40 à x60) et les gains sont généralement plafonnés (50€ à 100€). Vous devrez aussi vérifier votre identité et éventuellement effectuer un dépôt minimum avant de retirer vos gains.",
  },
  {
    question: "Comment choisir le meilleur bonus casino ?",
    answer:
      "Pour choisir le meilleur bonus, ne regardez pas uniquement le montant affiché. Comparez les conditions de mise (plus elles sont basses, mieux c'est), le délai pour remplir ces conditions, les jeux qui contribuent au wagering, et le plafond de gains. Un bonus de 200€ avec des conditions x25 est souvent plus avantageux qu'un bonus de 1 000€ avec des conditions x50.",
  },
  {
    question: "Les tours gratuits ont-ils de la valeur ?",
    answer:
      "Oui, les tours gratuits (free spins) permettent de jouer sur des machines à sous sans utiliser votre solde. Chaque tour a une valeur fixée par le casino (généralement entre 0,10€ et 0,50€). Les gains issus des tours gratuits sont soumis à des conditions de mise. Ils constituent un excellent moyen de découvrir de nouveaux jeux sans risque financier.",
  },
  {
    question: "Que se passe-t-il si je ne remplis pas les conditions de mise à temps ?",
    answer:
      "Si vous ne parvenez pas à remplir les conditions de mise dans le délai imparti (généralement 7 à 30 jours selon les casinos), le bonus et les gains associés sont annulés. Il est donc essentiel de vérifier le délai accordé avant d'accepter un bonus et de s'assurer qu'il est réaliste par rapport à votre rythme de jeu.",
  },
];

export default async function BonusPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Bonus Casino en Ligne 2025
            <br />
            <span className="text-gold-light">Comparatif des Meilleures Offres</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez et comparez les bonus de bienvenue, tours gratuits, bonus sans dépôt et
            cashback des meilleurs casinos en ligne licenciés en France.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Bonus & Promotions" }]} />

        {/* Bonus Comparison Table */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Tableau comparatif des bonus casino 2025
          </h2>
          <p className="text-text-light mb-8">
            Retrouvez ci-dessous les offres de bienvenue des casinos en ligne que nous avons testés
            et approuvés. Chaque bonus a été vérifié et les conditions de mise analysées par notre
            équipe.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Casino</th>
                  <th className="px-4 py-3 text-left font-semibold">Bonus</th>
                  <th className="px-4 py-3 text-left font-semibold">Détails & Conditions</th>
                  <th className="px-4 py-3 text-center font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {casinos.map((casino, i) => (
                  <tr
                    key={casino.slug}
                    className={`border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
                  >
                    <td className="px-4 py-4 font-semibold text-text">
                      <Link
                        href={`/casino/${casino.slug}/`}
                        className="hover:text-accent transition-colors"
                      >
                        {casino.name}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-accent font-bold">{casino.bonus}</td>
                    <td className="px-4 py-4 text-text-light">{casino.bonusDetails}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-gold font-bold">
                        {"★".repeat(casino.rating)}
                        {"☆".repeat(5 - casino.rating)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sub-page links */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/bonus/tours-gratuits/"
              className="card-hover gradient-card rounded-xl p-6 border border-border block"
            >
              <span className="text-3xl mb-3 block">🎰</span>
              <h3 className="font-bold text-primary text-lg mb-2">Tours Gratuits (Free Spins)</h3>
              <p className="text-sm text-text-light">
                Guide complet des tours gratuits : comment les obtenir, les conditions associées et
                les meilleures offres du moment.
              </p>
            </Link>
            <Link
              href="/bonus/sans-depot/"
              className="card-hover gradient-card rounded-xl p-6 border border-border block"
            >
              <span className="text-3xl mb-3 block">🎁</span>
              <h3 className="font-bold text-primary text-lg mb-2">Bonus Sans Dépôt</h3>
              <p className="text-sm text-text-light">
                Découvrez les casinos qui offrent des bonus sans dépôt : jouez sans risquer votre
                argent et gardez vos gains.
              </p>
            </Link>
          </div>
        </section>

        {/* How bonuses work */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Comment fonctionnent les bonus de casino en ligne ?
          </h2>
          <div className="prose max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              Les bonus de casino en ligne constituent l&apos;un des principaux critères de choix
              des joueurs lorsqu&apos;ils s&apos;inscrivent sur une nouvelle plateforme. Ces offres
              promotionnelles permettent aux opérateurs d&apos;attirer de nouveaux clients tout en
              offrant aux joueurs un avantage financier pour débuter leur expérience. Comprendre le
              fonctionnement des bonus est essentiel pour en tirer le meilleur parti et éviter les
              mauvaises surprises.
            </p>
            <p>
              Lorsqu&apos;un casino en ligne propose un bonus, il s&apos;agit généralement
              d&apos;un montant supplémentaire crédité sur votre compte joueur en fonction de votre
              dépôt. Par exemple, un bonus de 100% jusqu&apos;à 300€ signifie que si vous déposez
              300€, le casino ajoute 300€ de bonus, vous permettant de jouer avec 600€ au total. Ce
              mécanisme simple en apparence s&apos;accompagne toutefois de conditions précises
              qu&apos;il convient de maîtriser.
            </p>
            <p>
              Le processus d&apos;activation d&apos;un bonus varie d&apos;un casino à l&apos;autre.
              Certains créditeront automatiquement le bonus lors de votre dépôt, tandis que
              d&apos;autres nécessitent la saisie d&apos;un code promotionnel ou une demande auprès
              du service client. Nous recommandons toujours de vérifier les conditions générales
              avant d&apos;effectuer votre premier dépôt afin de ne pas manquer une offre avantageuse.
            </p>
          </div>
        </section>

        {/* Types of bonuses */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Les différents types de bonus casino
          </h2>

          <div className="space-y-8">
            {/* Welcome Bonus */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Le bonus de bienvenue (Welcome Bonus)
              </h3>
              <div className="text-text-light leading-relaxed space-y-3">
                <p>
                  Le bonus de bienvenue est l&apos;offre phare de tout casino en ligne. Destiné
                  exclusivement aux nouveaux joueurs, il récompense votre inscription et votre
                  premier dépôt. C&apos;est généralement le bonus le plus généreux que vous
                  recevrez de la part d&apos;un opérateur, ce qui en fait un élément déterminant
                  dans le choix de votre casino.
                </p>
                <p>
                  Les bonus de bienvenue se présentent sous différentes formes : un match bonus
                  sur le premier dépôt (100%, 150%, voire 200%), un pack de bienvenue réparti sur
                  plusieurs dépôts, ou encore une combinaison d&apos;argent bonus et de tours
                  gratuits. Les meilleurs casinos français proposent des bonus de bienvenue allant
                  de 200€ à 1 000€, accompagnés de 50 à 250 tours gratuits.
                </p>
                <p>
                  Pour maximiser la valeur de votre bonus de bienvenue, nous recommandons de
                  comparer non seulement le montant offert, mais surtout les conditions de mise
                  associées. Un bonus de 500€ avec des conditions x30 sera plus facilement
                  convertible en gains réels qu&apos;un bonus de 1 000€ assorti de conditions x50.
                </p>
              </div>
            </div>

            {/* No Deposit Bonus */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Le bonus sans dépôt (No Deposit Bonus)
              </h3>
              <div className="text-text-light leading-relaxed space-y-3">
                <p>
                  Le bonus sans dépôt est le Saint Graal des promotions de casino en ligne.
                  Comme son nom l&apos;indique, il est offert sans qu&apos;aucun dépôt ne soit
                  nécessaire. Il suffit généralement de créer un compte et de vérifier votre
                  identité pour recevoir un petit montant bonus (5€ à 25€) ou des tours gratuits.
                </p>
                <p>
                  Ce type de bonus permet de tester un casino sans aucun risque financier. Cependant,
                  les conditions de mise sont généralement plus strictes (x40 à x60) et les gains
                  retirables sont plafonnés. Malgré ces limitations, le bonus sans dépôt reste une
                  excellente opportunité pour découvrir la plateforme et ses jeux avant de
                  s&apos;engager financièrement.
                </p>
                <p>
                  <Link
                    href="/bonus/sans-depot/"
                    className="text-accent font-medium hover:underline"
                  >
                    Consultez notre guide complet sur les bonus sans dépôt →
                  </Link>
                </p>
              </div>
            </div>

            {/* Free Spins */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Les tours gratuits (Free Spins)
              </h3>
              <div className="text-text-light leading-relaxed space-y-3">
                <p>
                  Les tours gratuits, également appelés free spins, sont des rotations offertes sur
                  des machines à sous sélectionnées par le casino. Ils peuvent être proposés dans
                  le cadre d&apos;un bonus de bienvenue, d&apos;une promotion hebdomadaire ou
                  comme récompense de fidélité. Chaque tour a une valeur prédéfinie (entre 0,10€
                  et 0,50€ en moyenne) et les gains générés sont crédités sur votre compte bonus.
                </p>
                <p>
                  Les tours gratuits sont particulièrement appréciés des amateurs de machines à
                  sous car ils offrent la possibilité de découvrir de nouveaux titres sans engager
                  de fonds propres. Certains casinos proposent même des tours gratuits sans
                  conditions de mise (wager-free spins), ce qui signifie que les gains peuvent
                  être retirés immédiatement.
                </p>
                <p>
                  <Link
                    href="/bonus/tours-gratuits/"
                    className="text-accent font-medium hover:underline"
                  >
                    Découvrez notre guide dédié aux tours gratuits →
                  </Link>
                </p>
              </div>
            </div>

            {/* Cashback */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Le cashback (remboursement des pertes)
              </h3>
              <div className="text-text-light leading-relaxed space-y-3">
                <p>
                  Le cashback est une forme de bonus qui vous rembourse un pourcentage de vos pertes
                  nettes sur une période donnée (quotidienne, hebdomadaire ou mensuelle). Les taux
                  de cashback varient généralement entre 5% et 15%, avec des plafonds qui dépendent
                  de votre statut VIP au sein du casino.
                </p>
                <p>
                  L&apos;avantage majeur du cashback est qu&apos;il est souvent soumis à des
                  conditions de mise réduites, voire inexistantes. Certains casinos, comme Monte
                  Carlo Digital, proposent un cashback de 10% sans aucune condition de mise, ce qui
                  en fait l&apos;une des promotions les plus avantageuses du marché. Le cashback
                  constitue un filet de sécurité appréciable pour les joueurs réguliers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wagering Requirements */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Comprendre les conditions de mise (wagering requirements)
          </h2>
          <div className="prose max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              Les conditions de mise sont l&apos;élément le plus important à vérifier avant
              d&apos;accepter un bonus casino. Elles déterminent combien de fois vous devez jouer
              le montant du bonus (et parfois du dépôt) avant de pouvoir retirer les gains
              associés. Un bonus avec des conditions de mise x30 signifie que pour un bonus de
              100€, vous devrez effectuer 3 000€ de mises au total.
            </p>
            <p>
              Il est crucial de noter que tous les jeux ne contribuent pas de la même manière aux
              conditions de mise. En règle générale, les machines à sous contribuent à 100%,
              tandis que les jeux de table (blackjack, roulette, baccarat) ne comptent qu&apos;à
              hauteur de 10% à 20%. Certains jeux, comme le video poker ou les jeux en direct,
              peuvent être totalement exclus du wagering.
            </p>

            <div className="bg-surface rounded-xl border border-border p-6 my-6">
              <h3 className="text-lg font-bold text-primary mb-4">
                Barème typique de contribution aux conditions de mise
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-text">Machines à sous</span>
                  <span className="text-accent font-bold">100%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-text">Roulette</span>
                  <span className="text-gold font-bold">10 - 20%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-text">Blackjack</span>
                  <span className="text-gold font-bold">10 - 15%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-text">Baccarat</span>
                  <span className="text-gold font-bold">10 - 15%</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="font-medium text-text">Casino en direct (Live)</span>
                  <span className="text-red-500 font-bold">0 - 10%</span>
                </li>
              </ul>
            </div>

            <p>
              Le délai accordé pour remplir les conditions de mise est un autre facteur essentiel.
              La plupart des casinos vous accordent entre 7 et 30 jours. Un délai trop court sur
              un bonus important peut rendre les conditions pratiquement impossibles à remplir.
              Nous recommandons de privilégier les casinos offrant au minimum 21 jours pour
              compléter le wagering.
            </p>
            <p>
              Enfin, vérifiez toujours la mise maximale autorisée pendant que vous jouez avec un
              bonus actif. La plupart des casinos limitent les mises à 5€ ou 6€ par tour lorsque
              des conditions de bonus sont en cours. Dépasser cette limite peut entraîner
              l&apos;annulation du bonus et de tous les gains associés.
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Nos conseils pour profiter au mieux des bonus casino
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">1. Lisez les conditions générales</h3>
              <p className="text-sm text-text-light">
                Avant d&apos;activer un bonus, prenez le temps de lire les termes et conditions.
                Portez une attention particulière aux conditions de mise, au délai, aux jeux
                exclus et à la mise maximale autorisée.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">2. Comparez les conditions de mise</h3>
              <p className="text-sm text-text-light">
                Un bonus avec des conditions x25-x30 est considéré comme avantageux. Au-delà de
                x40, les conditions deviennent difficiles à remplir pour la majorité des joueurs.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">3. Choisissez les bons jeux</h3>
              <p className="text-sm text-text-light">
                Si votre objectif est de remplir les conditions de mise, privilégiez les machines
                à sous qui comptent à 100%. Les jeux de table vous feront progresser beaucoup
                plus lentement.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">4. Gérez votre bankroll</h3>
              <p className="text-sm text-text-light">
                Ne déposez jamais plus que ce que vous pouvez vous permettre de perdre, même avec
                un bonus. Fixez des limites de dépôt et respectez-les rigoureusement.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <FAQ items={bonusFAQ} title="Questions fréquentes sur les bonus casino" />
        </section>
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
            mainEntity: bonusFAQ.map((item) => ({
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
