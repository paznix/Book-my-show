import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";

const MoviePage = () => {
  return (
    <>
      <MovieHero />
      <div className="container mx-auto mt-8 flex flex-col gap-5 px-2">
        <h1 className="text-black font-bold text-2xl ">About the movie</h1>
        <p className="leading-8 text-xl mb-3">
          John Wick (Keanu Reeves) takes on his most lethal adversaries yet in
          the upcoming fourth installment of the series. With the price on his
          head ever increasing, Wick takes his fight against the High Table
          global as he seeks out the most powerful players in the underworld,
          from New York to Paris to Osaka to Berlin.
        </p>

        <hr></hr>

        <h1>Hello World</h1>
      </div>
    </>
  );
};

export default MoviePage;
