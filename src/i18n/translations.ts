export const LANGUAGES = ['zh', 'en', 'fr'] as const;
export type Lang = typeof LANGUAGES[number];

export const translations = {
  zh: {
    nav: {
      home: '首页',
      projects: '作品集',
      about: '关于',
      blog: '博客',
      blogSoon: '即将推出',
    },
    hero: {
      tagline: '工程专业在读 · 探索数据与开发',
      available: '巴黎 · 寻找实习与交替培训（2026）',
      github: 'GitHub',
      email: '邮箱',
    },
    brief: {
      text: 'Télécom SudParis 工程专业二年级学生，本科毕业于香港中文大学（深圳）。热衷于构建结合 AI 能力的 Web 与数据应用，习惯将 AI 工具融入日常开发流程，使用英语作为主要工作语言。',
    },
    resume: {
      education: '教育背景',
      skills: '技能',
      projects: '项目',
      viewAll: '查看全部项目 →',
      skillCategories: {
        languages: '编程语言',
        frameworks: '框架',
        tools: '工具',
      },
    },
    projects: {
      title: '作品集',
      wip: '进行中',
      demo: 'Demo',
      code: '代码',
    },
    about: {
      title: '关于我',
    },
    blog: {
      title: '博客',
      comingSoon: '即将推出',
      comingSoonText: '正在整理写作中的内容，敬请期待。',
    },
    footer: {
      built: '用 Astro 搭建',
    },
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      blog: 'Blog',
      blogSoon: 'Coming soon',
    },
    hero: {
      tagline: 'Engineering student · Data & development',
      available: 'Paris · Open to internships & alternance (2026)',
      github: 'GitHub',
      email: 'Email',
    },
    brief: {
      text: 'Second-year engineering student at Télécom SudParis, CS degree from CUHK Shenzhen. Interested in building web products with AI components — full-stack development, API integration, and picking up new tools quickly. Work in English daily.',
    },
    resume: {
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      viewAll: 'View all projects →',
      skillCategories: {
        languages: 'Languages',
        frameworks: 'Frameworks',
        tools: 'Tools',
      },
    },
    projects: {
      title: 'Projects',
      wip: 'WIP',
      demo: 'Demo',
      code: 'Code',
    },
    about: {
      title: 'About',
    },
    blog: {
      title: 'Blog',
      comingSoon: 'Coming soon',
      comingSoonText: 'Writing in progress. Check back later.',
    },
    footer: {
      built: 'Built with Astro',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      about: 'À propos',
      blog: 'Blog',
      blogSoon: 'Bientôt',
    },
    hero: {
      tagline: 'Étudiante ingénieure · Données & développement',
      available: 'Paris · Recherche stage / alternance (2026)',
      github: 'GitHub',
      email: 'E-mail',
    },
    brief: {
      text: 'Étudiante en 2e année à Télécom SudParis, diplômée en informatique de CUHK Shenzhen. Passionnée par la création de produits web intégrant l\'IA — développement full-stack, intégration d\'API, apprentissage rapide de nouveaux outils.',
    },
    resume: {
      education: 'Formation',
      skills: 'Compétences',
      projects: 'Projets',
      viewAll: 'Voir tous les projets →',
      skillCategories: {
        languages: 'Langages',
        frameworks: 'Frameworks',
        tools: 'Outils',
      },
    },
    projects: {
      title: 'Projets',
      wip: 'En cours',
      demo: 'Demo',
      code: 'Code',
    },
    about: {
      title: 'À propos',
    },
    blog: {
      title: 'Blog',
      comingSoon: 'Bientôt disponible',
      comingSoonText: 'Des articles sont en préparation. Revenez bientôt.',
    },
    footer: {
      built: 'Construit avec Astro',
    },
  },
} satisfies Record<Lang, typeof translations['zh']>;

export function t(lang: Lang) {
  return translations[lang];
}
