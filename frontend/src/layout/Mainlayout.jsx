import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

const MainLayout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Calculate navbar height
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight(); // Initial height check
    window.addEventListener("resize", updateNavbarHeight);

    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  useEffect(() => {
    // Handle scroll visibility for Back to Top button
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-emerald-950 dark:bg-gray-900 min-h-screen w-screen flex flex-col">
      <Navbar />
      <main
        className="flex-1 flex flex-col"
        style={{
          paddingTop: `${navbarHeight}px`,
          scrollPaddingTop: `${navbarHeight}px`,
        }}
      >
        {/* Reduced margin & padding on smaller screens */}
        <Container className="px-4 sm:px-6 md:px-8 lg:px-10 mx-auto w-full ">
          <Outlet />
        </Container>
      </main>
      <Footer className="w-full" />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 bg-yellow-400 text-emerald-950 p-3 rounded-full shadow-lg hover:bg-gray-700 hover:text-yellow-400 transition duration-300"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </div>
  );
};

export default MainLayout;




