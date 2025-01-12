import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Import the icon

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-emerald-950 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Main Heading Styled as Code */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gray-800 text-green-400 font-mono inline-block px-3 sm:px-4 py-2 rounded-lg shadow-lg">
          `Hello World, It's`
        </h1>

        {/* Name */}
        <div className="text-pink-700 text-4xl sm:text-6xl md:text-8xl font-bold mb-10 sm:mb-16 bg-gray-800 inline-block px-3 sm:px-4 py-2 rounded-lg shadow-lg">
          HUMPHREY MUSENJA
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl mb-8 flex flex-col items-center space-y-4 sm:space-y-0 ">
          <span className="text-sm sm:text-xl md:text-xl font-bold bg-gray-800 text-green-400 font-mono inline-block px-3 sm:px-4 py-2 rounded-lg shadow-lg mr-40 mb-4">
            `I'm a`
          </span>
          <span className="text-yellow-500 text-lg sm:text-3xl md:text-4xl font-bold bg-gray-800 px-3 sm:px-4 py-2 rounded-lg shadow-lg ml-20 ">
            A Full-Stack Web Developer
          </span>
        </p>

        {/* Call-to-Action Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-block px-5 sm:px-6 py-2 sm:py-3 text-white rounded-lg text-sm sm:text-lg font-normal hover:text-yellow-600  bg-gray-800 flex items-center space-x-2 ml-40"
        >
        <Link to="/about" className="flex items-center space-x-2">
  <span>
    More <span className="tracking-widest text-yellow-400">about</span> me
  </span>
  <FaArrowRight className="text-yellow-400" />
</Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;





