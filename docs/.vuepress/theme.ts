import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Buzhifanji",
    url: "https://github.com/Buzhifanji",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://github.com/Buzhifanji/algorithms",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "algorithms",

  displayFooter: true,
  lastUpdated: true,
  contributors: false,

  navbarLayout: {
    left: ["Brand"],
    center: [],
    right: ["Links", "Search", "Repo", "Outlook"],
  },
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "Buzhifanji/algorithms",
      repoId: "R_kgDOH2thpQ",
      category: "Announcements",
      categoryId: "DIC_kwDOH2thpc4CQ8rs",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    copyCode: {
      showInMobile: true,
    },
  },
});
