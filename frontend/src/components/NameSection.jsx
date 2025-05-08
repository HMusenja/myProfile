import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Function to generate random values for scatter effect
const getRandomPosition = () => ({
  x: Math.random() * 500 - 250,
  y: Math.random() * 500 - 250,
  rotate: Math.random() * 360 - 180,
  opacity: 0,
});

const NameSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const letterVariants = {
    hidden: () => getRandomPosition(),
    visible: (index) => ({
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: Math.random() * 1.5,
      },
    }),
  };

  const firstName = [
    { letter: "H", color: "text-red-500" },
    { letter: "U", color: "text-blue-400" },
    { letter: "M", color: "text-yellow-400" },
    { letter: "P", color: "text-green-400" },
    { letter: "H", color: "text-purple-500" },
    { letter: "R", color: "text-orange-400" },
    { letter: "E", color: "text-pink-500" },
    { letter: "Y", color: "text-cyan-500" },
  ];

  const lastName = [
    { letter: "M", color: "text-lime-500" },
    { letter: "U", color: "text-teal-400" },
    { letter: "S", color: "text-red-500" },
    { letter: "E", color: "text-indigo-400" },
    { letter: "N", color: "text-orange-500" },
    { letter: "J", color: "text-fuchsia-500" },
    { letter: "A", color: "text-violet-400" },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-5xl sm:text-6xl md:text-8xl font-bold mb-10 sm:mb-16 px-6 sm:px-8 py-4 rounded-lg shadow-lg text-center leading-tight"
    >
      {/* First Name */}
      <motion.div className="tracking-wide">
        {firstName.map((char, index) => (
          <motion.span
            key={index}
            className={`${char.color} inline-block`}
            variants={letterVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
          >
            {char.letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Last Name */}
      <motion.div className="tracking-wide mt-4">
        {lastName.map((char, index) => (
          <motion.span
            key={index}
            className={`${char.color} inline-block`}
            variants={letterVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index + 8}
          >
            {char.letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default NameSection;



