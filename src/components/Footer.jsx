import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio | Built with React & Tailwind CSS</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
