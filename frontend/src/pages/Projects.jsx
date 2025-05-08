import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Container from "../components/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavbarHeight } from "../context/NavbarHeightContext";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const navbarHeight = useNavbarHeight();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects", {
          credentials: "include",
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const scrollToProject = (index) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex-grow border-t-4 border-t-yellow-500"
      style={{ scrollMarginTop: `${navbarHeight}px` }}
    >
      <Container className="pt-10 sm:pt-12 md:pt-16 pb-16 px-4 md:px-8 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">My PROJECTS</h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-3"></div>
          <p className="text-gray-700 text-sm md:text-lg max-w-xl mx-auto mt-2">
            Explore some of my projects I created
          </p>
        </div>

        {/* Mobile Project Links */}
        <div className="lg:hidden flex justify-center gap-2 overflow-x-auto px-4 py-2 mb-4 whitespace-nowrap">
          {filteredProjects.map((project, index) => (
            <button
              key={project._id}
              onClick={() => scrollToProject(index)}
              className={`px-3 py-1 rounded bg-yellow-500 text-xs md:text-sm transition ${
                index === currentIndex
                  ? " underline text-blue-800 "
                  : "hover:bg-gray-200"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full max-w-6xl mx-auto">
          {/* Sidebar */}
          <aside className="bg-yellow-500 hidden lg:flex flex-col w-1/4 p-4 text-center md:border-r-2 md:border-r-emerald-950">
            <h3 className="text-lg font-bold mb-2">Projects</h3>
            <ul className="space-y-2">
              {filteredProjects.map((project, index) => (
                <li key={project._id}>
                  <button
                    onClick={() => scrollToProject(index)}
                    className={`block w-full text-left px-2 py-1 rounded transition ${
                      index === currentIndex
                        ? "font-bold border-r-emerald-400 border-r-4"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Carousel */}
          <div className="w-full lg:w-3/4 flex flex-col items-center" >
          <div className="w-full transition-all duration-500 ease-in-out">
  {filteredProjects.length > 0 && (
    <div className="w-full lg:mt-24" style={{ border: "1px solid #facc15" }}>
      <ProjectCard
        project={filteredProjects[currentIndex]}
        onClick={setActiveProject}
      />
    </div>
  )}
</div>

          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6 md:mt-12">
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 bg-yellow-500 text-emerald-950  rounded shadow-md hover:bg-gray-800 transition"
          >
            <FaArrowLeft size={16} />
          </button>
          <span className="font-semibold text-sm md:text-base bg-yellow-500 text-emerald-950 px-4 py-2 rounded">
            {filteredProjects.length > 0 ? currentIndex + 1 : 0} /{" "}
            {filteredProjects.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 bg-yellow-500 text-emerald-950 rounded shadow-md hover:bg-gray-800 transition"
          >
            <FaArrowRight size={16} />
          </button>
        </div>

        {/* Modal */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </Container>
    </section>
  );
};

export default Projects;
