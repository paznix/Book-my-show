import React from "react";
import 'tailwindcss/tailwind.css'

//Components
import MovieNavbar from "../components/Navbar/MovieNav.component";

const MovieLayout = (props) => {
    return (
      <>
      <MovieNavbar/>
      {props.children}
      </>
    );
  };
  
  export default MovieLayout;