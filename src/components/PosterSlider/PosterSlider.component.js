import React from "react";
import Poster from "../Poster/Poster.component";
import Slider from "react-slick";

import { settingsLArrow } from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="container py-3 mx-auto">
        <h3 className="text-premier text-3xl font-bold pl-2 pb-4 mt-10">{props.title}</h3>
        <Slider {...settingsLArrow}>
          {props.images.map((image) => (
            <Poster {...image}/>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PosterSlider;
