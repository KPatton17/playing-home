import React, { Component }  from 'react';
import './App.css';

import CityBox from "./components/cityBox/cityBox"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header class='jumbotron jumbotron-fluid'>
        <h1>Playing Home</h1>
      </header>
  
        <Nav className="justify-content-space-around">
          <Nav.Link href="#home">Cities</Nav.Link>
          <Nav.Link href="#features">Restaurants</Nav.Link>
          <Nav.Link href="#pricing">Lodging</Nav.Link>
          <Nav.Link href="#pricing">Walking Tours</Nav.Link>
          <Nav.Link href="#pricing">Transportation</Nav.Link>
          <Nav.Link href="#pricing">Itineraries</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
  

      <div className ="container-fluid">

        <div className= "row "> 
        {/* <SearchBar/> */}
        <CityBox 
          city="Baltimore"
          image="/img/baltimore2.jpg"
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
    </div>
  );
}

export default App;
