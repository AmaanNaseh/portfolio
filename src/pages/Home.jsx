import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

// User Data
import {
  aboutSection,
  certificationSection,
  educationSection,
  extraSection,
  internshipSection,
  projectSection,
  // skillSection,
} from "./UserData";

// Icons
import {
  FaStarOfLife,
  FaVideo,
  FaCode,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu, IoIosLink } from "react-icons/io";

// Skill Images
import htmlcssjsLogo from "../assets/skills/htmlcssjs.png";
import mernLogo from "../assets/skills/mern.png";
import tailwindcssLogo from "../assets/skills/tailwindcss.png";

import mlLogo from "../assets/skills/ml.png";
import flaskLogo from "../assets/skills/flask.png";
import botpressLogo from "../assets/skills/botpress.png";

import devopsLogo from "../assets/skills/devops.png";
import gcpLogo from "../assets/skills/gcp.png";
import pythonLogo from "../assets/skills/python.png";

import cppLogo from "../assets/skills/cpp.png";

// components
import VoiceNavigation from "../components/VoiceNavigation";
import Menudriver from "../components/Menudriver";

const PTemplate7 = () => {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [isMoveToTop, setIsMoveToTop] = useState(false);

  useEffect(() => {
    const handleScrollYValue = () => {
      setIsMoveToTop(window.scrollY > 750 ? true : false);
    };

    window.addEventListener("scroll", handleScrollYValue);

    return () => window.removeEventListener("scroll", handleScrollYValue);
  }, []);

  return (
    <>
      {/* Main Homepage */}
      <div className="overflow-hidden">
        <nav className="z-50 flex items-center justify-between px-4 lg:px-20 pt-12 mb-10">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="flex items-end justify-center gap-2 text-xl md:text-2xl font-bold italic cursor-pointer hover:scale-110 transition-all duration-200"
          >
            <img src="/logo.png" alt="logo" className="w-[50px] h-[50px]" />
            Naseh
          </div>

          <ul className="hidden lg:inline-flex items-center gap-12 text-[#9c9da1] font-semibold text-sm">
            <ScrollLink
              to="projectSection"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                Projects
              </li>
            </ScrollLink>

            <ScrollLink
              to="internshipSection"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                Experience
              </li>
            </ScrollLink>

            <ScrollLink
              to="certificationSection"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                Certifications
              </li>
            </ScrollLink>

            <ScrollLink
              to="educationSection"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                Education
              </li>
            </ScrollLink>

            <ScrollLink
              to="extraSection"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                Extras
              </li>
            </ScrollLink>

            <ScrollLink
              to="contactSection"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                Contact
              </li>
            </ScrollLink>
          </ul>

          <a
            href={`mailto:${aboutSection.aboutEmail}`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block px-6 py-3 font-bold bg-[#3B38A0] text-[#FFFFF0] shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:scale-110 transition-all duration-200"
          >
            Let's Talk
          </a>

          {isSideNavVisible ? (
            <RxCross1
              className="text-3xl lg:hidden cursor-pointer"
              onClick={() => {
                setIsSideNavVisible(false);
              }}
            />
          ) : (
            <IoMdMenu
              className="text-3xl lg:hidden cursor-pointer"
              onClick={() => {
                setIsSideNavVisible(true);
              }}
            />
          )}

          {isSideNavVisible ? (
            <div className="fixed top-0 bottom-0 left-0 lg:hidden z-50 w-full min-h-[100vh] bg-[#f4f6fa] p-8">
              <RxCross1
                className="text-3xl lg:hidden cursor-pointer hover:scale-110 transition-all duration-200 absolute right-4 top-12"
                onClick={() => {
                  setIsSideNavVisible(false);
                }}
              />
              <ul className="flex flex-col gap-8 pt-16">
                <ScrollLink
                  to="projectSection"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setIsSideNavVisible(false);
                    }}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  >
                    Projects
                  </li>
                </ScrollLink>

                <ScrollLink
                  to="internshipSection"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setIsSideNavVisible(false);
                    }}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  >
                    Experience
                  </li>
                </ScrollLink>

                <ScrollLink
                  to="certificationSection"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setIsSideNavVisible(false);
                    }}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  >
                    Certifications
                  </li>
                </ScrollLink>

                <ScrollLink
                  to="educationSection"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setIsSideNavVisible(false);
                    }}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  >
                    Education
                  </li>
                </ScrollLink>

                <ScrollLink
                  to="extraSection"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setIsSideNavVisible(false);
                    }}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  >
                    Extras
                  </li>
                </ScrollLink>

                <ScrollLink
                  to="contactSection"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setIsSideNavVisible(false);
                    }}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  >
                    Contact
                  </li>
                </ScrollLink>
              </ul>
            </div>
          ) : (
            ""
          )}
        </nav>

        {/* Hero Section */}
        <div
          name="aboutSection"
          className="relative flex flex-col items-center justify-center mb-12"
        >
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] drop-shadow-[0_0_20px_#3B38A0]">
              <img
                src={aboutSection.aboutImage}
                alt="..."
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Skills LHS */}
          <div className="hidden lg:block w-[200px] absolute top-[10%] left-[5%] animate-bounce">
            <img src={htmlcssjsLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[200px] absolute top-[30%] left-[15%] animate-bounce">
            <img src={mernLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[75px] absolute top-[33%] left-[30%] animate-bounce">
            <img src={tailwindcssLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[150px] absolute top-[55%] left-[5%] animate-bounce">
            <img src={devopsLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[200px] absolute top-[58%] left-[18%] animate-bounce">
            <img src={gcpLogo} alt="logo" className="w-full" />
          </div>

          {/* Skills RHS */}
          <div className="hidden lg:block w-[175px] absolute top-[10%] right-[10%] animate-bounce">
            <img src={mlLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[75px] absolute top-[14%] right-[24%] animate-bounce">
            <img src={pythonLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[75px] absolute top-[37%] right-[30%] animate-bounce">
            <img src={cppLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[200px] absolute top-[37%] right-[15%] animate-bounce">
            <img src={botpressLogo} alt="logo" className="w-full" />
          </div>

          <div className="hidden lg:block w-[150px] absolute top-[55%] right-[10%] animate-bounce">
            <img src={flaskLogo} alt="logo" className="w-full" />
          </div>

          {/* Hero Bottom */}

          <div className="text-sm md:text-2xl lg:text-4xl bg-black w-full text-white flex items-center justify-center gap-6 md:gap-10 lg:gap-20 py-8 px-4 md:px-10 font-bold">
            <p className="text-center">MERN DEVELOPER</p>
            <FaStarOfLife className="text-[#3B38A0] hidden md:block md:text-5xl" />
            <p>RESEARCHER</p>
            <FaStarOfLife className="text-[#3B38A0] hidden md:block md:text-5xl" />
            <p className="text-center">ML DEVELOPER</p>
          </div>
        </div>

        {/* Skills Small Screens */}
        <div className="lg:hidden flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
            My <span className="text-[#3B38A0]">SKILLS</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-9">
            <div className="w-[100px] animate-bounce">
              <img src={htmlcssjsLogo} alt="logo" />
            </div>

            <div className="w-[100px] animate-bounce">
              <img src={mernLogo} alt="logo" />
            </div>

            <div className="w-[40px] animate-bounce">
              <img src={tailwindcssLogo} alt="logo" />
            </div>

            <div className="w-[75px] animate-bounce">
              <img src={devopsLogo} alt="logo" />
            </div>

            <div className="w-[75px] animate-bounce">
              <img src={gcpLogo} alt="logo" />
            </div>

            <div className="w-[40px] animate-bounce">
              <img src={cppLogo} alt="logo" />
            </div>

            <div className="w-[40px] animate-bounce">
              <img src={pythonLogo} alt="logo" />
            </div>

            <div className="w-[75px] animate-bounce">
              <img src={mlLogo} alt="logo" />
            </div>

            <div className="w-[100px] animate-bounce">
              <img src={botpressLogo} alt="logo" />
            </div>

            <div className="w-[75px] animate-bounce">
              <img src={flaskLogo} alt="logo" />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div name="projectSection" className="my-20 px-10">
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
            Featured <span className="text-[#3B38A0]">PROJECTS</span>
          </h1>

          <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-16">
            {projectSection.map((item, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[300px] max-w-[350px] min-h-[250px] bg-[#ffffff] text-black z-10 shadow-[1px_1px_10px_0_rgba(0,0,0,0.2)]"
                >
                  <div
                    className={`w-full text-center p-4 text-white ${
                      index === 0
                        ? "bg-[#7A52E7]"
                        : index == 1
                        ? "bg-[#1674C9]"
                        : index == 2
                        ? "bg-[#15803D]"
                        : "bg-[#D3D3D3]"
                    }`}
                  >
                    <p className="font-bold">{item.projectName}</p>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center gap-5 my-7">
                    <p className="text-sm font-semibold">
                      {item.projectDomain}
                    </p>
                    <p className="text-xs max-w-[275px] text-justify">
                      {item.projectDescription}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={
                          item.projectVideo !== "NA" ? item.projectVideo : ""
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={`px-4 py-2 text-sm font-bold bg-[#3B38A0] text-[#FFFFF0] shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer hover:scale-110 transition-all duration-200 ${
                          item.projectVideo !== "NA" ? "" : "hidden"
                        }`}
                      >
                        <FaVideo className="" />
                      </a>

                      <a
                        href={item.projectCode !== "NA" ? item.projectCode : ""}
                        target="_blank"
                        rel="noreferrer"
                        className={`px-4 py-2 text-sm font-bold bg-[#3B38A0] text-[#FFFFF0] shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer hover:scale-110 transition-all duration-200 ${
                          item.projectCode !== "NA" ? "" : "hidden"
                        }`}
                      >
                        <FaCode />
                      </a>

                      <a
                        href={item.projectLink !== "NA" ? item.projectLink : ""}
                        target="_blank"
                        rel="noreferrer"
                        className={`px-4 py-2 text-sm font-bold bg-[#3B38A0] text-[#FFFFF0] shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer hover:scale-110 transition-all duration-200 ${
                          item.projectLink !== "NA" ? "" : "hidden"
                        }`}
                      >
                        <IoIosLink />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Internship Section */}
        <div className="my-20 md:my-32 px-10">
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
            Professional <span className="text-[#3B38A0]">EXPERIENCE</span>
          </h1>

          <div
            name="internshipSection"
            className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-16"
          >
            {internshipSection.map((item, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[300px] max-w-[350px] md:max-w-[450px] min-h-[250px] bg-[#ffffff] text-black z-10 shadow-[1px_1px_10px_0_rgba(0,0,0,0.2)]"
                >
                  <div
                    className={`w-full text-center p-4 bg-[#3B38A0] text-white`}
                  >
                    <p className="font-bold">{item.internshipInstitute}</p>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center gap-5 my-7">
                    <p className="text-sm font-semibold">
                      {item.internshipTopic}
                    </p>
                    <p className="text-sm font-semibold">
                      {item.internshipDuration}
                    </p>
                    <p className="text-xs max-w-[275px] md:max-w-[375px] px-4 text-justify">
                      {item.internshipDescription}
                    </p>

                    <a
                      href={
                        item.internshipLink !== "NA" ? item.internshipLink : ""
                      }
                      target="_blank"
                      rel="noreferrer"
                      className={`px-4 py-2 text-sm font-bold bg-[#3B38A0] text-[#FFFFF0] shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer hover:scale-110 transition-all duration-200 ${
                        item.internshipLink !== "NA" ? "" : "hidden"
                      }`}
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="my-20 md:my-32 px-10">
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
            Professional <span className="text-[#3B38A0]">CERTIFICATIONS</span>
          </h1>

          <div
            name="certificationSection"
            className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-16"
          >
            {certificationSection.map((item, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[300px] max-w-[350px] md:max-w-[450px] min-h-[250px] bg-[#ffffff] text-black z-10 shadow-[1px_1px_10px_0_rgba(0,0,0,0.2)]"
                >
                  <div
                    className={`w-full text-center p-4 bg-[#3B38A0] text-white`}
                  >
                    <p className="font-bold">{item.certificationInstitute}</p>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center gap-5 my-7">
                    <p className="text-sm font-semibold">
                      {item.certificationCourse}
                    </p>
                    <p className="text-sm font-semibold">
                      {item.certificationDuration}
                    </p>
                    <p className="text-xs max-w-[275px] md:max-w-[375px] px-4 text-justify">
                      {item.certificationDescription}
                    </p>

                    <a
                      href={
                        item.certificationLink !== "NA"
                          ? item.certificationLink
                          : ""
                      }
                      target="_blank"
                      rel="noreferrer"
                      className={`px-4 py-2 text-sm font-bold bg-[#3B38A0] text-[#FFFFF0] shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer hover:scale-110 transition-all duration-200 ${
                        item.certificationLink !== "NA" ? "" : "hidden"
                      }`}
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}

        <div className="my-20 md:my-32 px-10">
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-center">
            Educational <span className="text-[#3B38A0]">BACKGROUND</span>
          </h1>

          <div
            name="educationSection"
            className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-16"
          >
            {educationSection.map((item, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[300px] max-w-[350px] md:max-w-[450px] min-h-[250px] bg-[#ffffff] text-black z-10 shadow-[1px_1px_10px_0_rgba(0,0,0,0.2)]"
                >
                  <div
                    className={`w-full text-center p-4 bg-[#3B38A0] text-white`}
                  >
                    <p className="font-bold">{item.educationInstitute}</p>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center gap-5 my-7">
                    <p className="text-sm font-semibold">
                      {item.educationCourse}
                    </p>
                    <p>{item.educationDuration}</p>
                    <p>{item.educationPercentage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mail Me */}
        <div className="my-28 flex items-center justify-around w-full px-8">
          <div className="font-bold flex flex-col lg:gap-5 text-md md:text-2xl lg:text-5xl tracking-widest">
            <p>Trust me, I'm the</p>
            <p>
              <span className="text-[#3B38A0]">best option</span> that you have!
            </p>
          </div>

          <a
            href={`mailto:${aboutSection.aboutEmail}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 lg:px-12 lg:py-6 text-sm md:text-xl lg:text-2xl font-bold bg-[#3B38A0] text-[#FFFFF0] shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:scale-110 transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>

        {/* Extras */}
        <h1
          name="extraSection"
          className="text-2xl lg:text-4xl font-bold mt-32 my-20 mb-4 text-center"
        >
          Additional <span className="text-[#3B38A0]">INFORMATION</span>
        </h1>
        <div className="mb-20 md:mb-32 p-4 py-10 flex flex-col lg:flex-row items-center justify-center gap-20">
          {extraSection.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center gap-8 w-[300px] min-h-[200px] bg-[#FFFFFF] text-black shadow-[1px_1px_10px_0_rgba(0,0,0,0.2)]"
                >
                  <p className="w-full bg-[#3B38A0] text-white p-4 text-center font-bold">
                    {item.extraTitle}
                  </p>
                  <p className="text-sm text-justify max-w-[275px]">
                    {item.extraDescription}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="w-full z-50 mt-20 bg-black flex flex-col items-start justify-center gap-8 py-12">
          <div className="mx-auto">
            <p className="text-white text-3xl font-bold tracking-wider mb-8 text-center px-4">
              Let's <span className="text-[#3B38A0]">connect</span> here
            </p>

            <div
              name="contactSection"
              className="flex flex-col lg:flex-row flex-wrap items-center justify-center px-4 md:px-10 gap-10 text-black"
            >
              <div
                className={`bg-[#ffffff] px-8 py-7 flex items-center justify-between min-w-[325px] ${
                  aboutSection.aboutLinkedin !== "NA" ? "" : "hidden"
                }`}
              >
                <p className="flex items-center justify-center gap-3 font-bold text-lg">
                  <FaLinkedinIn className="text-[#3B38A0]" /> LinkedIn
                </p>
                <a
                  href={
                    aboutSection.aboutLinkedin !== "NA"
                      ? aboutSection.aboutLinkedin
                      : ""
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 text-xs font-semibold bg-[#3B38A0] text-[#FFFFF0] shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:scale-110 transition-all duration-200"
                >
                  Connect
                </a>
              </div>

              <div
                className={`bg-[#ffffff] px-8 py-7 flex items-center justify-between min-w-[325px] ${
                  aboutSection.aboutInstagram !== "NA" ? "" : "hidden"
                }`}
              >
                <p className="flex items-center justify-center gap-3 font-bold text-lg">
                  <GrInstagram className="text-[#3B38A0]" /> Instagram
                </p>
                <a
                  href={
                    aboutSection.aboutInstagram !== "NA"
                      ? aboutSection.aboutInstagram
                      : ""
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 text-xs font-semibold bg-[#3B38A0] text-[#FFFFF0] shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:scale-110 transition-all duration-200"
                >
                  Connect
                </a>
              </div>

              <div
                className={`bg-[#ffffff] px-8 py-7 flex items-center justify-between min-w-[325px] ${
                  aboutSection.aboutFacebook !== "NA" ? "" : "hidden"
                }`}
              >
                <p className="flex items-center justify-center gap-3 font-bold text-lg">
                  <FiFacebook className="text-[#3B38A0]" /> Facebook
                </p>
                <a
                  href={
                    aboutSection.aboutFacebook !== "NA"
                      ? aboutSection.aboutFacebook
                      : ""
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 text-xs font-semibold bg-[#3B38A0] text-[#FFFFF0] shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:scale-110 transition-all duration-200"
                >
                  Connect
                </a>
              </div>

              <div
                className={`bg-[#ffffff] px-8 py-7 flex items-center justify-between min-w-[325px] ${
                  aboutSection.aboutGithub !== "NA" ? "" : "hidden"
                }`}
              >
                <p className="flex items-center justify-center gap-3 font-bold text-lg">
                  <FiGithub className="text-[#3B38A0]" /> Github
                </p>
                <a
                  href={
                    aboutSection.aboutGithub !== "NA"
                      ? aboutSection.aboutGithub
                      : ""
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 text-xs font-semibold bg-[#3B38A0] text-[#FFFFF0] shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:scale-110 transition-all duration-200"
                >
                  Connect
                </a>
              </div>

              <div
                className={`bg-[#ffffff] px-8 py-7 flex items-center justify-between min-w-[325px] ${
                  aboutSection.aboutTwitter !== "NA" ? "" : "hidden"
                }`}
              >
                <p className="flex items-center justify-center gap-3 font-bold text-lg">
                  <FaXTwitter className="text-[#3B38A0]" /> Twitter
                </p>
                <a
                  href={
                    aboutSection.aboutTwitter !== "NA"
                      ? aboutSection.aboutTwitter
                      : ""
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 text-xs font-semibold bg-[#3B38A0] text-[#FFFFF0] shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:scale-110 transition-all duration-200"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto h-[1px] bg-[#ffffff] my-4"></div>

          <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between gap-8 font-semibold text-white text-sm px-5 md:px-8">
            <p
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="text-xs cursor-pointer hover:scale-110 transition-all duration-200"
            >
              {aboutSection.aboutName} / {new Date().getFullYear()}
            </p>
            <ul className="inline-flex flex-wrap items-center text-sm gap-4 lg:gap-12 text-[#9c9da1]">
              <ScrollLink
                to="projectSection"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                  Projects
                </li>
              </ScrollLink>

              <ScrollLink
                to="internshipSection"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                  Experience
                </li>
              </ScrollLink>

              <ScrollLink
                to="certificationSection"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                  Certifications
                </li>
              </ScrollLink>

              <ScrollLink
                to="educationSection"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                  Education
                </li>
              </ScrollLink>

              <ScrollLink
                to="extraSection"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                  Extras
                </li>
              </ScrollLink>
            </ul>
          </div>
        </footer>
      </div>

      {/* Scroll to Top */}
      <div
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={`w-[50px] h-[50px] z-20 rounded-full border-[4px] border-[#3B38A0] cursor-pointer fixed left-4 top-8 hover:scale-110 transition-all duration-200 ${
          isMoveToTop ? "flex items-center justify-center" : "hidden"
        }`}
      >
        <FaArrowUp className="text-3xl font-bold text-[#3B38A0]" />
      </div>

      {/* Menu Driver */}
      <Menudriver />

      {/* Voice Navigation */}
      <VoiceNavigation />
    </>
  );
};

export default PTemplate7;
