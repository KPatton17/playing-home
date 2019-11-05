import React, {Component} from "react";
import "./hero.scss"
import CityNav from "../cityNav/cityNav"; 
import routes from "../../routes";
import { withRouter } from "react-router-dom";



export class Hero extends Component{
    render(){
    return (
        <div className = "landing-hero">
            <div className = "d-flex landing-nav justify-content-start">
                <img src= "./img/logo-small2.svg" alt="small logo" onClick={()=> this.props.history.push(routes.landing)} />
            </div>
            <div className = "d-flex hero-text"> 
                Make Every City Feel Like Home
            </div>
            <div className = "city-nav">
                <CityNav></CityNav>
            </div>
      </div>
    );
    }
};

export default withRouter(Hero);