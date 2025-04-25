import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Firebase Firestore only, no need for Firebase Storage anymore
import { collection, getDocs, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";
import axios from "axios"; // Import Axios for Cloudinary integration

const Manage = ({ uid }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    tools: "",
    collaborators: "",
    image: null,
  });
  const [loading, setLoading] = useState(false); // Loading state for fetching projects

  // Cloudinary config from environment variables
  const cloudName = import.meta.env.VITE_CLOUD_NAME; 
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
  
  console.log("Cloud Name:", import.meta.env.VITE_CLOUD_NAME);
  console.log("Upload Preset:", import.meta.env.VITE_UPLOAD_PRESET);

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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle Add/Update Project
  const handleSaveProject = async (e) => {
    e.preventDefault();

    try {
      let imageURL = null;

      // Upload image if available (to Cloudinary)
      if (formData.image) {
        const formDataForCloudinary = new FormData();
        formDataForCloudinary.append("file", formData.image);
        formDataForCloudinary.append("upload_preset", uploadPreset);
        formDataForCloudinary.append("cloud_name", cloudName);

        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formDataForCloudinary
          );
          imageURL = response.data.secure_url; // Get the image URL from the Cloudinary response
        } catch (error) {
          console.error("Cloudinary upload failed:", error);
          alert("Image upload failed. Please try again.");
          return; // Prevent further form submission if image upload fails
        }
      }

      const projectData = {
        name: formData.name,
        description: formData.description,
        link: formData.link,
        tools: formData.tools.split(",").map((tool) => tool.trim()),
        collaborators: formData.collaborators
          .split(",")
          .map((collaborator) => collaborator.trim()),
        createdOn: selectedProject ? selectedProject.createdOn : serverTimestamp(),
        image: imageURL || selectedProject?.image || null, // Store the image URL from Cloudinary
      };

      if (selectedProject) {
        // Update existing project
        const projectRef = doc(db, "projects", selectedProject.id);
        await updateDoc(projectRef, projectData);
        alert("Project updated successfully!");
      } else {
        // Add new project
        await addDoc(collection(db, "projects"), projectData);
        alert("Project added successfully!");
      }

      // Reset form and refresh project list
      setFormData({
        name: "",
        description: "",
        link: "",
        tools: "",
        collaborators: "",
        image: null,
      });
      setSelectedProject(null);

      // Refresh the project list after submission
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

  // Load project data for editing
  const handleEditProject = (project) => {
    setSelectedProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      link: project.link,
      tools: project.tools.join(", "),
      collaborators: project.collaborators.join(", "),
      image: null, // Reset image input for editing
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-700 px-4 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage Projects</h2>

      {/* Project Form */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSaveProject}>
          <h3 className="text-xl font-semibold mb-4">
            {selectedProject ? "Update Project" : "Add New Project"}
          </h3>

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
            <label className="block font-medium mb-1">Project Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {formData.image && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Selected preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {selectedProject ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>

      {/* Project List */}
      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-4">Available Projects</h3>
        {loading ? (
          <div className="text-center text-gray-500">Loading projects...</div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
              >
                <h4 className="text-lg font-bold">{project.name}</h4>

                <button
                  onClick={() => handleEditProject(project)}
                  className="mt-4 bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                >
                  Edit
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
