import { motion } from "framer-motion";
import SkillBoxes from "../components/SkillBoxes";
const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "MongoDB",
  "ExpressJS",
  "ReactJS",
  "NodeJS",
  "React Native",
  "Electron",
  "Linux",
  "Google Cloud",
  "CI",
  "Git",
  "Github",
];

const AboutMe = () => {
  return (
    <div className="flex-1 flex items-center flex-col justify-center lg:p-32 z-10">
      <div className="flex items-center justify-center gap-[1rem] p-[1rem]">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-white flex flex-col gap-12 items-center justify-center w-full md:w-3/4"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-center font-extrabold text-black dark:text-white">
              About Me
            </h1>
            <h2 className="text-lg text-center text-black dark:text-white">
              C, C++, Full Stack Web, Android & Desktop App Developer
            </h2>
          </div>
          <div className="text-black dark:text-white text-center flex flex-col gap-1">
            <p>I’m a 22-year-old tech enthusiast from Odisha </p>
            <p>
              Currently pursuing an MCA at Odisha University of Technology and
              Research, Bhubaneswar.
            </p>
            <p>
              Skilled in C, C++, Java, Python, JavaScript, and proficient with
              React Native, Electron, and the MERN Stack, I specialize in
              full-stack development and building mobile and desktop
              applications.
            </p>
            <p>
              I have hands-on experience with Git and setting up CI pipelines in
              GitHub. Passionate about creating user-focused solutions, I enjoy
              tackling new challenges and constantly evolving in the tech space.
            </p>
          </div>

          <div>
            <h1 className="text-2xl mb-3 font-extrabold text-black dark:text-white">
              Skills
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              {skills.map((skills, index) => (
                <SkillBoxes name={skills} key={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="flex items-center p-[1rem] w-full md:w-3/4"
      >
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-black dark:text-white mb-5">
            Education
          </h1>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="text-black dark:text-white">
              <h2 className="text-md mb-1">Masters in Computer Applications</h2>
              <p className="text-xs text-gray-700 dark:text-gray-200">
                2024-Present
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-200">
                Odisha University of Technology and Research, Bhubaneswar
              </p>
            </div>

            <div className="text-black dark:text-white">
              <h2 className="text-md mb-1">
                Bachelors in Computer Applications
              </h2>
              <p className="text-xs text-gray-700 dark:text-gray-200">
                2021-2024
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-200">
                Rajiv Memorial Institute of Technology, Berhampur
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
