import React from "react";
import { FaLaptop } from "react-icons/fa";
import { Projects } from "../Datasets/Projects";
import { Link } from "react-router-dom";

const ProjectsComponent = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:p-8 items-center justify-center gap-8 lg:gap-16 lg:mx-4">
      {Projects.map((project, key) => {
        return (
          <>
            <div
              key={key}
              className={`z-10 min-h-[305px] font-bold text-white bg-white/50 hover:bg-[#1674c9] p-4 flex flex-col items-center justify-center gap-4 lg:text-lg ring-blue-100 ring-2 rounded-2xl shadow-[0_-7px_10px_rgba(255,255,255,0.6),0_7px_10px_rgba(255,255,255,0.6)]`}
            >
              <div className="w-[275px] md:w-[300px] bg-black p-[5px]">
                <img className="w-full" src={project.imgSrc} alt="..." />
              </div>
              <h3>{project.title}</h3>
              <Link
                to={`/projects/${project.id}`}
                className="hover:border-b-[2px] border-black flex items-center justify-center gap-4 text-white bg-black hover:scale-105 hover:z-10 hover:shadow-lg hover:bg-black/75 px-4 py-2 rounded-lg font-bold text-md md:text-lg lg:text-xl"
              >
                View <FaLaptop />
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProjectsComponent;
