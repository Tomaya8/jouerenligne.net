import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import FAQ from "../../components/FAQ";
import Newsletter from "../../components/Newsletter";
import { casinos } from "../../data/casinos";

export const metadata: Metadata = {
  title: "Bonus Sans Dépôt Casino 2025 : Jouez Gratuitement et Gardez Vos Gains",
  description:
    "Guide complet des bonus sans dépôt casino en ligne 2025 : comment les obtenir, conditions de mise, meilleures offres et astuces pour maximiser vos gains sans risque.",
  keywords: [
    "bonus sans dépôt casino",
    "no deposit bonus",
    "casino gratuit sans dépôt",
    "bonus gratuit casino",
    "jouer sans dépôt",
    "casino en ligne gratuit",
  ],
};

const noDepositFAQ = [
  {
    question: "Qu'est-ce qu'un bonus sans dépôt de casino ?",
    answer:
      "Un bonus sans dépôt est une offre promotionnelle qui vous permet de jouer avec de l'argent réel ou des tours gratuits sans avoir à effectuer de dépôt sur votre compte. Il suffit généralement de créer un compte et de vérifier votre identité pour recevoir le bonus. C'est le moyen le plus sûr de tester un casino en ligne sans aucun risque financier.",
  },
  {
    question: "Peut-on vraiment retirer ses gains avec un bonus sans dépôt ?",
    answer:
      "Oui, il est possible de retirer vos gains, mais plusieurs conditions doivent être remplies. Vous devez d'abord compléter les conditions de mise (généralement x40 à x60). Ensuite, les gains retirables sont plafonnés (souvent entre 50€ et 100€). Enfin, la plupart des casinos exigent un dépôt minimum et une vérification d'identité complète avant tout retrait.",
  },
  {
    question: "Les bonus sans dépôt sont-ils vraiment gratuits ?",
    answer:
      "Les bonus sans dépôt ne nécessitent aucun engagement financier initial, ce qui les rend effectivement gratuits à obtenir. Cependant, les conditions de mise élevées et le plafond de gains réduisent leur valeur réelle. Considérez-les comme une opportunité de tester un casino gratuitement plutôt qu'un moyen de gagner de l'argent facilement.",
  },
  {
    question: "Combien de temps ai-je pour utiliser un bonus sans dépôt ?",
    answer:
      "Le délai d'utilisation varie selon les casinos, mais il est généralement compris entre 3 et 14 jours après l'activation du bonus. Passé ce délai, le bonus et les gains associés sont automatiquement supprimés. Certains casinos accordent jusqu'à 30 jours, mais c'est plus rare. Vérifiez toujours les conditions spécifiques de l'offre.",
  },
  {
    question: "Peut-on obtenir un bonus sans dépôt sur plusieurs casinos ?",
    answer:
      "Absolument. Chaque casino en ligne propose ses propres offres, et vous pouvez tout à fait vous inscrire sur plusieurs plateformes pour profiter de différents bonus sans dépôt. C'est d'ailleurs une stratégie recommandée pour découvrir plusieurs casinos sans dépenser d'argent. Attention toutefois à ne créer qu'un seul compte par casino, les doublons sont interdits.",
  },
  {
    question: "Quels jeux peut-on jouer avec un bonus sans dépôt ?",
    answer:
      "Les bonus sans dépôt sous forme d'argent offrent généralement plus de flexibilité et permettent de jouer à la majorité des jeux du casino (machines à sous, jeux de table). Les tours gratuits sans dépôt sont limités à des machines à sous spécifiques. Dans tous les cas, certains jeux peuvent être exclus pour le calcul des conditions de mise. Consultez les termes et conditions pour connaître les restrictions exactes.",
  },
  {
    question: "Y a-t-il des arnaques liées aux bonus sans dépôt ?",
    answer:
      "Les casinos licenciés par l'ANJ sont réglementés et fiables. Méfiez-vous cependant des offres de casinos non licenciés qui promettent des bonus sans dépôt irréalistes (100€+ sans conditions). Nous vous recommandons de ne jouer que sur des plateformes autorisées en France et de vérifier la présence de la licence ANJ avant de vous inscrire.",
  },
];

export default async function SansDepotPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Bonus Sans Dépôt Casino 2025
            <br />
            <span className="text-gold-light">Jouez Gratuitement, Gardez Vos Gains</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez les meilleures offres de bonus sans dépôt des casinos en ligne français.
            Testez les jeux sans risque et conservez vos gains réels.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Bonus & Promotions", href: "/bonus/" },
            { label: "Bonus Sans Dépôt" },
          ]}
        />

        {/* Casino Table */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Casinos avec les meilleurs bonus en France
          </h2>
          <p className="text-text-light mb-6">
            Voici les casinos licenciés ANJ que nous recommandons. Chaque plateforme propose des
            offres de bienvenue attractives et un environnement de jeu sécurisé.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Casino</th>
                  <th className="px-4 py-3 text-left font-semibold">Offre de bienvenue</th>
                  <th className="px-4 py-3 text-left font-semibold">Conditions</th>
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

        {/* What is a no deposit bonus */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Qu&apos;est-ce qu&apos;un bonus sans dépôt ?
          </h2>
          <div className="prose max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              Le bonus sans dépôt est considéré comme l&apos;offre la plus attractive dans le monde
              des casinos en ligne. Contrairement aux bonus de bienvenue classiques qui nécessitent
              un premier versement, le bonus sans dépôt est offert gratuitement à tout nouveau
              joueur qui s&apos;inscrit sur la plateforme. Il vous suffit de créer un compte,
              de vérifier votre adresse e-mail et parfois votre numéro de téléphone pour recevoir
              votre bonus.
            </p>
            <p>
              Ce type de promotion prend deux formes principales : un montant en argent bonus
              (généralement entre 5€ et 25€) crédité directement sur votre compte, ou un lot de
              tours gratuits (entre 10 et 50 free spins) utilisables sur des machines à sous
              spécifiques. Dans les deux cas, les gains générés sont soumis à des conditions de
              mise avant de pouvoir être retirés.
            </p>
            <p>
              Le bonus sans dépôt représente une véritable aubaine pour les joueurs prudents ou
              débutants. Il permet de découvrir l&apos;interface d&apos;un casino, de tester
              différents jeux et de se familiariser avec le fonctionnement de la plateforme sans
              engager le moindre centime. C&apos;est l&apos;équivalent d&apos;un essai gratuit
              dans le commerce traditionnel, adapté au monde du jeu en ligne.
            </p>
          </div>
        </section>

        {/* Types of no deposit bonuses */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Les formes de bonus sans dépôt
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Argent bonus gratuit
              </h3>
              <div className="text-text-light leading-relaxed space-y-3">
                <p>
                  Le bonus en argent gratuit est la forme la plus polyvalente du bonus sans dépôt.
                  Le casino crédite un montant (5€, 10€, 20€ ou parfois 25€) directement sur
                  votre compte bonus. Vous êtes libre de l&apos;utiliser sur la majorité des
                  jeux disponibles : machines à sous, roulette, blackjack, ou autres jeux de
                  table. Cette flexibilité permet de vraiment explorer le casino et de jouer aux
                  jeux qui vous intéressent le plus.
                </p>
                <p>
                  L&apos;avantage principal de l&apos;argent bonus gratuit est sa versatilité.
                  Vous pouvez répartir votre mise sur plusieurs jeux, tester différentes
                  stratégies et découvrir des titres que vous n&apos;auriez peut-être pas essayés
                  autrement. Les conditions de mise varient généralement entre x40 et x60, avec
                  un plafond de gains retirables compris entre 50€ et 100€.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Tours gratuits sans dépôt
              </h3>
              <div className="text-text-light leading-relaxed space-y-3">
                <p>
                  Les tours gratuits sans dépôt sont attribués sur une ou plusieurs machines à
                  sous choisies par le casino. Le nombre de tours offerts varie entre 10 et 50,
                  avec une valeur par tour comprise entre 0,10€ et 0,25€. Bien que moins flexibles
                  que l&apos;argent bonus, ils permettent de jouer sans aucun risque sur des
                  machines à sous populaires et de potentiellement décrocher des gains significatifs.
                </p>
                <p>
                  Les tours gratuits sans dépôt sont souvent proposés sur des machines à sous
                  emblématiques comme Starburst, Book of Dead, Gonzo&apos;s Quest ou Sweet
                  Bonanza. Les gains générés sont crédités en argent bonus et doivent être joués
                  selon les conditions de mise imposées. Le plafond de retrait est généralement
                  similaire à celui des bonus en argent (50€ à 100€).
                </p>
                <p>
                  <Link
                    href="/bonus/tours-gratuits/"
                    className="text-accent font-medium hover:underline"
                  >
                    En savoir plus sur les tours gratuits →
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Temps de jeu gratuit (Free Play)
              </h3>
              <div className="text-text-light leading-relaxed space-y-3">
                <p>
                  Certains casinos proposent une variante originale du bonus sans dépôt : le
                  temps de jeu gratuit. Vous recevez un montant important (500€ à 1 500€) mais
                  disposez d&apos;un temps limité (30 à 60 minutes) pour jouer. À la fin du
                  temps imparti, vos gains au-delà du montant bonus initial sont conservés
                  (sous réserve des conditions de mise et du plafond de gains).
                </p>
                <p>
                  Ce format est moins courant mais offre une expérience unique et excitante. Il
                  permet de jouer avec des mises plus élevées que d&apos;habitude et
                  d&apos;explorer le casino en profondeur dans un temps limité. Les gains sont
                  généralement plafonnés entre 100€ et 200€, mais l&apos;adrénaline de jouer
                  contre la montre ajoute une dimension supplémentaire au divertissement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to claim */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Comment obtenir un bonus sans dépôt : étape par étape
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white rounded-xl border border-border p-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                1
              </span>
              <div>
                <h3 className="font-bold text-primary mb-1">Choisissez un casino fiable</h3>
                <p className="text-sm text-text-light">
                  Sélectionnez un casino en ligne détenant une licence ANJ. Vérifiez les avis
                  des joueurs, les conditions du bonus sans dépôt et la réputation de
                  l&apos;opérateur. Notre comparatif vous aide à identifier les meilleures offres.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl border border-border p-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                2
              </span>
              <div>
                <h3 className="font-bold text-primary mb-1">Créez votre compte</h3>
                <p className="text-sm text-text-light">
                  Remplissez le formulaire d&apos;inscription avec vos informations personnelles.
                  Utilisez des données exactes car elles seront vérifiées lors de votre premier
                  retrait. La procédure prend généralement moins de 5 minutes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl border border-border p-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                3
              </span>
              <div>
                <h3 className="font-bold text-primary mb-1">Vérifiez votre identité</h3>
                <p className="text-sm text-text-light">
                  La plupart des casinos demandent une vérification d&apos;e-mail et parfois un
                  SMS de confirmation. Certains opérateurs exigent une pièce d&apos;identité
                  avant d&apos;activer le bonus sans dépôt.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl border border-border p-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                4
              </span>
              <div>
                <h3 className="font-bold text-primary mb-1">Réclamez votre bonus</h3>
                <p className="text-sm text-text-light">
                  Le bonus peut être crédité automatiquement, nécessiter un code promotionnel,
                  ou demander une activation via le service client ou votre espace personnel.
                  Suivez les instructions spécifiques du casino.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl border border-border p-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                5
              </span>
              <div>
                <h3 className="font-bold text-primary mb-1">Jouez et remplissez les conditions</h3>
                <p className="text-sm text-text-light">
                  Utilisez votre bonus sur les jeux éligibles et travaillez à remplir les
                  conditions de mise dans le délai imparti. Privilégiez les machines à sous qui
                  contribuent à 100% au wagering pour avancer plus rapidement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions to watch */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Les conditions essentielles des bonus sans dépôt
          </h2>
          <div className="prose max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              Si le bonus sans dépôt semble être une offre sans contrepartie, la réalité est plus
              nuancée. Les casinos en ligne imposent des conditions strictes pour protéger leurs
              intérêts tout en offrant aux joueurs une chance réelle de gagner. Comprendre ces
              conditions est indispensable pour tirer le meilleur parti de ces offres et éviter
              toute déception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Conditions de mise (Wagering)</h3>
              <p className="text-sm text-text-light">
                Les bonus sans dépôt ont généralement un wagering compris entre x40 et x60. Pour
                un bonus de 10€ avec un wagering x50, vous devrez miser 500€ au total avant de
                pouvoir retirer vos gains. C&apos;est nettement plus élevé que les bonus de
                bienvenue classiques (x25 à x35).
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Plafond de gains retirables</h3>
              <p className="text-sm text-text-light">
                Les gains issus des bonus sans dépôt sont presque toujours plafonnés. Le montant
                maximum retirable varie entre 50€ et 200€ selon les casinos. Même si votre solde
                bonus atteint 500€, vous ne pourrez retirer que le montant plafonné.
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Dépôt requis avant retrait</h3>
              <p className="text-sm text-text-light">
                Paradoxalement, de nombreux casinos exigent un dépôt minimum (10€ à 20€) avant
                de valider un retrait des gains issus du bonus sans dépôt. Cette pratique vise à
                vérifier que vous êtes un joueur sérieux et à confirmer votre méthode de paiement.
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary mb-2">Mise maximale autorisée</h3>
              <p className="text-sm text-text-light">
                Lorsque vous jouez avec un bonus sans dépôt, la mise maximale par tour est
                limitée (généralement 5€). Dépasser cette limite peut entraîner l&apos;annulation
                du bonus et de tous les gains accumulés. Respectez scrupuleusement cette règle.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Conseils d&apos;experts pour les bonus sans dépôt
          </h2>
          <div className="bg-white rounded-xl border border-border p-6">
            <ul className="space-y-4 text-text-light">
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5">&#10003;</span>
                <p>
                  <span className="font-semibold text-text">Inscrivez-vous sur plusieurs casinos</span>{" "}
                  pour profiter de différents bonus sans dépôt. Chaque offre vous donne une
                  chance supplémentaire de décrocher des gains.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5">&#10003;</span>
                <p>
                  <span className="font-semibold text-text">Lisez intégralement les conditions</span>{" "}
                  avant d&apos;activer le bonus. Portez une attention particulière au wagering,
                  au plafond de gains et au délai d&apos;expiration.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5">&#10003;</span>
                <p>
                  <span className="font-semibold text-text">Jouez aux machines à sous</span>{" "}
                  pour remplir les conditions de mise le plus rapidement possible, car elles
                  contribuent à 100% au wagering.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5">&#10003;</span>
                <p>
                  <span className="font-semibold text-text">Ne dépassez jamais la mise maximale</span>{" "}
                  autorisée pendant que le bonus est actif. C&apos;est la cause la plus fréquente
                  d&apos;annulation de bonus.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5">&#10003;</span>
                <p>
                  <span className="font-semibold text-text">Vérifiez la licence du casino</span>{" "}
                  avant de vous inscrire. Ne jouez que sur des plateformes régulées par l&apos;ANJ
                  pour garantir la sécurité de vos données et de vos fonds.
                </p>
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
          <FAQ items={noDepositFAQ} title="Questions fréquentes sur les bonus sans dépôt" />
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
            mainEntity: noDepositFAQ.map((item) => ({
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
