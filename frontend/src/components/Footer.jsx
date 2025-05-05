import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-6 md:px-16 w-full bg-emerald-950 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Logo & Newsletter */}
          

          {/* Quick Links */}
          <div className="text-white">
            <h3 className="font-semibold mb-3 text-yellow-400">Quick Links</h3>
            <ul className="flex justify-center space-x-4 mt-2 text-xs">
              <li>
                <Link smooth to ="/#projects"
                  className="text-white font-semithin hover:underline"
                >
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link smooth to="/#skills" className="hover:underline">
                  My Skills
                </Link>
              </li>
              <li>
                <Link smooth to="/#contact" className="hover:underline">
                  Contact Me
                </Link>
              </li>
             
              <li>
                <Link smooth to="/#about" className="hover:underline">
                  About Me
                </Link>
            </li>
            {/** <li>
                <a href="#" className="hover:underline">
                  Client Reviews
                </a>
              </li> */}
            </ul>
          </div>

          {/* Resources */}
         {/* <div>
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
          </div> */}

          {/* Social Media */}
         {/** <div>
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
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-6 pt-4 text-center text-xs text-gray-300">
          <p>&copy; 2025 HMusenja. All rights reserved.</p>
         {/* <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookie Settings
            </a>
          </div> */}
        </div>
      </footer>
  );
};

export default Footer;
