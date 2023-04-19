import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start p-2">
                <div  className="h-100 ">
                    <img className="rounded-xl  hover:cursor-pointer" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title}/>
                </div>
                <h2 className={
                    `font-bold mt-2 text-sm lg:text-xl ${
                        props.isDark ? "text-white" : "text-gray-800"
                    }`
                }>
                    {props.original_title}
                </h2>
                <p className={
                    `text-xs lg:text-sm ${ props.isDark ? "text-white" : "text-gray-500"}`
                }>
                    Rating: {props.vote_average}
                </p>
            </div>
        </>
    );
};



export default Poster;