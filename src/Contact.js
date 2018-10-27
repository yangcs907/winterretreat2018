import React, { Component } from 'react';
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle">Contact Us</p>
        <p>Have a question? Please fill out the form below to contact us, or send an email directly to one of the addresses below</p>
        <p><span style={{fontWeight:"bold"}}>Chris Yang</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Supreme Leader</span> - <a href="">yangcs907@gmail.com</a></p>
        <p><span style={{fontWeight:"bold"}}>Chris Yang</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Supreme Leader</span> - <a href="">yangcs907@gmail.com</a></p>
        <p><span style={{fontWeight:"bold"}}>Chris Yang</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Supreme Leader</span> - <a href="">yangcs907@gmail.com</a></p>
        <br></br><br></br>
        Form will go here
    </div>
    )
  };
};

export default Contact;
