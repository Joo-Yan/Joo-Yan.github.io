---
source_hash: manual
id: speaking-assessment
title: Système d'évaluation orale IA
description: "Développé le backend Next.js : routes API pour les soumissions audio, pipeline d'évaluation vocale, schéma Supabase et documentation de déploiement."
tags: [Next.js, TypeScript, Supabase, Vercel]
wip: false
period: "Jan 2025 – Avr 2025"
featuredOnHome: true
order: 3
---

C'était un projet d'équipe réalisé lors de ma dernière année à la CUHK-SZ. Ma contribution était le backend : un ensemble de routes API Next.js gérant l'intégralité du pipeline de traitement audio.

Le défi central était d'orchestrer des opérations asynchrones : un enregistrement arrive, est validé, envoyé à une API tierce d'évaluation vocale, la réponse est analysée, un score et une transcription sont retournés, et tout est écrit dans Supabase. Concevoir le schéma correctement — horodatages, compteurs de tentatives, blobs de retour — a pris plusieurs itérations.

J'ai aussi rédigé la documentation de déploiement. Pas glamour, mais ça compte. Un système que seul le développeur original peut déployer n'est pas vraiment terminé.

## Tech Stack

| Couche | Outils |
|--------|--------|
| Framework | Next.js (App Router) |
| Langage | TypeScript |
| Base de données | Supabase (PostgreSQL) |
| Déploiement | Vercel |
