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
import { Link } from "react-scroll";

const App = () => {
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);

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
    document.body.classList.add("bg-[#0a0a0a]");

    return () => {
      document.body.classList.remove("bg-[#0a0a0a]");
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="m-5 min-h-[75vh] overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
          <Route path="/attributions" element={<AttributionsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/researches" element={<ResearchesPage />} />
        </Routes>
      </div>

      <Link to="posterSlider" smooth={true} duration={500} offset={-250}>
        <div
          className={`bg-[#1764c9] text-2xl rounded-full cursor-pointer transition-transform transform duration-1000 z-50 w-[40px] h-[40px] md:w-[50px] md:h-[50px] fixed bottom-4 left-4 md:left-8 md:bottom-8 ${
            isScrollerVisible ? "flex" : "hidden"
          } items-center justify-center`}
        >
          <FaArrowUp />
        </div>
      </Link>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
