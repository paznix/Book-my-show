import React, { useEffect, useState } from "react";

import HeroSlider from "react-slick";

import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PrevArrow, NextArrow } from "./Arrow.component";

const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlaying = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlaying();
  }, []);

  const settingsLg = {
    arrows: true,
    centerMode: true,
    centerPadding: "400px",
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

  };

  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="lg:hidden ">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-52 p-2 md:h-72 focus:outline-none">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block ">
        <HeroSlider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-96 px-1 py-3 focus:outline-none  ">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-xl  hover:scale-105 transition-transform hover:border-white border-2 hover:cursor-pointer"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
