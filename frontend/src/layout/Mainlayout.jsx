import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { NavbarHeightContext } from "../context/NavbarHeightContext";

const MainLayout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const height = navbar.offsetHeight;
        setNavbarHeight(height);
        document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  // ✅ Scroll listener for "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavbarHeightContext.Provider value={navbarHeight}>
      <div className="relative min-h-screen w-screen flex flex-col overflow-x-hidden">
        {/* Background Pattern Layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
            linear-gradient(135deg, #d1fae5, #fef3c7),
            url('/myProfile/images/dark-wood.png')
          `,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundBlendMode: "soft-light",
            opacity:"0.2"
          }}
        />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main
            className="flex-grow flex flex-col"
            style={{
              paddingTop: `${navbarHeight}px`,
              scrollPaddingTop: `${navbarHeight}px`,
            }}
          >
            <Container>
              <Outlet />
            </Container>
          </main>

          <Sidebar />
          <Footer />

          {/* Scroll to Top Button */}
          {showButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-yellow-400 text-emerald-950 p-3 rounded-full shadow-lg hover:bg-gray-700 hover:text-yellow-400 transition duration-300 z-20"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={8} />
            </button>
          )}
        </div>
      </div>
    </NavbarHeightContext.Provider>
  );
};

export default MainLayout;
