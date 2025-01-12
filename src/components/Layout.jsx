import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />
      {/* Page Content */}
      <main className="flex-grow pt-16 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
