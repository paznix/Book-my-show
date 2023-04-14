import React, { Component } from "react";
import Slider from "react-slick";

//Component
import Poster from "../components/Poster/Poster.component";

export const Premier = () => {
    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll:5,
        InitialState:0
    };

    const PremierImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi40SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355970-dlsfedrlqz-portrait.jpg",
            alt: "Yaaran Da Rutbaa",
            title:"Yaaran Da Rutbaa",
            desc:"Action/Crime/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICA0My40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00326977-szmnufqdzn-portrait.jpg",
            alt: "Bholaa",
            title:"Bholaa",
            desc:"Action/Drama/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MS4zSyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353183-dlhlbxtgvm-portrait.jpg",
            alt: "Udeekan Teriyan",
            title:"Udeekan Teriyan",
            desc:"Comedy/Drama"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni45LzEwICA0LjJLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323311-qmusmkajwp-portrait.jpg",
            alt: "Shaakuntalam",
            title:"Shaakuntalam",
            desc:"Drama/Mythological/Romatic"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny40LzEwICA2LjZLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353346-mlendvqete-portrait.jpg",
            alt: "The Pope's Exorcist",
            title:"The Pope's Exorcist",
            desc:"Horror/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNTIuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg",
            alt: "John Wick: Chapter 4",
            title:"John Wick: Chapter 4",
            desc:"Action/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAyLjRLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331893-hzcwzdapyy-portrait.jpg",
            alt: "Es Janano Door Kitte Chal Jindiye",
            title:"Es Janano Door Kitte Chal Jindiye",
            desc:"Drama"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICAzLjRLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00328343-uzqlxmfuxg-portrait.jpg",
            alt: "Gumraah",
            title:"Gumraah",
            desc:"Crime/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzLjRLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343051-hvakxzwsal-portrait.jpg",
            alt: "The Super Mario Bros. Movie",
            title:"The Super Mario Bros. Movie",
            desc:"Adventure/Animation"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTA3LjFLIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-snxucamjfy-portrait.jpg",
            alt: "Fast X",
            title:"Fast X",
            desc:"Action/Adventure/Crime/Thriller"
        }
    ];

    return (
        <>
        <Slider { ...settings }>
            {PremierImages.map((image) => (
                <Poster {...image} />
            ))}
        </Slider>
        </>
    )
}