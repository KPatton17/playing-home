import React from "react";
import "./cityBox.scss"



export const CityBox = ({
    city,
    image, 
    onClick
}) => {
    const backgroundImage =`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${image})`
    return (
        <div className = "col-lg-6">
            <div className = "city-box" style={{backgroundImage: backgroundImage}}>
                <div className="text">
                    {city}
                </div>
            </div>
        </div>
);
};

export default CityBox;