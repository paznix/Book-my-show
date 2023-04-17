import { Route } from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";

export default function App() {
  return (
    //? <> </> tags are called fragments
    <>
    <DefaultHOC exact path="/" Component= {HomePage} />
    <MovieHOC exact path="/movies/:id" Component= {Movie} />
    </>
  );
}

// SPREAD OPERATOR
// Used to assign new properties to old object
