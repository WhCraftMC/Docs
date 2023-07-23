const links = require('./Links.config');

module.exports = {
  style: 'dark',
  links: [{
      title: 'Community',
      items: [{
        label: 'Forums',
        href: 'https://forums.whcraftmc.tk',
      }, ],
    },
    {
      title: 'Documentation',
      items: [{
          label: 'Docs',
          to: links.URL,
        },
      ],
    },
    {
      title: 'More',
      items: [{
          label: 'Main Site',
          href: 'https://www.whcraftmc.tk',
        },
        {
          label: 'GitHub',
          href: links.githubLink,
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
}