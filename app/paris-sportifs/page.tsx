import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Paris Sportifs en Ligne : Guide Complet pour les Parieurs Francais",
  description:
    "Guide complet des paris sportifs en ligne en France. Comprendre les cotes, les types de paris, les strategies et les sports majeurs. Informations educatives pour parier de maniere eclairee.",
  alternates: { canonical: "https://jouerenligne.net/paris-sportifs/" },
};

const faqItems = [
  {
    question: "Les paris sportifs en ligne sont-ils legaux en France ?",
    answer:
      "Oui, les paris sportifs en ligne sont legaux en France a condition de jouer sur un site detenant une licence delivree par l'Autorite Nationale des Jeux (ANJ). Seuls les operateurs agrees peuvent proposer legalement des paris sportifs aux joueurs residant en France. Vous pouvez verifier la liste des operateurs agrees sur le site officiel de l'ANJ.",
  },
  {
    question: "Comment fonctionnent les cotes decimales ?",
    answer:
      "Les cotes decimales representent le gain total pour 1 euro mise. Par exemple, une cote de 2.50 signifie que pour 1 euro mise, vous recevrez 2,50 euros en cas de pari gagnant (soit 1,50 euro de gain net plus votre mise de 1 euro). Plus la cote est elevee, plus l'evenement est considere comme improbable par le bookmaker, et plus le gain potentiel est important.",
  },
  {
    question: "Quel est le montant minimum pour commencer a parier ?",
    answer:
      "Le montant minimum de mise varie selon les operateurs, mais il se situe generalement entre 0,50 euro et 2 euros. Pour le premier depot, la plupart des sites exigent un minimum de 5 a 10 euros. Nous recommandons de commencer avec un budget modeste que vous etes pret a perdre et de ne jamais depasser ce budget initial.",
  },
  {
    question: "Qu'est-ce qu'un pari combine ?",
    answer:
      "Un pari combine (ou accumulator) reunit plusieurs selections dans un seul pari. Les cotes de chaque selection sont multipliees entre elles, ce qui peut generer des gains potentiels eleves. Cependant, toutes les selections doivent etre gagnantes pour que le pari soit valide. Le risque augmente proportionnellement au nombre de selections, ce qui rend les combines tres difficiles a remporter sur le long terme.",
  },
  {
    question: "Peut-on vivre des paris sportifs ?",
    answer:
      "Il est extremement rare et difficile de vivre exclusivement des paris sportifs. La grande majorite des parieurs perdent de l'argent sur le long terme en raison de la marge integree par les bookmakers dans les cotes. Les paris sportifs doivent etre consideres comme un divertissement, et non comme une source de revenus. Si vous pariez, fixez-vous toujours un budget strict que vous etes pret a perdre integralement.",
  },
  {
    question: "Que signifie la 'marge' du bookmaker ?",
    answer:
      "La marge (ou overround) est le pourcentage de profit que le bookmaker integre dans ses cotes. Elle se calcule en additionnant les probabilites implicites de toutes les issues d'un evenement : si le total depasse 100 %, l'excedent correspond a la marge. En France, les marges varient generalement entre 4 % et 10 % selon les sports et les evenements. Plus la marge est faible, plus les cotes proposees sont avantageuses pour le joueur.",
  },
];

export default function ParisSportifsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Paris Sportifs" }]} />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Paris Sportifs en Ligne&nbsp;:
            <br />
            <span className="text-gold-light">Guide Complet pour les Parieurs Francais</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Tout comprendre sur les paris sportifs en France&nbsp;: fonctionnement des cotes,
            types de paris, sports majeurs et bonnes pratiques pour parier de maniere eclairee.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-text-light leading-relaxed mb-4">
            Les paris sportifs en ligne representent l&apos;un des segments les plus dynamiques du
            marche des jeux d&apos;argent en France. Depuis l&apos;ouverture du marche en 2010,
            le secteur n&apos;a cesse de croitre, portera par l&apos;essor du numerique et
            l&apos;engouement des Francais pour le sport. En 2024, les mises sur les paris sportifs
            en ligne en France ont depasse les 8 milliards d&apos;euros, un chiffre qui temoigne
            de la popularite de cette activite.
          </p>
          <p className="text-text-light leading-relaxed mb-4">
            Cependant, parier de maniere eclairee necessite de comprendre les mecanismes
            fondamentaux qui regissent les paris sportifs. Ce guide vous explique comment
            fonctionnent les cotes, quels types de paris existent, quels sports offrent les
            meilleures opportunites et quelles bonnes pratiques adopter pour que le pari reste
            un plaisir et non une source de problemes.
          </p>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
            <p className="text-sm text-text font-medium">
              <strong>Avertissement&nbsp;:</strong> Ce guide est purement educatif. Les paris sportifs
              comportent des risques de perte financiere. Ne pariez jamais plus que ce que vous pouvez
              vous permettre de perdre. Pour en savoir plus, consultez notre{" "}
              <Link href="/regulation/jeu-responsable/" className="text-accent underline hover:no-underline">
                guide du jeu responsable
              </Link>.
            </p>
          </div>
        </div>

        {/* Comment fonctionnent les cotes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Comment fonctionnent les cotes&nbsp;?
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Les cotes sont le fondement des paris sportifs. Elles representent a la fois la
            probabilite estimee d&apos;un evenement et le gain potentiel pour le parieur. En France,
            les cotes decimales sont le format le plus repandu, mais il est utile de connaitre les
            trois principaux formats utilises dans le monde.
          </p>

          {/* Odds table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Format</th>
                  <th className="text-left px-4 py-3 font-semibold">Exemple</th>
                  <th className="text-left px-4 py-3 font-semibold">Gain pour 10 &euro; mises</th>
                  <th className="text-left px-4 py-3 font-semibold">Probabilite implicite</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-text">Decimale</td>
                  <td className="px-4 py-3 text-text-light">2.50</td>
                  <td className="px-4 py-3 text-text-light">25 &euro; (15 &euro; net)</td>
                  <td className="px-4 py-3 text-text-light">40 %</td>
                </tr>
                <tr className="border-b border-border bg-surface">
                  <td className="px-4 py-3 font-medium text-text">Fractionnaire</td>
                  <td className="px-4 py-3 text-text-light">3/2</td>
                  <td className="px-4 py-3 text-text-light">25 &euro; (15 &euro; net)</td>
                  <td className="px-4 py-3 text-text-light">40 %</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-text">Americaine</td>
                  <td className="px-4 py-3 text-text-light">+150</td>
                  <td className="px-4 py-3 text-text-light">25 &euro; (15 &euro; net)</td>
                  <td className="px-4 py-3 text-text-light">40 %</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-bold text-text mb-2">Cotes decimales</h3>
              <p className="text-sm text-text-light">
                Format standard en France et en Europe. Le calcul est simple&nbsp;: mise &times; cote =
                gain total. Une cote de 1.80 sur un pari de 10 &euro; rapporte 18 &euro; (8 &euro; de
                gain net). Plus la cote est elevee, plus le gain potentiel est important mais plus
                l&apos;evenement est considere comme improbable.
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-bold text-text mb-2">Cotes fractionnaires</h3>
              <p className="text-sm text-text-light">
                Format traditionnel au Royaume-Uni. Une cote de 3/1 signifie que vous gagnez 3 &euro;
                pour chaque euro mise (plus le remboursement de votre mise). Pour convertir en
                decimale&nbsp;: divisez le numerateur par le denominateur et ajoutez 1. Ainsi 3/1
                = 4.00 en decimale.
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-bold text-text mb-2">Cotes americaines</h3>
              <p className="text-sm text-text-light">
                Format dominant aux Etats-Unis. Les cotes positives (+150) indiquent le gain pour
                100 &euro; mises. Les cotes negatives (-200) indiquent la mise necessaire pour
                gagner 100 &euro;. Les cotes negatives designent le favori, les positives
                l&apos;outsider.
              </p>
            </div>
          </div>
        </section>

        {/* Types de paris */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Les differents types de paris sportifs
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Les operateurs francais proposent une grande variete de types de paris pour repondre
            aux preferences de chaque parieur. Voici les formats les plus courants et leur
            fonctionnement detaille.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Pari simple (1N2)",
                desc: "Le plus classique des paris. Vous misez sur l'issue d'un match : victoire de l'equipe 1, match nul ou victoire de l'equipe 2. C'est le type de pari le plus accessible pour les debutants car il ne necessite qu'une seule prediction.",
              },
              {
                title: "Pari combine (accumulator)",
                desc: "Vous combinez plusieurs selections dans un seul pari. Les cotes sont multipliees entre elles, ce qui peut generer des gains importants. Attention : toutes les selections doivent etre correctes pour remporter le pari. Le risque augmente de maniere exponentielle avec chaque selection ajoutee.",
              },
              {
                title: "Pari avec handicap",
                desc: "Le bookmaker attribue un avantage ou un desavantage fictif a une equipe pour equilibrer les cotes. Par exemple, un handicap de -1.5 pour le favori signifie qu'il doit gagner par au moins 2 buts d'ecart pour que le pari soit gagnant. Ce format est particulierement utile lorsque les cotes du match simple sont trop basses.",
              },
              {
                title: "Paris sur le nombre de buts/points (over/under)",
                desc: "Vous pariez sur le nombre total de buts, points ou sets dans un match, en choisissant si le total sera superieur (over) ou inferieur (under) a une ligne fixee par le bookmaker. Par exemple, over 2.5 buts dans un match de football signifie qu'il faut au moins 3 buts marques au total.",
              },
              {
                title: "Pari en direct (live betting)",
                desc: "Vous placez vos paris pendant le deroulement de l'evenement sportif. Les cotes evoluent en temps reel en fonction de l'action. Ce format demande une bonne connaissance du sport et une prise de decision rapide. Les paris en direct representent une part croissante du marche en France.",
              },
              {
                title: "Paris a long terme (futures)",
                desc: "Vous pariez sur le resultat d'une competition entiere, comme le vainqueur d'un championnat ou d'un tournoi. Ces paris sont places bien avant la fin de la competition et offrent generalement des cotes plus elevees, refletant l'incertitude sur le long terme.",
              },
              {
                title: "Paris sur les buteurs et performances individuelles",
                desc: "Vous pariez sur les performances individuelles des sportifs : premier buteur, nombre de passes decisives, nombre de points marques par un joueur. Ce type de pari ajoute une dimension supplementaire au suivi des evenements sportifs.",
              },
            ].map((type) => (
              <div key={type.title} className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-bold text-text mb-2">{type.title}</h3>
                <p className="text-sm text-text-light">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sports majeurs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Les sports majeurs pour les paris en France
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Certains sports concentrent la majorite des mises des parieurs francais. Voici les
            disciplines les plus populaires et leurs specificites en matiere de paris.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="text-3xl mb-3">&#9917;</div>
              <h3 className="font-bold text-text text-lg mb-2">Football</h3>
              <p className="text-sm text-text-light mb-3">
                Sport le plus parie en France et dans le monde, le football offre une couverture
                exceptionnelle avec des milliers de matchs disponibles chaque semaine. La Ligue 1,
                la Premier League, la Liga, la Serie A et la Ligue des Champions sont les
                competitions les plus suivies par les parieurs francais.
              </p>
              <p className="text-sm text-text-light">
                Les types de paris les plus populaires incluent le 1N2, les paris sur les buteurs,
                le nombre de buts et les resultats exacts. La presence du match nul rend les paris
                sur le football particulierement interessants mais aussi plus complexes.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="text-3xl mb-3">&#127934;</div>
              <h3 className="font-bold text-text text-lg mb-2">Tennis</h3>
              <p className="text-sm text-text-light mb-3">
                Le tennis est le deuxieme sport le plus parie en France. Son format en duel (sans
                match nul) simplifie les paris de base. Roland-Garros, l&apos;Open d&apos;Australie,
                Wimbledon et l&apos;US Open generent les volumes de mises les plus importants.
              </p>
              <p className="text-sm text-text-light">
                Les paris populaires comprennent le vainqueur du match, le handicap de sets ou de
                jeux, le nombre total de jeux et les performances par set. Le tennis en direct est
                egalement tres prisea en raison de la frequence des retournements de situation.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="text-3xl mb-3">&#127936;</div>
              <h3 className="font-bold text-text text-lg mb-2">Basketball</h3>
              <p className="text-sm text-text-light mb-3">
                La NBA et l&apos;EuroLeague dominent les paris basketball en France. Le nombre
                eleve de points marques offre une grande variete de marches de paris, notamment
                sur les totaux (over/under) et les ecarts de points (spreads).
              </p>
              <p className="text-sm text-text-light">
                Les paris populaires incluent le vainqueur avec handicap, le total de points, les
                performances individuelles (points, rebonds, passes) et les paris par quart-temps.
                La saison NBA, avec ses 82 matchs par equipe, offre un calendrier dense pour les
                parieurs.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-surface rounded-xl border border-border p-5">
            <h3 className="font-bold text-text mb-2">Autres sports populaires en France</h3>
            <p className="text-sm text-text-light">
              Au-dela du trio football-tennis-basketball, les parieurs francais s&apos;interessent
              egalement au <strong>rugby</strong> (Top 14, Tournoi des Six Nations),
              aux <strong>courses hippiques</strong> (via le PMU),
              au <strong>handball</strong> (discipline dans laquelle la France excelle a
              l&apos;international), au <strong>cyclisme</strong> (Tour de France, classiques),
              aux <strong>sports de combat</strong> (MMA, boxe) et
              au <strong>e-sport</strong>, un segment en forte croissance aupres des jeunes parieurs.
            </p>
          </div>
        </section>

        {/* Strategies et bonnes pratiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Bonnes pratiques pour parier de maniere eclairee
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            S&apos;il n&apos;existe aucune methode infaillible pour gagner aux paris sportifs
            (l&apos;avantage mathematique est toujours du cote du bookmaker), certaines approches
            permettent de prendre des decisions plus eclairees et de limiter les risques de pertes
            excessives. Voici les principes fondamentaux a retenir.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Gestion de la bankroll",
                desc: "Definissez un budget dedie exclusivement aux paris (votre bankroll) et ne misez jamais plus de 1 a 5 % de ce budget sur un seul pari. Cette discipline vous protege contre les series de pertes et vous permet de durer dans le temps sans mettre en danger vos finances personnelles.",
              },
              {
                title: "Recherche et analyse",
                desc: "Avant de placer un pari, renseignez-vous sur les equipes, les joueurs, la forme recente, les confrontations directes, les blessures et les conditions de jeu. Les parieurs les plus disciplanes fondent leurs decisions sur des donnees factuelles plutot que sur l'intuition ou l'emotion.",
              },
              {
                title: "Comprendre la valeur (value betting)",
                desc: "Un 'value bet' se presente lorsque la probabilite reelle d'un evenement est superieure a la probabilite implicite dans la cote. Par exemple, si vous estimez qu'une equipe a 50 % de chances de gagner mais que la cote est de 2.50 (probabilite implicite de 40 %), il y a potentiellement de la valeur.",
              },
              {
                title: "Specialisation",
                desc: "Concentrez-vous sur un ou deux sports que vous connaissez bien plutot que de disperser vos paris sur de nombreuses disciplines. Une connaissance approfondie d'un sport vous donne un meilleur jugement pour evaluer les probabilites reelles des evenements.",
              },
              {
                title: "Eviter les biais cognitifs",
                desc: "Les parieurs sont souvent victimes de biais cognitifs : le biais de confirmation (ne retenir que les informations qui confirment leur intuition), le biais du favori (surestimer les chances des equipes populaires) ou l'illusion du controle. La discipline et l'objectivite sont essentielles.",
              },
              {
                title: "Tenir un journal de paris",
                desc: "Notez systematiquement vos paris, vos raisonnements, vos resultats et votre ROI (retour sur investissement). Ce suivi vous permet d'identifier vos forces et vos faiblesses, de reperer les schemas recurrents et d'ameliorer progressivement votre processus de decision.",
              },
            ].map((practice) => (
              <div key={practice.title} className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-bold text-text mb-2">{practice.title}</h3>
                <p className="text-sm text-text-light">{practice.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-sm text-red-800 font-medium">
              <strong>Rappel important&nbsp;:</strong> Aucune strategie ne garantit des gains aux
              paris sportifs. La marge du bookmaker fait que, statistiquement, le parieur moyen perd
              de l&apos;argent sur le long terme. Les paris sportifs sont un divertissement et doivent
              etre traites comme tel. Fixez-vous des limites strictes et ne pariez jamais de l&apos;argent
              que vous ne pouvez pas vous permettre de perdre. En cas de difficulte, contactez
              Joueurs Info Service au{" "}
              <a href="tel:0974751313" className="font-bold underline">09 74 75 13 13</a>.
            </p>
          </div>
        </section>

        {/* Choisir un operateur */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Comment choisir un site de paris sportifs&nbsp;?
          </h2>
          <p className="text-text-light leading-relaxed mb-4">
            Le choix d&apos;un operateur de paris sportifs agree est une etape cruciale pour
            parier dans de bonnes conditions. Plusieurs criteres meritent d&apos;etre evalues
            avant de s&apos;inscrire sur une plateforme.
          </p>
          <div className="bg-surface rounded-xl border border-border p-6">
            <ul className="space-y-3 text-text-light text-sm">
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                <span><strong className="text-text">Licence ANJ</strong> &mdash; Verifiez en priorite que l&apos;operateur possede un agrement delivre par l&apos;Autorite Nationale des Jeux. C&apos;est la garantie fondamentale de legalite et de securite.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                <span><strong className="text-text">Qualite des cotes</strong> &mdash; Comparez les cotes proposees par differents operateurs pour les memes evenements. Des cotes plus elevees signifient une marge plus faible et donc de meilleures conditions pour le parieur.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                <span><strong className="text-text">Variete des marches</strong> &mdash; Un bon operateur propose une large gamme de sports, de competitions et de types de paris pour vous offrir un maximum de choix.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                <span><strong className="text-text">Interface et application mobile</strong> &mdash; La plateforme doit etre intuitive, rapide et agreable a utiliser, aussi bien sur ordinateur que sur mobile.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                <span><strong className="text-text">Service client</strong> &mdash; Privilegiez les operateurs offrant un support reactif et disponible en francais, idealement via plusieurs canaux (chat, email, telephone).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                <span><strong className="text-text">Conditions des bonus</strong> &mdash; Lisez attentivement les conditions de mise (wagering) associees aux offres de bienvenue. Un bonus attractif en apparence peut comporter des conditions difficiles a remplir.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <FAQ items={faqItems} title="Questions frequentes sur les paris sportifs" />
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
