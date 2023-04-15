import React from "react";
import { BiBorderRadius } from "react-icons/bi";

export const LArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                onClick={props.onClick}
                style={{...props.style , 
                    scale:'1.75',
                    color:"black", 
                    marginTop:"-15px",
                    paddingTop:"2px",
                    borderRadius:"100px",
                    position:"absolute",
                    top:"50%",
                    opacity:"75%",
                    right: "0",
                    overflow:"hidden",
                    marginLeft:"-15px",
                    filter: "invert(10)",
                    backgroundColor:"black"
                }}
            />
        </>
    );
};

export const RArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                onClick={props.onClick}
                style={{...props.style , 
                    scale:'1.75',
                    color:"black", 
                    marginTop:"-15px",
                    paddingTop:"2px",
                    borderRadius:"100px",
                    opacity:"75%",
                    position:"absolute",
                    top:"50%",
                    right: "0",
                    overflow:"hidden",
                    marginRight:"-15px",
                    filter: "invert(10)",
                    backgroundColor:"black"
                }}
            />
        </>
    );
};