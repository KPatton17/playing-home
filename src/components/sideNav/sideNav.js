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
        <div className = "sticky-top pt-2 d-flex sideNav">
            <a className="overview" href="#overview">Overview</a>
            <a className="neighborhoods" href="#neighborhoods">Neighborhoods</a>
            <a className="food" href="#food">Food & Drink</a>
            <a href="#activities">Activities</a>
            <a href="#health">Health & Wellness</a>
            <a href="#lodging">Lodging</a>
            <a href="#transportation">Transportation</a>
        </div>
        )
    }
}

export default SideBar; 