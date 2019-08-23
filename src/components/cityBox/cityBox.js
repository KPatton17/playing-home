import React from "react";
import "./cityBox.scss"



export const CityBox = ({
    city,
    image
}) => {
    return (
        <div className = "col-lg-4 col-sm-6">
            <div className = "city-box">
             {city}
            <img src = {image} alt={city}/> 

            </div>
        </div>
);
};

export default CityBox;