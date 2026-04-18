import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import Newsletter from "../../components/Newsletter";
import FAQ from "../../components/FAQ";

export const metadata: Metadata = {
  title: "Jeu Responsable : Guide Complet pour Jouer en Toute Securite",
  description:
    "Tout savoir sur le jeu responsable en France. Signes d'alerte, auto-exclusion, ressources d'aide, conseils pratiques et numeros utiles pour garder le controle.",
  alternates: { canonical: "https://jouerenligne.net/regulation/jeu-responsable/" },
};

const faqItems = [
  {
    question: "Comment savoir si j'ai un probleme de jeu ?",
    answer:
      "Plusieurs signes peuvent indiquer un probleme de jeu : vous jouez plus longtemps ou plus d'argent que prevu, vous tentez de recuperer vos pertes en rejouant, vous empruntez de l'argent pour jouer, vous negligez vos obligations personnelles ou professionnelles, vous mentez a votre entourage sur vos habitudes de jeu, ou vous ressentez de l'irritabilite lorsque vous ne jouez pas. Si vous reconnaissez un ou plusieurs de ces signes, n'hesitez pas a demander de l'aide.",
  },
  {
    question: "Comment m'auto-exclure des sites de jeux en ligne ?",
    answer:
      "Vous pouvez demander votre inscription au fichier des interdits de jeux aupres de l'ANJ. Cette demarche est gratuite et peut etre temporaire (minimum 3 ans) ou definitive. Une fois inscrit, tous les operateurs agrees en France sont tenus de vous refuser l'acces. Vous pouvez egalement utiliser les outils d'auto-exclusion proposes par chaque operateur directement depuis votre compte joueur.",
  },
  {
    question: "Le numero 09 74 75 13 13 est-il gratuit ?",
    answer:
      "Le numero 09 74 75 13 13 de Joueurs Info Service est un appel non surtaxe (cout d'un appel local). Le service est confidentiel et anonyme. Des ecoutants specialises sont disponibles pour vous accompagner et vous orienter vers les structures d'aide adaptees a votre situation. Le service est accessible 7 jours sur 7.",
  },
  {
    question: "Puis-je fixer des limites de depot sur les sites de jeux ?",
    answer:
      "Oui, tous les operateurs agrees par l'ANJ sont tenus de proposer des outils de limitation. Vous pouvez fixer des limites de depot (quotidiennes, hebdomadaires ou mensuelles), des limites de mise et des limites de perte. Toute augmentation de limite ne prend effet qu'apres un delai de reflexion de 48 heures, tandis qu'une diminution est immediate.",
  },
  {
    question: "Les mineurs peuvent-ils jouer en ligne en France ?",
    answer:
      "Non, les jeux d'argent en ligne sont strictement interdits aux personnes de moins de 18 ans en France. Les operateurs agrees sont tenus de verifier l'identite et l'age de chaque joueur lors de l'inscription. Toute tentative de contournement de cette regle peut entrainer la fermeture du compte et la confiscation des gains.",
  },
  {
    question: "Ou trouver de l'aide pour un proche qui a un probleme de jeu ?",
    answer:
      "Plusieurs ressources sont disponibles : Joueurs Info Service au 09 74 75 13 13 propose un accompagnement pour les proches, le site joueurs-info-service.fr offre des informations et un chat en ligne, les CSAPA (Centres de Soins, d'Accompagnement et de Prevention en Addictologie) proposent des consultations gratuites dans toute la France, et des associations comme SOS Joueurs offrent un soutien complementaire.",
  },
];

export default function JeuResponsablePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Regulation", href: "/regulation/" },
              { label: "Jeu Responsable" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Jeu Responsable&nbsp;:
            <br />
            <span className="text-gold-light">Gardez le Controle</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Le jeu doit rester un divertissement. Decouvrez les signes d&apos;alerte, les outils
            de protection a votre disposition et les ressources pour obtenir de l&apos;aide.
          </p>
        </div>
      </section>

      {/* Urgence */}
      <section className="bg-red-50 border-b border-red-200 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-red-800">Besoin d&apos;aide maintenant&nbsp;?</p>
            <p className="text-sm text-red-700">
              Appelez Joueurs Info Service&nbsp;:{" "}
              <a href="tel:0974751313" className="font-bold underline">09 74 75 13 13</a>{" "}
              (appel non surtaxe) ou rendez-vous sur{" "}
              <a
                href="https://www.joueurs-info-service.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                joueurs-info-service.fr
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-text-light leading-relaxed mb-4">
            Les jeux d&apos;argent en ligne doivent avant tout rester un loisir agreable et maitrise.
            Malheureusement, pour certaines personnes, le jeu peut devenir une source de difficultes
            financieres, relationnelles et psychologiques. En France, on estime qu&apos;environ 1 %
            de la population presente un comportement de jeu problematique, et pres de 4 % des
            joueurs reguliers sont consideres comme etant a risque modere ou eleve.
          </p>
          <p className="text-text-light leading-relaxed">
            Ce guide a pour objectif de vous fournir toutes les informations necessaires pour jouer
            de maniere responsable, reconnaitre les signes d&apos;un comportement problematique et
            connaitre les ressources disponibles pour obtenir de l&apos;aide. Chez JouerEnLigne.net,
            nous considerons que la promotion du jeu responsable est une responsabilite fondamentale.
          </p>
        </div>

        {/* Signes d'alerte */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Les signes d&apos;alerte a connaitre
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Le jeu problematique s&apos;installe souvent de maniere progressive et insidieuse. Il est
            crucial de savoir identifier les signes avant-coureurs pour pouvoir reagir rapidement.
            Les comportements suivants peuvent indiquer que votre pratique de jeu devient problematique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Perte de controle du temps",
                desc: "Vous passez de plus en plus de temps a jouer, souvent bien au-dela de ce que vous aviez prevu. Vous annulez des activites sociales ou familiales pour jouer.",
              },
              {
                title: "Chasse aux pertes",
                desc: "Vous rejouez systematiquement pour essayer de recuperer l'argent perdu, augmentant vos mises dans l'espoir de vous refaire. C'est l'un des signes les plus caracteristiques.",
              },
              {
                title: "Difficultes financieres",
                desc: "Vous depensez plus que ce que vous pouvez vous permettre, vous empruntez de l'argent, vous utilisez l'epargne ou l'argent destine aux depenses essentielles pour jouer.",
              },
              {
                title: "Dissimulation",
                desc: "Vous mentez a votre entourage sur le temps passe a jouer ou les sommes engagees. Vous cachez vos releves bancaires ou supprimez l'historique de navigation.",
              },
              {
                title: "Impact emotionnel",
                desc: "Vous ressentez de l'anxiete, de l'irritabilite ou de l'agitation lorsque vous ne jouez pas. Le jeu devient un moyen d'echapper aux problemes ou a l'ennui.",
              },
              {
                title: "Negligence des responsabilites",
                desc: "Votre travail, vos etudes ou vos relations en souffrent. Vous etes distrait, fatigue ou absent a cause du jeu.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-bold text-text mb-2">{card.title}</h3>
                <p className="text-sm text-text-light">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
            <p className="text-sm text-text font-medium">
              Si vous reconnaissez un ou plusieurs de ces signes chez vous ou un proche, cela ne
              signifie pas forcement une addiction, mais il est important d&apos;en prendre conscience
              et de chercher de l&apos;aide si necessaire.
            </p>
          </div>
        </section>

        {/* Outils de protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Les outils de protection a votre disposition
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            La reglementation francaise impose aux operateurs agrees de mettre a disposition des
            joueurs plusieurs outils concrets pour les aider a garder le controle de leur pratique
            de jeu. Ces outils sont accessibles directement depuis votre compte joueur.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Limites de depot",
                desc: "Fixez un plafond quotidien, hebdomadaire ou mensuel pour vos depots. Toute augmentation necessite un delai de reflexion de 48 heures, tandis qu'une diminution prend effet immediatement.",
              },
              {
                title: "Limites de mise et de perte",
                desc: "Definissez un montant maximal par mise ou un seuil de perte au-dela duquel vous ne pouvez plus jouer pendant une periode donnee.",
              },
              {
                title: "Alertes de temps de jeu",
                desc: "Activez des notifications qui vous informent du temps passe sur la plateforme. Certains operateurs imposent des pauses obligatoires apres un certain temps de jeu continu.",
              },
              {
                title: "Auto-exclusion temporaire",
                desc: "Suspendez votre compte pour une duree definie (24 heures, une semaine, un mois ou plus). Pendant cette periode, vous ne pourrez pas acceder a votre compte ni placer de paris.",
              },
              {
                title: "Auto-exclusion definitive",
                desc: "Demandez votre inscription au fichier national des interdits de jeux aupres de l'ANJ. Cette mesure est irrevocable pendant un minimum de 3 ans et s'applique a tous les operateurs agrees en France.",
              },
              {
                title: "Historique et bilan de jeu",
                desc: "Consultez votre historique detaille de jeu, incluant les mises, les gains, les pertes et le temps passe. Cet outil vous permet d'avoir une vision objective de votre activite de jeu.",
              },
            ].map((tool) => (
              <div key={tool.title} className="bg-surface rounded-lg border border-border p-5">
                <h3 className="font-bold text-text mb-1">{tool.title}</h3>
                <p className="text-sm text-text-light">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            10 conseils pour jouer de maniere responsable
          </h2>
          <div className="bg-white rounded-xl border border-border p-6">
            <ol className="space-y-3 text-text-light text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">1.</span>
                <span><strong className="text-text">Fixez un budget</strong> avant de commencer a jouer et respectez-le scrupuleusement, quelles que soient les circonstances. Ne jouez jamais avec de l&apos;argent dont vous avez besoin pour vos depenses courantes.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">2.</span>
                <span><strong className="text-text">Definissez une limite de temps</strong> et utilisez les alertes proposees par les operateurs. Faites des pauses regulieres pour prendre du recul.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">3.</span>
                <span><strong className="text-text">Ne chassez jamais vos pertes.</strong> Accepter les pertes fait partie du jeu. Tenter de se refaire conduit systematiquement a des pertes plus importantes.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">4.</span>
                <span><strong className="text-text">Ne jouez pas sous l&apos;influence</strong> de l&apos;alcool, de drogues ou de medicaments. Ces substances alterent le jugement et la prise de decision.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">5.</span>
                <span><strong className="text-text">Ne considerez jamais le jeu comme un revenu.</strong> Les jeux d&apos;argent sont un divertissement, pas une strategie financiere. L&apos;avantage mathematique est toujours en faveur de l&apos;operateur.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">6.</span>
                <span><strong className="text-text">Jouez pour le plaisir</strong>, pas pour echapper a des problemes personnels, au stress ou a l&apos;ennui. Trouvez des alternatives saines pour gerer vos emotions.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">7.</span>
                <span><strong className="text-text">Consultez regulierement votre historique</strong> de jeu pour avoir une vision objective de votre activite. Comparez vos mises totales et vos pertes reelles.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">8.</span>
                <span><strong className="text-text">Parlez ouvertement</strong> de vos habitudes de jeu avec votre entourage. Le secret et la dissimulation sont souvent les premiers signes d&apos;un probleme.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">9.</span>
                <span><strong className="text-text">Utilisez les outils de limitation</strong> proposes par les operateurs. Fixer des limites quand tout va bien est la meilleure protection contre les derapages futurs.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent shrink-0">10.</span>
                <span><strong className="text-text">N&apos;hesitez jamais a demander de l&apos;aide.</strong> Reconnaitre un probleme et chercher du soutien est un signe de force, pas de faiblesse.</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Ressources d'aide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Ressources d&apos;aide et numeros utiles
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            En France, plusieurs structures proposent un accompagnement gratuit et confidentiel aux
            personnes confrontees a des difficultes liees au jeu. N&apos;hesitez pas a les contacter,
            que ce soit pour vous-meme ou pour un proche.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border-2 border-accent p-6">
              <h3 className="font-bold text-accent text-lg mb-2">Joueurs Info Service</h3>
              <p className="text-sm text-text-light mb-3">
                Service national d&apos;aide aux joueurs et a leur entourage. Ecoute, information
                et orientation vers les structures de soins.
              </p>
              <p className="font-bold text-text mb-1">
                Tel&nbsp;:{" "}
                <a href="tel:0974751313" className="text-accent">09 74 75 13 13</a>
              </p>
              <p className="text-sm text-text-light mb-1">Appel non surtaxe &mdash; 7j/7</p>
              <a
                href="https://www.joueurs-info-service.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline hover:no-underline"
              >
                joueurs-info-service.fr
              </a>
            </div>
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-bold text-text text-lg mb-2">SOS Joueurs</h3>
              <p className="text-sm text-text-light mb-3">
                Association d&apos;aide aux joueurs excessifs et a leurs familles. Accueil,
                ecoute et accompagnement dans les demarches.
              </p>
              <p className="font-bold text-text mb-1">
                Tel&nbsp;:{" "}
                <a href="tel:0978777555" className="text-accent">09 78 77 75 55</a>
              </p>
              <a
                href="https://www.sosjoueurs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline hover:no-underline"
              >
                sosjoueurs.org
              </a>
            </div>
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-bold text-text text-lg mb-2">CSAPA</h3>
              <p className="text-sm text-text-light mb-3">
                Les Centres de Soins, d&apos;Accompagnement et de Prevention en Addictologie
                proposent des consultations gratuites partout en France. Ils accueillent les
                personnes souffrant d&apos;addictions, y compris au jeu.
              </p>
              <p className="text-sm text-text-light">
                Trouvez le CSAPA le plus proche sur{" "}
                <a
                  href="https://annuaire.action-sociale.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:no-underline"
                >
                  annuaire.action-sociale.org
                </a>
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-bold text-text text-lg mb-2">ANJ &mdash; Auto-exclusion</h3>
              <p className="text-sm text-text-light mb-3">
                L&apos;Autorite Nationale des Jeux gere le fichier des interdits de jeux.
                Vous pouvez demander votre inscription en ligne ou par courrier pour une duree
                minimale de 3 ans.
              </p>
              <a
                href="https://www.anj.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline hover:no-underline"
              >
                anj.fr
              </a>
            </div>
          </div>
        </section>

        {/* Le jeu chez les jeunes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Proteger les jeunes et les publics vulnerables
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            Les jeunes adultes et les adolescents sont particulierement vulnerables face aux risques
            lies au jeu d&apos;argent. L&apos;exposition precoce a la publicite pour les paris sportifs,
            combinee a l&apos;accessibilite des plateformes en ligne, cree des risques specifiques
            pour cette tranche d&apos;age. En France, l&apos;interdiction des jeux d&apos;argent aux
            mineurs de moins de 18 ans est stricte et s&apos;applique aussi bien en ligne que dans
            les points de vente physiques.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Les parents et les educateurs ont un role essentiel a jouer dans la prevention.
            Il est important de parler ouvertement des jeux d&apos;argent avec les jeunes, de
            leur expliquer les risques reels et de demonter les mythes autour des gains faciles.
            Les outils de controle parental peuvent egalement aider a limiter l&apos;acces aux
            sites de jeux en ligne.
          </p>
          <div className="bg-surface rounded-xl p-5 border border-border">
            <p className="text-sm text-text-light">
              <strong className="text-text">Rappel important&nbsp;:</strong> la loi francaise interdit
              formellement toute publicite pour les jeux d&apos;argent ciblant les mineurs. Si vous
              constatez une infraction, vous pouvez la signaler directement a l&apos;ANJ via leur
              plateforme de signalement en ligne.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <FAQ items={faqItems} title="Questions frequentes sur le jeu responsable" />
        </section>
      </article>

      {/* Newsletter */}
      <Newsletter />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
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
