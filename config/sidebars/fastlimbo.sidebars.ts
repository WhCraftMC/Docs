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
      ],
    },
  ],
};

export = fastlimbo;
