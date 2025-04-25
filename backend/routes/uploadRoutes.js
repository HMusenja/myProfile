import express from 'express';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// @route   POST /api/upload
// @desc    Upload an image to Cloudinary
// @access  Private (Use your `checkToken` middleware)
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.json({ url: req.file.path });
});

export default router;

