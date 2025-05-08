import express from 'express';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/projectController.js';
import {checkToken} from '../middleware/checkToken.js';  // Import your middleware

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(checkToken, createProject);  // Using checkToken instead of protect

router.route('/:id')
  .put(checkToken, updateProject)
  .delete(checkToken, deleteProject);

export default router;

