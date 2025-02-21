import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sticky mt-10 h-full bottom-0 left-0 bg-[#f7f7f7] shadow-[0_-5px_10px_rgba(255,255,255,0.6)] text-black p-4 md:p-8 ">
      <ul>
        <Link to={"/attributions"}>
          <li>Attributions</li>
        </Link>
      </ul>
      <p className="mt-5 text-center">
        @{new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
