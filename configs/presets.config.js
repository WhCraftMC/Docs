const links = require('./Links.config');

module.exports = {
  docs: {
    sidebarPath: require.resolve('../sidebars.js'),
    // Please change this to your repo.
    // Remove this to remove the "edit this page" links.
    editUrl:
      links.editURL,
  },
  theme: {
    customCss: require.resolve('../src/css/custom.css'),
  },
}