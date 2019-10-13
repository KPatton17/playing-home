import React, {Component} from "react";
import "./sideNav.scss"
export class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listOpen: false,
        };
    }

    render(){
        return (
           <div className = "d-flex sideNav p-3">
            <a href="/">Overview</a>
            <a href="/">Neighborhoods</a>
            <a href="/">Food & Drink</a>
            <a href="/lodging">Activities</a>
            <a href="/itineraries">Health & Wellness</a>
            <a href="/tours">Lodging</a>
            <a href="#transportation">Transportation</a>
          </div>
        )
    }
}

export default SideBar; 