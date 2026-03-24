---
id: study-tracker
title: StudyTracker
description: "A full-stack personal growth platform built with Claude Code, integrating habit tracking, OKR management, project planning, a content library, and analytics in one app."
tags: [Next.js 15, TypeScript, PostgreSQL, Prisma, Supabase, Claude Code]
demo: https://learning-and-projects-tracker.vercel.app/
repo: https://github.com/Joo-Yan/StudyTracker
wip: false
period: "Mar 2026"
featuredOnHome: true
homeDescription: "Used Claude Code to build a full-stack web app with 9 integrated modules backed by a 12-model relational PostgreSQL schema; implemented Supabase OAuth with per-route user scoping; and shipped a fully client-side bilingual interactive learn center with code viewer, diagrams, API explorer, and inline quizzes."
order: 0
---

# StudyTracker

StudyTracker is a full-stack web application that unifies goal setting, habit tracking, project management, and knowledge curation in a single platform. It was built with AI assistance, primarily Claude Code.

## Core Modules

- Habit Tracker: custom icon, color, and recurrence rules, one-click logging, GitHub-style completion heatmap, and streak tracking.
- OKR Management: three-level hierarchy, multiple KR types, weighted progress roll-up, and deadline urgency indicators.
- Project Management: project-milestone-task hierarchy, Kanban board, activity log, and cross-links to OKRs and ideas.
- Content Library: track articles, videos, books, courses, and podcasts with status, priority, rating, and time estimates.
- Ideas Board: capture and categorize ideas, then promote them into projects in one click.
- Life Compass: free-form vision journal with debounced auto-save.
- Analytics: 7/30/90-day windows and six chart types for habits, OKRs, content, and task velocity.
- Interactive Learn Center: 8 bilingual (EN/ZH) chapters explaining the project's own tech stack with a code viewer, ER diagram, auth flow, API explorer, deployment simulator, and inline quizzes.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 15 · React 19 |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Backend platform | Supabase (Auth + DB) |
| UI & Charts | Tailwind CSS · Recharts |
| State management | Zustand |
| AI-assisted development | Claude Code |
