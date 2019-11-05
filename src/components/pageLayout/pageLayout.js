import React from 'react';
import CityHero from "../cityHero/cityHero"; 
import SideNav from "../sideNav/sideNav";  
import "./pageLayout.scss"

export const PageLayout = ({
    city,
    image, 
    imageStyle, 
    overview, 
    neighborhood, 
    food, 
    activities,
    health, 
    lodging, 
    transportation, 
}) => {
    return(
    <div className="city-container">
        <CityHero city={city} image={image} imageStyle={imageStyle}></CityHero>
        <div className="d-flex justify-content-start"> 
            <div className="m-0 side-nav-container">
                <SideNav></SideNav>
            </div>
            <div className="text-container mr-5">
                <h3 id="overview" className=""> Overview</h3>
                    {overview}
                <h3 id="neighborhood" className="mt-4">Neighborhoods</h3>
                    {neighborhood}
                <h3 id="food" className="mt-4">Food & Drink</h3>
                    {food}
                <h3 id="activities" className="mt-4">Activities</h3>
                    {activities}
                <h3 id="health" className="mt-4">Health & Wellness</h3>
                    {health}
                <h3 id="lodging" className="mt-4">Lodging</h3>
                    {lodging}
                <h3 id ="transportation" className="mt-4">Transportation</h3>
                    {transportation}
            </div>
        </div>
    </div>
  );
}; 

export default PageLayout;
