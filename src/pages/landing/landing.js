import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './landing.scss';
import routes from "../../routes";
import CityBox from "../../components/cityBox/cityBox"
import Hero from "../../components/hero/hero"

export class Landing extends Component {
  

  render(){
  return (
    <div className="App">
      <div className= "landing-container d-flex flex-column">
        <Hero></Hero>
      <div className ="landing-cities-container">
        <div className= "row"> 
          <CityBox 
            city="Baltimore"
            image="/img/baltimore.jpg"
            onClick={()=>this.props.history.push(routes.baltimore)}
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
            onClick={()=>this.props.history.push(routes.pittsburgh)}
          />
        </div>
      </div>
    </div>
   

      <footer className="footer">
          <a href="/about">About</a>
          <a href="#pricing">Contact</a>
      </footer>

    </div>
  );
}
}

export default withRouter(Landing);
