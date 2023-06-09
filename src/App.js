import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



export default function App() {
  return (
    //? <> </> tags are called fragments
    <>
    <DefaultHOC exact path="/" Component= {HomePage} />
    <MovieHOC exact path="/movies/:id" Component= {Movie} />
    <DefaultHOC exact path="/plays/" Component= {Plays} />
    </>
  );
}

// SPREAD OPERATOR
// Used to assign new properties to old object
