import Link from "@docusaurus/Link";
import React from "react";
import css from "./projects.module.css";
import projects from "./Project";

function Project(project: Project) {
  return (
    <div className={css.project}>
      <div className={css.flex}>
        <h3 className="title">
          {project.title}
        </h3>
        <p>{project.description}</p>
      </div>
      <div>
        <Link className="button button--primary" to={project.link}>
          访问此文档
        </Link>
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section className={css.projectList}>
      <div className={css.projectsContainer}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  repo: string;
  link: string;
}
