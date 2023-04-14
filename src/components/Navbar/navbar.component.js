import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-200 text-xs flex items-center">
            Chandigarh <BiChevronRight />
          </span>
        </div>
        <div className="w-7 h-7">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavMd = () => {
  return (
    <div className=" bg-white w-full flex items-center p-2 rounded">
      <div className="w-7 h-7 mr-2">
        <BiSearch className="w-full h-full text-gray-400" />
      </div>
      <input
        type="search"
        className="w-full focus:outline-none"
        placeholder="Search for Movies, Plays, Sports, Events and Activities"
      ></input>
    </div>
  );
};

const NavLg = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center w-3/4">
        <div className="w-400 h-400 scale-150 mr-4">
          <img
            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
            alt="logo"
            className="w-full g-full pr-4 pt-1"
          />
        </div>
        <div className=" bg-white w-3/4 flex items-center p-2 rounded">
          <div className="w-7 h-7 mr-2">
            <BiSearch className="w-full h-full text-gray-400" />
          </div>
          <input
            type="search"
            className="w-full focus:outline-none"
            placeholder="Search for Movies, Plays, Sports, Events and Activities"
          ></input>
        </div>
      </div>

      <div className="pl-4 flex items-center gap-4">
        <span className="flex items-center text-gray-200 hover:text-white hover:cursor-pointer">
          Chandigarh
          <BiChevronDown />
        </span>
        <button className="text-white text-sm bg-button px-2 py-1 text-center pb-1 rounded-lg">Sign in</button>
        <div className="text-white h-8 w-8">
        <BiMenu className="w-full h-full"/>
      </div>
      </div>
      
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-800 p-4">
        <div className="md:hidden ">
          {/* Mobile Screen */}
          <NavSm />
        </div>
        <div className="hidden lg:hidden md:flex">
          {/* Tablet Screen */}
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          {/* Desktop Screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
