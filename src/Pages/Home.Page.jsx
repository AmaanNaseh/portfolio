import React from "react";
import SkillSlider from "../Components/SkillSlider";
import MyImg from "../assets/Homepage/MyImg.png";
import PosterSlider from "../Components/PosterSlider";
import ResumeIcon from "../assets/Homepage/Resume.png";
import Resume from "../assets/Homepage/Resume.pdf";
import GmailLogo from "../assets/Homepage/Gmail.png";
import GithubLogo from "../assets/Homepage/Github.png";
import LinkedInLogo from "../assets/Homepage/LinkedIn.png";
import Certifications from "../Components/Certifications";
import { FaBusinessTime } from "react-icons/fa";
import ProjectsComponent from "../Components/ProjectsComponent";
import { FaTrophy } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="my-12">
        <PosterSlider />
      </div>

      {/* Self Section */}
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:px-10 gap-4 lg:gap-10">
          <div className="w-[225px] md:w-[300px] lg:w-[350px] lg:h-[395px]">
            <img className="w-full h-full" src={MyImg} alt="amaan" />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 w-fit m-4 p-4 lg:p-8 md:mx-10 border-white border-[2px]">
            <h1 className="text-center font-semibold italic text-xl md:text-2xl lg:text-4xl animate-rotate">
              Amaan Naseh
            </h1>
            <h1 className="text-center font-semibold italic text-lg md:text-xl lg:text-2xl">
              Full Stack Web Developer, Flask-ML Developer, Researcher &
              Freelancer
            </h1>
            <h1 className="text-center font-semibold text-blue-400">
              <span className="font-bold italic text-white text-lg md:text-xl lg:text-2xl mr-2">
                Achievements:
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hackjmi2025.devfolio.co/projects?show_winners=true"
                className="md:mx-3 mx-1 text-sm md:text-md lg:text-lg border-white border-b-[2px] hover:cursor-pointer hover:scale-105 inline-flex gap-2 w-fit items-center"
              >
                HackJMI25
                <FaTrophy className="text-[#FFD700]" />
              </a>
              ,
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/posts/amaan-naseh_icapie-icapie2024-ggsipu-activity-7236372105762631680-ShdJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC2yRsBsl2oQ6uJ1yU3zu7TyP0_R102lrs"
                className="md:mx-3 mx-1 text-sm md:text-md lg:text-lg border-white border-b-[2px] hover:cursor-pointer hover:scale-105 inline-flex gap-2 w-fit items-center"
              >
                ICAPIE 2025 Best Paper Award
                <FaTrophy className="text-[#FFD700]" />
              </a>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-20">
              <a
                href={Resume}
                download
                className="border-white hover:border-[2px] px-4 py-3 hover:scale-105"
              >
                <img
                  src={ResumeIcon}
                  alt="resume"
                  className="w-[50px] md:w-[75px]"
                />
              </a>
              <a
                href="mailto:naseh.amaan@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="border-white hover:border-[2px] px-4 py-3 hover:scale-105"
              >
                <img
                  src={GmailLogo}
                  alt="gmail"
                  className="w-[50px] md:w-[85px]"
                />
              </a>
              <a
                href="https://github.com/AmaanNaseh"
                target="_blank"
                rel="noreferrer"
                className="border-white hover:border-[2px] px-4 py-3"
              >
                <img
                  src={GithubLogo}
                  alt="github"
                  className="w-[50px] md:w-[80px]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/amaan-naseh/"
                target="_blank"
                rel="noreferrer"
                className="border-white hover:border-[2px] px-4 py-3 hover:scale-105"
              >
                <img
                  src={LinkedInLogo}
                  alt="linkedin"
                  className="w-[50px] md:w-[75px]"
                />
              </a>
            </div>
            <a
              href="https://wa.me/918287591040"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#f7f7f7] flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-full text-xl md:text-2xl text-black hover:scale-110 hover:shadow-md hover:shadow-white">
                Hire Me <FaBusinessTime className="text-4xl" />
              </button>
            </a>
          </div>
        </div>

        <div className="my-12">
          <SkillSlider />
        </div>

        <div className="my-12">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center mb-8 mt-12">
            Projects
          </h1>
          <ProjectsComponent />
          <Link
            to={"/projects/0"}
            className="flex items-center justify-center my-8"
          >
            <button className="bg-white hover:bg-white/75  shadow-md shadow-white rounded-lg text-black px-4 py-2 min-w-[300px] hover:scale-105">
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
      </div>
    </>
  );
};

export default HomePage;
