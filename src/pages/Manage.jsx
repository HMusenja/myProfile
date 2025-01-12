import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Firebase Firestore only
import { collection, getDocs, addDoc, updateDoc, doc,deleteDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava,
  FaPhp, FaLaravel, FaDocker, FaGitAlt, FaGithub, FaAws, FaGoogle,
  FaAngular, FaVuejs, FaCloud, FaDatabase, FaSlack, FaBootstrap,
} from "react-icons/fa";
import {
  SiFirebase, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiJquery, SiTypescript,  SiKubernetes, SiCloudflare, SiRedux, SiWebpack,
} from "react-icons/si";

const Manage = ({ uid }) => {
  const auth = getAuth();
  console.log("Current user:", auth.currentUser);

  const [currentUser, setCurrentUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    tools: "",
    collaborators: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  // Tool Icons Mapping
  const toolIcons = {
    react: <FaReact className="text-blue-500" />,
    javascript: <FaJsSquare className="text-yellow-500" />,
    typescript: <SiTypescript className="text-blue-600" />,
    html: <FaHtml5 className="text-orange-500" />,
    css: <FaCss3Alt className="text-blue-700" />,
    bootstrap: <FaBootstrap className="text-purple-600" />,
    jquery: <SiJquery className="text-blue-400" />,
    tailwind: <SiTailwindcss className="text-teal-400" />,
    angular: <FaAngular className="text-red-500" />,
    vue: <FaVuejs className="text-green-500" />,
    nodejs: <FaNodeJs className="text-green-600" />,
    python: <FaPython className="text-yellow-400" />,
    java: <FaJava className="text-red-500" />,
    php: <FaPhp className="text-blue-600" />,
    laravel: <FaLaravel className="text-red-700" />,
    
    mongodb: <SiMongodb className="text-green-500" />,
    postgresql: <SiPostgresql className="text-blue-500" />,
    mysql: <SiMysql className="text-orange-400" />,
    database: <FaDatabase className="text-gray-500" />,
    docker: <FaDocker className="text-blue-500" />,
    kubernetes: <SiKubernetes className="text-blue-400" />,
    aws: <FaAws className="text-orange-500" />,
    googlecloud: <FaGoogle className="text-blue-500" />,
    firebase: <SiFirebase className="text-orange-500" />,
    cloud: <FaCloud className="text-blue-400" />,
    cloudflare: <SiCloudflare className="text-orange-500" />,
    git: <FaGitAlt className="text-orange-500" />,
    github: <FaGithub className="text-black" />,
    redux: <SiRedux className="text-purple-600" />,
    webpack: <SiWebpack className="text-blue-500" />,
    slack: <FaSlack className="text-purple-400" />,
  };
  useEffect(() => {
    setCurrentUser(auth.currentUser);
    console.log("Fetched current user:", auth.currentUser); // Log only once
  }, [auth]);
  // Fetch projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectList);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    console.log("Saving project data:", formData);
    try {
      const projectData = {
        name: formData.name,
        description: formData.description,
        link: formData.link,
        tools: formData.tools.split(",").map((tool) => tool.trim()),
        collaborators: formData.collaborators
          .split(",")
          .map((collaborator) => collaborator.trim()),
        createdOn: selectedProject ? selectedProject.createdOn : serverTimestamp(),
        image: formData.imageUrl || selectedProject?.image || null,
      };

      console.log("Final project data:", projectData);
      if (selectedProject) {
        const projectRef = doc(db, "projects", selectedProject.id);
        await updateDoc(projectRef, projectData);
        alert("Project updated successfully!");
      } else {
        await addDoc(collection(db, "projects"), projectData);
        alert("Project added successfully!");
      }

      setFormData({
        name: "",
        description: "",
        link: "",
        tools: "",
        collaborators: "",
        imageUrl: "",
      });
      setSelectedProject(null);
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectList);
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project. Please try again.");
    }
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setFormData({
      name: project.name || "",
      description: project.description || "",
      link: project.link || "",
      tools: project.tools?.join(", ") || "",
      collaborators: project.collaborators?.join(", ") || "",
      imageUrl: project.image || "",
    });
  };
  // Handle Delete Project
  const handleDeleteProject = async (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        // Delete the project from Firestore
        const projectRef = doc(db, "projects", projectId);
        await deleteDoc(projectRef);

        // Update the UI by removing the deleted project from the list
        setProjects(projects.filter((project) => project.id !== projectId));
        alert("Project deleted successfully!");
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Failed to delete project. Please try again.");
      }
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-700 px-4 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage Projects</h2>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSaveProject}>
          <h3 className="text-xl font-semibold mb-4">
            {selectedProject ? "Update Project" : "Add New Project"}
          </h3>
          {/* Form Fields */}
      
          <div className="mb-4">
            <label className="block font-medium mb-1">Project Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Project Link</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Tools (comma-separated)</label>
            <input
              type="text"
              name="tools"
              value={formData.tools}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Collaborators (comma-separated)</label>
            <input
              type="text"
              name="collaborators"
              value={formData.collaborators}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter the image URL"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            {selectedProject ? "Update Project" : "Add Project"}
          </button>
          
        </form>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-4">Available Projects</h3>
        {loading ? (
          <div className="text-center text-gray-500">Loading projects...</div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-bold">{project.name}</h4>
                <div className="flex space-x-2 mt-2">
                  {project.tools?.map((tool) => (
                    <span key={tool}>{toolIcons[tool.toLowerCase()] || tool}</span>
                  ))}
                </div>
                <button onClick={() => handleEditProject(project)} className="mt-4 bg-yellow-500">
                  Edit
                </button>
                <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Manage;
