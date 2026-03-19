---
source_hash: manual
id: mastodon
title: Instance Mastodon auto-hébergée
description: "Mis en place et maintenu un serveur Mastodon personnel — reverse proxy Nginx, HTTPS, stockage S3, sauvegardes automatisées, plusieurs mises à niveau majeures sans interruption."
tags: [Linux, Nginx, PostgreSQL]
wip: false
period: "2023 – Present"
featuredOnHome: true
order: 2
---

Quand les posts sont supprimés et les comptes fermés, quand on ne peut plus rien dire sur les autres réseaux, quand toute l'information est contrôlée par des algorithmes — gardons un espace pour s'exprimer et se connecter aux autres.

## Tech Stack

| Couche | Outils |
|--------|--------|
| Reverse proxy | Nginx + Let's Encrypt |
| Base de données | PostgreSQL + Redis |
| Stockage média | S3-compatible (Scaleway Object Storage) |
| Système | Debian Linux + systemd |
