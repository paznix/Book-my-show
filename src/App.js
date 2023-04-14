import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//components
import Temp from "./components/temp";

export default function App() {
  return (
    //? <> </> tags are called fragments
    <>
    <DefaultHOC exact path="/" Component= {Temp} />
    </>
  );
}

// SPREAD OPERATOR
// Used to assign new properties to old object
