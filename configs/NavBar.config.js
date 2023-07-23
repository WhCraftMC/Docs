const links = require('./Links.config');

module.exports = {
  title: 'WhCraftMC',
  logo: {
    alt: 'Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Docs',
    },
    {
      href: links.githubLink,
      label: 'GitHub',
      position: 'right',
    },
  ],
}