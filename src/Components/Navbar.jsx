import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  const navigate = useNavigate();

  const handleScrollToCert = () => {
    navigate("/");
    setTimeout(() => {
      const targetCert = document.querySelector("#cert");
      if (targetCert) {
        targetCert.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav className="z-20 sticky top-1 bg-[#f5f5f5] text-black shadow-md shadow-blue-200 p-4 rounded-full m-2 flex flex-wrap items-center justify-between">
        <Link to={"/"}>
          <h1 className="font-bold italic md:text-lg lg:text-2xl hover:scale-105 cursor-pointer">
            &lt; Amaan Naseh /&gt;
          </h1>
        </Link>
        <ul className="hidden lg:inline-flex flex-wrap items-center gap-4">
          <Link to={"/projects/0"}>
            <li>Projects</li>
          </Link>
          <li onClick={handleScrollToCert} className="cursor-pointer">
            Certifications
          </li>

          {/* <ScrollLink to="cert" smooth={true} duration={500} offset={-175}>
          </ScrollLink> */}
          <Link to={"/freelance"}>
            <li>Freelancing</li>
          </Link>
          <Link to={"/researches"}>
            <li>Researches</li>
          </Link>
          <Link to={"/attributions"}>
            <li>Attributions</li>
          </Link>
        </ul>

        <GiHamburgerMenu
          onClick={() => {
            setIsSideNavActive(!isSideNavActive);
          }}
          className="text-2xl cursor-pointer lg:hidden"
        />

        {isSideNavActive ? (
          <ul className="lg:hidden z-20 flex flex-col items-center my-4 gap-4 bg-[#f5f5f5] shadow-[-4px_-5px_7px_rgba(147,197,253,0.5)] rounded-2xl fixed top-[54px] right-0 bottom-0 h-full p-4">
            <Link to={"/projects/0"}>
              <li>Projects</li>
            </Link>
            <li onClick={handleScrollToCert} className="cursor-pointer">
              Certifications
            </li>

            {/* <ScrollLink to="cert" smooth={true} duration={500} offset={-175}>
          </ScrollLink> */}
            <Link to={"/freelance"}>
              <li>Freelancing</li>
            </Link>
            <Link to={"/researches"}>
              <li>Researches</li>
            </Link>
            <Link to={"/attributions"}>
              <li>Attributions</li>
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
