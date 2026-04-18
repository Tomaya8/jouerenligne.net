import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import { newsArticles } from "../data/articles";

export const metadata: Metadata = {
  title: "Actualités des Jeux en Ligne — JouerEnLigne.net",
  description:
    "Suivez toute l'actualité des jeux en ligne, casinos, paris sportifs et régulation en Europe. Restez informé des dernières nouvelles du secteur.",
  alternates: { canonical: "https://jouerenligne.net/actualites/" },
};

export default function ActualitesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "Actualités" }]} />

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-text mb-4">
          Actualités des Jeux en Ligne
        </h1>
        <p className="text-lg text-text-light max-w-3xl">
          Toutes les dernières nouvelles du monde des casinos en ligne, des paris
          sportifs et de la régulation européenne. Restez informé pour jouer en
          toute connaissance de cause.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {newsArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/actualites/${article.slug}/`}
            className="group block bg-surface border border-border rounded-2xl p-6 hover:border-accent transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-text-light">{article.date}</span>
              <span className="text-sm text-text-light">{article.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-text group-hover:text-accent transition-colors mb-2">
              {article.title}
            </h2>
            <p className="text-text-light leading-relaxed">{article.excerpt}</p>
          </Link>
        ))}
      </section>

      <Newsletter />
    </main>
  );
}
