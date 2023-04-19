import React from "react";
import Poster from "../Poster/Poster.component";
import Slider from "react-slick";

import { settingsLArrow } from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="container  mx-auto">
        <h3 className="text-premier lg:text-xl text-sm font-bold pl-2 pb-4 ">
          {props.original_title}
        </h3>
        <p
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}
        >
          {props.vote_average}
        </p>
        <Slider {...settingsLArrow}>
          {props.images.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PosterSlider;
