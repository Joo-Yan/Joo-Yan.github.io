---
id: mastodon
title: Self-Hosted Mastodon
description: "Set up and maintained a personal Mastodon server — Nginx reverse proxy, HTTPS (Let's Encrypt), S3-compatible media storage, automated backups, several major version upgrades without downtime."
tags: [Linux, Nginx, PostgreSQL]
wip: false
period: "Jun 2023 – Present"
featuredOnHome: true
order: 1
---

When posts are deleted and accounts are shut down, when we cannot say anything on other social media, when all information is controlled by algorithms — let's reserve some space for expressing and connecting with people.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Reverse proxy | Nginx + Let's Encrypt |
| Database | PostgreSQL + Redis |
| Media storage | S3-compatible (Scaleway Object Storage) |
| System | Debian Linux + systemd |
