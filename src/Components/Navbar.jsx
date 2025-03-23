import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  const navigate = useNavigate();

  const handleScrollToCert = () => {
    navigate("/experience");
    setTimeout(() => {
      const targetCert = document.querySelector("#cert");
      if (targetCert) {
        targetCert.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleScrollToProjects = () => {
    navigate("/experience");
    setTimeout(() => {
      const targetProjects = document.querySelector("#proj");
      if (targetProjects) {
        targetProjects.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav className="z-20 sticky top-1 bg-[#F1E7E7] text-black shadow-sm shadow-blue-200 p-4 rounded-full m-2 flex flex-wrap items-center justify-between">
        <Link to={"/"}>
          <h1 className="font-bold italic md:text-lg lg:text-2xl hover:scale-105 cursor-pointer">
            &lt; Amaan Naseh /&gt;
          </h1>
        </Link>
        <ul className="hidden lg:inline-flex flex-wrap items-center gap-4">
          <Link to={"/experience"}>
            <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105">
              Experience
            </li>
          </Link>

          <li
            onClick={handleScrollToProjects}
            className="cursor-pointer transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105"
          >
            Projects
          </li>

          <li
            onClick={handleScrollToCert}
            className="cursor-pointer transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105"
          >
            Certifications
          </li>

          {/* <ScrollLink to="cert" smooth={true} duration={500} offset={-175}>
          </ScrollLink> */}

          <Link to={"/researches"}>
            <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105">
              Researches
            </li>
          </Link>
        </ul>

        <GiHamburgerMenu
          onClick={() => {
            setIsSideNavActive(!isSideNavActive);
          }}
          className="text-2xl cursor-pointer lg:hidden"
        />

        {isSideNavActive ? (
          <ul className="lg:hidden text-sm md:text-md z-20 flex flex-col items-center gap-4 my-4 py-10 px-4 rounded-2xl fixed top-[54px] right-2 h-fit bg-[#F1E7E7] shadow-[-3px_-1px_7px_rgba(147,197,253,0.5)]">
            <Link to={"/experience"}>
              <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105">
                Experience
              </li>
            </Link>

            <li
              onClick={handleScrollToProjects}
              className="cursor-pointer transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105"
            >
              Projects
            </li>

            <li
              onClick={handleScrollToCert}
              className="cursor-pointer transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105"
            >
              Certifications
            </li>
            {/* <ScrollLink to="cert" smooth={true} duration={500} offset={-175}>
          </ScrollLink> */}
            <Link to={"/researches"}>
              <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black hover:scale-105">
                Researches
              </li>
            </Link>
          </ul>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
