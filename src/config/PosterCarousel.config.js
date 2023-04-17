import {
  SmLArrow,
  SmRArrow,
} from "../components/Entertainment/SmArrow.component";
import { LArrow, RArrow } from "../components/Poster/SmallArrow.component";

export const settingsLArrow = {
  infinite: false,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  InitialState: 0,
  arrows: true,
  prevArrow: <LArrow />,
  nextArrow: <RArrow />,
};

export const settingsSArrow = {
  infinite: false,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 3,
  InitialState: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 400,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
  prevArrow: <SmLArrow />,
  nextArrow: <SmRArrow />,
};
