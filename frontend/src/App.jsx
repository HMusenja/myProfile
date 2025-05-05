import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Mainlayout"
import Layout from "./components/Layout";

//import Home from "./pages/Home";
//import About from "./pages/About";
//import Projects from "./pages/Projects";
//import Contact from "./pages/Contact";

import MainPage from "./pages/MainPage"; 
import Manage from "./pages/Manage";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/manage" element={<Manage/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
