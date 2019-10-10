import React, {Component} from "react";
import "./cityNav.scss"
export class CityNav extends Component {
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
          <a href="/baltimore">Baltimore</a>
          <a href="/chicago">Chicago</a>
          <a href="/dc">DC</a>
          <a href="/tours">Memphis</a>
          <a href="/rochester">Rochester</a>
          <a href="/pittsburgh">Pittsburgh</a>
        </div>
        <div className = "d-lg-none mobile-nav">
           
      </div>
    </div>
);
};
}

export default CityNav;