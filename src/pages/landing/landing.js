import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './landing.scss';
import routes from "../../routes";
import CityBox from "../../components/cityBox/cityBox"
import CityNav from "../../components/cityNav/cityNav"

export class Landing extends Component {
  
  handleClick = () => {
    console.log('click!')
    this.props.history.push(routes.pittsburgh); 
  }

  render(){
  return (
    <div className="App">
      <div className= "landing-container d-flex flex-column">
        <div className = "landing-hero ">
          <div className = "d-flex landing-nav justify-content-start">
            <img src= "./img/logo-small2.svg" alt="small logo"/>
          </div>
          <div className = "d-flex hero-text"> 
              Make Every City Feel Like Home
          </div>
          <div className = "city-nav">
          <CityNav></CityNav>
          </div>
        </div>

        {/* TODO: Add a "click to view more" onClick method */}
        <div className="landing-overview p-3">
          <h1>Playing Home</h1>
          <p> Five cities in the past six years has allowed (forced) me to learn the art of playing house, or playing home, in multiple new places for short periods of time. From that, I’ve gained stories and tips and tricks about traveling, moving, eating, and trying to not be tourists in a new city. </p> 
          <p> When preparing for a new move, I would find myself wishing I could have a breakdown of the city, almost as if I had a friend who had lived there and was familiar with the in’s and out’s. Someone to give you an idea of the feel of the different neighborhoods, and  give you an overview of the best restaurants, grocery stores, gyms, and transportation systems within those. I didn’t have a friend like that, or anyone I knew at all, in most of the cities I moved to. I turned to the internet, of course, but I could never find anything that in depth, or that covered all aspects. </p>
          <p>So, here you’ll find guides on the various cities I have lived in, or spent a great deal of time in, that are aimed to give you a peek into life there. That way, whether you are there for a quick visit, or looking to move to the area, you can get a sense of how the locals live. </p>
        </div>

        <div className="mb-3">
          <h1>Select a city below to get started</h1>
        </div>


      <div className ="landing-cities-container">
        <div className= "row flex-grow-1"> 
          <CityBox 
            city="Baltimore"
            image="/img/baltimore.jpg"
          />
          <CityBox
            city="Chicago"
            image="/img/chicago3.jpg"
          />
          <CityBox
            city="DC"
            image="/img/dc.jpg"
          />
          <CityBox
            city="Memphis"
            image="/img/memphis3.jpg"
          />
          <CityBox
            city="Rochester"
            image="/img/rochester.jpeg"
          />
  
          <CityBox
            city="Pittsburgh"
            image="/img/pittsburgh.jpg"
            onClick={()=>this.handleClick()}
          />
        </div>
      </div>
    </div>
   

      <footer className="footer">
          <a href="#pricing">About</a>
          <a href="#pricing">Contact</a>
      </footer>

    </div>
  );
}
}

export default withRouter(Landing);
