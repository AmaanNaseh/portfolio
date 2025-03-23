import React, { useEffect, useState } from "react";
import MyImg from "../assets/Homepage/MyImg.png";
import Resume from "../assets/Homepage/Resume.pdf";
import { FaBusinessTime, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";

const SelfSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const divPosn = document.getElementById("selfDiv").offsetTop;
    const scrollPosn = window.scrollY + window.innerHeight;

    if (scrollPosn > divPosn) {
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
      id="selfDiv"
      className={`flex flex-col lg:flex-row items-center justify-center lg:px-10 gap-4 lg:gap-10 transition-all transform duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
      }`}
    >
      <div
        className={`w-[225px] md:w-[300px] lg:w-[350px] lg:h-[395px] transition-all duration-[850ms] ${
          isVisible ? "translate-x-0" : "translate-x-[-100px]"
        }`}
      >
        <img className="w-full h-full" src={MyImg} alt="amaan" />
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-8 w-fit m-4 p-4 lg:p-8 md:mx-10 transition-all duration-[850ms] ${
          isVisible ? "translate-x-0" : "translate-x-[100px]"
        }`}
      >
        <h1 className="text-center font-semibold italic text-xl md:text-2xl lg:text-4xl">
          Amaan Naseh
        </h1>
        <h1 className="text-center font-semibold italic text-lg md:text-xl lg:text-2xl">
          Software Developer
        </h1>
        <h1 className="text-center font-semibold text-blue-400">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hackjmi2025.devfolio.co/projects?show_winners=true"
            className="md:mx-3 mx-1 text-sm md:text-md lg:text-lg border-white border-b-[2px] cursor-pointer transition-all duration-100 hover:scale-105 inline-flex gap-2 w-fit items-center"
          >
            HackJMI25
            <FaTrophy className="text-[#FFD700]" />
          </a>
          ,
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/posts/amaan-naseh_icapie-icapie2024-ggsipu-activity-7236372105762631680-ShdJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC2yRsBsl2oQ6uJ1yU3zu7TyP0_R102lrs"
            className="md:mx-3 mx-1 text-sm md:text-md lg:text-lg border-white border-b-[2px] cursor-pointer transition-all duration-100 hover:scale-105 inline-flex gap-2 w-fit items-center"
          >
            ICAPIE 2024
            <FaTrophy className="text-[#FFD700]" />
          </a>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-20">
          <a
            href={Resume}
            download
            className="border-white hover:border-[2px] px-4 py-3 transition-all duration-100"
          >
            Resume
          </a>
          <a
            href="mailto:naseh.amaan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="border-white hover:border-[2px] px-4 py-3 transition-all duration-100"
          >
            <CgMail className="text-3xl" />
          </a>
          <a
            href="https://github.com/AmaanNaseh"
            target="_blank"
            rel="noreferrer"
            className="border-white hover:border-[2px] px-4 py-3"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/amaan-naseh/"
            target="_blank"
            rel="noreferrer"
            className="border-white hover:border-[2px] px-4 py-3 transition-all duration-100"
          >
            <IoLogoLinkedin className="text-3xl" />
          </a>
        </div>
        <a href="https://wa.me/918287591040" target="_blank" rel="noreferrer">
          <button className="bg-[#f7f7f7] flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-full text-xl md:text-2xl text-black transition-transform duration-200 hover:scale-110 hover:shadow-sm hover:shadow-white">
            Hire Me <FaBusinessTime className="text-3xl" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default SelfSection;
