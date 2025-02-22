import React, { useEffect } from "react";
import { Certificates } from "../Datasets/Certificates";
import { GrCertificate } from "react-icons/gr";

const Certifications = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:p-8 items-center justify-center gap-8 lg:gap-16 lg:mx-4">
      {Certificates.map((certificate, key) => {
        return (
          <>
            <div
              key={key}
              className="bg-[#FFF0BD] z-10 ring-blue-100 ring-2 rounded-2xl shadow-[0_-7px_10px_rgba(255,255,255,0.6),0_7px_10px_rgba(255,255,255,0.6)] text-black p-4 flex flex-col items-center justify-center gap-4"
            >
              <div className="w-[275px] md:w-[300px] bg-black p-[5px]">
                <img className="w-full" src={certificate.imgSrc} alt="..." />
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.date}</p>
              <a
                href={certificate.link}
                className="hover:border-b-[2px] border-black flex items-center justify-center gap-4 bg-blue-600 text-white hover:scale-105 hover:z-10 hover:shadow-lg hover:bg-blue-400 px-4 py-2 rounded-lg font-bold text-md md:text-lg lg:text-xl"
                target="_blank"
                rel="noreferrer"
              >
                View <GrCertificate />
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Certifications;
