import { SmLArrow, SmRArrow } from "../components/Entertainment/SmArrow.component";
import { LArrow, RArrow} from "../components/Poster/SmallArrow.component";


 export const settingsLArrow =  {
  infinite: false,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  InitialState: 0,
  arrows: true,
  prevArrow: <LArrow />,
  nextArrow: <RArrow />,
};

export const settingsSArrow = {
    infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll:3,
        InitialState:0,
        prevArrow: <SmLArrow/>,
        nextArrow: <SmRArrow/>,
};

