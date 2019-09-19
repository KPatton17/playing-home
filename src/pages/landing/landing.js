import React  from 'react';
import './landing.scss';


import CityBox from "../../components/cityBox/cityBox"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header class='d-flex jumbotron jumbotron-fluid'>
        <img src = "./img/playing-home-1.svg" alt= "logo" className ="logo-image"/>
      </header>
  
        <Nav className="justify-content-center">
          <Nav.Link href="pittsburgh">Restaurants</Nav.Link>
          <Nav.Link href="#pricing">Lodging</Nav.Link>
          <Nav.Link href="#pricing">Walking Tours</Nav.Link>
          <Nav.Link href="#pricing">Transportation</Nav.Link>
          <Nav.Link href="#pricing">Itineraries</Nav.Link>
        </Nav>
  

      <div className ="container-fluid">

        <div className= "row "> 
        {/* <SearchBar/> */}
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
        />
  
        </div>
      </div>

      <footer className="footer">
          <a href="#pricing">About</a>
          <a href="#pricing">Contact</a>
        </footer>

    </div>
  );
}

export default App;
