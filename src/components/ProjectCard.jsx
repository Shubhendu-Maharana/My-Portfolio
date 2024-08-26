import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative border rounded-lg shadow-md bg-gray-800 border-gray-700 transform transition duration-500 hover:scale-105 flex flex-col">
      <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 px-3 py-1 text-center">
        {project.status}
      </div>
      <div className="p-2 flex justify-center">
        <a href="#">
          <img className="rounded-md" src={project.image} loading="lazy" />
        </a>
      </div>

      <div className="px-6 py-3 flex-1 flex items-center">
        <div className="">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight hover:text-violet-300 text-white transition duration-500">
              {project.name}
            </h5>
          </a>

          <p className="antialiased text-gray-400 text-sm text-justify">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
