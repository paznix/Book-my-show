import React, { useEffect, useState } from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import { PremierDark, Premier } from "../Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { PremierImages } from "../config/PremierImages.component";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  const [upMovies, setUpMovies] = useState([]);

  useEffect(() => {
    const requestUpMovies = async () => {
      const getUpMovies = await axios.get("/movie/upcoming");
      setUpMovies(getUpMovies.data.results);
    };
    requestUpMovies();
  }, []);

  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const requestTopMovies = async () => {
      const getTopMovies = await axios.get("/movie/top_rated");
      setTopMovies(getTopMovies.data.results);
    };
    requestTopMovies();
  }, []);

  return (
    <>
      <div className="container mx-auto ">
        <h1 className="font-bold text-2xl lg:text-3xl pl-2 mt-10">
          Upcoming Movies
        </h1>
        <PosterSlider images={upMovies} title="Events Happening Near You" />
      </div>

      <div className="w-full rounded-xl flex justify-center mt-10 container mx-auto px-2 md:px-0 lg:px-0">
        <a href="/home">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt="Promo"
          />
        </a>
      </div>

      <div className="container mx-auto pb-10">
        <h1 className="font-bold text-2xl lg:text-3xl pl-2 lg:pl-3 mt-10 pb-3 ">
          The Best of Live Events
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className=" bg-premier py-10">
        <div className="container mx-auto flex flex-col">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="Premier"
            className="pl-2 pb-4"
          />
          <div className="ml-2">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand new release every Friday</p>
          </div>
          <PosterSlider
            images={popularMovies}
            title="Online Streaming Events"
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto ">
        <div>
          <h1 className="font-bold text-2xl lg:text-3xl pl-2 mt-10">
            All Time Favourites
          </h1>
          <PosterSlider
            images={topMovies}
            title="Online Streaming Events"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
