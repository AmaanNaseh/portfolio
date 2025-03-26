import React from "react";
import ProjectsComponent from "../Components/ProjectsComponent";
import { Link } from "react-router-dom";
import RolesComponent from "../Components/RolesComponent";
import InternshipsComponent from "../Components/InternshipsComponent";

const ExperiencePage = () => {
  return (
    <>
      <div className="my-4 mb-14">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center my-2 bg-clip-text text-transparent bg-title-gradient">
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

      <div className="my-14">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center my-2 bg-clip-text text-transparent bg-title-gradient">
          Internships
        </h1>
        <InternshipsComponent />
      </div>

      <div className="my-14">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center my-2 bg-clip-text text-transparent bg-title-gradient">
          Roles and Responsibilities
        </h1>
        <RolesComponent />
      </div>
    </>
  );
};

export default ExperiencePage;
