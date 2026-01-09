import { useEffect } from "react";
import { fadeTop, fadeTopStagger } from "@/lib/animations";

import { PROJECTS_LIST } from "@/lib/constants";
import { ProjectCard } from "@ui/ProjectCard";

export function Projects() {
  useEffect(() => {
    fadeTopStagger(".project-item", ".projects", 0.1);
    fadeTop(".projects-title");
  }, []);
  return (
    <section
      id="projects"
      className="flex flex-col gap-4 mt-16 mb-4 max-w-9/12 mx-auto w-full"
    >
      <header className="flex flex-col gap-2 projects-title">
        <h2 className="text-3xl 2xl:text-4xl text-purple font-semibold">
          Proyectos Destacados
        </h2>
        <p className="text-lg text-dark/90">
          Una colección de mis mejores proyectos tanto Frontend como Fullstack.
        </p>
      </header>
      <div className="flex flex-col gap-6 mt-8 projects">
        {PROJECTS_LIST.map((project) => (
          <div aria-hidden className="project-item" key={project.title}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
