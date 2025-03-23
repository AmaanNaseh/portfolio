import React from "react";
import ProjectsComponent from "../Components/ProjectsComponent";
import Certifications from "../Components/Certifications";
import { Link } from "react-router-dom";

const ExperiencePage = () => {
  return (
    <>
      <div>Experience</div>
      <div id="proj" className="my-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center mb-8 mt-12">
          Projects
        </h1>
        <ProjectsComponent />
        <Link
          to={"/projects/0"}
          className="flex items-center justify-center my-8"
        >
          <button className="bg-denim-600 hover:bg-denim-500 shadow-md shadow-denim-400 text-white rounded-lg px-4 py-2 min-w-[300px] hover:scale-105">
            View More
          </button>
        </Link>
      </div>

      <div className="my-12 py-10" id="cert">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center mb-8 mt-12">
          Certifications
        </h1>
        <Certifications />
      </div>
    </>
  );
};

export default ExperiencePage;
