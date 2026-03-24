---
source_hash: manual
id: study-tracker
title: StudyTracker
description: "Une plateforme full-stack de développement personnel, construite avec Claude Code, intégrant suivi d'habitudes, gestion OKR, gestion de projets, bibliothèque de contenu et analytique."
tags: [Next.js 15, TypeScript, PostgreSQL, Prisma, Supabase, Claude Code]
demo: https://learning-and-projects-tracker.vercel.app/
repo: https://github.com/Joo-Yan/StudyTracker
wip: false
period: "Mars 2026"
featuredOnHome: true
homeDescription: "Utilisation de Claude Code pour construire une application web full-stack avec 9 modules intégrés reposant sur un schéma PostgreSQL relationnel de 12 modèles ; mise en place d'OAuth via Supabase avec isolation des données par utilisateur ; et création d'un centre d'apprentissage interactif bilingue entièrement côté client avec lecteur de code, schémas, explorateur d'API et quiz."
order: 0
---

# StudyTracker

StudyTracker est une application web full-stack qui centralise la gestion d'objectifs, le suivi d'habitudes, la gestion de projets et la curation de connaissances dans une seule plateforme. Le projet a été développé avec l'assistance de l'IA, principalement Claude Code.

## Modules principaux

- Suivi d'habitudes : icône, couleur et récurrence personnalisables, enregistrement en un clic, heatmap de complétion et suivi des séries.
- Gestion OKR : hiérarchie à trois niveaux, plusieurs types de KR, calcul pondéré de progression et indicateurs d'urgence.
- Gestion de projets : hiérarchie projet-jalon-tâche, tableau Kanban, journal d'activité et liens croisés avec OKR et idées.
- Bibliothèque de contenu : suivi d'articles, vidéos, livres, cours et podcasts avec statut, priorité, note et estimation du temps.
- Tableau d'idées : capture, catégorisation et promotion en un clic vers un projet.
- Boussole de vie : journal de vision libre avec sauvegarde automatique anti-rebond.
- Analytique : fenêtres 7/30/90 jours et six types de graphiques pour les habitudes, OKR, contenus et tâches.
- Centre d'apprentissage interactif : 8 chapitres bilingues (EN/ZH) présentant la stack technique du projet avec lecteur de code, diagramme ER, schéma d'authentification, explorateur d'API, simulateur de déploiement et quiz.

## Stack technique

| Couche | Outils |
|--------|--------|
| Framework | Next.js 15 · React 19 |
| Langage | TypeScript |
| Base de données | PostgreSQL |
| ORM | Prisma |
| Plateforme backend | Supabase (Auth + DB) |
| UI & graphiques | Tailwind CSS · Recharts |
| Gestion d'état | Zustand |
| Développement assisté par IA | Claude Code |
