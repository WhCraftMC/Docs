const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const links = require('./Links.config');

module.exports = {
  image: 'img/docusaurus-social-card.jpg',
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
}