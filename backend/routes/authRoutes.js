import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/register', registerUser);  // Optional, for creating an Admin user

export default router;
