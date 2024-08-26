import React from "react";
import "./App.css";
import "./backgroundAnimation.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <div className="area bg-base-100 min-h-screen flex flex-col">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
