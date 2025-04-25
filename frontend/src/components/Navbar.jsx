import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi"; // Login and Logout Icons
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [uid, setUid] = useState(""); // UID state
  const [inputUid, setInputUid] = useState(""); // Temporary UID input

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setUid(inputUid); // Update UID with input value
    setIsModalOpen(false); // Close modal
  };

  const handleLogout = () => {
    setUid(""); // Clear UID
  };

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 w-full bg-emerald-950 text-white py-4 md:py-8 z-50 shadow-md"
    >
      <div className=" px-4 py-2 flex justify-between items-center">
        {/* Left Section: Profile Picture & Logo */}
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src="/myProfile/images/navPhoto.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-2xl font-extrabold border-t-4 border-blue-500">
              H
            </h2>
            <h2 className="text-2xl font-extrabold border-b-2 border-blue-500">
              M<span className="text-yellow-400 font-thin">usenja</span>
            </h2>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-green-400 hover:text-blue-500 transition-colors duration-300 bg-transparent"
          >
            Start
          </Link>
          <Link
            to="/about"
            className="text-green-400 hover:text-blue-500 transition-colors duration-300 bg-transparent"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-green-400 hover:text-blue-500 transition-colors duration-300 bg-transparent"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-green-400 hover:text-blue-500 transition-colors duration-300 bg-transparent"
          >
            Contact
          </Link>
          {/* Manage Button (Visible Only for Logged-in Users) */}
          {uid && (
            <Link
              to="/manage"
              className="text-green-400 hover:text-blue-500 transition-colors duration-300 bg-transparent"
            >
              Manage
            </Link>
          )}
          {/* Login/Logout Icons */}
          <button
            onClick={uid ? handleLogout : () => setIsModalOpen(true)}
            className="text-green-400 hover:text-blue-500 transition-colors duration-300 bg-transparent"
          >
            {uid ? (
              <>
                <FiLogOut className="text-xl" />
              </>
            ) : (
              <>
                <FiLogIn className="text-xl" />
              </>
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="bg-gray-800 md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 py-2">
          <Link
            to="/"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          {/* Manage Button (Visible Only for Logged-in Users) */}
          {uid && (
            <Link
              to="/manage"
              className="hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Manage
            </Link>
          )}
          {/* Login/Logout Icons */}
          <button
            onClick={uid ? handleLogout : () => setIsModalOpen(true)}
            className="bg-gray-800"
          >
            {uid ? (
              <>
                <FiLogOut className="text-xl" />
              </>
            ) : (
              <>
                <FiLogIn className="text-xl" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="uid" className="block text-gray-700 mb-2">
                  Enter UID:
                </label>
                <input
                  type="text"
                  id="uid"
                  value={inputUid}
                  onChange={(e) => setInputUid(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
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
