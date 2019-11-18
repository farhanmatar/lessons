import React, { Component } from 'react';
import Me from './Component/Me';
import  Hobbies from './Component/Hobbies';
import Contact from './Component/Contact';
import  './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
}from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <h1>About me</h1>
          <div className="All">
            <ul>
                <li>
                  <NavLink to="/Me" >
                  Me  
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Hobbies">
                  Hobbies  
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Contact">
                  Contact
                  </NavLink>
                </li>
            </ul>
            
          </div>
          <hr/>


          <Switch>
            <Route  exact path="/Me">
                <Me />
            </Route>

            <Route   path="/Hobbies">
                <Hobbies />
            </Route>


            <Route   path="/Contact">
                <Contact />
            </Route>
          </Switch>
      </Router>
    )
  }
}