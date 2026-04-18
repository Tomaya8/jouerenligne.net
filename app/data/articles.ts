export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export const blogArticles: Article[] = [
  {
    slug: "guide-debutant-casino-en-ligne",
    title: "Guide du Débutant : Comment Commencer au Casino en Ligne",
    excerpt:
      "Découvrez les bases pour bien débuter dans l'univers des casinos en ligne. De l'inscription au premier dépôt, en passant par le choix des jeux et la gestion de votre bankroll, ce guide complet vous accompagne pas à pas pour une expérience de jeu sécurisée et divertissante.",
    category: "Guide",
    date: "2026-04-10",
    readTime: "8 min",
  },
  {
    slug: "meilleures-strategies-blackjack",
    title: "Les Meilleures Stratégies au Blackjack pour Maximiser vos Gains",
    excerpt:
      "Maîtrisez les techniques éprouvées pour améliorer vos chances au blackjack. De la stratégie de base au comptage de cartes, apprenez les méthodes utilisées par les joueurs professionnels pour réduire l'avantage de la maison et optimiser chaque main.",
    category: "Stratégie",
    date: "2026-04-05",
    readTime: "10 min",
  },
  {
    slug: "comprendre-bonus-casino",
    title: "Comprendre les Bonus de Casino : Types, Conditions et Pièges à Éviter",
    excerpt:
      "Les bonus de casino peuvent être très avantageux, mais encore faut-il savoir les décrypter. Apprenez à distinguer les offres réellement intéressantes des promotions trompeuses grâce à notre analyse détaillée des conditions de mise et des termes associés.",
    category: "Analyse",
    date: "2026-03-28",
    readTime: "7 min",
  },
  {
    slug: "jeu-responsable-limites",
    title: "Jeu Responsable : Comment Fixer ses Limites et Jouer en Sécurité",
    excerpt:
      "Le jeu doit rester un plaisir. Découvrez les outils et les méthodes pour garder le contrôle de votre activité de jeu, reconnaître les signes d'addiction et accéder aux ressources d'aide disponibles en France et en Europe.",
    category: "Prévention",
    date: "2026-03-20",
    readTime: "6 min",
  },
  {
    slug: "machines-a-sous-rtp-volatilite",
    title: "Machines à Sous : Comprendre le RTP et la Volatilité",
    excerpt:
      "Le taux de retour au joueur et la volatilité sont les deux indicateurs clés pour choisir une machine à sous. Apprenez à les interpréter pour sélectionner les jeux qui correspondent à votre style et à votre budget.",
    category: "Guide",
    date: "2026-03-15",
    readTime: "9 min",
  },
  {
    slug: "comparatif-methodes-paiement-casino",
    title: "Comparatif des Méthodes de Paiement pour les Casinos en Ligne",
    excerpt:
      "Visa, PayPal, cryptomonnaies, virements bancaires... Quelle méthode de paiement choisir pour vos dépôts et retraits au casino ? Nous comparons les délais, les frais et la sécurité de chaque option disponible.",
    category: "Analyse",
    date: "2026-03-08",
    readTime: "8 min",
  },
];

export const newsArticles: Article[] = [
  {
    slug: "regulation-europeenne-jeux-en-ligne-2026",
    title: "Nouvelle Régulation Européenne des Jeux en Ligne : Ce qui Change en 2026",
    excerpt:
      "L'Union européenne adopte un cadre harmonisé pour les jeux d'argent en ligne. Découvrez les nouvelles règles qui impactent les opérateurs et les joueurs, notamment en matière de protection des consommateurs et de lutte contre le blanchiment.",
    category: "Régulation",
    date: "2026-04-15",
    readTime: "5 min",
  },
  {
    slug: "evolution-gaming-nouveau-jeu-live",
    title: "Evolution Gaming Lance un Nouveau Jeu de Casino en Direct Révolutionnaire",
    excerpt:
      "Le leader mondial du casino en direct dévoile son dernier titre qui promet de redéfinir l'expérience de jeu immersive. Avec des fonctionnalités innovantes et une technologie de streaming avancée, ce nouveau jeu attire déjà l'attention des joueurs.",
    category: "Industrie",
    date: "2026-04-12",
    readTime: "4 min",
  },
  {
    slug: "arjel-sanctions-operateurs-illegaux",
    title: "L'ANJ Renforce ses Sanctions Contre les Opérateurs Illégaux",
    excerpt:
      "L'Autorité Nationale des Jeux intensifie ses actions contre les plateformes de jeux non autorisées en France. Plusieurs sites ont été bloqués et des amendes record ont été prononcées pour protéger les joueurs français.",
    category: "Régulation",
    date: "2026-04-08",
    readTime: "4 min",
  },
  {
    slug: "paris-sportifs-tendances-2026",
    title: "Paris Sportifs : Les Grandes Tendances de 2026",
    excerpt:
      "Le marché des paris sportifs en ligne continue d'évoluer avec l'arrivée de nouvelles technologies. Intelligence artificielle, paris en direct améliorés et nouveaux marchés : tour d'horizon des innovations qui transforment le secteur.",
    category: "Tendances",
    date: "2026-04-02",
    readTime: "6 min",
  },
  {
    slug: "jackpot-record-casino-en-ligne",
    title: "Un Joueur Français Remporte un Jackpot Record de 4,2 Millions d'Euros",
    excerpt:
      "Un joueur chanceux a décroché le plus gros jackpot en ligne de l'année sur une machine à sous progressive. Retour sur cet événement exceptionnel et les détails de ce gain historique.",
    category: "Événement",
    date: "2026-03-25",
    readTime: "3 min",
  },
];
