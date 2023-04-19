import React from "react";
import 'tailwindcss/tailwind.css'

//Components
import MovieNavbar from "../components/Navbar/MovieNav.component";
import SpeedBar from "../components/Speedbar/speedbar";

const MovieLayout = (props) => {
    return (
      <>
      <MovieNavbar/>
      <SpeedBar/>
      {props.children}
      </>
    );
  };
  
  export default MovieLayout;