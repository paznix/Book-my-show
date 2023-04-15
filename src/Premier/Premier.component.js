import React from "react";
import Slider from "react-slick";

//Component
import Poster from "../components/Poster/Poster.component";
import { settingsLArrow } from "../config/PosterCarousel.config";
import { PremierImages } from "./PremierImages.component";

export const PremierDark = () => {
  return (
    <>
      <div>
        <h3 className="text-white text-3xl font-bold pl-3">Premiers</h3>
        <p className="text-white text-sm pl-3 pt-1">New Movies Every Friday</p>
        <Slider {...settingsLArrow}>
          {PremierImages.map((image) => (
            <Poster {...image} isDark={true}/>
          ))}
        </Slider>
      </div>
    </>
  );
};

export const PremierLight = () => {
    return (
      <>
        <div>
          <h3 className="text-white text-3xl font-bold pl-3">Premiers</h3>
          <p className="text-white text-sm pl-3 pt-1">New Movies Every Friday</p>
          <Slider {...settingsLArrow}>
            {PremierImages.map((image) => (
              <Poster {...image} isDark={false}/>
            ))}
          </Slider>
        </div>
      </>
    );
  };
