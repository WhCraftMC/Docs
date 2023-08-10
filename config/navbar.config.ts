import { Navbar } from "@docusaurus/theme-common";

// don't specify style or hideOnScroll here, we want it to be dynamic
const navbar: Omit<Navbar, "style" | "hideOnScroll"> = {
  title: 'WhCraftMC',
  logo: {
    alt: 'Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      to: "fastlimbo",
      label: "FastLimbo",
      position: 'left',
    },
    {
      to: "misc",
      label: "杂项",
      position: 'left',
    },
    {
      href: "https://github.com/WhCraftMC",
      className: 'nav-icon nav-icon-github',
      position: 'right',
    },
  ],
}

export default navbar;
