import React, { Component } from 'react';
import "./index.css";
import john from "./images/john.jpeg";

class Speaker extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle" style={{marginBottom:"30px",paddingBottom:"10px",marginTop:"10px"}}>
          Jonathan Thompson
          <br></br>
          <sup style={{fontSize:"14px",fontStyle:"italic",fontWeight:"normal"}}>Church planter at Perimeter Church</sup>
        </p>
        <div className="row">
          <div className="col s12 m6" id="speakerFace">
            <img src={john} id="speakerFace" alt="speaker"/>
          </div>
          <div className="col s12 m6" id="speakerBio">
            <p>
              ​John grew up in Powder Springs, GA and before entering vocational ministry spent nearly 12 years in the U.S. Army.
              John is a combat-wounded veteran and Purple Heart recipient whose service took him all over the U.S., as well the Middle
              East and South Korea. Before answering a call to plant a multi-ethnic church in Atlanta, John served as a College and Student Pastor,
              and Adjunct Professor at Belhaven University.  John is married to Abi, and together they have 3 children, Emma, Grace, and Micah.
            </p>
          </div>
        </div>
        <a href="/Speaker" id="backtotop"><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
      </div>
    )
  };
};

export default Speaker;
