import React from "react";
import BgVideo from "../assets/Homepage/bg_animation.mp4";

const BgAnimation = () => {
  return (
    <>
      <video
        className="overflow-hidden m-0 p-0 w-full min-h-screen min-w-screen fixed top-0 left-0 right-0 z-[-1]"
        src={BgVideo}
        autoPlay
        muted
        preload="auto"
        loop
      ></video>
    </>
  );
};

export default BgAnimation;
