import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg1 from "../assets/PosterSlider/heroImg1.jpg";
import heroImg2 from "../assets/PosterSlider/heroImg2.jpg";
import heroImg3 from "../assets/PosterSlider/heroImg3.jpg";
import heroImg4 from "../assets/PosterSlider/heroImg4.jpg";
import heroImg5 from "../assets/PosterSlider/heroImg5.jpg";
import heroImg6 from "../assets/PosterSlider/heroImg6.jpg";

const PosterSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mx-4 md:mx-8">
        <Slider {...settings}>
          <div className="w-[300px] h-[200px] md:h-[400px]">
            <img src={heroImg1} alt="img 1" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[200px] md:h-[400px]">
            <img src={heroImg2} alt="img 2" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[200px] md:h-[400px]">
            <img src={heroImg3} alt="img 3" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[200px] md:h-[400px]">
            <img src={heroImg4} alt="img 4" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[200px] md:h-[400px]">
            <img src={heroImg5} alt="img 5" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[200px] md:h-[400px]">
            <img src={heroImg6} alt="img 6" className="w-full h-full" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default PosterSlider;
