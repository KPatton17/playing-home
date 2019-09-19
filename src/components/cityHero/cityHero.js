import React from "react";
import "./cityHero.scss"
import NavBar from "../navBar/navBar"; 



export const CityHero = ({
    city,
    image
}) => {
    return (
        <div className = "city-hero-container" style={{backgroundImage: `url(${image})`}} >

            <div className = "d-flex city-hero-nav justify-content-between">
                <img src= "./img/logo-small2.svg" alt="small logo"/>
                <NavBar></NavBar>
            </div>

            <div className = "city-hero-title"> 
                {city}
            </div>
        </div>
);
};

export default CityHero;