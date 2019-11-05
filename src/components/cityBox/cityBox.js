import React from "react";
import "./cityBox.scss"



export const CityBox = ({
    city,
    image, 
    onClick
}) => {
    const backgroundImage =`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${image})`
    return (
        <div className = "col-lg-6">
            <div className = "city-box" style={{backgroundImage: backgroundImage}} onClick={onClick}>
                <div className="text">
                    {city}
                </div>
            </div>
        </div>
);
};

export default CityBox;