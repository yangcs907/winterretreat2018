import React, { Component } from 'react';
import "./index.css";
import face from "./images/face.jpg";
import shirtexample from "./images/shirtexample.png";

const boldUnder = {
  fontWeight: "bold",
  textDecoration: "underline"
};

class Shirt extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle">T-Shirt Design Contest</p>
        <p>
          ​Do you have a great sense of fashion? Are you creative? Do you want to save $35 off registration cost? Then the T-Shirt Design Contest is for you!
        </p>
        <p style={{fontWeight:"bold"}}>Submission Deadline: December 1st, 2018</p>
        <div className="row">
          <div className="col s12 m6">
            <p><span id="break">|&nbsp;</span><span>Rules&nbsp;:</span></p>
            <ul id="listStyle" style={{fontSize:"16px"}}>
              <li>Design must include the retreat theme “Perseverance” and the Bible verse reference for the theme “2 Timothy 4:7”</li>
              <li>You must choose TWO shirt colors (one color for students, one color for counselors/staff).</li>
              <li>Design must include name of the retreat (Winter Retreat 2018), and the retreat theme (Perseverance)</li>
              <li>Design ink should be TWO colors max, front and back.</li>
              <li>Email your <span style={boldUnder}>high-resolution images</span> (JPG, TIFF, etc) to Job Wong. </li>
              <li>In your email, include your name, grade, church, and a <span style={boldUnder}>short explanation of your design concept.</span></li>
              <li>Winner will be chosen by a plurality of retreat coordinators. If your design is chosen, you will receive a $35 registration fee discount, and you will bring honor to your family. =)</li>
            </ul>
          </div>
          <div className="col s12 m6" id="shirtImage">
            <p style={{fontSize:"14px",textAlign:"left"}}>NOTE: Do not submit screenshots. Do not submit images from CustomInk. Do not submit Word or Powerpoint files, etc. Please submit high-resolution images (300dpi and above) in JPG, TIFF, etc. Hand-drawn images can be submitted as a digital scan, also at 300dpi or above.
            </p>
            <img src={shirtexample} style={{height:"300px"}} alt="shirt"/>
            <p>*Please make your design better than this*</p>
          </div>
        </div>
        <a href="/Shirt" id="backtotop"><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
      </div>
    )
  };
};

export default Shirt;
