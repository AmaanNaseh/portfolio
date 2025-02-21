import React from "react";
import FreeLanceImg from "../assets/FreeLancePage/FreeLance.png";

const FreeLancePage = () => {
  return (
    <>
      <div className="m-4 md:m-8">
        <div className=" flex flex-col items-center justify-center gap-10">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl italic my-4">
            My expertise
          </h1>
          <div className="bg-[#FBFBFB] p-4 w-[300px] md:w-[700px] lg:w-[1000px]">
            <img src={FreeLanceImg} className="w-full" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeLancePage;
