"use client";

import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "Contact" }]} />

      <h1 className="text-4xl font-bold text-text mb-4">Contact</h1>
      <p className="text-lg text-text-light mb-10 max-w-2xl">
        Vous avez une question, une suggestion ou souhaitez nous contacter pour un
        partenariat ? Remplissez le formulaire ci-dessous ou envoyez-nous un
        e-mail directement.
      </p>

      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          {submitted ? (
            <div className="bg-surface border border-border rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-text mb-3">
                Message envoyé !
              </h2>
              <p className="text-text-light">
                Merci pour votre message. Nous vous répondrons dans les meilleurs
                délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Choisir un sujet</option>
                  <option value="question">Question générale</option>
                  <option value="partenariat">Partenariat / Affiliation</option>
                  <option value="correction">Correction d&apos;information</option>
                  <option value="technique">Problème technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Envoyer le message
              </button>
            </form>
          )}
        </div>

        <aside className="md:col-span-2">
          <div className="bg-surface border border-border rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-text mb-2">E-mail</h3>
              <a
                href="mailto:contact@jouerenligne.net"
                className="text-primary hover:underline"
              >
                contact@jouerenligne.net
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text mb-2">
                Délai de réponse
              </h3>
              <p className="text-text-light">
                Nous nous efforçons de répondre à toutes les demandes sous 48
                heures ouvrables.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text mb-2">
                Jeu responsable
              </h3>
              <p className="text-text-light">
                Si vous avez besoin d&apos;aide concernant une addiction au jeu,
                contactez <strong>Joueurs Info Service</strong> au{" "}
                <strong>09 74 75 13 13</strong> (appel non surtaxé).
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
