import { Schema, model } from "mongoose";

const testimonialSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    avatar: { type: String, default: "" },
    quote: { type: String, required: true },
    rating: { type: Number, default: 0 }, // optional, range 1–5
  },
  { timestamps: true }
);

export default model("Testimonial", testimonialSchema);

