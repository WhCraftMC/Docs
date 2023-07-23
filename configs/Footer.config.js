const links = require('./Links.config');

module.exports = {
  style: 'dark',
  links: [{
      title: '社区',
      items: [{
        label: '论坛',
        href: 'https://forums.whcraftmc.tk',
      }, ],
    },
    {
      title: '文档',
      items: [{
          label: 'Docs',
          to: links.URL,
        },
      ],
    },
    {
      title: '更多',
      items: [{
          label: '主站点',
          href: 'https://www.whcraftmc.tk',
        },
        {
          label: 'GitHub',
          href: links.githubLink,
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} WhCraftMC Team. Built with Docusaurus.`,
}