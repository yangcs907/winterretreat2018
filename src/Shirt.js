import React, { Component } from 'react';
import "./index.css";
import face from "./images/face.jpg";

class Shirt extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle">T-Shirt Design</p>
        <p>
          Do you have a great sense of fashion? Do you find yourself constantly starting new fashion trends
          around school or work? Do you have absolutely nothing else to do? Do you enjoy saving money? Then the T-Shirt Design
          Contest for Winter Retreat 2018 is just for you! Enter your unique and original design for the Winter Retreat 2018
          official shirt. The winner's design will be used and they will also save $24,500 off of the registration fee!
        </p>
        <p style={{fontWeight:"bold"}}>Submission Deadline : December 28th, 2022</p>
        <div className="row">
          <div className="col s12 m6">
            <p><span id="break">|&nbsp;</span><span>Rules&nbsp;:</span></p>
              <ul id="listStyle" style={{fontSize:"16px"}}>
                <li>Must be good</li>
                <li>Any entry that is less than professional quality will not be considered</li>
                <li>Design must include name of the retreat (Winter Retreat 2018), and the retreat theme (Perseverance)</li>
                <li>Design cannot include any profanity or inappropriate drawings</li>
                <li>Winner will be chosen by favoritism of the specific entrant. The more popular you are, the higher chance of winning</li>
              </ul>
          </div>
          <div className="col s12 m6" id="shirtImage">
            <p style={{fontSize:"14px"}}>*Designs must be RASTER images. If you do not know what that is, please use the popular search engine Google*</p>
            <img src={face} style={{height:"300px"}}/>
          </div>
        </div>
      </div>
    )
  };
};

export default Shirt;
