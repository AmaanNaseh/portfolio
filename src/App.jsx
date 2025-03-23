import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home.Page";
import Navbar from "./Components/Navbar";
import AttributionsPage from "./Pages/Attributions.Page";
import ProjectsPage from "./Pages/Projects.Page";
import ResearchesPage from "./Pages/Researches.Page";
import ExperiencePage from "./Pages/Experience.Page";
import Footer from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroller = () => {
    if (window.scrollY > 500) {
      setIsScrollerVisible(true);
    } else {
      setIsScrollerVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);

    return () => {
      window.removeEventListener("scroll", handleScroller);
    };
  }, []);

  useEffect(() => {
    document.body.classList.add(
      `${isDarkMode ? "bg-[#0a0a0a]" : "bg-body-gradient"}`
    );

    return () => {
      document.body.classList.remove(
        `${isDarkMode ? "bg-[#0a0a0a]" : "bg-body-gradient"}`
      );
    };
  }, [isDarkMode]);

  useEffect(() => {
    document.body.classList.add(`${isDarkMode ? "text-white" : "text-black"}`);

    return () => {
      document.body.classList.remove(
        `${isDarkMode ? "text-white" : "text-black"}`
      );
    };
  }, [isDarkMode]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="m-5 min-h-[75vh] overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
          <Route path="/attributions" element={<AttributionsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/researches" element={<ResearchesPage />} />
        </Routes>
      </div>

      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={`bg-denim-400 hover:bg-denim-300 text-denim-700 text-2xl rounded-full cursor-pointer transition-transform transform duration-1000 z-50 w-[40px] h-[40px] md:w-[50px] md:h-[50px] fixed bottom-4 left-4 md:left-8 md:bottom-8 ${
          isScrollerVisible ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <FaArrowUp />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
