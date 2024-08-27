import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects.json";

const Projects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-2">
      <div className="py-5">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black  dark:text-white sm:text-5xl sm:leading-none md:text-6xl">
          My <span className="text-rose-400">Works</span>
        </h2>
      </div>
      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div variants={cardVariants} key={index}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
