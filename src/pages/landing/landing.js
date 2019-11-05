import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './landing.scss';
import routes from "../../routes";
import CityBox from "../../components/cityBox/cityBox"
import Hero from "../../components/hero/hero"
import Footer from "../../components/footer/footer"

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
            onClick={()=>console.log("clicked Chicago")}
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

      <Footer/>
    </div>
   

    </div>
  );
}
}

export default withRouter(Landing);
