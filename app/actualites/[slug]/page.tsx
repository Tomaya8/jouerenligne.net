import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import Newsletter from "../../components/Newsletter";
import { newsArticles } from "../../data/articles";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — JouerEnLigne.net`,
    description: article.excerpt,
    alternates: { canonical: `https://jouerenligne.net/actualites/${slug}/` },
  };
}

function generatePlaceholderContent(excerpt: string): string {
  return `${excerpt}

Cette actualité s'inscrit dans un contexte de transformation profonde du secteur des jeux en ligne en Europe. Les régulateurs nationaux et européens travaillent de concert pour établir un cadre juridique adapté aux réalités du marché numérique, tout en garantissant la protection des joueurs et la lutte contre les activités illicites.

Les opérateurs de jeux en ligne doivent désormais répondre à des exigences accrues en matière de transparence, de vérification d'identité et de prévention du jeu excessif. Ces mesures, bien que contraignantes, contribuent à professionnaliser le secteur et à renforcer la confiance des consommateurs envers les plateformes agréées.

Du côté des joueurs, l'impact de ces évolutions se traduit par une offre plus diversifiée et mieux encadrée. Les innovations technologiques, notamment en matière de streaming en direct, de réalité augmentée et de paiements instantanés, transforment l'expérience de jeu et ouvrent de nouvelles perspectives pour l'ensemble de l'industrie.

Les analystes du secteur prévoient une poursuite de la croissance du marché européen des jeux en ligne, portée par la digitalisation des usages et l'émergence de nouveaux segments comme les paris e-sportifs. La France, avec un cadre réglementaire mature géré par l'Autorité Nationale des Jeux (ANJ), occupe une position de référence sur le continent et attire un nombre croissant d'opérateurs internationaux.

Nous continuerons de suivre ces développements de près et de vous informer de toutes les nouveautés qui impactent le monde des jeux en ligne.`;
}

export default async function NewsArticle(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  const content = generatePlaceholderContent(article.excerpt);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "JouerEnLigne.net",
      url: "https://jouerenligne.net",
    },
    publisher: {
      "@type": "Organization",
      name: "JouerEnLigne.net",
      url: "https://jouerenligne.net",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jouerenligne.net/actualites/${slug}/`,
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Actualités", href: "/actualites/" },
          { label: article.title },
        ]}
      />

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-text-light">{article.date}</span>
            <span className="text-sm text-text-light">
              {article.readTime} de lecture
            </span>
          </div>
          <h1 className="text-4xl font-bold text-text leading-tight">
            {article.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none text-text-light leading-relaxed">
          {content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <Newsletter />
    </main>
  );
}
