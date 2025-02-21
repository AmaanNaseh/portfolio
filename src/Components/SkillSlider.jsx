import React from "react";
import HTMLLogo from "../assets/Homepage/HTML.png";
import CSSLogo from "../assets/Homepage/CSS.png";
import JsLogo from "../assets/Homepage/Javascript.png";
import MongoDBLogo from "../assets/Homepage/MongoDB.svg";
import ExpressJsLogo from "../assets/Homepage/ExpressJs.svg";
import ReactJsLogo from "../assets/Homepage/ReactJs.svg";
import NodeJsLogo from "../assets/Homepage/NodeJs.svg";
import TailwindCSSLogo from "../assets/Homepage/TailwindCSS.svg";
import VercelLogo from "../assets/Homepage/Vercel.svg";
import NetlifyLogo from "../assets/Homepage/Netlify.png";
import RenderLogo from "../assets/Homepage/Render.png";

const SkillSlider = () => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex items-center justify-evenly md:gap-4 w-full animate-slide">
        <div className="w-[100px] mx-[1px]">
          <img src={HTMLLogo} alt="html" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px]">
          <img src={CSSLogo} alt="css" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px]">
          <img src={JsLogo} alt="js" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px] bg-green-400 p-1">
          <img src={MongoDBLogo} alt="mongodb" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px] bg-white p-1">
          <img src={ExpressJsLogo} alt="express" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px] p-1">
          <img src={ReactJsLogo} alt="react" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px] bg-green-600/90 p-1">
          <img src={NodeJsLogo} alt="node" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px]">
          <img src={TailwindCSSLogo} alt="tailwindcss" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px]  bg-white p-1">
          <img src={VercelLogo} alt="vercel" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px]">
          <img src={NetlifyLogo} alt="netlify" className="w-full" />
        </div>
        <div className="w-[100px] mx-[1px]  bg-white p-1">
          <img src={RenderLogo} alt="render" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SkillSlider;
