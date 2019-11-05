import React, {Component} from "react";
import "./footer.scss"



export class Footer extends Component{
    render(){
    return (
        <footer className="footer">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </footer>
    );
    }
};

export default Footer;