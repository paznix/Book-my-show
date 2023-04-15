import React from "react";
import { BiBorderRadius } from "react-icons/bi";

export const SmLArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                onClick={props.onClick}
                style={{...props.style , 
                    scale:'1.25',
                    color:"black", 
                    paddingTop:"2px",
                    borderRadius:"100px",
                    position:"absolute",
                    top:"50%",
                    opacity:"75%",
                    right: "0",
                    overflow:"hidden",
                    marginLeft:"-10px",
                    filter: "invert(10)",
                    backgroundColor:"black"
                }}
            />
        </>
    );
};

export const SmRArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                onClick={props.onClick}
                style={{...props.style , 
                    scale:'1.25',
                    color:"black", 
                    paddingTop:"2px",
                    borderRadius:"100px",
                    opacity:"75%",
                    position:"absolute",
                    top:"50%",
                    right: "0",
                    overflow:"hidden",
                    marginRight:"-10px",
                    filter: "invert(10)",
                    backgroundColor:"black"
                }}
            />
        </>
    );
};