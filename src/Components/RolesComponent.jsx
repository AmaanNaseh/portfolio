import React, { useEffect, useState } from "react";
import { Roles } from "../Datasets/Roles";

const RolesComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const divPosn = document.getElementById("rolesDiv").offsetTop;
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
      id="rolesDiv"
      className={`flex flex-col md:flex-row flex-wrap md:p-8 items-center justify-center gap-8 lg:gap-16 lg:mx-4 transition-all trasnform duration-[1100ms] ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-[-100px] opacity-0"
      }`}
    >
      {Roles.map((role, key) => {
        return (
          <>
            <div
              key={key}
              className="min-w-[325px] min-h-[350px] z-10 ring-blue-100 ring-2 rounded-2xl bg-denim-200 shadow-[0_-7px_10px_rgba(70,153,235,0.6),0_7px_10px_rgba(70,156,235,0.6)] hover:bg-denim-400 p-4 flex flex-col items-center justify-center gap-4"
            >
              <div className="w-[150px] bg-black p-[5px]">
                <img className="w-full" src={role.imgSrc} alt="..." />
              </div>
              <h3 className="font-bold text-lg italic max-w-[300px] text-center">
                {role.title}
              </h3>
              <p className="italic">{role.position}</p>
              <p>{role.duration}</p>
              <p className="text-justify max-w-[300px]">{role.outcomes}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RolesComponent;
