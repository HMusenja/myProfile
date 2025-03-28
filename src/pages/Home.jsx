import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight(); // Get height on mount
    window.addEventListener("resize", updateNavbarHeight); // Update on resize

    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-emerald-950 px-4"
      style={{
        paddingTop: navbarHeight + "px", // Ensure homepage starts below navbar
        scrollPaddingTop: navbarHeight + "px", // Fix scrolling offset
      }}
    >
      {/* Home Section */}
      <section className="min-h-[65vh] w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Main Heading */}
          <div className="flex flex-col ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gray-800 text-green-400 font-mono inline-block px-3 sm:px-4 py-2 rounded-lg shadow-lg">
              `Hello World, It's`
            </h1>

            {/* Name */}
            <div className="flex flex-col items-center text-4xl sm:text-6xl md:text-8xl font-bold mb-10 sm:mb-16  px-6 sm:px-8 py-4 rounded-lg shadow-lg text-center leading-tight">
  {/* First Name - "HUMPHREY" */}
  <div className="tracking-wide">
    <span className="text-red-500">H</span>
    <span className="text-blue-400">U</span>
    <span className="text-yellow-400">M</span>
    <span className="text-green-400">P</span>
    <span className="text-purple-500">H</span>
    <span className="text-orange-400">R</span>
    <span className="text-pink-500">E</span>
    <span className="text-cyan-500">Y</span>
  </div>

  {/* Last Name - "MUSENJA" Centered Below */}
  <div className="tracking-wide mt-4">
    <span className="text-lime-500">M</span>
    <span className="text-teal-400">U</span>
    <span className="text-red-500">S</span>
    <span className="text-indigo-400">E</span>
    <span className="text-orange-500">N</span>
    <span className="text-fuchsia-500">J</span>
    <span className="text-violet-400">A</span>
  </div>
</div>


          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl mb-16 flex flex-col items-center space-y-4 sm:space-y-0 ">
            <span className="text-sm sm:text-xl md:text-xl font-bold bg-gray-800 text-green-400 font-mono inline-block px-3 sm:px-4 py-2 rounded-lg shadow-lg mb-4">
              `I'm a`
            </span>
            <span className="text-yellow-500 text-lg sm:text-3xl md:text-4xl font-bold bg-gray-800 px-3 sm:px-4 py-2 rounded-lg shadow-lg">
              Full-Stack Web Developer
            </span>
          </p>

          {/* Call-to-Action Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-block px-5 sm:px-6 py-2 sm:py-3 text-white rounded-lg text-sm sm:text-lg font-normal hover:text-yellow-600 bg-gray-800 flex items-center space-x-2"
          >
            <Link to="/about" className="flex items-center space-x-2">
              <span>
                More{" "}
                <span className="tracking-widest text-yellow-400">about</span>{" "}
                me
              </span>
              <FaArrowRight className="text-yellow-400" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#FAF8F6] py-16 px-6 md:px-16 w-full mt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Text Section */}
          <div>
            <h4 className="mb-20 font-semibold ">Skills</h4>
            <h2 className="text-3xl font-bold text-emerald-800 leading-tight ">
              Your Gateway to Exceptional Web Development
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              With a diverse skill set in full-stack development, I create
              dynamic and responsive single-page applications. My expertise
              ensures that your digital experience is seamless and engaging.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="bg-gray-300 px-1 py-0 rounded-lg text-sm font-semibold hover:bg-gray-700 hover:text-white transition">
                Explore
              </button>
              <button className="text-gray-900 font-semibold text-sm flex items-center hover:text-black transition">
                Contact <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/myProfile/images/skillsImage.jpg"
              alt="skills"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="bg-stone-300 text-white py-16 px-6 md:px-16 w-full  border-t-4 border-yellow-400">
        <div className="flex flex-col m-24 bg-white text-black mt-4 mb-4 py-16 px-12 rounded-lg shadow-lg md:flex-row gap-16 items-start max-w-7xl mx-auto">
          {/* Text Section */}
          <div className="flex-1 ">
            <h2 className="text-3xl text-emerald-800 font-bold leading-tight">
              Explore My Creative Portfolio
            </h2>
            <p className="mt-4 text-lg">
              Discover my projects and reach out for collaborations. I am always
              looking for new opportunities to create innovative web solutions.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-row gap-4">
            <button className="bg-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 hover:text-white transition">
              View
            </button>
            <button className="text-gray-900 font-semibold text-sm flex items-center hover:text-black transition">
              Contact <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </section>
      {/* footer Section */}
      <footer className=" text-white py-10 px-6 md:px-16 w-full ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Logo & Newsletter */}
          <div>
            <h2 className="text-lg font-bold">Logo</h2>
            <p className="text-sm mt-2">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div className="flex items-center mt-4 bg-white text-black rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email here"
                className="px-3 py-2 flex-grow outline-none"
              />
              <button className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-900">
                Join
              </button>
            </div>
            <p className="text-xs mt-2">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-white">
            <h3 className="font-semibold mb-3 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white font-semithin hover:underline"
                >
                  Project Showcase
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Skills
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Me
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-yellow-400">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-3 text-yellow-400">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm text-gray-300">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
