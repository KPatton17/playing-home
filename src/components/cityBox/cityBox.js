import React from "react";
import "./cityBox.scss"



export const CityBox = ({
    city,
    image, 
    onClick
}) => {
    return (
        <div className = "col-lg-6">
            <div className = "city-box">
             {city}
            <img src = {image} alt={city} onClick={onClick}/> 

            </div>
        </div>
);
};

export default CityBox;