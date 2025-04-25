import React, { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FaArrowUp } from "react-icons/fa";

const Layout = () => {
    const [showButton, setShowButton] = useState(false);
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
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-100">
        <Outlet /> {/* ← Renders child route here */}
      </main>
      <Sidebar />
       {/* Back to Top Button */}
            {showButton && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-yellow-400 text-emerald-950 p-3 rounded-full shadow-lg hover:bg-gray-700  hover:text-yellow-400 ransition duration-300"
              >
                <FaArrowUp size={10} />
              </button>
            )}
    </div>
  );
};

export default Layout;
