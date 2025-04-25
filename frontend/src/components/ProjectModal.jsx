import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 text-xl">
          ✖
        </button>

        {/* Project Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>

        {/* Project Description */}
        <p className="mb-4 text-center text-gray-700">{project.description}</p>

        {/* Collaborators Section */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Collaborators:</h3>
          <div className="flex flex-wrap gap-2">
            {project.collaborators.map((collaborator, index) => (
              <span key={index} className="bg-blue-600 text-white text-sm rounded-full px-3 py-1">
                {collaborator}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="bg-gray-700 text-white text-sm rounded-full px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-2">
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;


