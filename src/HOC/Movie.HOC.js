//Transforms component into another component
//Adding additional functionalities to the existing components.

import React , {Component} from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Routes>
    <Route
    {...rest}

    Component = {(props) => (
        <MovieLayout>
          <Component {...props}/>
        </MovieLayout>
            
        
    )

    }
     />
     </Routes>
    </>
  );
};

export default MovieHOC;