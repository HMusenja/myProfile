import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Mainlayout"
import Layout from "./components/Layout";

//import Home from "./pages/Home";
//import About from "./pages/About";
//import Projects from "./pages/Projects";
//import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage"; 
import Manage from "./pages/Manage";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      
    </Routes>
  );
}

export default App;

/// from HomePage
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
    <button
  className="mt-4 px-5 py-2 text-sm font-semibold bg-black text-white rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-105"
  onClick={() => onClick(project)}
>
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



  {/* Footer for Small Screens */}
  <footer className="sm:hidden  bottom-0 left-0 w-full bg-emerald-950 text-white flex flex-col items-center p-4 shadow-md">
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