import React from "react";
import { NavLink } from "react-router-dom";

const SpeedBar = () => {
  return (
    <div className="bg-navCol-800 text-white">
      <div className="container mx-auto flex flex-row items-center py-1 gap-3">
        <NavLink className="text-sm" to="/">
          Home
        </NavLink>
        <NavLink className="text-sm" to="/plays">
          Plays
        </NavLink>
        <NavLink className="text-sm" to="/movies/123">
          Movies
        </NavLink>
        <NavLink className="text-sm" to="/events">
          Events
        </NavLink>
      </div>
    </div>
  );
};

export default SpeedBar;
