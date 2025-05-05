import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for Larger Screens */}
      <div className="hidden sm:flex fixed top-[4rem] left-0 h-[calc(100vh-4rem)] w-16 bg-emerald-950 flex flex-col items-center p-4 text-white shadow-md border-r border-yellow-500">
        {/* Vertical Text */}
        <div
          className="text-center text-lg writing-mode-vertical-rl tracking-wider mb-32 mt-36 text-yellow-500 opacity-20"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          My Portfolio
        </div>

        {/* Icons with spacing and lines */}
        <div className="flex flex-col justify-between items-center space-y-4">
        <div className="w-px h-8 bg-yellow-500"></div>{/* Line */}
          {/* Icon 1 - GitHub */}
          <a
            href="https://github.com/HMusenja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 flex flex-col items-center cursor-pointer transition-colors duration-300"
          >
            <AiFillGithub className="text-2xl mb-2" />
            <div className="w-px h-8 bg-yellow-500"></div>{/* Line */}
          </a>

          {/* Icon 2 - LinkedIn */}
          <a
            href="https://www.linkedin.com/in/Humphrey-Musenja/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillLinkedin className="text-2xl mb-2" />
            <div className="w-px h-8 bg-yellow-500"></div> {/* Line */}
          </a>

          {/* Icon 3 - Mail */}
          <a
              href="mailto:musenjahumphrey@yhoo.com"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillMail className="text-2xl mb-2" />
            <div className="w-px h-8 bg-yellow-500"></div> {/* Line */}
          </a>
        </div>
      </div>

    </>
  );
};

export default Sidebar;
