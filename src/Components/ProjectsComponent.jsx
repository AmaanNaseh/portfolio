import React, { useEffect, useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { Projects } from "../Datasets/Projects";
import { Link } from "react-router-dom";

const ProjectsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const divPosn = document.getElementById("projectDiv").offsetTop;
    const scrollPosn = window.scrollY + window.innerHeight;

    if (scrollPosn > divPosn + 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="projectDiv"
      className={`flex flex-col md:flex-row flex-wrap md:p-8 items-center justify-center gap-8 lg:gap-16 lg:mx-4 transition-all transform duration-[1100ms] ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-[-100px] opacity-0"
      }`}
    >
      {Projects.map((project, key) => {
        return (
          <>
            <div
              key={key}
              className={`z-10 min-h-[305px] font-bold hover:bg-denim-400 p-4 flex flex-col items-center justify-center gap-4 lg:text-lg ring-blue-100 bg-denim-200 ring-2 rounded-2xl shadow-[0_-7px_10px_rgba(70,156,235,0.6),0_7px_10px_rgba(70,156,235,0.6)]`}
            >
              <div className="w-[275px] md:w-[300px] bg-black p-[5px]">
                <img className="w-full" src={project.imgSrc} alt="..." />
              </div>
              <h3>{project.title}</h3>
              <p className="max-w-[250px] font-normal text-sm my-2">
                <span className="font-bold mr-1">Tech:</span> {project.tech}
              </p>
              <Link
                to={`/projects/${project.id}`}
                className="hover:border-b-[2px] border-black flex items-center justify-center gap-4  bg-denim-600 text-white hover:scale-105 hover:z-10 hover:shadow-lg hover:bg-black/75 px-4 py-2 rounded-lg font-bold text-md md:text-lg lg:text-xl"
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
