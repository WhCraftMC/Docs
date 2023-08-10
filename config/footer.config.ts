import type { Footer } from "@docusaurus/theme-common";

const footer: Footer = {
  style: 'dark',
  links: [
    {
      title: "社区",
      items: [
        {
          label: '论坛',
          href: 'https://forums.whcraftmc.tk',
        },
      ],
    },
    {
      title: "文档",
      items: [
        {
          label: "文档",
          href: "/",
        },
      ],
    },
    {
      title: "更多",
      items: [
        {
          label: "主站点",
          href: "https://papermc.io",
        },
        {
          label: "GitHub",
          href: "https://github.com/WhcraftMC",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} WhCraftMC Team. Built with Docusaurus`,
}

export default footer;
