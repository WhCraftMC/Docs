const siteConfig  = require('./configs/site.config');
const links = require('./configs/Links.config');

const navBar = require('./configs/NavBar.config');
const footer = require('./configs/Footer.config');

const i18n = require('./configs/I18n.config');
const theme = require('./configs/theme.config');
const presets = require('./configs/presets.config')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.title,
  tagline: siteConfig.tagline,
  favicon: siteConfig.favicon,

  // Set the production url of your site here
  url: links.URL,

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WhCraftMC', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans"?
  i18n: i18n,

  plugins: [
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: presets.docs,
        theme: presets.theme,
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // Replace with your project's social card
    image: theme.image,
    navbar: navBar,
    footer: footer,
    prism: theme.prism,
  }),
};

module.exports = config;