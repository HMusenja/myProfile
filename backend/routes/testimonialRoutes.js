import express from "express";
import {
  getTestimonials,
  createTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";
import { checkToken, checkRole } from "../middleware/checkToken.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public
router.get("/", getTestimonials);
router.post("/", upload.single("avatar"), createTestimonial);

// Protected (admin)
router.delete("/:id", checkToken, checkRole("admin"), deleteTestimonial);

export default router;
