import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50 px-2 sm:px-4">
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 text-xl"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-2xl font-bold mb-4 text-center">
          {project.title}
        </h2>

        {/* Image */}
        {project.images?.length > 0 && (
          <div className="w-full flex justify-center mb-4">
            <img
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              className="max-h-60 sm:max-h-96 w-auto max-w-full object-contain rounded-md"
            />
          </div>
        )}

        {/* Description */}
        <p className="mb-4 text-center text-sm sm:text-base text-gray-700 dark:text-gray-200">
          {project.description}
        </p>

        {/* Collaborators */}
        <div className="mb-4">
          <h3 className="font-semibold text-sm sm:text-base mb-2">Collaborators:</h3>
          <div className="flex flex-wrap gap-2">
            {project.collaborators.map((collaborator, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white text-xs sm:text-sm rounded-full px-3 py-1"
              >
                {collaborator}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <h3 className="font-semibold text-sm sm:text-base mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white text-xs sm:text-sm rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-2 mt-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="text-blue-600 hover:underline text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              className="text-blue-600 hover:underline text-sm sm:text-base"
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
