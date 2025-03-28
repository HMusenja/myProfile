import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Mainlayout"
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Manage from "./pages/Manage";

function App() {
  return (
    <>
      <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<MainLayout/>}>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manage" element={<Manage />} />
      </Route>
     </Routes>
    </>
  );
}

export default App;
