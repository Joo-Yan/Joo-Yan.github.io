---
id: github-developer-network
title: "Analyse du réseau de développeurs GitHub"
description: "Construction et analyse de réseaux de collaboration GitHub à grande échelle pour étudier les transitions structurelles du développement open-source à l'ère de l'IA générative."
tags: [Python, igraph, Algorithme de Louvain, Analyse de réseaux, Big Data]
wip: false
period: "Fév 2026 – Mai 2026"
order: 5
---

## Contexte
Ce projet a été développé dans le cadre du cours Cassiopée à Télécom SudParis, réalisé en équipes de trois personnes.

L'objectif était d'explorer comment la collaboration entre développeurs dans le monde open-source a évolué à l'ère de l'IA générative. Nous avons construit et analysé des réseaux de collaboration GitHub couvrant plusieurs années, en cherchant des transitions structurelles.

## Méthodologie

- **Ingénierie des données** — Traitement de grands ensembles de données GitHub, avec filtrage des dépôts forkés et des comptes bots pour garantir la qualité du signal.
- **Construction du graphe** — Modélisation des développeurs comme nœuds et des contributions partagées à un même dépôt comme arêtes pondérées non orientées. Génération de réseaux annuels globaux ainsi que de 10 écosystèmes par langage (Python, JavaScript, TypeScript, C++, et autres).
- **Scalabilité** — Migration de NetworkX vers igraph et adoption d'une stratégie de génération d'arêtes par lots, résolvant des goulots d'étranglement mémoire critiques et réduisant drastiquement le temps d'exécution sur de grands jeux de données.
- **Détection de communautés** — Application de l'algorithme de Louvain pour calculer la modularité, la distribution des communautés, la taille relative de la composante géante et la densité du réseau au fil du temps.

## Résultats clés

Une transition structurelle nette est apparue autour de 2022 : le réseau est passé d'une phase d'expansion à une phase de consolidation. Alors que le nombre de nœuds actifs et de communautés uniques a diminué, la densité des arêtes et la taille relative de la composante géante ont fortement augmenté — suggérant une concentration des collaborations plutôt qu'un élargissement.

Les écosystèmes par langage ont divergé de manière significative. JavaScript et HTML ont connu une forte concentration des collaborations (moins de communautés, mais bien plus d'arêtes), tandis que C++ et Java ont affiché une contraction globale des co-contributions publiques.

## Recul
Pour être honnête, d'après moi, bien que nous ayons réussi à construire le pipeline, nous n'avons pas été en mesure de tirer des conclusions particulièrement solides, en raison de données limitées, d'algorithmes d'évaluation imprécis et d'une direction de recherche insuffisamment définie.

Bien que le sujet choisi portât sur l'impact des grands modèles de langage (LLMs) sur l'écosystème de collaboration open-source, la méthodologie n'a examiné les changements que sous un angle chronologique. Elle n'a pas permis de mesurer l'influence spécifique des LLMs ni de tenir compte d'autres événements survenus durant la même période. Par ailleurs, la mesure dans laquelle GitHub peut véritablement représenter l'open-source reste un sujet à approfondir.
