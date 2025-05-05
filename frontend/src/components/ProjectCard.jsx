import React from "react";
import LaptopFrame from "./LaptopFrame"

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="bg-stone-100 p-6 flex flex-col md:flex-row items-center md:items-start justify-around w-full gap-8 rounded-lg shadow-lg">
      {/* Laptop Frame with Project Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <LaptopFrame
          projectImage={project.images[0] || "https://via.placeholder.com/300"}
         
        />
      </div>

      {/* Project Details */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-left mt-8 md:mt-0">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 underline underline-offset-8">
          {project.title}
        </h3>

        <div className="bg-white p-4 shadow-md mt-6 w-full md:w-3/4 rounded">
          <p className="text-gray-800 text-justify text-sm md:text-base leading-relaxed md:border-l-4 md:border-yellow-400 md:px-6 md:py-4">
            {project.intro}
          </p>
        </div>

        <button
          className="mt-4 px-5 py-2 text-sm font-semibold bg-yellow-500 text-emerald-950 rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-105"
          onClick={() => onClick(project)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
