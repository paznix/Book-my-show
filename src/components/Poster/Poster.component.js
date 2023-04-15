import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start p-2">
                <div  className="h-100 ">
                    <img className="rounded-xl  hover:cursor-pointer" src={props.src} alt={props.title}/>
                </div>
                <h2 className={
                    `font-bold mt-2 text-sm lg:text-xl ${
                        props.themeDark ? "text-white" : "text-gray-800"
                    }`
                }>
                    {props.title}
                </h2>
                <p className={
                    `text-xs lg:text-sm ${ props.themeDark ? "text-white" : "text-gray-500"}`
                }>
                    {props.desc}
                </p>
            </div>
        </>
    );
};



export default Poster;