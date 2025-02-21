import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home.Page";
import Navbar from "./Components/Navbar";
import AttributionsPage from "./Pages/Attributions.Page";
import ProjectsPage from "./Pages/Projects.Page";
import BgAnimation from "./Components/BgAnimation";
import ResearchesPage from "./Pages/Researches.Page";
import FreeLancePage from "./Pages/FreeLance.Page";
import Footer from "./Components/Footer";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <BgAnimation />
      <Navbar />
      <div className="m-5 min-h-[75vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
          <Route path="/attributions" element={<AttributionsPage />} />
          <Route path="/freelance" element={<FreeLancePage />} />
          <Route path="/researches" element={<ResearchesPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
