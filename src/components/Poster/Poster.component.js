import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start p-2">
                <div  className="h-100 ">
                    <img className="rounded-xl  hover:cursor-pointer" src={props.src} alt={props.title}/>
                </div>
                <span className={
                    `font-bold mt-2 sm:text-sm text-ellipsis ${props.isDark ? "text-white" : "text-gray-800"}`
                }>
                    {props.title}
                </span>
                <p className={
                    `text-xs ${props.isDark ? "text-white" : "text-gray-400"}`
                }>
                    {props.desc}
                </p>
            </div>
        </>
    );
};



export default Poster;