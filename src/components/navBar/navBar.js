import React, {Component} from "react";
import "./navBar.scss"
export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        listOpen: false,
    };
}

onClick = () => {
  console.log("clicked!"); 
  this.setState({listOpen: !this.state.listOpen})
}
render(){
    return (
      <div>
        <div className = "d-none d-lg-block nav-bar-container justify-content-around">
          <a href="/">Cities</a>
          <a href="/restaurants">Restaurants</a>
          <a href="/lodging">Lodging</a>
          <a href="/tours">Tours</a>
          <a href="/transport">Transport</a>
          <a href="/itineraries">Itineraries</a>
        </div>
        <div className = "d-lg-none mobile-nav">
          <div className = "mobile-nav-box" onClick={this.onClick}>
            <i className="material-icons">dehaze</i>  
          </div>
          {this.state.listOpen && (
            <div className="dropdown-nav">
              <li href="/">Cities </li>
              <li href="/restaurants">Restaurants</li>
              <li href="/lodging">Lodging</li>
              <li href="/tours">Tours</li>
              <li href="/transport">Transport</li>
              <li href="/itineraries">Itineraries</li>
            </div> 
          )}
      </div>
    </div>
);
};
}

export default NavBar;