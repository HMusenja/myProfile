import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const staggerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-emerald-700 px-4 py-8 mt-8"
    >
      <motion.div
        className="container mx-auto flex flex-col md:flex-row gap-8 items-center px-4"
        initial="hidden"
        animate="visible"
        variants={staggerVariant}
      >
        {/* About Section */}
        <motion.div className="flex-1 text-center md:text-left" variants={fadeInVariant}>
          {/* Section Title */}
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 opacity-30 mb-8">
              About
            </h2>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-yellow-500">
              who am I?
            </p>
          </div>
          {/* About Content */}
          <div className="mt-8">
            <motion.img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg mx-auto md:mx-0"
              whileHover={{ scale: 1.1 }}
            />
            <motion.p
              className="mt-6 text-gray-200 text-lg max-w-lg mx-auto md:mx-0 bg-gray-800 py-4 px-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Hi, I am a creative and detail-oriented Fullstack Web Developer
              with a passion for crafting visually appealing, user-focused
              digital experiences. I thrive on problem-solving, continuously
              learning new technologies, and building innovative solutions that
              seamlessly integrate design and functionality. With a strong eye
              for detail and a commitment to excellence, I aim to deliver
              impactful and efficient web applications.
              <br />
              <span className="block mt-4">
                Check out{" "}
                <Link
                  to="/projects"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  my projects
                </Link>{" "}
                to see how creativity meets functionality!
              </span>
            </motion.p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="flex-1 text-center md:text-left" variants={fadeInVariant}>
          {/* Section Title */}
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 opacity-30 mb-8">
              Skills
            </h2>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-yellow-500">
              what I work with?
            </p>
          </div>
          {/* Skills Grid */}
          <motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-teal-600 py-4 px-6 rounded-lg shadow-lg"
            variants={staggerVariant}
          >
            {[
              {
                icon: <FaHtml5 size={30} className="text-orange-500" />,
                label: "HTML",
              },
              {
                icon: <FaCss3Alt size={30} className="text-blue-500" />,
                label: "CSS",
              },
              {
                icon: <FaJs size={30} className="text-yellow-500" />,
                label: "JavaScript",
              },
              {
                icon: <FaReact size={30} className="text-blue-400" />,
                label: "React",
              },
              {
                icon: <SiTailwindcss size={30} className="text-teal-400" />,
                label: "TailwindCSS",
              },
              {
                icon: <FaNodeJs size={30} className="text-green-500" />,
                label: "Node.js",
              },
              {
                icon: <SiExpress size={30} className="text-gray-400" />,
                label: "Express.js",
              },
              {
                icon: <SiMongodb size={30} className="text-green-400" />,
                label: "MongoDB",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-800 text-white py-4 px-4 rounded-lg shadow-md"
                variants={skillVariant}
              >
                {skill.icon}
                <p className="mt-2 text-sm">{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

