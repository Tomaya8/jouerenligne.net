import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Regulation des Jeux en Ligne en France : Tout Savoir sur l'ANJ",
  description:
    "Guide complet sur la regulation des jeux d'argent en ligne en France. Role de l'ANJ, licences, protection des joueurs, cadre juridique et historique de la legislation.",
  alternates: { canonical: "https://jouerenligne.net/regulation/" },
};

const faqItems = [
  {
    question: "Quel est le role de l'ANJ en France ?",
    answer:
      "L'Autorite Nationale des Jeux (ANJ) est le regulateur des jeux d'argent en France depuis 2020. Elle delivre les licences aux operateurs, controle leur conformite, protege les joueurs vulnerables et lutte contre les sites illegaux. L'ANJ a remplace l'ARJEL et dispose de pouvoirs elargis couvrant l'ensemble du secteur des jeux.",
  },
  {
    question: "Comment savoir si un site de jeux en ligne est legal en France ?",
    answer:
      "Un site de jeux en ligne legal en France doit afficher le logo de l'ANJ et posseder une licence delivree par cette autorite. Vous pouvez verifier la liste des operateurs agrees directement sur le site officiel de l'ANJ (anj.fr). Tout site ne figurant pas sur cette liste opere illegalement en France.",
  },
  {
    question: "Quels jeux d'argent en ligne sont autorises en France ?",
    answer:
      "En France, les jeux d'argent en ligne autorises comprennent les paris sportifs, les paris hippiques et le poker. Les jeux de casino en ligne (machines a sous, roulette, blackjack) ne sont pas autorises pour les operateurs prives en ligne, seul le monopole de la Francaise des Jeux et du PMU couvre certains segments specifiques.",
  },
  {
    question: "Que risque-t-on en jouant sur un site non agree ?",
    answer:
      "Jouer sur un site non agree par l'ANJ expose les joueurs a de multiples risques : absence de protection en cas de litige, donnees personnelles non securisees, jeux potentiellement truques et aucune garantie de paiement des gains. Les operateurs illegaux ne sont soumis a aucun controle et ne respectent pas les regles de jeu responsable.",
  },
  {
    question: "Les gains aux jeux en ligne sont-ils imposes en France ?",
    answer:
      "En France, les gains occasionnels aux jeux de hasard ne sont pas soumis a l'impot sur le revenu. Toutefois, les joueurs professionnels ou ceux dont les gains constituent une source de revenus reguliere et significative peuvent etre soumis a l'imposition. Les gains superieurs a 1 500 euros dans les casinos physiques sont soumis a un prelevement de 12 %.",
  },
];

export default function RegulationPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Regulation et Legalite" }]} />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Regulation des Jeux en Ligne en France&nbsp;:
            <br />
            <span className="text-gold-light">Tout Savoir sur l&apos;ANJ</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Comprendre le cadre juridique, le role du regulateur et vos droits en tant que joueur
            dans l&apos;univers des jeux d&apos;argent en ligne en France.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="prose-section mb-12">
          <p className="text-lg text-text-light leading-relaxed mb-4">
            La France dispose d&apos;un cadre reglementaire parmi les plus stricts au monde en matiere
            de jeux d&apos;argent en ligne. Depuis l&apos;ouverture du marche en 2010, la legislation
            n&apos;a cesse d&apos;evoluer pour concilier la liberte de jouer avec la protection des
            joueurs et la lutte contre les activites illegales. Aujourd&apos;hui, c&apos;est l&apos;Autorite
            Nationale des Jeux (ANJ) qui veille au respect de ces regles et garantit un environnement
            de jeu sur et equitable pour tous les joueurs francais.
          </p>
          <p className="text-text-light leading-relaxed">
            Que vous soyez un joueur occasionnel ou un parieur regulier, comprendre la reglementation
            est essentiel pour jouer en toute legalite et en toute securite. Ce guide vous presente
            l&apos;ensemble du cadre juridique applicable aux jeux en ligne en France, de l&apos;histoire
            de la legislation au fonctionnement actuel du regulateur.
          </p>
        </div>

        {/* Histoire */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Histoire de la regulation des jeux en ligne en France
          </h2>
          <div className="bg-surface rounded-xl p-6 border border-border mb-6">
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                L&apos;histoire de la regulation des jeux d&apos;argent en ligne en France est
                relativement recente mais riche en evolutions majeures. Avant 2010, les jeux
                d&apos;argent en ligne n&apos;etaient pas specifiquement encadres par la loi francaise,
                ce qui creait une zone grise juridique dans laquelle de nombreux operateurs etrangers
                proposaient leurs services aux joueurs francais sans aucun controle.
              </p>
              <p>
                <strong className="text-text">La loi du 12 mai 2010</strong> a marque un tournant
                historique en ouvrant le marche des jeux en ligne a la concurrence, tout en mettant
                en place un cadre reglementaire strict. Cette loi a cree l&apos;ARJEL (Autorite de
                Regulation des Jeux En Ligne), le premier regulateur dedie specifiquement aux jeux
                d&apos;argent en ligne. L&apos;ARJEL avait pour mission de delivrer les licences,
                de controler les operateurs et de proteger les joueurs.
              </p>
              <p>
                <strong className="text-text">L&apos;ordonnance du 2 octobre 2019</strong>, entree
                en vigueur le 1er janvier 2020, a transforme l&apos;ARJEL en Autorite Nationale des
                Jeux (ANJ). Cette reforme a considerablement elargi le perimetre d&apos;action du
                regulateur, qui couvre desormais l&apos;ensemble du secteur des jeux d&apos;argent
                et de hasard en France, y compris les casinos physiques, la Francaise des Jeux et le PMU.
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { year: "2010", event: "Loi d'ouverture du marche et creation de l'ARJEL" },
              { year: "2019", event: "Ordonnance creant l'ANJ avec des pouvoirs elargis" },
              { year: "2020", event: "Entree en vigueur de l'ANJ comme regulateur unique" },
            ].map((item) => (
              <div key={item.year} className="bg-white rounded-lg border border-border p-4 text-center">
                <span className="text-2xl font-bold text-accent">{item.year}</span>
                <p className="text-sm text-text-light mt-2">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role de l'ANJ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Le role de l&apos;Autorite Nationale des Jeux (ANJ)
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            L&apos;ANJ est une autorite administrative independante qui constitue la cle de voute du
            systeme de regulation des jeux d&apos;argent en France. Son independance vis-a-vis du
            gouvernement et des operateurs garantit une regulation impartiale et efficace. Ses missions
            sont multiples et complementaires.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Delivrance des licences",
                desc: "L'ANJ evalue chaque demande d'agrement et delivre les licences aux operateurs qui remplissent les conditions strictes de securite, de transparence et de protection des joueurs.",
              },
              {
                title: "Controle et surveillance",
                desc: "Le regulateur surveille en continu l'activite des operateurs agrees pour verifier le respect des obligations legales : equite des jeux, lutte contre la fraude, respect des limites de mise.",
              },
              {
                title: "Protection des joueurs",
                desc: "L'ANJ met en place des dispositifs de prevention du jeu excessif : auto-exclusion, limites de depot, information sur les risques et soutien aux joueurs en difficulte.",
              },
              {
                title: "Lutte contre l'illegalite",
                desc: "L'ANJ identifie et bloque les sites illegaux operant sans licence en France. Elle peut demander le blocage DNS des sites non agrees et poursuivre les contrevenants.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-bold text-text mb-2">{card.title}</h3>
                <p className="text-sm text-text-light">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-light leading-relaxed">
            L&apos;ANJ dispose egalement d&apos;un pouvoir de sanction important. Elle peut prononcer
            des avertissements, des amendes pouvant atteindre plusieurs millions d&apos;euros, voire
            retirer l&apos;agrement d&apos;un operateur en cas de manquements graves. Ce pouvoir
            coercitif est essentiel pour maintenir l&apos;integrite du marche et la confiance des joueurs.
          </p>
        </section>

        {/* Cadre juridique */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Le cadre juridique des jeux en ligne en France
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le cadre juridique francais en matiere de jeux d&apos;argent en ligne repose sur plusieurs
            principes fondamentaux qui visent a equilibrer la liberte de jouer avec la protection de
            l&apos;ordre public et la prevention des risques lies au jeu excessif.
          </p>
          <div className="bg-surface rounded-xl p-6 border border-border mb-6">
            <h3 className="font-bold text-text mb-3">Jeux autorises en ligne</h3>
            <ul className="space-y-2 text-text-light text-sm">
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5">&#10003;</span>
                <span><strong>Paris sportifs</strong> &mdash; Paris sur les resultats d&apos;evenements sportifs aupres d&apos;operateurs agrees par l&apos;ANJ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5">&#10003;</span>
                <span><strong>Paris hippiques</strong> &mdash; Paris sur les courses de chevaux, historiquement domines par le PMU.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5">&#10003;</span>
                <span><strong>Poker en ligne</strong> &mdash; Cash games et tournois de poker sur des plateformes agreees.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="font-bold text-text mb-3">Jeux non autorises en ligne (operateurs prives)</h3>
            <ul className="space-y-2 text-text-light text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span><strong>Machines a sous en ligne</strong> &mdash; Interdites pour les operateurs prives en France.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span><strong>Roulette et jeux de table</strong> &mdash; Reserves aux casinos physiques agreees par le ministere de l&apos;Interieur.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span><strong>Casino en direct en ligne</strong> &mdash; Non autorise pour les operateurs prives sur le territoire francais.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Protection des joueurs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            La protection des joueurs&nbsp;: une priorite absolue
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            La protection des joueurs est au coeur de la regulation francaise des jeux d&apos;argent.
            La legislation impose aux operateurs agrees un ensemble de mesures destinees a prevenir
            le jeu excessif, a informer les joueurs sur les risques et a accompagner ceux qui
            rencontrent des difficultes avec leur pratique de jeu.
          </p>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-primary mb-3">Mesures obligatoires pour les operateurs agrees</h3>
            <ul className="space-y-2 text-text-light text-sm">
              <li>&bull; Verification obligatoire de l&apos;identite et de l&apos;age (18 ans minimum)</li>
              <li>&bull; Mise en place de limites de depot, de mise et de perte configurables par le joueur</li>
              <li>&bull; Dispositif d&apos;auto-exclusion temporaire ou definitive</li>
              <li>&bull; Affichage obligatoire des messages de prevention et du numero d&apos;aide 09 74 75 13 13</li>
              <li>&bull; Inscription au fichier des interdits de jeux sur demande du joueur</li>
              <li>&bull; Interdiction de la publicite ciblant les mineurs</li>
              <li>&bull; Transparence totale sur les conditions des bonus et promotions</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mb-4">
            Ces mesures sont regulierement renforcees par l&apos;ANJ, qui publie des recommandations
            et des guidelines a destination des operateurs. Le regulateur effectue egalement des
            controles reguliers pour s&apos;assurer de la mise en oeuvre effective de ces dispositions.
          </p>
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
            <p className="text-sm text-text font-medium">
              Pour en savoir plus sur les outils de protection et les comportements a adopter,
              consultez notre{" "}
              <Link href="/regulation/jeu-responsable/" className="text-accent underline hover:no-underline">
                guide complet du jeu responsable
              </Link>.
            </p>
          </div>
        </section>

        {/* Obtenir une licence */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Comment un operateur obtient-il une licence ANJ&nbsp;?
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            L&apos;obtention d&apos;une licence ANJ est un processus rigoureux et exigeant. Les
            operateurs candidats doivent satisfaire a de nombreuses conditions avant de pouvoir
            proposer leurs services aux joueurs francais. Le processus se deroule en plusieurs etapes
            et peut prendre plusieurs mois.
          </p>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Constitution du dossier",
                desc: "L'operateur doit fournir un dossier complet comprenant ses statuts, sa structure financiere, ses mesures de securite informatique, ses dispositifs de lutte contre le blanchiment et sa politique de jeu responsable.",
              },
              {
                step: "2",
                title: "Examen par l'ANJ",
                desc: "L'ANJ examine le dossier en profondeur, verifie la solidite financiere de l'operateur, l'equite de ses jeux (generateur de nombres aleatoires certifie) et la robustesse de ses systemes de securite.",
              },
              {
                step: "3",
                title: "Decision et agrement",
                desc: "Si toutes les conditions sont remplies, l'ANJ delivre un agrement pour une duree de cinq ans renouvelable. L'operateur est alors inscrit sur la liste officielle et peut commencer a operer legalement en France.",
              },
              {
                step: "4",
                title: "Controle continu",
                desc: "Une fois agree, l'operateur est soumis a un controle permanent de l'ANJ qui peut realiser des audits, demander des comptes-rendus et verifier le respect des engagements pris.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white rounded-lg border border-border p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-text text-sm">{item.title}</h3>
                  <p className="text-sm text-text-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enjeux actuels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Les enjeux actuels de la regulation
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            La regulation des jeux d&apos;argent en ligne fait face a des defis constants lies a
            l&apos;evolution technologique et aux nouveaux comportements des joueurs. Parmi les enjeux
            majeurs auxquels l&apos;ANJ doit repondre, on retrouve la lutte contre la proliferation
            des sites illegaux, qui representent encore une part significative du marche. L&apos;essor
            des cryptomonnaies et des technologies blockchain pose egalement de nouvelles questions
            reglementaires. Par ailleurs, l&apos;expansion des paris en direct et des micro-paris
            necessitent une vigilance accrue en matiere de prevention du jeu excessif. Enfin,
            l&apos;encadrement de la publicite pour les jeux d&apos;argent, notamment sur les
            reseaux sociaux et aupres des influenceurs, constitue un chantier prioritaire pour
            le regulateur afin de limiter l&apos;exposition des publics vulnerables, en particulier
            les jeunes adultes.
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <FAQ items={faqItems} title="Questions frequentes sur la regulation" />
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
