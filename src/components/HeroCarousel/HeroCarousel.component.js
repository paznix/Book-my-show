import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PrevArrow , NextArrow } from "./Arrow.component";

const HeroCarousel = () => {

    const settingsLg = {
        arrows: true,
        centerMode: true,
        centerPadding: "300px",
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>

    };

    const settings = {
        arrows:false,
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images = [
        "https://img.paisawapas.com/ovz3vew9pw/2022/04/18135838/bookmyshow-coupons.png",
        "https://i2.wp.com/www.spycoupon.in/wp-content/uploads/2016/09/bms.png",
        "https://assets-in.bmscdn.com/webin/static/offers/rbloffer/rbl-banner-1016.jpg",
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Pathaan.jpg"
      ];
      return(
        <>
            <div className="lg:hidden ">
            <HeroSlider {...settings}> 
            {
                images.map((image) => (
                    <div className="w-full h-52 p-2 md:h-72 focus:outline-none">
                        <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                    </div>
                ))
            }
            </HeroSlider> 
            </div>
            
            
            <div className="hidden lg:block">
            <HeroSlider {...settingsLg}> 
            {
                images.map((image) => (
                    <div className="w-full h-96 px-1 py-3 focus:outline-none ">
                        <img src={image} alt="testing" className="w-full h-full rounded-lg  hover:cursor-pointer"/>
                    </div>
                ))
            }
            </HeroSlider>
            </div>   
        </>
      );
};

export default HeroCarousel;