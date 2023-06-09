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
                    paddingTop:"2px",
                    borderRadius:"0 4px 4px 0",
                    opacity:"75%",
                    color:"black",
                    position: "absolute",
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
                    paddingTop:"2px",
                    borderRadius:"4px 0 0 4px",
                    opacity:"75%",
                    position:"absolute",
                    right: "0",
                    overflow:"hidden"
                }}
            />
        </>
    );
};