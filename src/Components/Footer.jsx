import React from "react";
import SaturnImg from "../assets/Footer/Saturn.png";

const Footer = () => {
  return (
    <footer className="sticky mt-10 flex flex-col items-center justify-center min-h-[300px] h-full p-4 md:p-8 bottom-0 left-0 text-white">
      <div className="w-[200px] z-[-1] absolute bottom-12 animate-spin-slow">
        <img className="w-full" src={SaturnImg} alt="..." />
      </div>
      <p className="text-center px-4 shadow-[0_-2px_5px_rgba(255,255,255,1),0_2px_5px_rgba(255,255,255,1)]">
        @{new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
