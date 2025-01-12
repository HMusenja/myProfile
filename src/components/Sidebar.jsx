import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for Larger Screens */}
      <div className="hidden sm:flex fixed top-[4rem] left-0 h-[calc(100vh-4rem)] w-16 bg-emerald-950 flex flex-col items-center p-4 text-white shadow-md">
        {/* Vertical Text */}
        <div
          className="text-center text-lg writing-mode-vertical-rl tracking-wider mb-32 mt-72 text-emerald-950"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          My Portfolio
        </div>

        {/* Icons with spacing and lines */}
        <div className="flex flex-col justify-between items-center space-y-4">
          {/* Icon 1 - GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillGithub className="text-2xl mb-2" />
            <div className="w-px h-8 bg-gray-700"></div> {/* Line */}
          </a>

          {/* Icon 2 - LinkedIn */}
          <a
            href="https://www.linkedin.com/in/Humphrey-Musenja/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillLinkedin className="text-2xl mb-2" />
            <div className="w-px h-8 bg-gray-700"></div> {/* Line */}
          </a>

          {/* Icon 3 - Mail */}
          <a
            href="#contact"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillMail className="text-2xl mb-2" />
            <div className="w-px h-8 bg-gray-700"></div> {/* Line */}
          </a>
        </div>
      </div>

      {/* Footer for Small Screens */}
      <footer className="sm:hidden fixed bottom-0 left-0 w-full bg-emerald-950 text-white flex flex-col items-center p-4 shadow-md">
        <div className="flex justify-around w-full max-w-lg">
          {/* Icon 1 - GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillGithub className="text-xl" />
          
          </a>

          {/* Icon 2 - LinkedIn */}
          <a
            href="https://www.linkedin.com/in/Humphrey-Musenja/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillLinkedin className="text-xl" />
           
          </a>

          {/* Icon 3 - Mail */}
          <a
            href="#contact"
            className="hover:text-blue-500 flex flex-col items-center"
          >
            <AiFillMail className="text-xl" />
           
          </a>
        </div>
        <p className="text-xs mt-4">&copy; 2024 Humphrey Musenja</p>
      </footer>
    </>
  );
};

export default Sidebar;


