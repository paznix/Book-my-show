import React from "react";
import Slider from "react-slick";

//Component
import Poster from "../components/Poster/Poster.component";
import { settingsLArrow } from "../config/PosterCarousel.config";
import { PremierImages } from "../config/PremierImages.component";

export const Premier = () => {
  return (
    <>
    <div className="flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiers</h3>
    <p className="text-white text-sm">Brand new release every Friday</p>
    </div>
    <Slider {...settingsLArrow}>
    {PremierImages.map((image)=> (
      <Poster {...image} isDark />
    ))}
    </Slider>
    </>)};
