import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import { Premier } from "../Premier/Premier.component";

const HomePage = () => {
    return (
        <>

        <div className="container mx-auto px-4">
        <h1 className="font-bold text-2xl ml-3 mt-10 pb-3">Recommended Movies</h1>
        <Premier/>
        </div>

        <div className="w-full rounded-xl flex justify-center mt-10 px-5">
            <a href="/home"><img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="Promo"/></a>
        </div>

        <div className="container mx-auto px-4">
        <h1 className="font-bold text-2xl ml-3 mt-10 pb-3 ">The Best of Live Events</h1>
        <EntertainmentCardSlider/> 
        </div>
          
        </>    
    );
}

export default HomePage;