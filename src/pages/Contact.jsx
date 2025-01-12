import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), formData);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-emerald-800 px-4 py-8 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 opacity-30">
          Contact
        </h2>
        <p className="absolute text-base sm:text-lg md:text-xl text-yellow-500 -mt-4 ml-4 sm:ml-6">
          Let’s Collaborate!
        </p>
      </motion.div>

      {/* Encouraging Text */}
      <motion.div
        className="text-center max-w-3xl text-gray-200 mb-8 px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
          I’m always open to exciting opportunities, whether it's a new project,
          a freelance gig, or a full-time role. Let’s make something great
          together!
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 items-start w-full max-w-7xl">
        {/* Form Section */}
        <motion.div
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex-1 w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 text-center">
            Drop a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="flex-1 text-gray-200 space-y-4 px-4 sm:px-8 w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-4">
            Let’s Connect
          </h2>
          <p className="text-base sm:text-lg">
            Prefer a direct conversation? Feel free to connect with me through
            any of the following:
          </p>
          <div className="flex flex-col gap-4">
            <motion.a
              href="https://www.linkedin.com/in/Humphrey-Musenja/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-blue-600 py-3 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <FaLinkedin className="text-xl sm:text-2xl mr-3" />
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:musenjahumphrey@yhoo.com"
              className="flex items-center text-white bg-green-600 py-3 px-4 rounded-lg shadow-lg hover:bg-green-700 transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-xl sm:text-2xl mr-3" />
              Email
            </motion.a>
            <motion.a
              href="tel:+4917634216644"
              className="flex items-center text-white bg-yellow-500 py-3 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhoneAlt className="text-xl sm:text-2xl mr-3" />
              Call Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

