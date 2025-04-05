import React, { useState, useEffect } from "react";
import PosterSlider from "../Components/PosterSlider";
import SelfSection from "../Components/SelfSection";
import SkillSlider from "../Components/SkillSlider";

import WebDesignLogo from "../assets/Homepage/WebDesign.png";
import MLDevLogo from "../assets/Homepage/MLDev.png";
import PhotographyLogo from "../assets/Homepage/Photography.png";

const HomePage = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const handleScroll = () => {
    const divPosn1 = document.getElementById("mybgDiv1").offsetTop;
    const divPosn2 = document.getElementById("mybgDiv2").offsetTop;
    const divPosn3 = document.getElementById("mybgDiv3").offsetTop;
    const scrollPosn = window.scrollY + window.innerHeight;

    if (scrollPosn > divPosn1 + 100) {
      setIsVisible1(true);
    } else {
      setIsVisible1(false);
    }

    if (scrollPosn > divPosn2 + 100) {
      setIsVisible2(true);
    } else {
      setIsVisible2(false);
    }

    if (scrollPosn > divPosn3 + 100) {
      setIsVisible3(true);
    } else {
      setIsVisible3(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="my-12">
        <PosterSlider />
      </div>

      {/* Self Section */}
      <div>
        <div className="my-4">
          <SelfSection />
        </div>

        <div className="my-12">
          <SkillSlider />
        </div>

        <div
          className={`my-12 mt-20 mx-4 md:mx-8 flex flex-col items-center justify-center gap-20 lg:gap-36`}
        >
          <div
            id="mybgDiv1"
            className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 lg:gap-40 transition-all transform duration-[2000ms] ${
              isVisible1
                ? "translate-x-0 opacity-100"
                : "translate-x-[-500px] lg:translate-x-[-900px] opacity-0"
            }`}
          >
            <div className="w-[300px] flex flex-col items-center justify-center">
              <img src={WebDesignLogo} alt="laptop" className="w-full" />
            </div>
            <p className="text-justify bg-clip-text text-transparent bg-title-gradient font-semibold max-w-[300px] lg:max-w-[600px]">
              As a passionate web developer, I specialize in building dynamic
              web applications using the MERN stack. I love crafting seamless,
              responsive, and scalable solutions that deliver exceptional user
              experiences. From intuitive front-end designs with React to robust
              back-end systems with Node.js and MongoDB, web development is my
              passion, and I’m always excited to create innovative digital
              experiences.
            </p>
          </div>
          <div
            id="mybgDiv2"
            className={`flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-20 lg:gap-40 transition-all transform duration-[2000ms] ${
              isVisible2
                ? "translate-x-0 opacity-100"
                : "translate-x-[500px] lg:translate-x-[900px] opacity-0"
            }`}
          >
            <div className="w-[300px] flex flex-col items-center justify-center">
              <img src={MLDevLogo} alt="laptop" className="w-[90%]" />
            </div>
            <p className="text-justify bg-clip-text text-transparent bg-title-gradient font-semibold max-w-[300px] lg:max-w-[600px]">
              As an enthusiast of AI and Machine Learning, I am dedicated to
              building intelligent systems that can learn, adapt, and solve
              real-world problems. Whether it's developing predictive models,
              optimizing algorithms, or diving into deep learning. The
              ever-evolving nature of AI drives me to continuously learn and
              create innovative solutions that push the boundaries of technology
            </p>
          </div>
          <div
            id="mybgDiv3"
            className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 lg:gap-40 transition-all transform duration-[2000ms] ${
              isVisible3
                ? "translate-x-0 opacity-100"
                : "translate-x-[-500px] lg:translate-x-[-900px] opacity-0"
            }`}
          >
            <div className="w-[300px] flex flex-col items-center justify-center">
              <img src={PhotographyLogo} alt="laptop" className="w-[75%]" />
            </div>
            <p className="text-justify bg-clip-text text-transparent bg-title-gradient font-semibold max-w-[300px] lg:max-w-[600px]">
              Photography is my creative outlet, capturing moments that tell
              compelling stories. I specialize in framing the perfect shot,
              focusing on light, composition, and emotion to create images that
              leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
