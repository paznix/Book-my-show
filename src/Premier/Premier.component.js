import React from "react";
import Slider from "react-slick";

//Component
import Poster from "../components/Poster/Poster.component";
import { settingsLArrow } from "../config/PosterCarousel.config";
import { PremierImages } from "./PremierImages.component";

export const Premier = () => {

    return (
        <>
        <Slider {...settingsLArrow}>
            {PremierImages.map((image) => (
                <Poster {...image}  /> 
            ))}
        </Slider>
        </>
    );
};