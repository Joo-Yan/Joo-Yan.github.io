---
source_hash: manual
id: study-tracker
title: StudyTracker
description: "一个使用 Claude Code 构建的全栈个人成长平台，将习惯追踪、OKR 管理、项目规划、内容库与数据分析整合到同一个应用中。"
tags: [Next.js 15, TypeScript, PostgreSQL, Prisma, Supabase, Claude Code]
demo: https://learning-and-projects-tracker.vercel.app/
repo: https://github.com/Joo-Yan/StudyTracker
wip: false
period: "2026年3月"
featuredOnHome: true
homeDescription: "使用 Claude Code 构建了一个包含 9 个集成模块的全栈 Web 应用，底层是 12 个模型组成的 PostgreSQL 关系型数据结构；基于 Supabase 实现服务端 OAuth 与按路由隔离的用户数据作用域；并交付了一个纯客户端、双语的交互式学习中心，内含代码查看器、图表、API Explorer 和内联测验。"
order: 0
---

# StudyTracker

StudyTracker 是一个全栈 Web 应用，把目标设定、习惯追踪、项目管理和知识整理统一到同一个平台中。项目主要借助 Claude Code 完成开发。

## 核心模块

- 习惯追踪：支持自定义图标、颜色和重复规则，一键打卡，GitHub 风格热力图，以及连续记录统计。
- OKR 管理：支持三级结构、多种 KR 类型、加权进度汇总和截止日期紧迫度提示。
- 项目管理：支持项目-里程碑-任务三级结构、看板视图、活动日志，以及与 OKR 和想法模块的交叉关联。
- 内容库：可追踪文章、视频、书籍、课程和播客，支持状态、优先级、评分和时间预估。
- 想法看板：用于捕捉和分类想法，并可一键提升为项目。
- Life Compass：自由书写的愿景日志，带防抖自动保存。
- 数据分析：提供 7/30/90 天时间窗口，以及覆盖习惯、OKR、内容和任务速度的 6 类图表。
- 交互式学习中心：包含 8 个中英双语章节，用代码查看器、ER 图、认证流程图、API Explorer、部署模拟器和内联测验讲解项目自身技术栈。

## 技术栈

| 层级 | 工具 |
|------|------|
| 框架 | Next.js 15 · React 19 |
| 语言 | TypeScript |
| 数据库 | PostgreSQL |
| ORM | Prisma |
| 后端平台 | Supabase (Auth + DB) |
| UI 与图表 | Tailwind CSS · Recharts |
| 状态管理 | Zustand |
| AI 辅助开发 | Claude Code |
