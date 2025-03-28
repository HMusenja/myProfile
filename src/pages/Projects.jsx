import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db, collection, getDocs } from "../firebase";
import { FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const toolIcons = {
  react: <FaReact className="text-blue-500" />,
  javascript: <FaJsSquare className="text-yellow-500" />,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-700" />,
  tailwind: <SiTailwindcss className="text-teal-400" />,
  nodejs: <FaNodeJs className="text-green-600" />,
  mongodb: <SiMongodb className="text-green-500" />,
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsList);
    };

    fetchProjects();
  }, []);

  const getToolIcon = (tool) => toolIcons[tool.toLowerCase()] || null;

  return (
    <motion.section
      id="projects"
      className="min-h-screen w-screen flex flex-col items-center  bg-emerald-700 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.div
        className="relative flex flex-col items-center text-center w-full mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-gray-800 opacity-30 m-16">
          Projects
        </h2>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-yellow-500">
          What I have done?
        </p>
      </motion.div>

      {/* Conditional Rendering */}
      {selectedProject ? (
        /* Selected Project Card */
        <motion.div
          className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-4 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
          >
            Back
          </button>

          {/* Project Details */}
          <h3 className="text-xl font-semibold text-yellow-500">
            {selectedProject.name}
          </h3>
          {selectedProject.image && (
            <img
              src={selectedProject.image || "https://via.placeholder.com/400"}
              alt={selectedProject.name}
              className="w-full h-auto object-cover rounded-md mb-4"
            />
          )}
          <div className="flex flex-wrap gap-2">
            {selectedProject.tools.map((tool) => (
              <div
                key={tool}
                className="flex items-center bg-gray-700 px-2 py-1 rounded-md text-xs"
              >
                {getToolIcon(tool)}
                <span className="ml-2 text-gray-300">{tool}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-300 mt-2">
            {selectedProject.description || "No description available."}
          </p>
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm mt-2"
          >
            View Project
          </a>
        </motion.div>
      ) : (
        /* Project Links List */
        <motion.div
          className="w-full max-w-6xl flex flex-col items-center gap-4 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 text-yellow-500 text-center p-4 rounded-lg shadow-lg hover:bg-gray-700"
            >
              {project.name}
            </button>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;


