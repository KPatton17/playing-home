import React from "react";
import "./navBar.scss"



export const NavBar = () => {
    return (
        <div className = "d-flex nav-bar-container justify-content-around">
          <a href="/">Cities</a>
          <a href="#features">Restaurants</a>
          <a href="#pricing">Lodging</a>
          <a href="#pricing">Tours</a>
          <a href="#pricing">Transport</a>
          <a href="#pricing">Itineraries</a>
        </div>
);
};

export default NavBar;