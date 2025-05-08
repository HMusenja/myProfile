import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const TestimonialForm = ({ onSuccessClose }) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    quote: "",
    gender: "",
    rating: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleRating = (rating) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    if (imageFile) formData.append("avatar", imageFile);
    formData.append("captchaToken", captchaToken);

    try {
      const res = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit testimonial");

      toast.success("Thank you for your testimonial!");
      setForm({ name: "", role: "", quote: "", gender: "", rating: 0 });
      setImageFile(null);
      setCaptchaToken("");
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    }
    // Close modal after short delay
    setTimeout(() => {
      if (onSuccessClose) onSuccessClose();
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-xl mx-auto"
      encType="multipart/form-data"
    >
      <h3 className="text-xl font-semibold text-center">Leave a Testimonial</h3>
      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        name="role"
        placeholder="Your Role"
        value={form.role}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="quote"
        placeholder="Your feedback..."
        value={form.quote}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((num) => (
          <FaStar
            key={num}
            onClick={() => handleRating(num)}
            className={`cursor-pointer text-xl ${
              num <= form.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm ml-2 text-gray-500">
          {form.rating > 0 ? `${form.rating} star(s)` : "Rate your experience"}
        </span>
      </div>

      {/* Avatar */}
      <div>
        <label className="block mb-1 font-medium">
          Upload Photo (optional)
        </label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptchaToken} />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default TestimonialForm;
