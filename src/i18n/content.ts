import type { Lang } from './translations';

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
    id: 'socioelect',
    title: {
      zh: 'ParisSocioElect',
      en: 'ParisSocioElect',
      fr: 'ParisSocioElect',
    },
    homeDescription: {
      en: 'Built an end-to-end spatial analysis pipeline using Python and GeoPandas to join 2026 Paris municipal election results across 903 voting precincts with INSEE housing and income data, then built an interactive MapLibre GL JS + D3.js dashboard — revealing a consistent positive correlation between social housing density and voter abstention citywide.',
    },
    description: {
      zh: '交互式社会选举地图工具，可视化2026年巴黎市议会选举第一轮结果，并与INSEE住房和收入数据交叉分析。揭示903个投票点中社会住房密度、弃权率与候选人得票地理分布之间的空间关联。',
      en: 'An interactive socio-electoral mapping tool visualising the first round of the 2026 Paris municipal elections, cross-referenced with INSEE housing and income data. Reveals spatial correlations between social housing density, voter abstention, and candidate vote geographies across 903 voting precincts.',
      fr: 'Un outil de cartographie socio-électorale interactive visualisant le premier tour des élections municipales de Paris 2026, croisé avec les données INSEE sur le logement et les revenus. Révèle les corrélations spatiales entre densité de logements sociaux, abstention et géographies des votes sur 903 bureaux de vote.',
    },
    tags: ['Python', 'GeoPandas', 'MapLibre GL JS', 'D3.js', 'GitHub Actions'],
    demo: 'https://joo-yan.github.io/ParisSocioElect-ElectionsMunicipales2026',
    repo: 'https://github.com/Joo-Yan/ParisSocioElect-ElectionsMunicipales2026',
    wip: false,
    period: '2026',
    featuredOnHome: true,
    longDescription: {
      tagline: {
        zh: '绘制不投票者的地图——并追问为什么',
        en: 'Mapping Who Doesn\'t Vote — and Asking Why',
        fr: 'Cartographier ceux qui ne votent pas — et se demander pourquoi',
      },
      sections: [
        {
          heading: {
            zh: '地图背后的问题',
            en: 'The Question Behind the Map',
            fr: 'La question derrière la carte',
          },
          paragraphs: {
            zh: [
              '我在法国没有选举权。',
              '作为外国居民，我旁观着一届届选举的到来与离去。让我困惑的，始终不是选举结果，而是弃权现象。2026年巴黎市议会选举第一轮，约四成在册选民没有出现。某些投票点，这个比例接近一半。',
              '我一直在想：拥有这项权利却选择不行使，是一种什么感受？我带着真诚的好奇在问，也许还有一点羡慕。投票权是我没有的东西，也是我比大多数拥有它的人想得更多的东西。',
              '3月16日第一轮结果出炉的当晚，我决定去看数据。',
            ],
            en: [
              'I can\'t vote in France.',
              'As a foreign resident, I\'ve watched elections pass. And for a long time, the thing that puzzled me was the abstentions. In the first round of the 2026 Paris municipal elections, roughly four in ten registered voters didn\'t show up. In some precincts, it was closer to half.',
              'I was wondering, what does it feel like to have that right and choose not to use it? I ask it with genuine curiosity, and maybe a little envy. The right to vote is something I don\'t have, and something I\'ve thought about more than most people who do.',
              'When the first-round results dropped on the evening of March 16, I decided to start looking at the data.',
            ],
            fr: [
              'Je ne peux pas voter en France.',
              'En tant que résidente étrangère, j\'ai vu passer les élections. Et longtemps, ce qui m\'a intriguée était les abstentions. Au premier tour des élections municipales de Paris 2026, environ quatre électeurs inscrits sur dix ne se sont pas déplacés. Dans certains bureaux, c\'était presque la moitié.',
              'Je me demandais : qu\'est-ce qu\'on ressent quand on a ce droit et qu\'on choisit de ne pas l\'exercer ? Je le dis avec une vraie curiosité, et peut-être un peu d\'envie. Le droit de vote est quelque chose que je n\'ai pas, et à quoi je pense plus que la plupart de ceux qui l\'ont.',
              'Quand les résultats du premier tour sont tombés le soir du 16 mars, j\'ai décidé de regarder les données.',
            ],
          },
        },
        {
          heading: {
            zh: '地图不只是地图',
            en: 'A Map Is Not Just a Map',
            fr: 'Une carte n\'est pas qu\'une carte',
          },
          paragraphs: {
            zh: [
              '技术前提很简单：将投票站级别的官方选举结果与INSEE社会经济指标——收入、社会住房密度——结合起来，寻找空间规律。贫困选区弃权率是否更高？候选人的支持在城市社会经济地理上是否存在差异？',
              '但使用这个工具的体验是另一回事。',
              '巴黎是一座我用脚丈量过的城市。我走过13区，在19区等过公交，在11区的咖啡馆吃过东西。当我在地图上点击一个选区，看到47%的在册选民没有出来投票，我看到的不只是一个数字。我看到一条街道。我想象一栋楼，试着想象里面的人。',
              '我无从得知他们的故事。但地图给了我一种方式，让这个问题保持开放——放大、点击、慢慢感受一座城市范围现象的地方纹理。这就是我想建造的：不只是一个可视化，而是一种凝神专注的工具。',
            ],
            en: [
              'The technical premise is straightforward: combine official electoral results at the bureau de vote level with INSEE socioeconomic indicators — income, social housing density — and look for spatial patterns. Is abstention higher in poorer precincts? Do candidates draw support differently across the city\'s socioeconomic geography?',
              'But the experience of using the tool is something else.',
              'Paris is a city I know on foot. I\'ve walked through the 13th, waited for a bus in the 19th, eaten in a café in the 11th. When I click on a precinct in the map and see that 47% of registered voters didn\'t come out, I don\'t just see a number. I see a street. I imagine a building, and I try to picture the people inside.',
              'I can\'t know their stories. But the map gives me a way to hold the question open — to zoom in, to click around, to sit with the local texture of a city-wide phenomenon. That\'s what I wanted to build: not just a visualization, but a tool for slow attention.',
            ],
            fr: [
              'La prémisse technique est simple : combiner les résultats électoraux officiels au niveau du bureau de vote avec les indicateurs socioéconomiques de l\'INSEE — revenus, densité de logements sociaux — et chercher des structures spatiales. L\'abstention est-elle plus élevée dans les quartiers défavorisés ? Les candidats obtiennent-ils leurs soutiens différemment selon la géographie socioéconomique de la ville ?',
              'Mais l\'expérience d\'utilisation de l\'outil, c\'est autre chose.',
              'Paris est une ville que je connais à pied. J\'ai marché dans le 13e, attendu un bus dans le 19e, pris un café dans le 11e. Quand je clique sur un bureau de vote dans la carte et que je vois que 47 % des électeurs inscrits ne se sont pas déplacés, je ne vois pas seulement un chiffre. Je vois une rue. J\'imagine un immeuble, et j\'essaie d\'imaginer les personnes à l\'intérieur.',
              'Je ne peux pas connaître leurs histoires. Mais la carte me donne un moyen de maintenir la question ouverte — de zoomer, de cliquer, de m\'attarder sur la texture locale d\'un phénomène à l\'échelle de la ville. C\'est ce que je voulais construire : pas seulement une visualisation, mais un outil d\'attention lente.',
            ],
          },
        },
        {
          heading: {
            zh: '数据揭示了什么',
            en: 'What the Data Shows',
            fr: 'Ce que montrent les données',
          },
          paragraphs: {
            zh: [
              '分析覆盖巴黎20个市政区的903个投票点，结合以下数据：',
            ],
            en: [
              'The analysis covers 903 voting precincts across Paris\'s 20 arrondissements, joined with:',
            ],
            fr: [
              'L\'analyse couvre 903 bureaux de vote dans les 20 arrondissements de Paris, croisés avec :',
            ],
          },
          list: {
            zh: [
              '家庭中位收入 — INSEE Filosofi，IRIS级别（2021年）',
              '社会住房密度 — 每平方公里HLM套数，INSEE RPLS（2024年）',
              '弃权率 — 内政部，第一轮，2026年3月16日',
            ],
            en: [
              'Median household income — INSEE Filosofi, IRIS level (2021)',
              'Social housing density — HLM units per km², INSEE RPLS (2024)',
              'Abstention rate — Ministère de l\'Intérieur, Round 1, March 16, 2026',
            ],
            fr: [
              'Revenu médian des ménages — INSEE Filosofi, niveau IRIS (2021)',
              'Densité de logements sociaux — logements HLM par km², INSEE RPLS (2024)',
              'Taux d\'abstention — Ministère de l\'Intérieur, 1er tour, 16 mars 2026',
            ],
          },
          closingParagraphs: {
            zh: [
              '社会住房密度与选民弃权率之间的空间相关性是正向且稳定的：HLM密度较高的选区往往呈现更高的弃权率。',
              '有一点方法论上的说明我认真对待：这种相关性在结构上被低估了。官方弃权数据只统计已登记的选民——但未登记本身也是政治脱离的一种形式，而且它集中在最难覆盖的人群中：新移民、频繁迁移者、处于不稳定法律状态的人。富裕选区与贫困选区之间真实的政治参与差距，很可能比任何数据集所能呈现的更大。',
            ],
            en: [
              'The spatial correlation between social housing density and voter abstention is positive and consistent across the city. Precincts with higher HLM density tend to show higher abstention.',
              'One methodological note I take seriously: this correlation is structurally underestimated. Official abstention figures only count registered voters — but non-registration is itself a form of political disengagement, and it\'s concentrated in precisely the populations that are hardest to reach: recent migrants, frequent movers, people with precarious legal status. The true gap in political participation between rich and poor precincts is likely larger than any dataset can show.',
            ],
            fr: [
              'La corrélation spatiale entre la densité de logements sociaux et l\'abstention est positive et constante dans toute la ville. Les bureaux avec une densité HLM plus élevée ont tendance à afficher une abstention plus forte.',
              'Une note méthodologique que je prends au sérieux : cette corrélation est structurellement sous-estimée. Les chiffres officiels d\'abstention ne comptent que les électeurs inscrits — mais la non-inscription est elle-même une forme de désengagement politique, concentrée précisément dans les populations les plus difficiles à atteindre : migrants récents, personnes à mobilité fréquente, personnes en situation précaire. L\'écart réel de participation politique entre quartiers riches et pauvres est probablement plus grand que ce qu\'aucun jeu de données peut montrer.',
            ],
          },
        },
        {
          heading: {
            zh: '关于构建过程的说明',
            en: 'A Note on How This Was Built',
            fr: 'Note sur la méthode de construction',
          },
          paragraphs: {
            zh: [
              '这个项目完成得很快——从原始数据到部署网站只用了几天——这种速度只有在大量AI辅助的情况下才成为可能。我全程使用了Claude（Anthropic）：用于管道架构、空间连接逻辑、前端状态管理和文档编写。我想坦诚地说：AI在这里是一个真正的合作者，而不仅仅是自动补全。',
              '我认为这值得直说。研究问题、方法论选择、在选区上点击数小时、阅读选举地理相关资料——这些是我的。实现比原本快了很多。这种取舍值得被如实说明。',
            ],
            en: [
              'This project was built quickly — from raw data to deployed site in a matter of days — and that speed was only possible with significant AI assistance. I used Claude (Anthropic) throughout: for pipeline architecture, spatial join logic, frontend state management, and documentation. I want to be transparent: AI was a genuine collaborator here, not just an autocomplete.',
              'I think that\'s worth saying plainly. The ideas, the research questions, the methodological choices, the hours spent clicking through precincts and reading about electoral geography — those were mine. The implementation went faster than it would have otherwise. That trade-off feels honest to name.',
            ],
            fr: [
              'Ce projet a été construit rapidement — des données brutes au site déployé en quelques jours — et cette vitesse n\'a été possible qu\'avec une assistance IA significative. J\'ai utilisé Claude (Anthropic) tout au long : pour l\'architecture du pipeline, la logique de jointure spatiale, la gestion d\'état du frontend et la documentation. Je veux être transparent : l\'IA a été un vrai collaborateur ici, pas juste une autocomplétion.',
              'Je pense que ça vaut la peine de le dire clairement. Les idées, les questions de recherche, les choix méthodologiques, les heures passées à cliquer dans les bureaux de vote et à lire sur la géographie électorale — c\'était moi. L\'implémentation a été plus rapide qu\'elle ne l\'aurait été autrement. Ce compromis mérite d\'être nommé honnêtement.',
            ],
          },
        },
        {
          heading: {
            zh: '为什么做这个项目',
            en: 'Why This Project',
            fr: 'Pourquoi ce projet',
          },
          paragraphs: {
            zh: [
              '我构建ParisSocioElect，是因为我想用正在学习的工具，去理解一件对我来说重要的事情。它处于我真正感兴趣的交叉点：空间数据、政治社会学，以及谁被计入、谁被忽略的问题。',
              '作为一个没有选票的人，我制作了一张关于不投票的地图。这其中有一点讽刺——或者说，也许恰恰合适。',
            ],
            en: [
              'I built ParisSocioElect because I wanted to understand something that matters to me, using tools I was trying to get better at. It sits at an intersection I find genuinely interesting: spatial data, political sociology, and the question of who gets counted and who doesn\'t.',
              'As someone without a vote, I made a map about not voting. There\'s something a little ironic in that — or maybe something fitting.',
            ],
            fr: [
              'J\'ai construit ParisSocioElect parce que je voulais comprendre quelque chose qui m\'importe, en utilisant des outils que j\'essayais de maîtriser. Ça se situe à une intersection qui m\'intéresse vraiment : les données spatiales, la sociologie politique, et la question de qui est compté et qui ne l\'est pas.',
              'En tant que personne sans droit de vote, j\'ai fait une carte sur le fait de ne pas voter. Il y a quelque chose d\'un peu ironique dans tout ça — ou peut-être quelque chose d\'approprié.',
            ],
          },
        },
      ],
      techStack: [
        { layer: { zh: '数据处理', en: 'Data processing', fr: 'Traitement des données' }, tools: 'Python · pandas · GeoPandas · Shapely · PyProj' },
        { layer: { zh: '交互地图', en: 'Interactive map', fr: 'Carte interactive' }, tools: 'MapLibre GL JS v3' },
        { layer: { zh: '统计图表', en: 'Statistical chart', fr: 'Graphique statistique' }, tools: 'D3.js v7' },
        { layer: { zh: '前端', en: 'Frontend', fr: 'Frontend' }, tools: 'Vanilla HTML/CSS/JS' },
        { layer: { zh: '部署', en: 'Deployment', fr: 'Déploiement' }, tools: 'GitHub Actions → GitHub Pages' },
      ],
      dataNote: {
        zh: '数据来源：内政部（选举结果，2026年3月16日）、巴黎市开放数据（选区边界）、INSEE Filosofi 2021、INSEE RPLS 2024。许可证：MIT。',
        en: 'Data sources: Ministère de l\'Intérieur (electoral results, March 16 2026), Ville de Paris open data (precinct boundaries), INSEE Filosofi 2021, INSEE RPLS 2024. License: MIT.',
        fr: 'Sources de données : Ministère de l\'Intérieur (résultats électoraux, 16 mars 2026), données ouvertes Ville de Paris (limites des bureaux), INSEE Filosofi 2021, INSEE RPLS 2024. Licence : MIT.',
      },
    },
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
    tags: ['Linux', 'Nginx', 'PostgreSQL'],
    demo: null,
    repo: null,
    wip: false,
    period: '2023 – Present',
    featuredOnHome: true,
    longDescription: {
      tagline: null,
      sections: [
        {
          heading: null,
          paragraphs: {
            zh: [
              '当帖子被删除、账号被封禁，当我们在其他社交媒体上什么都说不了，当所有信息都被算法控制——让我们为表达和连接保留一些空间。',
            ],
            en: [
              'When posts are deleted and accounts are shut down, when we cannot say anything on other social media, when all information is controlled by algorithms — let\'s reserve some space for expressing and connecting with people.',
            ],
            fr: [
              'Quand les posts sont supprimés et les comptes fermés, quand on ne peut plus rien dire sur les autres réseaux, quand toute l\'information est contrôlée par des algorithmes — gardons un espace pour s\'exprimer et se connecter aux autres.',
            ],
          },
        },
      ],
      techStack: [
        { layer: { zh: '反向代理', en: 'Reverse proxy', fr: 'Reverse proxy' }, tools: 'Nginx + Let\'s Encrypt' },
        { layer: { zh: '数据库', en: 'Database', fr: 'Base de données' }, tools: 'PostgreSQL + Redis' },
        { layer: { zh: '媒体存储', en: 'Media storage', fr: 'Stockage média' }, tools: 'S3-compatible (Scaleway Object Storage)' },
        { layer: { zh: '系统', en: 'System', fr: 'Système' }, tools: 'Debian Linux + systemd' },
      ],
    },
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
    longDescription: {
      tagline: null,
      sections: [
        {
          heading: null,
          paragraphs: {
            zh: [
              '这是我在香港中文大学（深圳）最后一年参与的团队项目。我负责后端：一组 Next.js API 路由，处理完整的音频处理流程。',
              '核心挑战是协调异步操作：录音传入、验证、发送给第三方语音评测 API、解析响应、返回评分和转写文本，然后将所有内容写入 Supabase。将数据库模式设计正确——时间戳、尝试计数、反馈数据——经过了多次迭代。',
              '我还负责编写部署文档。这不够光鲜，但很重要。一个只有原始开发者才能部署的系统，不算真正完成。',
            ],
            en: [
              'This was a team project built during my final year at CUHK-SZ. It was a prototype for a start-up.',
            ],
            fr: [
              'C\'était un projet d\'équipe réalisé lors de ma dernière année à la CUHK-SZ. Ma contribution était le backend : un ensemble de routes API Next.js gérant l\'intégralité du pipeline de traitement audio.',
              'Le défi central était d\'orchestrer des opérations asynchrones : un enregistrement arrive, est validé, envoyé à une API tierce d\'évaluation vocale, la réponse est analysée, un score et une transcription sont retournés, et tout est écrit dans Supabase. Concevoir le schéma correctement — horodatages, compteurs de tentatives, blobs de retour — a pris plusieurs itérations.',
              'J\'ai aussi rédigé la documentation de déploiement. Pas glamour, mais ça compte. Un système que seul le développeur original peut déployer n\'est pas vraiment terminé.',
            ],
          },
        },
      ],
      techStack: [
        { layer: { zh: '框架', en: 'Framework', fr: 'Framework' }, tools: 'Next.js (App Router)' },
        { layer: { zh: '语言', en: 'Language', fr: 'Langage' }, tools: 'TypeScript' },
        { layer: { zh: '数据库', en: 'Database', fr: 'Base de données' }, tools: 'Supabase (PostgreSQL)' },
        { layer: { zh: '部署', en: 'Deployment', fr: 'Déploiement' }, tools: 'Vercel' },
      ],
    },
  },
];
