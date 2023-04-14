import { Route } from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Pages
import HomePage from "./Pages/Home.page";

export default function App() {
  return (
    //? <> </> tags are called fragments
    <>
    <DefaultHOC exact path="/" Component= {HomePage} />
    </>
  );
}

// SPREAD OPERATOR
// Used to assign new properties to old object
