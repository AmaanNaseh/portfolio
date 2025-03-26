import React from "react";
import SaturnImg from "../assets/Footer/Saturn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sticky mt-10 min-h-[300px] h-full p-4 md:p-8 bottom-0 left-0 flex flex-col items-center justify-center gap-5">
      <div className="relative">
        <div className="w-[200px] animate-spin-slow">
          <img className="w-full" src={SaturnImg} alt="..." />
        </div>
        <Link to={"/attributions"}>
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 hover:scale-110 hover:bg-denim-400 hover:border-[1px] border-black px-4 py-2">
            Attributions
          </p>
        </Link>
      </div>
      <p className="text-center mx-auto px-4 py-2 transition-all duration-500 hover:shadow-[0_-2px_5px_rgba(255,255,255,1),0_2px_5px_rgba(255,255,255,1)]">
        @{new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
