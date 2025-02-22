import React, { useState } from "react";
import { Projects } from "../Datasets/Projects";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProjectsPage = () => {
  var videoId = useParams();
  const [videoIndex, setVideoIndex] = useState(parseInt(videoId.id));

  return (
    <>
      <div className="flex flex-col-reverse justify-center lg:flex-row items-center gap-10">
        <div className="lg:w-[20%]">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-10">
            Projects Feed
          </h2>
          {Projects.map((project, key) => {
            return (
              <>
                <div
                  key={key}
                  onClick={() => {
                    setVideoIndex(project.id);
                  }}
                  className={`p-4 z-10 ring-[rgba(255,240,215,0.85)] ring-2 text-black rounded-lg shadow-md shadow-[#FFF0BD] flex items-center justify-between gap-5 mb-8 min-w-full hover:cursor-pointer hover:bg-[rgba(255,240,215,1)] ${
                    project.id === videoIndex
                      ? "bg-[rgba(255,240,215,1)]"
                      : "bg-[rgba(255,240,215,0.8)] "
                  }`}
                >
                  <div className="w-[100px] md:w-[200px]">
                    <img src={project.imgSrc} className="w-full" alt="..." />
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h3 className="font-bold">{project.title}</h3>
                    <div className="flex flex-row gap-4">
                      <a
                        href={project.deployedLink}
                        className="hover:border-b-[2px] border-black text-white bg-blue-600 hover:scale-105 hover:z-10 hover:shadow-lg hover:bg-blue-400 p-2 rounded-lg font-bold text-sm md:text-md lg:text-lg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGlobe />
                      </a>
                      <a
                        href={project.githubLink}
                        className="hover:border-b-[2px] border-black text-white bg-black hover:scale-105 hover:z-10 hover:shadow-lg hover:bg-black/75 p-2 rounded-lg font-bold text-sm md:text-md lg:text-lg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="lg:w-[78%] lg:p-4 text-black">
          {/* <video
            className="w-full h-full my-[15px]"
            src={Projects.find((project) => project.id === videoIndex).videoSrc}
            controls
          ></video> */}
          <iframe
            className="w-full h-full min-h-[250px] md:min-w-[700px] md:min-h-[350px] lg:min-h-[600px] my-[15px]"
            src={`https://www.youtube.com/embed/${
              Projects.find(
                (project) => project.id === videoIndex
              ).videoSrc.split("youtu.be/")[1]
            }`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
