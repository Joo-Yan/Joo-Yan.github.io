---
source_hash: manual
id: paris-socio-elect
title: ParisSocioElect
description: Un outil de cartographie socio-électorale interactive visualisant le premier tour des élections municipales de Paris 2026, croisé avec les données INSEE sur le logement et les revenus. Révèle les corrélations spatiales entre densité de logements sociaux, abstention et géographies des votes sur 903 bureaux de vote.
tags: [Python, GeoPandas, MapLibre GL JS, D3.js, GitHub Actions]
demo: https://joo-yan.github.io/ParisSocioElect-ElectionsMunicipales2026
repo: https://github.com/Joo-Yan/ParisSocioElect-ElectionsMunicipales2026
wip: false
period: "2026"
featuredOnHome: true
order: 1
---

*Cartographier ceux qui ne votent pas — et se demander pourquoi*

## La question derrière la carte

Je ne peux pas voter en France.

En tant que résidente étrangère, j'ai vu passer les élections. Et longtemps, ce qui m'a intriguée était les abstentions. Au premier tour des élections municipales de Paris 2026, environ quatre électeurs inscrits sur dix ne se sont pas déplacés. Dans certains bureaux, c'était presque la moitié.

Je me demandais : qu'est-ce qu'on ressent quand on a ce droit et qu'on choisit de ne pas l'exercer ? Je le dis avec une vraie curiosité, et peut-être un peu d'envie. Le droit de vote est quelque chose que je n'ai pas, et à quoi je pense plus que la plupart de ceux qui l'ont.

Quand les résultats du premier tour sont tombés le soir du 16 mars, j'ai décidé de regarder les données.

## Une carte n'est pas qu'une carte

La prémisse technique est simple : combiner les résultats électoraux officiels au niveau du bureau de vote avec les indicateurs socioéconomiques de l'INSEE — revenus, densité de logements sociaux — et chercher des structures spatiales. L'abstention est-elle plus élevée dans les quartiers défavorisés ? Les candidats obtiennent-ils leurs soutiens différemment selon la géographie socioéconomique de la ville ?

Mais l'expérience d'utilisation de l'outil, c'est autre chose.

Paris est une ville que je connais à pied. J'ai marché dans le 13e, attendu un bus dans le 19e, pris un café dans le 11e. Quand je clique sur un bureau de vote dans la carte et que je vois que 47 % des électeurs inscrits ne se sont pas déplacés, je ne vois pas seulement un chiffre. Je vois une rue. J'imagine un immeuble, et j'essaie d'imaginer les personnes à l'intérieur.

Je ne peux pas connaître leurs histoires. Mais la carte me donne un moyen de maintenir la question ouverte — de zoomer, de cliquer, de m'attarder sur la texture locale d'un phénomène à l'échelle de la ville. C'est ce que je voulais construire : pas seulement une visualisation, mais un outil d'attention lente.

## Ce que montrent les données

L'analyse couvre 903 bureaux de vote dans les 20 arrondissements de Paris, croisés avec :

- Revenu médian des ménages — INSEE Filosofi, niveau IRIS (2021)
- Densité de logements sociaux — logements HLM par km², INSEE RPLS (2024)
- Taux d'abstention — Ministère de l'Intérieur, 1er tour, 16 mars 2026

La corrélation spatiale entre la densité de logements sociaux et l'abstention est positive et constante dans toute la ville. Les bureaux avec une densité HLM plus élevée ont tendance à afficher une abstention plus forte.

Une note méthodologique que je prends au sérieux : cette corrélation est structurellement sous-estimée. Les chiffres officiels d'abstention ne comptent que les électeurs inscrits — mais la non-inscription est elle-même une forme de désengagement politique, concentrée précisément dans les populations les plus difficiles à atteindre : migrants récents, personnes à mobilité fréquente, personnes en situation précaire. L'écart réel de participation politique entre quartiers riches et pauvres est probablement plus grand que ce qu'aucun jeu de données peut montrer.

## Note sur la méthode de construction

Ce projet a été construit rapidement — des données brutes au site déployé en quelques jours — et cette vitesse n'a été possible qu'avec une assistance IA significative. J'ai utilisé Claude (Anthropic) tout au long : pour l'architecture du pipeline, la logique de jointure spatiale, la gestion d'état du frontend et la documentation. Je veux être transparent : l'IA a été un vrai collaborateur ici, pas juste une autocomplétion.

Je pense que ça vaut la peine de le dire clairement. Les idées, les questions de recherche, les choix méthodologiques, les heures passées à cliquer dans les bureaux de vote et à lire sur la géographie électorale — c'était moi. L'implémentation a été plus rapide qu'elle ne l'aurait été autrement. Ce compromis mérite d'être nommé honnêtement.

## Pourquoi ce projet

J'ai construit ParisSocioElect parce que je voulais comprendre quelque chose qui m'importe, en utilisant des outils que j'essayais de maîtriser. Ça se situe à une intersection qui m'intéresse vraiment : les données spatiales, la sociologie politique, et la question de qui est compté et qui ne l'est pas.

En tant que personne sans droit de vote, j'ai fait une carte sur le fait de ne pas voter. Il y a quelque chose d'un peu ironique dans tout ça — ou peut-être quelque chose d'approprié.

## Tech Stack

| Couche | Outils |
|--------|--------|
| Traitement des données | Python · pandas · GeoPandas · Shapely · PyProj |
| Carte interactive | MapLibre GL JS v3 |
| Graphique statistique | D3.js v7 |
| Frontend | Vanilla HTML/CSS/JS |
| Déploiement | GitHub Actions → GitHub Pages |

---

*Sources de données : Ministère de l'Intérieur (résultats électoraux, 16 mars 2026), données ouvertes Ville de Paris (limites des bureaux), INSEE Filosofi 2021, INSEE RPLS 2024. Licence : MIT.*
