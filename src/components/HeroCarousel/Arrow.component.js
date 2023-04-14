import React from "react";
import { BiBorderRadius } from "react-icons/bi";

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                onClick={props.onClick}
                style={{...props.style , 
                    backgroundColor: "black", 
                    scale:'2',
                    color:"black", 
                    width:"30px",
                    marginTop:"20px",
                    paddingTop:"0px",
                    borderRadius:"0 4px 4px 0",
                    marginLeft:"-43px",
                    paddingLeft:"10px",
                    opacity:"65%",
                    color:"black"
                }}
            />
        </>
    );
};

export const NextArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                onClick={props.onClick}
                style={{...props.style , 
                    backgroundColor: "black", 
                    width:"30px",
                    scale:'2',
                    color:"black", 
                    marginTop:"20px",
                    marginRight:"-43px",
                    paddingTop:"0px",
                    borderRadius:"4px 0 0 4px",
                    opacity:"60%"
                }}
            />
        </>
    );
};