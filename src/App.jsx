import React from "react";
import "./App.css";
import "./backgroundAnimation.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./Context/ThemeContext";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="area bg-white dark:bg-base-100 min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
          <ul className="circles *:dark:bg-[#ffffff33] *:bg-[#00000033]">
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
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
