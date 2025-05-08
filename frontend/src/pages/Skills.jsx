import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import Container from "../components/Container";
import { useNavbarHeight } from "../context/NavbarHeightContext";

const Skills = () => {
  const navbarHeight = useNavbarHeight();

  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
    { icon: <FaJs className="text-yellow-500" />, label: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, label: "React" },
    { icon: <SiTailwindcss className="text-teal-400" />, label: "TailwindCSS" },
    { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, label: "Express.js" },
    { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen border-t-4 border-t-yellow-500"
      style={{ scrollMarginTop: `${navbarHeight}px` }}
    >
      <Container className="pt-10 sm:pt-12 md:pt-16 pb-16 px-4 md:px-8 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2 mb-6"></div>
          <h3 className="text-xl md:text-2xl font-bold">What I work with!</h3>
          <p className="text-gray-800 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed px-4">
            I specialize in the{" "}
            <span className="font-semibold">MERN Stack</span> (MongoDB,
            Express.js, React, and Node.js), crafting modern, efficient, and
            scalable web applications. With a strong focus on clean UI/UX and
            robust backend logic, I ensure seamless digital experiences.
            <br />
            <span className="block mt-4">
              Explore{" "}
              <Link
                smooth to="/#projects"
                className="font-semibold text-blue-800 hover:text-yellow-300 transition-colors"
              >
                my projects
              </Link>{" "}
              to see my work in action!
            </span>
          </p>
        </div>

        {/* Skills Grid with Background */}
        <div className="w-full md:w-3/4 mx-auto relative rounded-lg overflow-hidden  px-4">
          {/* Background Texture Layer */}
          <div
            className="absolute inset-4 z-0"
            style={{
              backgroundImage: "url('/myProfile/images/skills.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
              opacity: 0.1,
              pointerEvents: "none",
            }}
          />

          {/* Yellow Box + Icons */}
          <div className="relative z-10 bg-yellow-400 bg-opacity-70 py-16 px-6 sm:px-8 md:px-12 rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-emerald-950 py-4 px-8 rounded-xl shadow-md hover:scale-105 transition-transform"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl">
                    {skill.icon}
                  </div>
                  <p className=" text-base  text-stone-100">
                    {skill.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
