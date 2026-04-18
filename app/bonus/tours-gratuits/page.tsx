import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import FAQ from "../../components/FAQ";
import Newsletter from "../../components/Newsletter";
import { casinos } from "../../data/casinos";

export const metadata: Metadata = {
  title: "Tours Gratuits Casino 2025 : Guide Complet des Free Spins",
  description:
    "Tout savoir sur les tours gratuits (free spins) des casinos en ligne : comment les obtenir, conditions de mise, meilleures offres et stratégies pour maximiser vos gains.",
  keywords: [
    "tours gratuits casino",
    "free spins",
    "tours gratuits sans dépôt",
    "free spins sans wager",
    "bonus tours gratuits",
    "machines à sous gratuites",
  ],
};

const freeSpinsFAQ = [
  {
    question: "Qu'est-ce qu'un tour gratuit (free spin) de casino ?",
    answer:
      "Un tour gratuit, ou free spin, est une rotation offerte par le casino sur une machine à sous spécifique. Chaque tour a une valeur prédéfinie (généralement entre 0,10€ et 0,50€) et les gains générés sont crédités sur votre compte. Les tours gratuits peuvent être offerts lors de l'inscription, dans le cadre d'un bonus de bienvenue, ou comme promotion récurrente.",
  },
  {
    question: "Peut-on vraiment gagner de l'argent avec des tours gratuits ?",
    answer:
      "Oui, il est tout à fait possible de gagner de l'argent réel grâce aux tours gratuits. Cependant, les gains sont soumis à des conditions de mise qu'il faut remplir avant de pouvoir les retirer. Les gains sont également souvent plafonnés (entre 50€ et 200€ selon les casinos). Des joueurs chanceux ont toutefois décroché des jackpots significatifs grâce à des tours gratuits.",
  },
  {
    question: "Quelle est la différence entre free spins avec et sans conditions de mise ?",
    answer:
      "Les free spins avec conditions de mise (wager) nécessitent que vous jouiez vos gains un certain nombre de fois avant de pouvoir les retirer (ex. x30). Les free spins sans conditions de mise (wager-free) vous permettent de retirer immédiatement vos gains, ce qui les rend beaucoup plus avantageux. Les offres sans wager sont cependant plus rares.",
  },
  {
    question: "Sur quels jeux peut-on utiliser les tours gratuits ?",
    answer:
      "Les tours gratuits sont généralement attribués sur une ou plusieurs machines à sous spécifiques choisies par le casino. Les titres les plus populaires incluent Starburst (NetEnt), Book of Dead (Play'n GO), Gonzo's Quest (NetEnt), et Big Bass Bonanza (Pragmatic Play). Vous ne pouvez pas choisir librement le jeu sur lequel utiliser vos tours gratuits.",
  },
  {
    question: "Les tours gratuits expirent-ils ?",
    answer:
      "Oui, les tours gratuits ont toujours une date d'expiration. La plupart des casinos vous accordent entre 24 heures et 7 jours pour utiliser vos tours gratuits après leur activation. Si vous ne les utilisez pas dans le délai imparti, ils sont automatiquement supprimés de votre compte. Pensez à vérifier cette information avant d'accepter une offre.",
  },
  {
    question: "Comment obtenir des tours gratuits sans dépôt ?",
    answer:
      "Certains casinos offrent des tours gratuits dès l'inscription, sans nécessiter de premier dépôt. Il suffit de créer un compte et de vérifier votre identité (adresse e-mail, numéro de téléphone). Ces offres sont généralement limitées à 10-50 tours gratuits avec des conditions de mise plus élevées (x40 à x60). Consultez régulièrement notre page pour les dernières offres disponibles.",
  },
];

export default async function ToursGratuitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Tours Gratuits Casino 2025
            <br />
            <span className="text-gold-light">Guide Complet des Free Spins</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur les tours gratuits : fonctionnement, conditions,
            meilleures offres et stratégies pour maximiser vos gains.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Bonus & Promotions", href: "/bonus/" },
            { label: "Tours Gratuits" },
          ]}
        />

        {/* Free Spins Offers Table */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Offres de tours gratuits des meilleurs casinos
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Casino</th>
                  <th className="px-4 py-3 text-left font-semibold">Bonus incluant Free Spins</th>
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

        {/* What are Free Spins */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Qu&apos;est-ce que les tours gratuits de casino ?
          </h2>
          <div className="prose max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              Les tours gratuits, communément appelés free spins, sont l&apos;une des formes de
              bonus les plus populaires dans l&apos;univers des casinos en ligne. Ils permettent
              aux joueurs de faire tourner les rouleaux d&apos;une machine à sous sans dépenser
              leur propre argent, tout en conservant la possibilité de remporter des gains réels.
              C&apos;est un outil promotionnel extrêmement efficace qui bénéficie autant aux
              casinos qu&apos;aux joueurs.
            </p>
            <p>
              Le principe est simple : le casino vous attribue un nombre défini de tours
              (généralement entre 10 et 250) sur une ou plusieurs machines à sous spécifiques.
              Chaque tour possède une valeur de mise prédéterminée, habituellement comprise entre
              0,10€ et 0,50€. Lorsque vous utilisez vos tours gratuits, les gains générés sont
              crédités sur votre compte bonus et sont soumis aux conditions de mise du casino
              avant de pouvoir être retirés.
            </p>
            <p>
              Les tours gratuits peuvent être proposés dans plusieurs contextes : lors de votre
              inscription (avec ou sans dépôt), dans le cadre d&apos;un bonus de bienvenue, comme
              récompense de fidélité, lors de promotions saisonnières, ou encore pour le lancement
              d&apos;un nouveau jeu. Chaque offre comporte ses propres conditions, et il est
              essentiel de bien les comprendre avant de les accepter.
            </p>
          </div>
        </section>

        {/* Types of Free Spins */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Les différents types de tours gratuits
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Tours gratuits de bienvenue
              </h3>
              <p className="text-text-light leading-relaxed">
                Les free spins de bienvenue sont intégrés au bonus d&apos;inscription et
                accompagnent généralement un match bonus sur le premier dépôt. Par exemple, un
                casino peut offrir &laquo; 300€ + 100 tours gratuits &raquo;. Ces tours sont
                souvent distribués en une seule fois ou par tranches quotidiennes (ex. 20 tours
                par jour pendant 5 jours). La valeur de chaque tour est fixée par le casino et
                les gains sont soumis aux mêmes conditions de mise que le bonus principal.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Tours gratuits sans dépôt
              </h3>
              <p className="text-text-light leading-relaxed">
                Les tours gratuits sans dépôt sont offerts dès la création du compte, sans
                qu&apos;aucun versement ne soit nécessaire. C&apos;est le moyen idéal de tester un
                casino sans risque. Toutefois, ces offres s&apos;accompagnent de conditions plus
                strictes : wagering élevé (x40 à x60), gains plafonnés, et souvent la nécessité
                de réaliser un dépôt minimum avant de pouvoir retirer vos gains. Malgré ces
                restrictions, ils restent une opportunité précieuse pour les nouveaux joueurs.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Tours gratuits sans conditions de mise (Wager-Free)
              </h3>
              <p className="text-text-light leading-relaxed">
                Les tours gratuits sans conditions de mise représentent le summum des offres
                promotionnelles. Les gains générés par ces tours peuvent être retirés
                immédiatement sans aucune exigence de jeu supplémentaire. Ces offres sont
                naturellement plus rares et portent souvent sur un nombre limité de tours (5 à
                20), mais leur valeur réelle est bien supérieure à celle des tours avec wagering.
                Lorsque vous en trouvez, saisissez l&apos;opportunité sans hésiter.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Tours gratuits hebdomadaires et promotions récurrentes
              </h3>
              <p className="text-text-light leading-relaxed">
                De nombreux casinos proposent des promotions récurrentes incluant des tours
                gratuits : bonus du week-end, récompenses de fidélité, défis hebdomadaires ou
                tournois de machines à sous. Ces offres régulières sont un excellent complément
                au bonus de bienvenue et permettent de continuer à profiter de tours gratuits
                bien après votre inscription. Les joueurs fidèles et les membres des programmes
                VIP bénéficient souvent des offres les plus généreuses.
              </p>
            </div>
          </div>
        </section>

        {/* How to maximize */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Comment maximiser vos gains avec les tours gratuits
          </h2>
          <div className="prose max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              Tirer le meilleur parti de vos tours gratuits nécessite une approche méthodique.
              Voici les stratégies recommandées par notre équipe d&apos;experts pour optimiser
              vos chances de convertir vos free spins en gains retirables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Vérifiez la valeur par tour</h3>
              <p className="text-sm text-text-light">
                Un casino offrant 50 tours à 0,50€ (valeur totale 25€) est plus intéressant
                qu&apos;un casino offrant 200 tours à 0,05€ (valeur totale 10€). Calculez
                toujours la valeur totale de l&apos;offre avant de vous inscrire.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Choisissez les jeux à haute volatilité</h3>
              <p className="text-sm text-text-light">
                Si vos tours gratuits sont attribués sur un jeu à haute volatilité, vos chances de
                décrocher un gain important augmentent. Les jeux comme Book of Dead ou Gonzo&apos;s
                Quest sont connus pour leurs bonus rounds lucratifs.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Utilisez-les rapidement</h3>
              <p className="text-sm text-text-light">
                Les tours gratuits ont toujours une date d&apos;expiration. Ne laissez pas vos
                free spins dormir sur votre compte. Activez-les dès que possible pour ne pas
                perdre cette opportunité.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Privilégiez les offres sans wager</h3>
              <p className="text-sm text-text-light">
                Même si le nombre de tours est moindre, les free spins sans conditions de mise
                offrent une valeur réelle bien supérieure. 20 tours wager-free valent souvent
                plus que 200 tours avec un wagering x50.
              </p>
            </div>
          </div>
        </section>

        {/* Important Conditions */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Les conditions à vérifier avant d&apos;accepter des tours gratuits
          </h2>
          <div className="bg-surface rounded-xl border border-border p-6">
            <ul className="space-y-4 text-text-light">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-0.5">1.</span>
                <div>
                  <span className="font-semibold text-text">Conditions de mise (wagering) :</span>{" "}
                  Vérifiez le multiplicateur appliqué aux gains des tours gratuits. Un wagering
                  x20 à x30 est raisonnable, au-delà de x40 les conditions deviennent
                  contraignantes.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-0.5">2.</span>
                <div>
                  <span className="font-semibold text-text">Plafond de gains :</span>{" "}
                  La plupart des casinos plafonnent les gains issus des tours gratuits (entre 50€
                  et 200€). Même si vous décrochez un jackpot, vous ne pourrez retirer que le
                  montant plafonné.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-0.5">3.</span>
                <div>
                  <span className="font-semibold text-text">Délai d&apos;utilisation :</span>{" "}
                  Les tours gratuits expirent généralement sous 24h à 7 jours. Les gains
                  doivent aussi être joués dans un délai précis (7 à 30 jours).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-0.5">4.</span>
                <div>
                  <span className="font-semibold text-text">Jeu(x) éligible(s) :</span>{" "}
                  Les tours gratuits sont toujours limités à un ou plusieurs jeux spécifiques.
                  Assurez-vous que le jeu proposé vous convient avant d&apos;activer l&apos;offre.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-0.5">5.</span>
                <div>
                  <span className="font-semibold text-text">Dépôt minimum requis :</span>{" "}
                  Même les tours gratuits &laquo; sans dépôt &raquo; peuvent nécessiter un
                  dépôt minimum avant le retrait des gains. Vérifiez ce point dans les
                  conditions générales.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Back to Bonus */}
        <section className="py-6">
          <Link
            href="/bonus/"
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            ← Retour au guide des bonus casino
          </Link>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <FAQ items={freeSpinsFAQ} title="Questions fréquentes sur les tours gratuits" />
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
            mainEntity: freeSpinsFAQ.map((item) => ({
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
