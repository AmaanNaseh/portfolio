import React, { useState, useEffect } from "react";
import { Researches } from "../Datasets/Researches";

const ResearchesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const divPosn = document.getElementById("researchDiv").offsetTop;
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
    <>
      <div className="m-4 md:m-8 lg:m-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center bg-clip-text text-transparent bg-title-gradient">
          Researches
        </h1>
        <div
          className={`flex flex-col items-center gap-10 transition-all trasnform duration-[1100ms] ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-100px] opacity-0"
          }`}
          id="researchDiv"
        >
          {Researches.map((research, key) => {
            return (
              <>
                <div
                  key={key}
                  className="flex flex-col items-center justify-center gap-4 my-8"
                >
                  <h3 className="font-bold md:text-lg lg:text-xl italic">
                    {research.id}. {research.title}
                  </h3>
                  {/* <p>Date: {research.date}</p>
                  <p>DOI: {research.doi}</p> */}
                  <p>
                    Status:{" "}
                    <span className="text-red-700 font-semibold">
                      {research.status}
                    </span>
                  </p>
                  <p className="text-justify">
                    <span className="font-bold text-md lg:text-lg mr-8">
                      Abstract:
                    </span>{" "}
                    {research.abstract}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResearchesPage;
