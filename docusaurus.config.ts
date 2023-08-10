import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { themes } from "prism-react-renderer";
import isCI from "is-ci";
import navbar from "./configs/navbar.config";
import footer from "./configs/footer.config";
import { env } from "process";
import { Config } from "@docusaurus/types";
import { Options } from "@docusaurus/plugin-content-docs";

const preview = env.VERCEL_ENV === "preview";

const url = (preview && `https://${env.VERCEL_URL}`) || "https://docs.whcraft.tk";

const docsCommon: Options = {
  breadcrumbs: true,
  editUrl: ({ versionDocsDirPath, docPath }) =>
    `https://github.com/WhCraftMC/docs/blob/main/${versionDocsDirPath}/${docPath}`,
  editCurrentVersion: true,
  remarkPlugins: [remarkA11yEmoji],
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

const config: Config = {
  // your docs settings.
  title: "WhCraftMC Documentation",
  tagline: "Documentation for all projects.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: url,

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WhCraftMC', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  onBrokenLinks: isCI ? "throw" : "warn",
  onBrokenMarkdownLinks: isCI ? "throw" : "warn",
  onDuplicateRoutes: isCI ? "throw" : "warn",

  trailingSlash: false,
  noIndex: preview,
  baseUrlIssueBanner: false,

  clientModules: [
    require.resolve("./static/css/custom.css"),
    require.resolve("@fontsource/jetbrains-mono/index.css"),
  ],

  // WebPack Setting.
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        target: isServer ? "node12" : "es2017",
      },
    }),
  },

  // MarkDown Setting.
  markdown: {
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },

  themes: ["@docusaurus/theme-classic"],

  // Plugins.
  plugins: [
    [
      "content-docs",
      {
        ...docsCommon,
        id: "fastlimbo",
        path: "docs/fastlimbo",
        routeBasePath: "/FastLimbo",
        sidebarPath: require.resolve("./config/sidebars/fastlimbo.sidebars.ts"),
      },
    ],
    [
      "content-docs",
      {
        ...docsCommon,
        id: "misc",
        path: "docs/misc",
        routeBasePath: "/misc",
        sidebarPath: require.resolve("./config/sidebars/misc.sidebars.ts"),
      },
    ],
    [
      "content-pages",
      {
        remarkPlugins: [remarkA11yEmoji],
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        ignorePatterns: ["**/cat/**"],
      },
    ],
    "@docusaurus/plugin-debug",
  ],

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    path: 'i18n',
    localeConfigs: {
      zh: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
        calendar: 'gregory',
        path: 'zh-Hans',
      },
    },
  },

  // WebSite's ThemeConfigs.
  themeConfig: {
    // Replace with your project's social card

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: navbar,
    footer: footer,

    prism: {
      additionalLanguages: [
        "batch",
        "bash",
        "git",
        "java",
        "javastacktrace",
        "kotlin",
        "groovy",
        "log",
        "toml",
        "properties",
      ],
      theme: themes.vsDark,
    },
  },
};

export = config;
