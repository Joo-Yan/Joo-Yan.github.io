---
id: paris-socio-elect
title: ParisSocioElect
description: An interactive socio-electoral mapping tool visualising the first round of the 2026 Paris municipal elections, cross-referenced with INSEE housing and income data. Reveals spatial correlations between social housing density, voter abstention, and candidate vote geographies across 903 voting precincts.
tags: [Python, GeoPandas, MapLibre GL JS, D3.js, GitHub Actions]
demo: https://joo-yan.github.io/ParisSocioElect-ElectionsMunicipales2026
repo: https://github.com/Joo-Yan/ParisSocioElect-ElectionsMunicipales2026
wip: false
period: "Mar 2026"
featuredOnHome: true
homeDescription: "Built an end-to-end spatial analysis pipeline using Python and GeoPandas to join 2026 Paris municipal election results across 903 voting precincts with INSEE housing and income data, then built an interactive MapLibre GL JS + D3.js dashboard — revealing a consistent positive correlation between social housing density and voter abstention citywide."
order: 2
---

*Mapping Who Doesn't Vote — and Asking Why*

## The Question Behind the Map

I can't vote in France.

As a foreign resident, I've watched elections pass. And for a long time, the thing that puzzled me was the abstentions. In the first round of the 2026 Paris municipal elections, roughly four in ten registered voters didn't show up. In some precincts, it was closer to half.

I was wondering, what does it feel like to have that right and choose not to use it? I ask it with genuine curiosity, and maybe a little envy. The right to vote is something I don't have, and something I've thought about more than most people who do.

When the first-round results dropped on the evening of March 16, I decided to start looking at the data.

## A Map Is Not Just a Map

The technical premise is straightforward: combine official electoral results at the bureau de vote level with INSEE socioeconomic indicators — income, social housing density — and look for spatial patterns. Is abstention higher in poorer precincts? Do candidates draw support differently across the city's socioeconomic geography?

But the experience of using the tool is something else.

Paris is a city I know on foot. I've walked through the 13th, waited for a bus in the 19th, eaten in a café in the 11th. When I click on a precinct in the map and see that 47% of registered voters didn't come out, I don't just see a number. I see a street. I imagine a building, and I try to picture the people inside.

I can't know their stories. But the map gives me a way to hold the question open — to zoom in, to click around, to sit with the local texture of a city-wide phenomenon. That's what I wanted to build: not just a visualization, but a tool for slow attention.

## What the Data Shows

The analysis covers 903 voting precincts across Paris's 20 arrondissements, joined with:

- Median household income — INSEE Filosofi, IRIS level (2021)
- Social housing density — HLM units per km², INSEE RPLS (2024)
- Abstention rate — Ministère de l'Intérieur, Round 1, March 16, 2026

The spatial correlation between social housing density and voter abstention is positive and consistent across the city. Precincts with higher HLM density tend to show higher abstention.

One methodological note I take seriously: this correlation is structurally underestimated. Official abstention figures only count registered voters — but non-registration is itself a form of political disengagement, and it's concentrated in precisely the populations that are hardest to reach: recent migrants, frequent movers, people with precarious legal status. The true gap in political participation between rich and poor precincts is likely larger than any dataset can show.

## A Note on How This Was Built

This project was built quickly — from raw data to deployed site in one day — and that speed was only possible with significant AI assistance. I used Claude (Anthropic) throughout: for pipeline architecture, spatial join logic, frontend state management, and documentation. I want to be transparent: AI was a genuine collaborator here, not just an autocomplete.

I think that's worth saying plainly. The ideas, the research questions, the methodological choices, the hours spent clicking through precincts and reading about electoral geography — those were mine. The implementation went faster than it would have otherwise. That trade-off feels honest to name.

## Why This Project

I built ParisSocioElect because I wanted to understand something that matters to me, using tools I was trying to get better at. It sits at an intersection I find genuinely interesting: spatial data, political sociology, and the question of who gets counted and who doesn't.

As someone without a vote, I made a map about not voting. There's something a little ironic in that — or maybe something fitting.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Data processing | Python · pandas · GeoPandas · Shapely · PyProj |
| Interactive map | MapLibre GL JS v3 |
| Statistical chart | D3.js v7 |
| Frontend | Vanilla HTML/CSS/JS |
| Deployment | GitHub Actions → GitHub Pages |

---

*Data sources: Ministère de l'Intérieur (electoral results, March 16 2026), Ville de Paris open data (precinct boundaries), INSEE Filosofi 2021, INSEE RPLS 2024. License: MIT.*
