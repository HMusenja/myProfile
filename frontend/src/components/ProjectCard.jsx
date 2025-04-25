import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="bg-stone-100 p-6 flex flex-col  md:flex-row items-center md:items-start justify-around w-full gap-4">
      {/* Project Image */}
      <div className="w-full p-2 md:w-1/2 flex justify-center  md:justify-start">
        <img
          src={project.images[0] || "https://via.placeholder.com/300"}
          alt={project.title}
          className="w-64 h-64 object-cover rounded-lg shadow-md md:w-96 md:h-96"
        />
      </div>

      {/* Project Details */}
      <div className="mt-12 w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-center">
        <h3 className="text-lg font-bold text-gray-900 w-full underline underline-offset-8">
          {project.title}
        </h3>

        <div className="bg-white p-4 shadow-md mt-8 w-full md:w-3/4">
          <p className="text-gray-800 text-justify text-sm md:text-base mt-2 leading-relaxed md:border-l-4 md:border-yellow-400 md:px-8 md:py-4">
            {project.intro}
          </p>
        </div>

        {/* View Button */}
        <button
          className="mt-4 px-5 py-2 text-sm font-semibold bg-black text-white rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-105"
          onClick={() => onClick(project)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
