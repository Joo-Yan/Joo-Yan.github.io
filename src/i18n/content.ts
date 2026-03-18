import type { Lang } from './translations';

// ─── Education ───────────────────────────────────────────────────────────────

export const education = [
  {
    school: 'Télécom SudParis',
    degree: {
      zh: '工程师文凭（大二在读）',
      en: 'General Engineering Program (2nd year)',
      fr: 'Programme Grande École (2e année)',
    },
    period: 'Sep 2025 – Present',
    location: 'Évry, France',
    note: {
      zh: '直接录取二年级',
      en: 'Admitted directly into 2nd year',
      fr: 'Admis directement en 2e année',
    },
  },
  {
    school: 'The Chinese University of Hong Kong, Shenzhen',
    degree: {
      zh: '计算机科学与工程学士',
      en: 'BEng Computer Science & Engineering',
      fr: 'Licence en informatique et ingénierie',
    },
    period: 'Sep 2021 – May 2025',
    location: 'Shenzhen, China',
    note: {
      zh: '2024年春赴 ISEP 巴黎交流',
      en: 'Exchange at ISEP Paris, Feb–Jun 2024',
      fr: 'Échange à l\'ISEP Paris, fév–juin 2024',
    },
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  frameworks: ['Next.js', 'React', 'Flask', 'Astro'],
  tools: ['Docker', 'PostgreSQL', 'Linux', 'Git', 'Nginx'],
};

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'data-viz',
    title: {
      zh: '数据可视化',
      en: 'Data Visualization',
      fr: 'Visualisation de données',
    },
    description: {
      zh: '正在开发中的交互式数据可视化项目，部署于 GitHub Pages。',
      en: 'An interactive data visualization project, deployed on GitHub Pages.',
      fr: 'Un projet de visualisation de données interactif, déployé sur GitHub Pages.',
    },
    tags: ['Python', 'D3.js'],
    demo: null, // 填入 GitHub Pages 链接
    repo: null,
    wip: true,
  },
  {
    id: 'mastodon',
    title: {
      zh: '自建 Mastodon 实例',
      en: 'Self-Hosted Mastodon',
      fr: 'Instance Mastodon auto-hébergée',
    },
    description: {
      zh: '从零搭建并长期维护个人 Mastodon 服务器，配置 Nginx 反向代理、HTTPS、S3 媒体存储及自动数据库备份，完成多次大版本升级无停机。',
      en: 'Set up and maintained a personal Mastodon server — Nginx reverse proxy, HTTPS (Let\'s Encrypt), S3-compatible media storage, automated backups, several major version upgrades without downtime.',
      fr: 'Mis en place et maintenu un serveur Mastodon personnel — reverse proxy Nginx, HTTPS, stockage S3, sauvegardes automatisées, plusieurs mises à niveau majeures sans interruption.',
    },
    tags: ['Linux', 'Docker', 'Nginx', 'PostgreSQL'],
    demo: null,
    repo: null,
    wip: false,
  },
  {
    id: 'speaking-assessment',
    title: {
      zh: 'AI 英语口语评测系统',
      en: 'AI English Speaking Assessment',
      fr: 'Système d\'évaluation orale IA',
    },
    description: {
      zh: '负责后端开发：Next.js API 路由处理录音提交、调用第三方评分 API、Supabase 数据库设计，并编写完整部署文档。',
      en: 'Built the backend in Next.js: API routes for recording submissions, third-party speech assessment API pipeline, Supabase schema design, and deployment docs.',
      fr: 'Développé le backend Next.js : routes API pour les soumissions audio, pipeline d\'évaluation vocale, schéma Supabase et documentation de déploiement.',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    demo: null,
    repo: null,
    wip: false,
  },
  {
    id: 'ml-coursework',
    title: {
      zh: 'ML 模型课程实现',
      en: 'ML Models — Coursework',
      fr: 'Modèles ML — Travaux pratiques',
    },
    description: {
      zh: '用 Python 实现决策树、MLP/CNN、SVM，通过 AUC 和 F1 指标对比，并进行超参数调优（网格搜索、正则化）。',
      en: 'Implemented decision trees, MLP/CNN, and SVMs in Python; compared using AUC and F1, then tuned hyperparameters (grid search, regularisation).',
      fr: 'Implémentation d\'arbres de décision, MLP/CNN et SVM en Python ; comparaison AUC/F1, optimisation des hyperparamètres.',
    },
    tags: ['Python', 'scikit-learn'],
    demo: null,
    repo: null,
    wip: false,
  },
];

// ─── About (Cover Letter) ─────────────────────────────────────────────────────

export const aboutText: Record<Lang, string[]> = {
  zh: [
    '我叫 YU Zhuoyan，目前在法国巴黎的 Télécom SudParis 攻读工程师文凭。在此之前，我在香港中文大学（深圳）完成了计算机科学与工程本科学位，并在 2024 年春赴 ISEP 巴黎进行了为期一学期的交流。',
    '我对信息与技术抱有持续的好奇心，尤其对数据与开发的交汇地带感兴趣——无论是构建一个能处理真实数据的 web 应用，还是用可视化让数据「开口说话」。我习惯将 AI 工具融入日常工作流程，并以此提升效率与创造力。',
    '目前我仍在探索自己的职业方向，对数据工程、全栈开发和 AI 产品均有兴趣。如果你在寻找一个学习快、主动性强、能用英语流畅沟通的实习生，欢迎联系我。',
  ],
  en: [
    'I\'m YU Zhuoyan, currently studying at Télécom SudParis in Paris. Before that, I completed a BSc in Computer Science & Engineering at CUHK Shenzhen, with an exchange semester at ISEP Paris in spring 2024.',
    'I\'m drawn to the intersection of data and development — building web products that do something real with data, or making data legible through visualization. I use AI coding assistants as a standard part of my workflow, and I work in English daily.',
    'I\'m still exploring my direction — interested in data engineering, full-stack development, and AI-enabled products. If you\'re looking for someone who learns fast, stays curious, and communicates clearly in English, I\'d love to connect.',
  ],
  fr: [
    'Je m\'appelle YU Zhuoyan, étudiante en 2e année à Télécom SudParis à Paris. Auparavant, j\'ai obtenu une licence en informatique à CUHK Shenzhen, avec un semestre d\'échange à l\'ISEP Paris au printemps 2024.',
    'Je suis attirée par l\'intersection entre données et développement — créer des produits web qui exploitent des données réelles, ou rendre les données lisibles grâce à la visualisation. J\'intègre les outils d\'IA dans mon flux de travail quotidien et travaille couramment en anglais.',
    'Je suis encore en train d\'explorer mon orientation professionnelle — intéressée par l\'ingénierie des données, le développement full-stack et les produits intégrant l\'IA. Si vous cherchez quelqu\'un qui apprend vite, reste curieux et communique clairement, n\'hésitez pas à me contacter.',
  ],
};
