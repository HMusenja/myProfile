import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "text-green-400 hover:text-yellow-400 transition-colors duration-300";

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 w-full bg-emerald-950 text-white py-4 md:py-6 z-50 shadow-md border-b border-yellow-500"
    >
      <div className="px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src="/myProfile/images/navPhoto.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <Link
            smooth
            to="/#home"
            className="text-lg sm:text-xl md:text-2xl font-extrabold border-b-2 border-blue-500"
          >
            H<span className="text-yellow-400 font-thin">Musenja</span>
          </Link>
        </div>

        <div className="flex gap-4">
          {/* Contact Icons - Mobile */}
          <div className="sm:hidden bottom-0 left-0 w-full bg-emerald-950 text-white flex flex-col items-center p-4 shadow-md">
            <div className="flex justify-around gap-4">
              <a
                href="https://github.com/HMusenja"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 flex flex-col items-center"
              >
                <AiFillGithub className="text-xl text-yellow-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/humphrey-musenja-743047345"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 flex flex-col items-center"
              >
                <AiFillLinkedin className="text-xl text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link smooth to="/#home" className={navLinkClass}>
              Home
            </Link>
            <Link smooth to="/#about" className={navLinkClass}>
              About
            </Link>
            <Link smooth to="/#skills" className={navLinkClass}>
              Skills
            </Link>
            <Link smooth to="/#projects" className={navLinkClass}>
              Projects
            </Link>
            <Link smooth to="/#reviews" className={navLinkClass}>
              Reviews
            </Link>
            <Link smooth to="/#contact" className={navLinkClass}>
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden bg-gray-800 text-xl py-2 px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-sm flex flex-row items-center px-4 py-4 gap-4">
          <Link
            smooth
            to="/#home"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            smooth
            to="/#about"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            smooth
            to="/#skills"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            smooth
            to="/#projects"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            smooth
            to="/#reviews"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </Link>
          <Link
            smooth
            to="/#contact"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
