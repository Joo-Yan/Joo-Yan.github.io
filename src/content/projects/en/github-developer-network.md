---
id: github-developer-network
title: "GitHub Developer Network Analysis"
description: "Construction and analysis of large-scale GitHub collaboration networks to study structural transitions in open-source development in the age of generative AI."
tags: [Python, igraph, Louvain Algorithm, Network Analysis, Big Data]
wip: false
period: "Feb 2026 – May 2026"
featuredOnHome: false
order: 5
---

## Background
This project was developed within the framework of the Cassiopée course at Télécom SudParis, conducted in teams of three.

The goal was to explore how developer collaboration in the open-source world changed during the era of generative AI. We built and analyzed global GitHub collaboration networks spanning multiple years, looking for structural shifts.

## Methodology

- **Data Engineering** — Processed large-scale GitHub datasets, filtering out forked repositories and bot accounts to ensure signal quality.
- **Graph Construction** — Modeled developers as nodes and shared repository contributions as weighted undirected edges. Generated both global yearly networks and 10 language-specific ecosystems (Python, JavaScript, TypeScript, C++, and others).
- **Scalability** — Migrated from NetworkX to igraph and adopted a batch-based edge generation strategy, resolving critical memory bottlenecks and drastically reducing execution time on large datasets.
- **Community Detection** — Applied the Louvain multilevel algorithm to compute modularity, community distributions, relative giant component sizes, and network density across timelines.

## Key Findings

A clear structural transition emerged around 2022: the network shifted from expansion to consolidation. While the number of active nodes and unique communities decreased, edge density and the relative size of the giant component surged — suggesting that developers concentrated their collaboration rather than broadening it.

Language ecosystems diverged significantly. JavaScript and HTML saw heavy collaboration concentration (fewer communities, far more edges), while C++ and Java experienced an overall contraction in public co-contributions.

## Step Back
To be honest, while we successfully built the pipeline, we were unable to draw particularly effective conclusions due to limited data, imprecise evaluation algorithms, and an insufficiently clear research direction.

Although the chosen topic focused on the impact of Large Language Models (LLMs) on the open-source software collaboration ecosystem, the methodology only examined changes from a chronological perspective. It failed to measure the specific influence of LLMs or account for other events occurring during the same period. Additionally, the extent to which GitHub can truly represent open source remains a subject for further research.

