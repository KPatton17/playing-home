import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './about.scss';
import Hero from "../../components/hero/hero"
import Footer from "../../components/footer/footer"

export class Contact extends Component {
  

  render(){
  return (
    <div className="App">
      <div className= "about-container d-flex flex-column">
          <Hero></Hero>

        <div className="about">
          <h2>About Playing Home</h2>
          <p> Five cities in the past six years has allowed (forced) me to learn the art of playing house, or playing home, in multiple new places for short periods of time. From that, I’ve gained stories and tips and tricks about traveling, moving, eating, and trying to not be tourists in a new city. </p> 
          <p> When preparing for a new move, I would find myself wishing I could have a breakdown of the city, almost as if I had a friend who had lived there and was familiar with the in’s and out’s. Someone to give you an idea of the feel of the different neighborhoods, and  give you an overview of the best restaurants, grocery stores, gyms, and transportation systems within those. I didn’t have a friend like that, or anyone I knew at all, in most of the cities I moved to. I turned to the internet, of course, but I could never find anything that in depth, or that covered all aspects. </p>
          <p>So, here you’ll find guides on the various cities I have lived in, or spent a great deal of time in, that are aimed to give you a peek into life there. That way, whether you are there for a quick visit, or looking to move to the area, you can get a sense of how the locals live. </p>
        </div>
      </div>

      <Footer/>

    </div>
  );
}
}

export default withRouter(Contact);
