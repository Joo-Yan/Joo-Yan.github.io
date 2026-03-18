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
    featuredOnHome: false,
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
    period: '2023 – Present',
    featuredOnHome: true,
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
    period: '2024',
    featuredOnHome: true,
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
    featuredOnHome: false,
  },
];

// ─── About (Cover Letter) ─────────────────────────────────────────────────────

export const aboutText: Record<Lang, string[]> = {
  zh: [],
  en: [
    'I\'m Zhuoyan — most people call me Yan, it\'s easier to pronounce. I\'m a second-year engineering student at Télécom SudParis; before coming here, I completed my bachelor\'s degree in Computer Science and Engineering at the Chinese University of Hong Kong, Shenzhen.',
    'I\'m interested in decentralization. I run a personal Mastodon instance and a WriteFreely blog, but they\'re too personal to share here. I follow web3 as well, more as a question about infrastructure and community than as an investment.',
    'I read novels. Maybe that\'s part of why freedom of expression matters to me. I try to write too, though never with enough time.',
    'I\'m not good at small talk, and I sometimes may seem cold. To anyone who knows me in person and has felt that way, I want to say: it\'s not that. I like people, I just don\'t always know what to do in social situations. I considered cutting this paragraph since I\'m looking for opportunities — but maybe I should accept myself. I want to be clear though: I communicate fine and I work well with others.',
    'I\'m trying to find a technical direction to dig deeper, while allocating more of my attention to things that really matter and continuing to write. One person\'s power is small. I wish for peace, and for myself and more people to live free from fear.',
  ],
  fr: [
    'Je m\'appelle Zhuoyan — la plupart des gens m\'appellent Yan, c\'est plus facile à prononcer. Je suis en deuxième année d\'école d\'ingénieur à Télécom SudParis ; avant ça, j\'ai fait mon bachelor en informatique et génie logiciel à l\'Université chinoise de Hong Kong, Shenzhen.',
    'Je m\'intéresse à la décentralisation. Je gère une instance Mastodon et un blog WriteFreely, mais ils sont trop personnels pour être partagés ici. Je suis aussi le web3, plutôt comme une question d\'infrastructure et de communauté que d\'investissement.',
    'Je lis des romans. C\'est peut-être pour ça que la liberté d\'expression compte pour moi. J\'essaie d\'écrire aussi, mais le temps manque toujours.',
    'Je ne suis pas douée pour le small talk, et je peux parfois paraître froide. À ceux qui me connaissent en vrai et l\'ont ressenti : ce n\'est pas ça. J\'aime les gens, je ne sais juste pas toujours quoi faire dans les situations sociales. J\'ai failli supprimer ce paragraphe parce que je cherche des opportunités — mais peut-être que je devrais m\'accepter. Je veux quand même être claire : je communique bien et je travaille bien avec les autres.',
    'J\'essaie de trouver une direction technique dans laquelle aller plus loin, tout en consacrant plus d\'attention à ce qui compte vraiment, et en continuant d\'écrire. La force d\'une seule personne est bien petite. Je souhaite la paix, et que moi et d\'autres puissent vivre libres de la peur.',
  ],
};
