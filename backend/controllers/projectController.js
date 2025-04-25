import Project from '../models/projectModel.js';

// Get all projects with optional pagination
export const getProjects = async (req, res) => {
  try {
    const { page, limit } = req.query;

    if (page && limit) {
      // Pagination logic
      const projects = await Project.find()
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));

      const total = await Project.countDocuments();

      res.json({
        projects,              // Array of projects
        total,                 // Total number of projects
        page: parseInt(page),   // Current page number
        pages: Math.ceil(total / limit)  // Total number of pages
      });
    } else {
      // Return all projects without pagination
      const projects = await Project.find();
      res.json(projects); // ✅ Return array directly if pagination is not applied
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Create a project
export const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};

// Update a project
export const updateProject = async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProject);
};

// Delete a project
export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
};
