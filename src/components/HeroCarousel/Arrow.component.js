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
                    marginTop:"20px",
                    paddingTop:"2px",
                    borderRadius:"0 4px 4px 0",
                    paddingLeft:"90px",
                    marginLeft:"-150px",
                    paddingRight:"20px",
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
                    scale:'2',
                    color:"black", 
                    marginTop:"20px",
                    paddingTop:"2px",
                    paddingLeft:"",
                    borderRadius:"4px 0 0 4px",
                    paddingRight:"90px",
                    marginRight:"-120px",
                    opacity:"60%"
                }}
            />
        </>
    );
};