import React, { useState } from "react";
import Container from "../components/Container";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong.");

      setResponseMessage("Message sent successfully!");
      setErrorMessage("");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage(error.message);
      setResponseMessage("");
    }
  };

  return (
    <Container>
       <section className="flex-grow bg-white py-6 px-4 md:px-8 flex flex-col items-center ">
        <motion.section
          id="contact"
         
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
           {/* Title & Text */}
          <div className=" flex flex-col">
            {/* Section Title */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Contact
              </h2>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mb-3"></div>
            
          
          </motion.div>

          {/* Encouraging Text */}
          <motion.div
            className="text-center max-w-3xl text-gray-200 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-gray-700 text-sm md:text-lg max-w-xl mx-auto mt-4 md:mb-8">
              I’m always open to exciting opportunities, whether it's a new
              project, a freelance gig, or a full-time role. Let’s make
              something great together!
            </p>
          </motion.div>
          </div>

          {/* Responsive Layout */}
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
            {/* Form Section */}
            <motion.div
              className="bg-emerald-950 p-5 sm:p-6 md:p-8 rounded-lg shadow-lg flex-1 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-4 text-center">
                Drop a Message
              </h2>
              {responseMessage && (
                <div className="text-green-500 mb-4 text-center">
                  {responseMessage}
                </div>
              )}
              {errorMessage && (
                <div className="text-red-500 mb-4 text-center">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 ">
                <div>
                  <label className="block text-yellow-400 font-medium mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-yellow-400 font-medium mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-yellow-400 font-medium mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  />
                </div>
                <div className="text-center">
                  <button className="bg-yellow-400 text-emerald-950 py-3 px-5 sm:px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out text-sm sm:text-base w-full sm:w-auto">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              className="flex-1 text-gray-200 space-y-5 px-4 w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">
                Let’s Connect
              </h2>
              <p className="text-gray-700 text-sm sm:text-lg">
                Prefer a direct conversation? Connect with me through:
              </p>
              <div className="flex flex-col gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/Humphrey-Musenja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white bg-blue-600 py-3 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaLinkedin className="text-lg sm:text-xl mr-3" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="mailto:musenjahumphrey@yhoo.com"
                  className="flex items-center text-white bg-green-600 py-3 px-4 rounded-lg shadow-lg hover:bg-green-700 transition text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaEnvelope className="text-lg sm:text-xl mr-3" />
                  Email
                </motion.a>
                <motion.a
                  href="tel:+4917634216644"
                  className="flex items-center text-white bg-yellow-500 py-3 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaPhoneAlt className="text-lg sm:text-xl mr-3" />
                  Call Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </section>
    </Container>
  );
};

export default Contact;
