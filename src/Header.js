import React, { Component } from 'react';
import "./index.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown.js";

const activeStyle = {
  color: "#2ef",
  fontWeight: "450"
};

class Header extends Component {
  render() {
    return (
      <div className="headerDiv">
        <Dropdown />
        <div className="navLinks">
          <div className="row" id="navLinks">
            <div className="col m2">
              <NavLink to="/About" activeStyle={activeStyle}>About</NavLink>
            </div>
            <div className="col m2">
              <NavLink to="/Speaker" activeStyle={activeStyle}>Our Speaker</NavLink>
            </div>
            <div className="col m2">
              <NavLink to="/Workshops" activeStyle={activeStyle}>Workshops</NavLink>
            </div>
            <div className="col m2">
              <NavLink to="/Register" activeStyle={activeStyle}>Register</NavLink>
            </div>
            <div className="col m2">
              <NavLink to="/Shirt" activeStyle={activeStyle}>T-Shirt Design</NavLink>
            </div>
            <div className="col m2">
              <NavLink to="/Contact" activeStyle={activeStyle}>Contact</NavLink>
            </div>
          </div>
        </div>
        <div className="titleDiv">
          <div className="row">
            <div className="col s12 m6">
              <a href="/About"><h5>Winter Retreat <span>2018</span></h5></a>
              <p>Perseverance</p>
              <p id="verse">2 Timothy 4:7</p>
            </div>

            <div className="col s12 m6" id="headerDesc">
              <p>Cohutta Springs Conference Center</p>
              <p id="date">December 28-31 &nbsp;<span>2018</span></p>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default Header;
