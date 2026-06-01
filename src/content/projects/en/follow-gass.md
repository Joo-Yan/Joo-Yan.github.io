---
id: follow-gass
title: follow-gass
description: "An automated political media-tracking and daily digest pipeline, distributed as a Claude Code skill, built for a niche Chinese fan community following Gabriel Attal and Stéphane Séjourné."
tags: [GitHub Actions, Node.js, Claude Code, Resend, RSS, LLM]
repo: https://github.com/BubblePub/follow-gass
wip: false
period: "May 2026"
featuredOnHome: true
order: 4
---

*This project reflects no political views on my part — it was built as a practical tool for a fan community.*

## Background

There is a small Chinese online community that closely follows Gabriel Attal and Stéphane Séjourné, tracking French political media daily to stay informed about both figures. Combing through scattered sources is part of the fun, but automation can add some convenience. So I built a workflow that fetches, filters, and delivers a structured daily digest automatically. Because the target audience is Chinese, the digest is produced in Chinese only.

The pipeline is topic-agnostic and can be adapted to track any public figure or subject.

## How It Works

- **Data layer** — A GitHub Actions cron job (daily, 04:00 UTC) fetches Google News RSS feeds and the EU commissioner's official calendar, tags items with freshness and co-occurrence signals, and commits a structured `feed.json` to the public repo.
- **Digest layer** — A Claude Code skill (`/gass`) reads the central feed and runs a multi-step LLM prompt chain (cluster → weighted rank → Chinese summary → cross-source comparison → layout) to produce the digest.
- **Delivery layer** — `deliver.js` expands short URL placeholders back to full links and routes the digest to stdout or an HTML email via Resend.

## Engineering Highlights

- **48-hour carry-over + `isNew` tagging** — events spanning the daily cutoff are re-clustered rather than split across two digests.
- **Co-occurrence hard rule** — any article naming both tracked figures is always surfaced at the top, regardless of other ranking signals.
- **Decoupled production / consumption** — the GitHub Actions pipeline and the Claude Code skill are fully independent; consumers get digests with zero API keys and zero upstream configuration.
- **Token-diet URL encoding** — feed URLs are stored as short placeholders to reduce LLM context cost, then expanded at delivery time.
