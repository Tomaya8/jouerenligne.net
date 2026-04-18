"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-surface border border-border rounded-2xl p-8 text-center mt-16">
      <h2 className="text-2xl font-bold text-text mb-2">
        Restez informé des dernières actualités
      </h2>
      <p className="text-text-light mb-6 max-w-xl mx-auto">
        Recevez nos guides, analyses et bons plans directement dans votre boîte mail. Pas de spam, uniquement du contenu de qualité.
      </p>
      {submitted ? (
        <p className="text-primary font-semibold">Merci pour votre inscription !</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            S&apos;inscrire
          </button>
        </form>
      )}
    </section>
  );
}
