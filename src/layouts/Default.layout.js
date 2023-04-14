import React from "react";
import 'tailwindcss/tailwind.css'

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
    return (
      <>
      <Navbar/>
      <HeroCarousel/>
      {props.children}
      </>
    );
  };
  
  export default DefaultLayout;