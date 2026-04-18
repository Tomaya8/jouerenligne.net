import type { Casino } from "../components/CasinoCard";

export const casinos: Casino[] = [
  {
    slug: "lucky-casino",
    name: "Lucky Casino",
    rating: 5,
    bonus: "500€ + 200 tours gratuits",
    bonusDetails: "Bonus de bienvenue sur les 3 premiers dépôts. Mise x35.",
    features: ["Live casino", "Application mobile", "Support 24/7", "Retraits rapides"],
    payments: ["Visa", "Mastercard", "Skrill", "Neteller", "Virement"],
    license: "ANJ",
  },
  {
    slug: "royal-vegas",
    name: "Royal Vegas",
    rating: 4,
    bonus: "300€ + 100 tours gratuits",
    bonusDetails: "100% jusqu'à 300€ sur le premier dépôt. Mise x30.",
    features: ["2000+ jeux", "Croupiers en direct", "Programme VIP", "Cryptomonnaies"],
    payments: ["Visa", "Mastercard", "PayPal", "Bitcoin", "Paysafecard"],
    license: "ANJ",
  },
  {
    slug: "monte-carlo-digital",
    name: "Monte Carlo Digital",
    rating: 4,
    bonus: "1000€ + 150 tours gratuits",
    bonusDetails: "Bonus progressif sur les 4 premiers dépôts. Mise x40.",
    features: ["Jackpots progressifs", "Tournois quotidiens", "Cashback 10%", "VIP exclusif"],
    payments: ["Visa", "Mastercard", "Skrill", "ecoPayz", "Virement"],
    license: "ANJ",
  },
  {
    slug: "paris-casino",
    name: "Paris Casino",
    rating: 4,
    bonus: "200€ + 50 tours gratuits",
    bonusDetails: "50% jusqu'à 200€ + 50 free spins sur Book of Dead. Mise x35.",
    features: ["Casino mobile", "Jeux exclusifs", "Support français", "Retraits 24h"],
    payments: ["Visa", "Mastercard", "Neteller", "Trustly"],
    license: "ANJ",
  },
  {
    slug: "riviera-play",
    name: "Riviera Play",
    rating: 5,
    bonus: "750€ + 250 tours gratuits",
    bonusDetails: "Pack bienvenue sur 3 dépôts. Conditions de mise x32.",
    features: ["3000+ jeux", "Live chat 24/7", "Retraits express", "Bonus hebdomadaires"],
    payments: ["Visa", "Mastercard", "Skrill", "Neteller", "Apple Pay"],
    license: "ANJ",
  },
];

export interface CasinoReview {
  slug: string;
  name: string;
  rating: number;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bonus: { title: string; description: string; conditions: string };
  pros: string[];
  cons: string[];
  games: string;
  payments: string;
  support: string;
  license: string;
  verdict: string;
}

export const casinoReviews: CasinoReview[] = [
  {
    slug: "lucky-casino",
    name: "Lucky Casino",
    rating: 5,
    metaTitle: "Lucky Casino Avis 2025 : Bonus, Jeux & Notre Verdict",
    metaDescription: "Découvrez notre avis complet sur Lucky Casino : bonus de bienvenue, catalogue de jeux, méthodes de paiement, licence ANJ et verdict final.",
    intro: "Lucky Casino s'est imposé comme l'un des casinos en ligne les plus populaires auprès des joueurs français. Lancé en 2020, cet opérateur licencié par l'ANJ propose une expérience de jeu complète avec un catalogue de plus de 2500 titres, un bonus de bienvenue généreux et un service client disponible 24h/24. Dans cet avis détaillé, nous analysons chaque aspect de la plateforme pour vous aider à faire un choix éclairé.",
    bonus: {
      title: "500€ + 200 tours gratuits",
      description: "Le bonus de bienvenue de Lucky Casino se décompose sur vos 3 premiers dépôts : 100% jusqu'à 200€ sur le 1er dépôt, 50% jusqu'à 150€ sur le 2e, et 75% jusqu'à 150€ sur le 3e. Les 200 tours gratuits sont distribués par tranches de 20 par jour pendant 10 jours.",
      conditions: "Les conditions de mise sont fixées à x35, ce qui est dans la moyenne du marché. Vous disposez de 30 jours pour remplir ces conditions. Les mises sur les machines à sous comptent à 100%, tandis que les jeux de table comptent à 10%.",
    },
    pros: ["Catalogue de plus de 2500 jeux variés", "Licence ANJ garantissant la sécurité des joueurs", "Retraits traités en moins de 24 heures", "Support client francophone disponible 24/7", "Application mobile performante iOS et Android", "Programme de fidélité avec cashback hebdomadaire"],
    cons: ["Conditions de mise de x35 sur le bonus", "Pas d'option de paiement par cryptomonnaie", "Certains jeux exclus du bonus de bienvenue"],
    games: "Lucky Casino propose plus de 2500 jeux provenant d'éditeurs renommés comme NetEnt, Microgaming, Play'n GO, Evolution Gaming et Pragmatic Play. Le catalogue inclut des machines à sous classiques et vidéo, des jeux de table, un casino en direct avec plus de 100 tables disponibles, et des jeux à jackpot progressif.",
    payments: "Les méthodes de paiement acceptées incluent Visa, Mastercard, Skrill, Neteller et le virement bancaire. Le dépôt minimum est de 10€ et le retrait minimum de 20€. Les retraits par portefeuille électronique sont traités en moins de 24 heures.",
    support: "Le service client est disponible 24h/24 et 7j/7 via live chat, e-mail et téléphone. L'équipe est francophone et réactive, avec un temps de réponse moyen de 2 minutes sur le chat en direct.",
    license: "Lucky Casino opère sous licence de l'Autorité Nationale des Jeux (ANJ), le régulateur français des jeux d'argent en ligne.",
    verdict: "Lucky Casino mérite sa place parmi les meilleurs casinos en ligne pour les joueurs français. Son catalogue de jeux varié, ses retraits rapides et son service client exemplaire en font une plateforme de choix.",
  },
  {
    slug: "royal-vegas",
    name: "Royal Vegas",
    rating: 4,
    metaTitle: "Royal Vegas Avis 2025 : Bonus, Catalogue & Verdict Complet",
    metaDescription: "Notre avis détaillé sur Royal Vegas : 2000+ jeux, bonus de 300€, paiements en crypto et programme VIP.",
    intro: "Royal Vegas est un casino en ligne établi qui a su se renouveler pour répondre aux attentes des joueurs modernes. Avec son catalogue de plus de 2000 jeux, l'acceptation des cryptomonnaies et un programme VIP attractif, il se positionne comme une alternative sérieuse sur le marché français.",
    bonus: {
      title: "300€ + 100 tours gratuits",
      description: "Royal Vegas offre un bonus de 100% jusqu'à 300€ sur votre premier dépôt, accompagné de 100 tours gratuits sur la machine à sous Starburst.",
      conditions: "Les conditions de mise sont de x30, légèrement en dessous de la moyenne du marché. Vous avez 21 jours pour compléter le wagering. Les gains issus des tours gratuits sont plafonnés à 100€.",
    },
    pros: ["Accepte Bitcoin et autres cryptomonnaies", "Conditions de mise raisonnables (x30)", "Plus de 2000 jeux disponibles", "Programme VIP à plusieurs niveaux", "Croupiers en direct de qualité"],
    cons: ["Gains des tours gratuits plafonnés à 100€", "Pas de support téléphonique", "Interface mobile à améliorer", "Délai de retrait de 48h minimum"],
    games: "Avec plus de 2000 titres, Royal Vegas couvre tous les genres : machines à sous des meilleurs éditeurs, blackjack et roulette en plusieurs variantes, baccarat, video poker, et un espace live casino fourni par Evolution Gaming.",
    payments: "Royal Vegas se distingue par l'acceptation des cryptomonnaies (Bitcoin, Ethereum, Litecoin) en plus des méthodes traditionnelles. Le dépôt minimum est de 10€.",
    support: "Le support client est disponible via live chat (24/7) et e-mail. L'absence de support téléphonique est regrettable.",
    license: "Royal Vegas détient une licence ANJ, assurant aux joueurs français un cadre de jeu sécurisé et réglementé.",
    verdict: "Royal Vegas est un excellent choix pour les joueurs tech-savvy qui apprécient les paiements en cryptomonnaie et un programme VIP structuré.",
  },
  {
    slug: "monte-carlo-digital",
    name: "Monte Carlo Digital",
    rating: 4,
    metaTitle: "Monte Carlo Digital Avis 2025 : Le Casino Premium en Ligne",
    metaDescription: "Avis complet Monte Carlo Digital : bonus jusqu'à 1000€, jackpots progressifs, tournois quotidiens.",
    intro: "Monte Carlo Digital capitalise sur le prestige de la Riviera pour proposer une expérience de casino en ligne premium. Avec un bonus de bienvenue pouvant atteindre 1000€ et un programme de tournois quotidiens, cet opérateur vise les joueurs à la recherche d'une expérience haut de gamme.",
    bonus: {
      title: "1000€ + 150 tours gratuits",
      description: "Le pack de bienvenue se répartit sur vos 4 premiers dépôts avec des bonus de 100%, 75%, 50% et 25% respectivement. Les 150 tours gratuits sont attribués sur le premier dépôt.",
      conditions: "Les conditions de mise sont de x40, au-dessus de la moyenne. Le délai pour remplir ces conditions est de 30 jours. Dépôt minimum de 20€ pour activer le bonus.",
    },
    pros: ["Bonus de bienvenue très généreux (1000€)", "Tournois quotidiens avec prize pools attractifs", "Cashback de 10% sans conditions de mise", "Programme VIP exclusif avec gestionnaire dédié", "Jackpots progressifs régulièrement millionnaires"],
    cons: ["Conditions de mise élevées (x40)", "Dépôt minimum de 20€", "Catalogue légèrement inférieur à la concurrence", "Pas d'application mobile dédiée"],
    games: "Monte Carlo Digital propose environ 1800 jeux avec un accent sur les jackpots progressifs et les tournois. Les éditeurs présents incluent Microgaming, NetEnt, Yggdrasil et Red Tiger.",
    payments: "Les méthodes incluent Visa, Mastercard, Skrill, ecoPayz et le virement bancaire. Le dépôt minimum est de 20€.",
    support: "Le support client est disponible de 8h à minuit via live chat et e-mail. Un numéro de téléphone est disponible pour les membres VIP.",
    license: "Monte Carlo Digital est licencié par l'ANJ et respecte toutes les réglementations françaises.",
    verdict: "Monte Carlo Digital conviendra aux joueurs qui recherchent des bonus importants et une expérience premium. Les tournois quotidiens et le cashback sont de vrais atouts.",
  },
];
