import React from "react";
import PosterSlider from "../Components/PosterSlider";
import SelfSection from "../Components/SelfSection";
import SkillSlider from "../Components/SkillSlider";

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
      </div>
    </>
  );
};

export default HomePage;
