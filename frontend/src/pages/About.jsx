import React from "react";
import { Link } from "react-router-dom";
import { useInView, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import Container from "../components/Container";

const About = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isDesktop = useMediaQuery({ minWidth: 768 });

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
    <Container>
      <section className="bg-white py-12 px-6 md:px-20">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT ME</h2>
          {/* Short Divider Line */}
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto mt-8">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10  flex justify-between flex-col lg:-ml-20 md:flex-row items-center md:items-start w-full gap-8 md:gap-16">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ x: -150, opacity: 0 }}
            animate={isInView ? { x: isDesktop ? 100 : 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              duration: 1.2,
              delay: 0.1,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="w-full max-w-xs sm:max-w-sm md:w-80 md:h-80 mx-auto md:mx-0 bg-stone-300 rounded overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src="/myProfile/images/aboutme.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              duration: 1.2,
              delay: 0.6, // triggers after image
            }}
            className="max-w-2xl text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold">Get to know me!</h3>
            <p className="text-gray-800 text-sm md:text-base mt-2 leading-relaxed">
              Hi, I am a creative and detail-oriented Fullstack Web
              Developer.Specialised in the MERN tech, with a passion for
              crafting visually appealing and user-focused digital experiences.
              I thrive on problem-solving, continuously learning new
              technologies, and building innovative solutions that seamlessly
              integrate design and functionality. With a strong eye for detail
              and a commitment to excellence, I aim to deliver impactful and
              efficient web applications.
              <br />
              <span className="block mt-4">
                Check out{" "}
                <Link
                  to="/projects"
                  className="font-semibold text-blue-800 hover:text-yellow-300 transition-colors"
                >
                  my projects
                </Link>{" "}
                to see how creativity meets functionality!
              </span>
            </p>
            {/* Contact Button */}
            <button className="mt-4 px-5 py-2 text-sm font-semibold bg-black text-white rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-105">
              CONTACT
            </button>
          </motion.div>
        </div>
      </section>
      {/*Skills Section  // <section className=>*/}

      <section className="bg-white flex justify-center py-12 px-6  md:px-20">
        <div className="container mx-auto max-w-6xl border-t-4 border-emerald-950 ">
          {/* Section Header */}
          <div className="text-center mb-10 mt-8">
            <h2 className="text-3xl mb-4 md:text-4xl font-bold">Skills</h2>
            <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2"></div>
          </div>
          <h3 className="text-xl text-center md:text-2xl font-bold">
            What I work with!
          </h3>
          {/* Content Wrapper */}
          <div className="flex flex-col mt-4 md:flex-row items-center md:items-start gap-10">
            {/* Left: Text Content */}
            <div className="max-w-lg text-center md:text-left">
              <p className="text-gray-800 text-sm md:text-base mt-2 leading-relaxed">
                I specialize in the{" "}
                <span className="font-semibold">MERN Stack</span> (MongoDB,
                Express.js, React, and Node.js), crafting **modern, efficient,
                and scalable** web applications. With a strong focus on clean
                UI/UX and robust backend logic, I ensure seamless digital
                experiences.
                <br />
                <span className="block mt-4">
                  Explore{" "}
                  <Link
                    to="/projects"
                    className="font-semibold text-blue-800 hover:text-yellow-300 transition-colors"
                  >
                    my projects
                  </Link>{" "}
                  to see my work in action!
                </span>
              </p>
            </div>

            {/* Right: Skills Grid */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full md:w-auto">
              {[
                {
                  icon: <FaHtml5 className="text-orange-500" />,
                  label: "HTML",
                },
                { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
                {
                  icon: <FaJs className="text-yellow-500" />,
                  label: "JavaScript",
                },
                { icon: <FaReact className="text-blue-400" />, label: "React" },
                {
                  icon: <SiTailwindcss className="text-teal-400" />,
                  label: "TailwindCSS",
                },
                {
                  icon: <FaNodeJs className="text-green-500" />,
                  label: "Node.js",
                },
                {
                  icon: <SiExpress className="text-gray-400" />,
                  label: "Express.js",
                },
                {
                  icon: <SiMongodb className="text-green-400" />,
                  label: "MongoDB",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white py-4 px-4 rounded-lg shadow-md"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl">
                    {skill.icon}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800">
                    {skill.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
