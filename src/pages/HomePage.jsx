import { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Typed from "typed.js";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "C Developer",
        "C++ Developer",
        "React Native Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center lg:px-32 z-50">
      <div className="hero">
        <div className="flex items-center justify-center gap-[1rem] p-[1rem] flex-col lg:flex-row-reverse w-full lg:justify-between">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="z-10"
          >
            <img
              src="src\assets\profile-pic.jpg"
              className="max-w-64 lg:max-w-md rounded-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="text-white flex flex-col gap-8"
          >
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Hey! It's,
            </h1>
            <div className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text">
              <h1 className="text-5xl font-extrabold text-transparent">
                Shubhendu Maharana
              </h1>
            </div>
            <h3 className="text-rose-400">
              I'm a <span className="typing text-green-400"></span>
            </h3>
            <p className="text-black dark:text-white text-justify w-full sm:w-[35rem] md:w-[30rem] lg:w-[35rem]">
              Hi, I'm Shubhendu, a 21-year-old MCA student and developer
              proficient in C, C++, React Native, MERN stack, and Android
              development. If you're looking to collaborate, chat about tech, or
              exchange ideas on the newest trends, let's get in touch!
            </p>
            <div className="flex flex-row items-center justify-around text-3xl text-black dark:text-white">
              <a
                href="https://github.com/Shubhendu-Maharana"
                target="_blank"
                className="dark:hover:text-gray-400 hover:text-gray-400 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href=""
                target="_blank"
                className="dark:hover:text-gray-400 hover:text-gray-400 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href=""
                target="_blank"
                className="dark:hover:text-gray-400 hover:text-gray-400 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                target="_blank"
                className="dark:hover:text-gray-400 hover:text-gray-400 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
