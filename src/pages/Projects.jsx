import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects.json";

const Projects = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-2">
      <div className="py-5">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
          My <span className="text-rose-400">Works</span>
        </h2>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
