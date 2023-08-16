import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const fastlimbo: SidebarsConfig = {
  primary: [
    "README",
    {
      type: "category",
      label: "开始",
      collapsed: true,
      link: {
        type: "doc",
        id: "getting-started/README",
      },
      items: [
        {
          type: "category",
          label: "安装",
          link: {
            type: "doc",
            id: "getting-started/installation",
          },
          items: [],
        },
        {
          type: "category",
          label: "配置详解",
          link: {
            type: "doc",
            id: "getting-started/config-edit",
          },
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "开发",
      collapsed: true,
      link: {
        type: "doc",
        id: "develop/README",
      },
      items: [
        {
          type: "category",
          label: "创建一个插件",
          link: {
            type: "doc",
            id: "develop/create-a-plugin",
          },
          items: [],
        },
        {
          type: "category",
          label: "API",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/api/README",
          },
          items: [
            {
              type: "category",
              label: "玩家API",
              link: {
                type: "doc",
                id: "develop/api/Player",
              },
              items: [],
            },
          ],
        },
      ],
    },
  ],
};

export = fastlimbo;
