---
id: follow-gass
title: follow-gass skill
description: "Un pipeline automatisé de veille médiatique et de digest quotidien, distribué sous forme de skill Claude Code, conçu pour une communauté de fans chinois."
tags: [GitHub Actions, Node.js, Claude Code, Resend, RSS, LLM]
repo: https://github.com/BubblePub/follow-gass
wip: false
period: "Mai 2026"
featuredOnHome: false
order: 4
---

*Ce projet ne reflète aucune prise de position politique de ma part — il a été conçu comme un outil pratique pour une communauté de fans.*

## Contexte

Il existe une petite communauté en ligne, en Chine, qui suit de très près Gabriel Attal et Stéphane Séjourné, parcourant quotidiennement les médias politiques français pour rester informée sur les deux personnalités. Éplucher des sources dispersées fait partie du plaisir, mais un peu d'automatisation peut faciliter la tâche. J'ai donc conçu un workflow qui collecte, filtre et livre automatiquement une synthèse quotidienne structurée. Le public cible étant chinois, le digest est produit uniquement en chinois.

Le pipeline est générique et peut être adapté pour suivre n'importe quel sujet ou personnalité publique.

## Fonctionnement

- **Couche données** — Un job GitHub Actions (quotidien, 04h00 UTC) collecte les flux RSS Google News et le calendrier officiel du commissaire européen, tague les articles avec des signaux de fraîcheur et de co-occurrence, et publie un `feed.json` structuré dans le dépôt public.
- **Couche synthèse** — Un skill Claude Code (`/gass`) lit le feed central et orchestre une chaîne de prompts LLM (clustering → classement pondéré → résumé en chinois → comparaison inter-sources → mise en page) pour produire le digest.
- **Couche livraison** — `deliver.js` restitue les URLs raccourcies et achemine le digest vers stdout ou un email HTML via Resend.

## Points techniques notables

- **Fenêtre glissante 48 h + marquage `isNew`** — les événements dont la couverture chevauche la coupure quotidienne sont regroupés correctement, sans être scindés en deux bulletins.
- **Règle de co-occurrence stricte** — tout article mentionnant simultanément les deux personnalités est toujours placé en tête du digest, indépendamment des autres signaux de classement.
- **Découplage production / consommation** — le pipeline GitHub Actions et le skill Claude Code sont entièrement indépendants ; les utilisateurs obtiennent leur digest sans clé API ni configuration en amont.
- **Encodage URL allégé** — les URLs du feed sont stockées sous forme de courts identifiants pour réduire le coût de contexte LLM, puis restituées à la livraison.
