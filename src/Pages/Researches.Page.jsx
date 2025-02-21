import React from "react";
import { Researches } from "../Datasets/Researches";

const ResearchesPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 m-4 md:m-8 lg:m-12">
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
                <p>Date: {research.date}</p>
                <p>DOI: {research.doi}</p>
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
    </>
  );
};

export default ResearchesPage;
