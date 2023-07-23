import React from "react";
import Layout from "@theme/Layout";
import css from "./index.module.css";
import Projects from "../components/ProjectList";
import siteConfig from "../../configs/site.config";

function HomepageHeader() {
  return (
    <header className={css.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <Projects />
      </main>
    </Layout>
  );
}
