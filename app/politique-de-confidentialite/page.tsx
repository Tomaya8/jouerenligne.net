import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — JouerEnLigne.net",
  description:
    "Politique de confidentialité de JouerEnLigne.net : collecte de données, cookies, droits RGPD, tiers et contact.",
  alternates: {
    canonical: "https://jouerenligne.net/politique-de-confidentialite/",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "Politique de Confidentialité" }]} />

      <h1 className="text-4xl font-bold text-text mb-10">
        Politique de Confidentialité
      </h1>

      <div className="space-y-10 text-text-light leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-text mb-4">1. Introduction</h2>
          <p>
            La présente politique de confidentialité décrit comment{" "}
            <strong>JouerEnLigne.net</strong> collecte, utilise et protège les
            données personnelles des visiteurs de son site internet. Nous nous
            engageons à respecter votre vie privée conformément au Règlement
            Général sur la Protection des Données (RGPD - Règlement UE 2016/679)
            et à la loi Informatique et Libertés.
          </p>
          <p className="mt-3">
            En utilisant notre site, vous acceptez les pratiques décrites dans la
            présente politique.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            2. Données collectées
          </h2>
          <p>
            JouerEnLigne.net peut collecter les données suivantes lors de votre
            navigation :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong>Données de navigation :</strong> adresse IP, type de
              navigateur, pages consultées, durée de la visite, système
              d&apos;exploitation, appareil utilisé.
            </li>
            <li>
              <strong>Données fournies volontairement :</strong> adresse e-mail
              (inscription à la newsletter), nom et message (formulaire de
              contact).
            </li>
            <li>
              <strong>Cookies et technologies similaires :</strong> voir la
              section Cookies ci-dessous.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            3. Finalités du traitement
          </h2>
          <p>Les données collectées sont utilisées aux fins suivantes :</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              Améliorer le contenu et l&apos;expérience utilisateur du site
            </li>
            <li>Envoyer des communications (newsletter) si vous y avez consenti</li>
            <li>Répondre à vos demandes via le formulaire de contact</li>
            <li>
              Analyser la fréquentation et les performances du site à des fins
              statistiques
            </li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">4. Cookies</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil lors de
            la visite d&apos;un site web. JouerEnLigne.net utilise les types de
            cookies suivants :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong>Cookies strictement nécessaires :</strong> indispensables au
              fonctionnement du site (préférences de consentement, session).
            </li>
            <li>
              <strong>Cookies analytiques :</strong> permettent de mesurer
              l&apos;audience et d&apos;analyser la navigation (ex. : Google
              Analytics ou outil similaire).
            </li>
            <li>
              <strong>Cookies tiers :</strong> déposés par nos partenaires pour
              des contenus ou publicités personnalisés.
            </li>
          </ul>
          <p className="mt-3">
            Vous pouvez gérer vos préférences en matière de cookies à tout moment
            via le bandeau de consentement affiché lors de votre première visite
            ou dans les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            5. Vos droits (RGPD)
          </h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos
            données personnelles :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong>Droit d&apos;accès :</strong> obtenir la confirmation que
              des données vous concernant sont traitées et en recevoir une copie.
            </li>
            <li>
              <strong>Droit de rectification :</strong> demander la correction de
              données inexactes ou incomplètes.
            </li>
            <li>
              <strong>Droit à l&apos;effacement :</strong> demander la
              suppression de vos données personnelles dans les conditions prévues
              par la loi.
            </li>
            <li>
              <strong>Droit à la limitation du traitement :</strong> demander la
              limitation du traitement de vos données dans certains cas.
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> recevoir vos données dans
              un format structuré et lisible par machine.
            </li>
            <li>
              <strong>Droit d&apos;opposition :</strong> vous opposer au
              traitement de vos données pour des motifs légitimes.
            </li>
            <li>
              <strong>Droit de retirer votre consentement :</strong> à tout
              moment, sans que cela n&apos;affecte la licéité du traitement
              effectué avant le retrait.
            </li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous à l&apos;adresse :{" "}
            <a
              href="mailto:contact@jouerenligne.net"
              className="text-primary hover:underline"
            >
              contact@jouerenligne.net
            </a>
            . Nous nous engageons à répondre dans un délai de 30 jours.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            6. Partage avec des tiers
          </h2>
          <p>
            JouerEnLigne.net ne vend ni ne loue vos données personnelles à des
            tiers. Vos données peuvent être partagées avec :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong>Prestataires techniques :</strong> hébergeur, services
              d&apos;analyse (dans le respect du RGPD).
            </li>
            <li>
              <strong>Partenaires affiliés :</strong> dans le cadre de programmes
              d&apos;affiliation, seules des données anonymisées ou agrégées
              peuvent être transmises.
            </li>
            <li>
              <strong>Autorités compétentes :</strong> en cas d&apos;obligation
              légale.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            7. Conservation des données
          </h2>
          <p>
            Vos données personnelles sont conservées pendant une durée
            proportionnée aux finalités pour lesquelles elles ont été collectées :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Données de navigation : 13 mois maximum</li>
            <li>
              Données de contact (newsletter) : jusqu&apos;à votre désinscription
            </li>
            <li>
              Messages de contact : 12 mois après le dernier échange
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            8. Sécurité des données
          </h2>
          <p>
            Nous mettons en oeuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre l&apos;accès
            non autorisé, la modification, la divulgation ou la destruction. Le
            site utilise le protocole HTTPS pour sécuriser les échanges de
            données.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            9. Réclamation
          </h2>
          <p>
            Si vous estimez que le traitement de vos données personnelles
            constitue une violation du RGPD, vous pouvez introduire une
            réclamation auprès de la{" "}
            <strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong>
            , autorité de contrôle française en matière de protection des données
            :{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">10. Contact</h2>
          <p>
            Pour toute question relative à la présente politique de
            confidentialité ou à l&apos;exercice de vos droits, vous pouvez nous
            contacter à :{" "}
            <a
              href="mailto:contact@jouerenligne.net"
              className="text-primary hover:underline"
            >
              contact@jouerenligne.net
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-4">
            11. Mise à jour
          </h2>
          <p>
            La présente politique de confidentialité peut être mise à jour à tout
            moment. La date de dernière mise à jour est indiquée ci-dessous. Nous
            vous invitons à la consulter régulièrement.
          </p>
          <p className="mt-3 font-semibold text-text">
            Dernière mise à jour : Avril 2026
          </p>
        </section>
      </div>
    </main>
  );
}
