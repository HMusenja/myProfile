import React, { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useInView, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useNavbarHeight } from "../context/NavbarHeightContext";
import Container from "../components/Container";

const About = () => {
  const navbarHeight = useNavbarHeight();
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: false, margin: "-100px" });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section
      id="about"
      style={{ scrollMarginTop: `${navbarHeight}px` }}
      className="min-h-screen pt-10 sm:pt-12 md:pt-16 pb-16 px-6 md:px-20 border-t-4 border-t-yellow-500"
    >
      <Container>
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">ABOUT ME</h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 flex justify-between flex-col lg:-ml-20 md:flex-row items-center md:items-start w-full gap-8 md:gap-16">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ x: -150, opacity: 0 }}
            animate={
              isInView
                ? { x: isDesktop ? 100 : 0, opacity: 1 }
                : { x: -150, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              duration: 1.2,
              delay: 0.1,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="w-full max-w-xs sm:max-w-sm md:w-100 md:h-100 mx-auto md:mx-0 bg-stone-300 rounded overflow-hidden shadow-lg cursor-pointer"
            style={{ border: "10px solid #022c22" }}
          >
            <img
              src="/myProfile/images/aboutme.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              duration: 1.2,
              delay: 0.6,
            }}
            className="max-w-2xl text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold lg:mt-32">
              Get to know me!
            </h3>
            <p
              className="text-gray-800 text-sm md:text-base mt-2 leading-relaxed bg-white p-6"
              style={{
                border: "1px solid #facc15",
                borderRadius: "0.25rem",
                backgroundColor: "white",
              }}
            >
              Hi, I am a creative and detail-oriented Fullstack Web Developer.
              Specialised in the MERN tech, with a passion for crafting visually
              appealing and user-focused digital experiences. I thrive on
              problem-solving, continuously learning new technologies, and
              building innovative solutions that seamlessly integrate design and
              functionality.
              <br />
              <span className="block mt-4">
                Check out{" "}
                <Link
                  smooth to="/#projects"
                  className="font-semibold text-blue-800 hover:text-yellow-300 transition-colors"
                >
                  my projects
                </Link>{" "}
                to see how creativity meets functionality!
              </span>
            </p>
            <button className="mt-4 lg:mt-24 px-5 py-2 text-sm font-semibold bg-yellow-500 text-black rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-105">
              CONTACT
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
