import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uid, setUid] = useState("");
  const [inputUid, setInputUid] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setUid(inputUid);
    setIsModalOpen(false);
  };

  const handleLogout = () => setUid("");

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
          <Link smooth to="/#home" className="text-2xl font-extrabold border-b-2 border-blue-500">
            H<span className="text-yellow-400 font-thin">Musenja</span>
          </Link>
        </div>

        

        <div className="flex gap-4">
          {/*Contact Icons */}

          <div className="sm:hidden  bottom-0 left-0 w-full bg-emerald-950 text-white flex flex-col items-center p-4 shadow-md">
            <div className="flex justify-around gap-4 ">
              {/* Icon 1 - GitHub */}
              <a
                href="https://github.com/HMusenja"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 flex flex-col items-center"
              >
                <AiFillGithub className="text-xl text-yellow-500" />
              </a>

              {/* Icon 2 - LinkedIn */}
              <a
                href="https://www.linkedin.com/in/Humphrey-Musenja/"
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
          <Link smooth to="/#contact" className={navLinkClass}>
            Contact
          </Link>
          {uid && (
            <Link to="/manage" className={navLinkClass}>
              Manage
            </Link>
          )}
          <button
            onClick={uid ? handleLogout : () => setIsModalOpen(true)}
            className={navLinkClass}
          >
            {uid ? (
              <FiLogOut className="text-xl" />
            ) : (
              <FiLogIn className="text-xl" />
            )}
          </button>
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
            Start
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
            to="/#contact"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          {uid && (
            <Link
              to="/manage"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Manage
            </Link>
          )}
          <button
            onClick={uid ? handleLogout : () => setIsModalOpen(true)}
            className={navLinkClass}
          >
            {uid ? (
              <FiLogOut className="text-l bg-gray-800" />
            ) : (
              <FiLogIn className="text-l bg-gray-800" />
            )}
          </button>
        </div>
      )}

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="uid" className="block mb-2 text-gray-600">
                Enter UID:
              </label>
              <input
                id="uid"
                type="text"
                value={inputUid}
                onChange={(e) => setInputUid(e.target.value)}
                className="w-full border px-4 py-2 rounded-md mb-4 text-black"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
