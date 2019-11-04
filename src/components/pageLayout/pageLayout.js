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
        <div className="d-flex content-container justify-content-start"> 
            <div className="side-nav-container col-1">
                <SideNav></SideNav>
            </div>
            <div className="text-container mb-3">
                <h3 id="overview" className="mb-3"> Overview</h3>
                    {overview}
                <h3 id="neighborhood" className="mt-3">Neighborhoods</h3>
                    {neighborhood}
                <h3 id="food" className="mt-3">Food & Drink</h3>
                    {food}
                <h3 id="activities" className="mt-3">Activities</h3>
                    {activities}
                <h3 id="health" className="mt-3">Health & Wellness</h3>
                    {health}
                <h3 id="lodging" className="mt-3">Lodging</h3>
                    {lodging}
                <h3 id ="transportation" className="mt-3">Transportation</h3>
                    {transportation}
            </div>
        </div>
    </div>
  );
}; 

export default PageLayout;
