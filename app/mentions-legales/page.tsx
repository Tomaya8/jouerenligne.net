import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions Légales — JouerEnLigne.net",
  description:
    "Mentions légales du site JouerEnLigne.net : informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la responsabilité.",
  alternates: { canonical: "https://jouerenligne.net/mentions-legales/" },
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "Mentions Légales" }]} />

      <h1 className="text-4xl font-bold text-text mb-10">Mentions Légales</h1>

      <div className="space-y-10 text-text-light leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            1. Informations sur le site
          </h2>
          <p>
            Le site <strong>JouerEnLigne.net</strong> est un site d&apos;information
            et de comparaison dédié aux jeux en ligne, accessible à l&apos;adresse{" "}
            <strong>https://jouerenligne.net</strong>. Il fournit des guides,
            analyses, actualités et comparatifs de casinos en ligne à destination
            des joueurs francophones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            2. Éditeur du site
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Nom du site :</strong> JouerEnLigne.net
            </li>
            <li>
              <strong>Directeur de la publication :</strong> Le responsable du
              site JouerEnLigne.net
            </li>
            <li>
              <strong>Adresse e-mail de contact :</strong>{" "}
              <a
                href="mailto:contact@jouerenligne.net"
                className="text-primary hover:underline"
              >
                contact@jouerenligne.net
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">3. Hébergement</h2>
          <p>Le site JouerEnLigne.net est hébergé par :</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Hébergeur :</strong> Hestia Control Panel / Serveur dédié
            </li>
            <li>
              <strong>Adresse :</strong> Se référer aux informations de
              l&apos;hébergeur
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            4. Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu du site JouerEnLigne.net (textes, images,
            graphismes, logo, icônes, sons, logiciels, etc.) est protégé par les
            lois en vigueur sur la propriété intellectuelle. Toute reproduction,
            représentation, modification, publication ou adaptation de tout ou
            partie du contenu du site, quel que soit le moyen ou le procédé
            utilisé, est interdite sans l&apos;autorisation écrite préalable de
            l&apos;éditeur.
          </p>
          <p className="mt-3">
            Toute exploitation non autorisée du site ou de l&apos;un quelconque des
            éléments qu&apos;il contient sera considérée comme constitutive d&apos;une
            contrefaçon et poursuivie conformément aux dispositions des articles
            L.335-2 et suivants du Code de la Propriété Intellectuelle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            5. Limitation de responsabilité
          </h2>
          <p>
            JouerEnLigne.net s&apos;efforce de fournir des informations aussi
            précises que possible. Toutefois, il ne pourra être tenu responsable
            des omissions, des inexactitudes et des carences dans la mise à jour,
            qu&apos;elles soient de son fait ou du fait des tiers partenaires qui
            lui fournissent ces informations.
          </p>
          <p className="mt-3">
            Les informations présentes sur le site sont données à titre indicatif
            et n&apos;ont aucune valeur contractuelle. Le site ne saurait être tenu
            responsable des pertes financières résultant de l&apos;utilisation des
            informations publiées. Les jeux d&apos;argent comportent des risques,
            notamment de dépendance. Jouez de manière responsable.
          </p>
          <p className="mt-3">
            JouerEnLigne.net ne saurait être tenu responsable de tout dommage
            direct ou indirect résultant de l&apos;accès au site ou de
            l&apos;utilisation des informations qui y sont proposées.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            6. Liens hypertextes
          </h2>
          <p>
            Le site JouerEnLigne.net peut contenir des liens hypertextes vers
            d&apos;autres sites internet. Ces liens sont fournis à titre
            informatif. JouerEnLigne.net n&apos;exerce aucun contrôle sur le
            contenu de ces sites tiers et décline toute responsabilité quant à
            leur contenu ou aux éventuels dommages pouvant résulter de leur
            consultation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            7. Droit applicable
          </h2>
          <p>
            Les présentes mentions légales sont régies par le droit européen. En
            cas de litige, et après l&apos;échec de toute tentative de recherche
            d&apos;une solution amiable, les tribunaux compétents seront saisis du
            litige.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            8. Jeu responsable
          </h2>
          <p>
            JouerEnLigne.net encourage le jeu responsable. Les jeux d&apos;argent
            et de hasard sont interdits aux mineurs. Si vous pensez avoir un
            problème de jeu, veuillez contacter{" "}
            <strong>Joueurs Info Service</strong> au{" "}
            <strong>09 74 75 13 13</strong> (appel non surtaxé) ou consulter le
            site{" "}
            <a
              href="https://www.joueurs-info-service.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.joueurs-info-service.fr
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
