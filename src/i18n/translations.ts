export const LANGUAGES = ['zh', 'en', 'fr'] as const;
export type Lang = typeof LANGUAGES[number];

export const translations = {
  zh: {
    nav: {
      home: '首页',
      projects: '作品集',
      about: '关于',
      blog: 'Fragments',
      blogSoon: '即将推出',
    },
    hero: {
      tagline: '工程师在读 · 技术探索者',
      available: '巴黎 · 寻找实习与交替培训（2026）',
      whyMe: 'Why Me',
      github: 'GitHub',
      email: '邮箱',
    },
    brief: {
      paragraphs: [
        '在学信息技术，希望它能让人的生活更好——作为基础设施，作为表达的延伸，作为抵抗的筹码。',
        '方向还没定：软件开发、网络、数据都有可能。走着瞧。',
        '现在：造东西，拆东西，保持好奇，做力所能及的事。',
      ],
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
      title: 'Fragments',
      comingSoon: '即将推出',
      comingSoonText: '正在整理写作中的内容，敬请期待。',
    },
    footer: {
      built: '用 Astro 搭建',
      translationNote: '',
    },
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      blog: 'Fragments',
      blogSoon: 'Coming soon',
    },
    hero: {
      tagline: 'Engineering student · Tech explorer',
      available: 'Paris · Open to internships',
      whyMe: 'Why Me',
      github: 'GitHub',
      email: 'Email',
    },
    brief: {
      paragraphs: [
        'I\'m in informatics/computing wishing it would benefit people — as infrastructure, as a creative medium, as a tool of resistance.',
        'Career direction still open — we\'ll see.',
        'For now, I build things, break things, stay curious, and do what I can.',
      ],
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
      title: 'Fragments',
      comingSoon: 'Coming soon',
      comingSoonText: 'Writing in progress. Check back later.',
    },
    footer: {
      built: 'Built with Astro',
      translationNote: '',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      about: 'À propos',
      blog: 'Fragments',
      blogSoon: 'Bientôt',
    },
    hero: {
      tagline: 'Étudiante ingénieure · Exploratrice tech',
      available: 'Paris · Recherche stage',
      whyMe: 'Why Me',
      github: 'GitHub',
      email: 'E-mail',
    },
    brief: {
      paragraphs: [
        'J\'étudie l\'informatique en espérant qu\'elle profite aux gens — infrastructure, prolongement de l\'expression, outil de résistance.',
        'Orientation encore ouverte : développement logiciel, réseaux, données. On verra.',
        'Pour l\'instant : je construis, je casse, je reste curieuse, et je fais ce que je peux.',
      ],
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
      title: 'Fragments',
      comingSoon: 'Bientôt disponible',
      comingSoonText: 'Des articles sont en préparation. Revenez bientôt.',
    },
    footer: {
      built: 'Construit avec Astro',
      translationNote: 'Rédigé en anglais · traduit automatiquement en français',
    },
  },
} satisfies Record<Lang, typeof translations['zh']>;

export function t(lang: Lang) {
  return translations[lang];
}
