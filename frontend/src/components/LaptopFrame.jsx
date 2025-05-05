import React from "react";

const LaptopFrame = ({ projectImage }) => {
  return (
    <div className="laptop-wrapper group w-full max-w-md mx-auto perspective">
      {/* Laptop */}
      <div className="laptop relative w-full h-64 rounded-xl bg-black shadow-lg transition-transform duration-500 group-hover:rotate-[-1deg] group-hover:scale-105 group-hover:shadow-2xl">
        {/* Camera Dot */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10"></div>

        {/* Screen */}
        <div className="screen w-full h-full overflow-hidden rounded-xl border-4 border-black">
          <img
            src={projectImage}
            alt="Project"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Base */}
        <div className="base absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[110%] h-4 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-3xl shadow-md z-0"></div>
      </div>
    </div>
  );
};

export default LaptopFrame;


