import React from "react";
import PosterSlider from "../Components/PosterSlider";
import SelfSection from "../Components/SelfSection";
import SkillSlider from "../Components/SkillSlider";

import WebDesignLogo from "../assets/ExperiencePage/WebDesign.png";
import MLDevLogo from "../assets/ExperiencePage/MLDev.png";
import PhotographyLogo from "../assets/ExperiencePage/Photography.png";

const HomePage = () => {
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

        <div className="my-12 mt-20 mx-4 md:mx-8 flex flex-col items-center justify-center gap-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 lg:gap-40">
            <div className="w-[300px]">
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
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-20 lg:gap-40">
            <div className="w-[300px]">
              <img src={MLDevLogo} alt="laptop" className="w-full" />
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 lg:gap-40">
            <div className="w-[300px]">
              <img src={PhotographyLogo} alt="laptop" className="w-full" />
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
