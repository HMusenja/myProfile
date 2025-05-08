import axios from "axios";
import Testimonial from "../models/testimonials.js";
import createError from "http-errors";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
console.log("RECAPTCHA_SECRET_KEY:", process.env.RECAPTCHA_SECRET_KEY);

// GET all testimonials
export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (err) {
    next(createError(500, "Failed to fetch testimonials"));
  }
};

// POST new testimonial (admin only)
export const createTestimonial = async (req, res, next) => {
  try {
    const { name, role, quote, captchaToken, gender } = req.body;
    const rating = parseInt(req.body.rating, 10) || 0;

    // Validate required fields
    if (!name || !gender || !role || !quote || !captchaToken) {
      return next(createError(400, "All fields and captcha are required."));
    }

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // Verify reCAPTCHA
    const verifyRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${captchaToken}`
    );

    if (!verifyRes.data.success) {
      return next(createError(403, "reCAPTCHA verification failed."));
    }

    // Handle avatar: use Cloudinary path or fallback
    let avatar = req.file?.path;
    if (!avatar) {
      avatar =
        gender === "female"
          ? "https://i.pravatar.cc/150?img=47"
          : "https://i.pravatar.cc/150?img=12";
    }

    const newTestimonial = new Testimonial({
      name,
      role,
      quote,
      rating,
      gender,
      avatar,
    });

    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Error in createTestimonial:", err);
    next(createError(500, "Failed to submit testimonial."));
  }
};

// DELETE testimonial (admin only)
export const deleteTestimonial = async (req, res, next) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return next(createError(404, "Testimonial not found"));
    res.status(200).json({ message: "Testimonial deleted." });
  } catch (err) {
    next(createError(500, "Failed to delete testimonial"));
  }
};

