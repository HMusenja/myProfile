import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Page Content */}
      <main className="flex-grow pt-16 bg-gray-100">
        {children}
      </main>
      <Sidebar />
    </div>
  );
};

export default Layout;

