import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import FAQ from "../../components/FAQ";
import Newsletter from "../../components/Newsletter";
import { casinoReviews } from "../../data/casinos";

export async function generateStaticParams() {
  return casinoReviews.map((review) => ({
    slug: review.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const review = casinoReviews.find((r) => r.slug === slug);

  if (!review) {
    return { title: "Casino non trouve" };
  }

  return {
    title: review.metaTitle,
    description: review.metaDescription,
  };
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "star-filled" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-lg font-bold text-text">{rating}/5</span>
    </div>
  );
}

const reviewFAQ = [
  {
    question: "Ce casino est-il legal en France ?",
    answer:
      "Oui, tous les casinos presentes sur JouerEnLigne.net detiennent une licence delivree par l'Autorite Nationale des Jeux (ANJ), garantissant leur legalite et la protection des joueurs francais.",
  },
  {
    question: "Combien de temps prend un retrait ?",
    answer:
      "Les delais de retrait varient selon la methode choisie. Les portefeuilles electroniques (Skrill, Neteller) permettent generalement des retraits en moins de 24 heures, tandis que les virements bancaires prennent entre 2 et 5 jours ouvrables.",
  },
  {
    question: "Le bonus de bienvenue est-il cumulable avec d'autres offres ?",
    answer:
      "En general, le bonus de bienvenue ne peut pas etre cumule avec d'autres promotions. Cependant, une fois le bonus de bienvenue utilise, vous pouvez profiter des offres regulieres comme le cashback, les tours gratuits hebdomadaires ou le programme de fidelite.",
  },
  {
    question: "Puis-je jouer sur mobile ?",
    answer:
      "Oui, la majorite des casinos en ligne sont optimises pour le jeu sur mobile. Vous pouvez y acceder directement depuis le navigateur de votre smartphone ou tablette, et certains proposent egalement des applications dediees pour iOS et Android.",
  },
];

export default async function CasinoReviewPage({ params }: Props) {
  const { slug } = await params;
  const review = casinoReviews.find((r) => r.slug === slug);

  if (!review) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Casino non trouve</h1>
        <p className="text-text-light mb-6">
          Le casino que vous recherchez n&apos;existe pas ou a ete retire de notre comparatif.
        </p>
        <Link
          href="/casino-en-ligne/"
          className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
        >
          Voir tous les casinos
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Casinos en ligne", href: "/casino-en-ligne/" },
            { label: review.name },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="gradient-hero text-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{review.name}</h1>
              <Stars rating={review.rating} />
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <a
                href="#"
                className="px-8 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors text-center"
                rel="nofollow noopener"
              >
                Visiter {review.name}
              </a>
              <span className="text-xs text-gray-400 text-center">18+ | Conditions generales applicables</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Table of contents */}
        <nav className="bg-surface border border-border rounded-xl p-5 mb-10">
          <h2 className="font-bold text-primary mb-3">Sommaire de l&apos;avis</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>
              <a href="#introduction" className="text-accent hover:underline">1. Introduction</a>
            </li>
            <li>
              <a href="#bonus" className="text-accent hover:underline">2. Bonus de bienvenue</a>
            </li>
            <li>
              <a href="#avantages" className="text-accent hover:underline">3. Avantages et inconvenients</a>
            </li>
            <li>
              <a href="#jeux" className="text-accent hover:underline">4. Catalogue de jeux</a>
            </li>
            <li>
              <a href="#paiements" className="text-accent hover:underline">5. Methodes de paiement</a>
            </li>
            <li>
              <a href="#support" className="text-accent hover:underline">6. Service client</a>
            </li>
            <li>
              <a href="#licence" className="text-accent hover:underline">7. Licence et securite</a>
            </li>
            <li>
              <a href="#verdict" className="text-accent hover:underline">8. Verdict final</a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section id="introduction" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
          <p className="text-text-light leading-relaxed">{review.intro}</p>
        </section>

        {/* Bonus */}
        <section id="bonus" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Bonus de bienvenue</h2>
          <div className="bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-xl p-6 border border-gold/20 mb-4">
            <p className="text-gold font-bold text-2xl mb-2">{review.bonus.title}</p>
            <p className="text-text-light leading-relaxed">{review.bonus.description}</p>
          </div>
          <div className="bg-surface rounded-xl p-5 border border-border">
            <h3 className="font-semibold text-primary mb-2">Conditions du bonus</h3>
            <p className="text-text-light text-sm leading-relaxed">{review.bonus.conditions}</p>
          </div>
        </section>

        {/* Pros / Cons */}
        <section id="avantages" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Avantages et inconvenients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-success/5 rounded-xl p-5 border border-success/20">
              <h3 className="font-semibold text-success mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Points forts
              </h3>
              <ul className="space-y-2">
                {review.pros.map((pro, i) => (
                  <li key={i} className="text-sm text-text-light flex items-start gap-2">
                    <span className="text-success mt-0.5 shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-danger/5 rounded-xl p-5 border border-danger/20">
              <h3 className="font-semibold text-danger mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Points faibles
              </h3>
              <ul className="space-y-2">
                {review.cons.map((con, i) => (
                  <li key={i} className="text-sm text-text-light flex items-start gap-2">
                    <span className="text-danger mt-0.5 shrink-0">-</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Games */}
        <section id="jeux" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Catalogue de jeux</h2>
          <p className="text-text-light leading-relaxed">{review.games}</p>
        </section>

        {/* Payments */}
        <section id="paiements" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Methodes de paiement</h2>
          <p className="text-text-light leading-relaxed">{review.payments}</p>
        </section>

        {/* Support */}
        <section id="support" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Service client</h2>
          <p className="text-text-light leading-relaxed">{review.support}</p>
        </section>

        {/* License */}
        <section id="licence" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Licence et securite</h2>
          <p className="text-text-light leading-relaxed">{review.license}</p>
        </section>

        {/* Verdict */}
        <section id="verdict" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Verdict final</h2>
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-bold text-primary">{review.rating}/5</span>
              <Stars rating={review.rating} />
            </div>
            <p className="text-text-light leading-relaxed">{review.verdict}</p>
          </div>
          <div className="text-center mt-6">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors"
              rel="nofollow noopener"
            >
              Visiter {review.name}
            </a>
            <p className="text-xs text-text-light mt-2">
              18+ | Jouez responsablement | Conditions generales applicables
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="border-t border-border pt-6 mb-6">
          <Link
            href="/casino-en-ligne/"
            className="text-accent font-medium hover:underline flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au comparatif des casinos
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4">
        <FAQ items={reviewFAQ} title={`Questions frequentes sur ${review.name}`} />
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: review.name,
            },
            author: {
              "@type": "Organization",
              name: "JouerEnLigne.net",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating,
              bestRating: 5,
              worstRating: 1,
            },
            name: review.metaTitle,
            reviewBody: review.verdict,
            publisher: {
              "@type": "Organization",
              name: "JouerEnLigne.net",
              url: "https://jouerenligne.net",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: reviewFAQ.map((item) => ({
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
