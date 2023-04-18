import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";

const MoviePage = () => {
  return (
    <>
      <MovieHero />
      <div className="container mx-auto mt-8 flex flex-col gap-5 px-2">
        <h1 className="text-black font-bold text-2xl ">About the movie</h1>
        <p className="leading-8 text-xl mb-3">
          Brar Group and Khaiwal Group are rivals in the gambling market. Things
          change when Brar is murdered and Arjun, who is Brar`s right hand, is
          accused of murdering him. While a writer named Poras wants to dig up
          the truth about the murder to complete his novel.
        </p>

        <hr></hr>

        <h1>Hello World</h1>
      </div>
    </>
  );
};

export default MoviePage;
