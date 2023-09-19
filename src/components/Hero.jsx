import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import SlImg1 from "../assets/image-1.jpg"
import SlImg2 from "../assets/image-2.jpg"
import SlImg3 from "../assets/image-3.jpg"

import MainSlider from "./MainSlider";

const Main = () => {
  return (
    <div id="/" className="carroussel">
      <div className="carroussel-div">
        <div className="">
          <Carousel
            autoPlay={true}
            showArrows={true}
            infiniteLoop={true}
            interval={10000}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable={false}
          >
            <MainSlider sliderImg={SlImg1} />
            <MainSlider sliderImg={SlImg2} />
            <MainSlider sliderImg={SlImg3} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Main;
