const links = require('./Links.config');
const api = require('../apis/github.apis');

module.exports = {
  style: 'dark',
  logo: {
    alt: 'Meta Open Source Logo',
    src: 'img/meta_oss_logo.png',
    href: 'https://opensource.fb.com',
    width: 160,
    height: 51,
  },
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
  copyright: `Copyright © ${new Date().getFullYear()} WhCraftMC Team. Built with Docusaurus & ${api.shortSha}`,
}