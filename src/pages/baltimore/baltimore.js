import React from 'react';
import './baltimore.scss';
import CityHero from "../../components/cityHero/cityHero"; 

function App() {
  return (
    <div className="baltimore-container">
        <CityHero city="Baltimore" image="./img/baltimore.jpg" imageStyle="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"></CityHero>
        
      <div className= "d-flex content-container">
          <div className = "d-flex sideNav p-2">
            <a href="/">Cities</a>
            <a href="/restaurants">Restaurants</a>
            <a href="/lodging">Lodging</a>
            <a href="/tours">Tours</a>
            <a href="/transport">Transport</a>
            <a href="/itineraries">Itineraries</a>
          </div>
          <div className="pittsburgh-blurb">
            <h3>About</h3>
            <p> This is information about Pittsburgh. Welcome to the Pittsburgh blurb.  </p>
            <p>
                Pittsburgh has a rich history in arts and culture dating from 19th century industrialists commissioning and donating public works, such as Heinz Hall for the Performing Arts and the Benedum Center, home to the Pittsburgh Symphony Orchestra and Pittsburgh Opera, respectively as well as such groups as the River City Brass Band and the Pittsburgh Youth Symphony Orchestra.
            </p>
            <p>
                Pittsburgh has a long tradition of jazz, blues, and bluegrass music. The National Negro Opera Company was founded in the city as the first all African-American opera company in the United States. This led to the prominence of African-American singers like Leontyne Price in the world of opera. One of the greatest American musicians and composers of the 20th century, Billy Strayhorn, grew up and was educated in Pittsburgh. 
            </p>

            <h3 className="mt-3">Restaurants</h3>
          </div>
        </div>
    </div>
  );
}

export default App;
