import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowRight } from "react-icons/fa";
import NameSection from "../components/NameSection";
import Container from "../components/Container";

const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <>
      {/* 🟢 Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center bg-emerald-950"
        style={{
          paddingTop: `${navbarHeight}px`,
          scrollPaddingTop: `${navbarHeight}px`,
        }}
      >
        {/* 🔳 Background Texture */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/myProfile/images/cubes.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            opacity: 1,
          }}
        />

        {/* 🔤 Hero Content */}
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gray-800 text-green-400 font-mono inline-block px-4 py-2 rounded-lg shadow-lg">
              `Hello World, It's`
            </h1>

            <NameSection />

            <p className="text-base sm:text-xl md:text-2xl my-8 flex flex-col items-center">
              <span className="text-sm sm:text-xl font-bold bg-gray-800 text-green-400 font-mono inline-block px-4 py-2 rounded-lg shadow-lg mb-4">
                `I'm a`
              </span>
              <span className="text-yellow-500 text-lg sm:text-3xl md:text-4xl font-bold bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                Full-Stack Web Developer
              </span>
            </p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-normal hover:text-yellow-600 transition"
            >
              <Link smooth to="/#about" className="flex items-center space-x-2">
                <span>
                  More{" "}
                  <span className="tracking-widest text-yellow-400">about</span>{" "}
                  me
                </span>
                <FaArrowRight className="text-yellow-400" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/*  Teaser Projects Section */}
      <section className="relative w-full bg-stone-100 border-t-4 border-yellow-400 ">
        <Container className="py-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-7xl mx-auto">
            {/* Left Text */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-emerald-800">
                Explore My Creative Portfolio
              </h2>
              <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4">
                Discover my projects and reach out for collaborations. I'm
                always looking for new opportunities to create innovative web
                solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
              <Link
                smooth
                to="/#projects"
                className="px-5 py-2 bg-black text-white rounded-md text-sm font-semibold hover:bg-gray-800 transition"
              >
                View Projects
              </Link>
              <Link
                smooth
                to="/#message"
                className="px-5 py-2 bg-yellow-400 text-black rounded-md text-sm font-semibold hover:bg-yellow-500 transition"
              >
                Contact →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
