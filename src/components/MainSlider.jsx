import React from "react";

const MainSlider = ({ sliderImg }) => {
  return (
    <div className="">
      <div>
        <div className="carousel-slide md:pt-5">
          <img className= "carroussel-img"
            src={sliderImg}
            alt=""
            
          />
        </div>
        {/* Overlay */}
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
          <p className="text-gray-300 hidden group-hover:block">
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;