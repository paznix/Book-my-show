import React from "react";
import 'tailwindcss/tailwind.css'

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import SpeedBar from "../components/Speedbar/speedbar";

const DefaultLayout = (props) => {
    return (
      <>
      <Navbar/>
      <SpeedBar/>
      <HeroCarousel/>
      {props.children}
      </>
    );
  };
  
  export default DefaultLayout;