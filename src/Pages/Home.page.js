import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import { Premier } from "../Premier/Premier.component";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto  ">
        <div>
          <h1 className="font-bold text-2xl ml-2 mt-10 pb-3">
            Recommended Movies
          </h1>
          <Premier />
        </div>
      </div>

      <div className="w-full rounded-xl flex justify-center mt-10 px-8 md:px-12 lg:px-28">
        <a href="/home">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt="Promo"
          />
        </a>
      </div>

      <div className="container mx-auto pb-10">
        <h1 className="font-bold text-2xl ml-2 mt-10 pb-3 ">
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
          <Premier  themeDark/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
