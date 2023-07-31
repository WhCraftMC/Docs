const links = require('./Links.config');
const api = require('../apis/github.apis');

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
    {
      title: 'Build Info',
      items: [
        {
          label: 'Commit Info',
          async script() {
            try {
              const response = await fetch(
                'https://api.github.com/repos/your-username/your-repo/commits'
              );
              const commits = await response.json();
              const latestCommit = commits[0];
              const commitSha = latestCommit.sha.slice(0, 7);
              const commitUrl = latestCommit.html_url;
              return {
                text: commitSha,
                link: commitUrl,
              };
            } catch (error) {
              console.error('Failed to fetch commit info:', error);
              return {
                text: 'Failed to fetch commit info',
                link: '',
              };
            }
          },
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} WhCraftMC Team. Built with Docusaurus & ${api.shortSha}`,
}