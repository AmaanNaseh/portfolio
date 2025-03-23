import React, { useEffect, useState } from "react";
import { Certificates } from "../Datasets/Certificates";
import { GrCertificate } from "react-icons/gr";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const divPosn = document.getElementById("certDiv").offsetTop;
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
      id="certDiv"
      className={`flex flex-col md:flex-row flex-wrap md:p-8 items-center justify-center gap-8 lg:gap-16 lg:mx-4 transition-all trasnform duration-[1100ms] ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-[100px] opacity-0"
      }`}
    >
      {Certificates.map((certificate, key) => {
        return (
          <>
            <div
              key={key}
              className="z-10 ring-blue-100 ring-2 rounded-2xl shadow-[0_-7px_10px_rgba(255,255,255,0.6),0_7px_10px_rgba(255,255,255,0.6)] text-white bg-white/50 hover:bg-[#1674c9] p-4 flex flex-col items-center justify-center gap-4"
            >
              <div className="w-[275px] md:w-[300px] bg-black p-[5px]">
                <img className="w-full" src={certificate.imgSrc} alt="..." />
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.date}</p>
              <a
                href={certificate.link}
                className="hover:border-b-[2px] border-black flex items-center justify-center gap-4 text-white bg-black hover:scale-105 hover:z-10 hover:shadow-lg hover:bg-black/75 px-4 py-2 rounded-lg font-bold text-md md:text-lg lg:text-xl"
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
