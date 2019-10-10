import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './landing.scss';
import routes from "../../routes";
import CityBox from "../../components/cityBox/cityBox"
import { Nav} from 'react-bootstrap';
import NavBar from "../../components/navBar/navBar"

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
          <div className = "d-flex landing-nav justify-content-between">
            <img src= "./img/logo-small2.svg" alt="small logo"/>
            <NavBar></NavBar>
          </div>
          <div className = "d-flex logo-image justify-content-center"> 
            <img src="./img/playing-home-1.svg" alt="logo"/> 
          </div>
      </div>

      <div className ="landing-cities-container mx-4">
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
