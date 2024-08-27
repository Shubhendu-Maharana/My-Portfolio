import React from "react";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpo } from "react-icons/si";

const ProjectCard = ({ project }) => {
  const languageIcons = (language) => {
    const iconMapping = {
      React: { color: "#61dbfb", icon: <FaReact /> },
      "React Native": { color: "#61dbfb", icon: <FaReact /> },
      HTML: { color: "#ef4444", icon: <FaHtml5 /> },
      Tailwindcss: { color: "#61dbfb", icon: <RiTailwindCssFill /> },
      Nativewind: { color: "#61dbfb", icon: <RiTailwindCssFill /> },
      Expo: { color: "white", icon: <SiExpo /> },
      NodeJS: { color: "#6cc24a", icon: <FaNodeJs /> },
    };

    const { color, icon } = iconMapping[language] || {};
    if (!icon) return null;

    return (
      <div className="bg-[#ffffff22]" style={{ color }}>
        {icon}
        <span>{language}</span>
      </div>
    );
  };

  return (
    <div className="relative border rounded-lg shadow-md backdrop-blur-lg border-gray-700 transform transition duration-300 hover:scale-105 flex flex-col">
      <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 px-3 py-1 text-center">
        {project.status}
      </div>
      <div className="p-2 flex justify-center">
        <a href="#">
          <img className="rounded-md" src={project.image} loading="lazy" />
        </a>
      </div>

      <div className="px-6 py-4 flex-1 flex flex-col justify-between items-center">
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
        <div className="flex flex-wrap items-center py-4 gap-2 w-full *:flex *:items-center *:gap-1 *:text-xs *:bg-[#ffffff22] *:px-2 *:py-1 *:rounded-full *:cursor-default">
          {project.languages.map((language) => languageIcons(language))}
        </div>
        <div className="p-2 w-full">
          <a
            class="inline-flex items-center justify-center rounded-xl bg-green-600 py-2 px-4 text-base text-white shadow-xl shadow-green-400/20 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            href="#"
          >
            View in Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
