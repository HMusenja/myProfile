import express from 'express';
import { saveContactMessage } from '../controllers/contactController.js';

const router = express.Router();

// ✅ Save a new contact message
router.post('/', saveContactMessage);

export default router;
