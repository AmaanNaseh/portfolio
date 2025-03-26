import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import { GoSun } from "react-icons/go";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  // const navigate = useNavigate();

  // const handleScrollToCert = () => {
  //   navigate("/experience");
  //   setTimeout(() => {
  //     const targetCert = document.querySelector("#cert");
  //     if (targetCert) {
  //       targetCert.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, 100);
  // };

  return (
    <>
      <nav
        className={`z-20 sticky top-1 p-4 rounded-full m-2 flex flex-wrap items-center justify-between ${
          isDarkMode ? "bg-denim-600" : "bg-denim-400"
        }`}
      >
        <Link to={"/"}>
          <h1 className="font-bold italic md:text-lg lg:text-2xl hover:scale-105 cursor-pointer">
            &lt; Amaan Naseh /&gt;
          </h1>
        </Link>
        {isDarkMode ? (
          <div
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
            className="hidden lg:block cursor-pointer"
          >
            <GoSun className="text-3xl font-bold" />
          </div>
        ) : (
          <div
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
            className="hidden lg:block cursor-pointer"
          >
            <IoMoon className="text-3xl font-bold" />
          </div>
        )}

        <ul className="hidden lg:inline-flex flex-wrap items-center gap-4">
          <Link to={"/education"}>
            <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black font-semibold hover:scale-105">
              Education
            </li>
          </Link>

          <Link to={"/experience"}>
            <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black font-semibold hover:scale-105">
              Experience
            </li>
          </Link>

          <Link to={"/researches"}>
            <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black font-semibold hover:scale-105">
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
          <ul
            className={`lg:hidden text-sm md:text-md z-20 flex flex-col items-center gap-4 my-4 py-10 px-4 rounded-2xl fixed top-[54px] right-2 h-fit shadow-[-3px_-1px_7px_rgba(147,197,253,0.5)] ${
              isDarkMode ? "bg-denim-600" : "bg-denim-400"
            }`}
          >
            <Link to={"/education"}>
              <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black font-semibold hover:scale-105">
                Education
              </li>
            </Link>
            <Link to={"/experience"}>
              <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black font-semibold hover:scale-105">
                Experience
              </li>
            </Link>
            <Link to={"/researches"}>
              <li className="transition-transform transform duration-100 hover:border-b-[2px] border-black font-semibold hover:scale-105">
                Researches
              </li>
            </Link>
            {isDarkMode ? (
              <li
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
                className="lg:hidden cursor-pointer"
              >
                <GoSun className="text-3xl font-bold" />
              </li>
            ) : (
              <li
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
                className="lg:hidden cursor-pointer"
              >
                <IoMoon className="text-3xl font-bold" />
              </li>
            )}
          </ul>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
