import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Container from "../components/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [activeTag, setActiveTag] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects", {
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleFilter = (tag) => {
    setActiveTag(tag);
    if (tag === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(tag))
      );
    }
    setCurrentIndex(0);
  };

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

  const allTags = ["All", ...new Set((projects || []).map((project) => project.tags).flat())];


  return (
    <Container className="flex-1 flex flex-col lg:flex-row">
      {/* Main Content */}
      <section className="flex-grow bg-white py-6 px-4 md:px-8 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">My PROJECTS</h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-3"></div>
          <p className="text-gray-700 text-sm md:text-lg max-w-xl mx-auto mt-4 md:mb-8">
            Explore some of my projects I created
          </p>
        </div>

        {/* Project Links (Mobile View) */}
        <div className="lg:hidden flex justify-center gap-2 overflow-x-auto px-4 py-2 mb-4 whitespace-nowrap">
          {filteredProjects.map((project, index) => (
            <button
              key={project._id}
              onClick={() => scrollToProject(index)}
              className={`px-3 py-1 rounded text-xs md:text-sm transition ${
                index === currentIndex
                  ? "font-bold underline text-yellow-500"
                  : "hover:bg-gray-200"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full max-w-6xl mx-auto">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:flex flex-col w-1/4 p-4 text-center md:border-r-2 md:border-r-emerald-950">
            <h3 className="text-lg font-bold mb-2">Projects</h3>
            <ul className="space-y-2">
              {filteredProjects.map((project, index) => (
                <li key={project._id}>
                  <button
                    onClick={() => scrollToProject(index)}
                    className={`block w-full text-left px-2 py-1 rounded transition ${
                      index === currentIndex
                        ? "font-bold border-r-yellow-400 border-r-4"
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
          <div className="w-full lg:w-3/4 flex flex-col items-center">
            <div className="overflow-hidden w-full" ref={carouselRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredProjects.map((project) => (
                  <div key={project._id} className="w-full flex-shrink-0">
                    <ProjectCard project={project} onClick={setActiveProject} />
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
         {/* Navigation Controls */}
         <div className="flex items-center justify-center gap-2 mt-6 md:mt-12">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-2 md:p-3 bg-black text-white rounded shadow-md hover:bg-gray-800 transition"
              >
                <FaArrowLeft size={16} />
              </button>

              {/* Current Slide Indicator */}
              <span className="font-semibold text-sm md:text-base bg-black text-white px-4 py-2 rounded">
                {filteredProjects.length > 0 ? currentIndex + 1 : 0} /{" "}
                {filteredProjects.length}
              </span>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-2 md:p-3 bg-black text-white rounded shadow-md hover:bg-gray-800 transition"
              >
                <FaArrowRight size={16} />
              </button>
            </div>

        {/* Project Modal */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </section>
    </Container>
  );
};

export default Projects;

