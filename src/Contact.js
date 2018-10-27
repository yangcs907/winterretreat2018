import React, { Component } from 'react';
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div className="contentDiv" style={{marginBottom:"20px"}}>
        <p id="contentTitle">Contact Us</p>
        <p>Have a question? Please fill out the form below to contact us, or send an email directly to one of the addresses below</p>
        <p><span style={{fontWeight:"bold"}}>Chris Yang</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Supreme Leader</span> -&nbsp;<a href="">yangcs907@gmail.com</a></p>
        <p><span style={{fontWeight:"bold"}}>Chris Yang</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Supreme Leader</span> -&nbsp;<a href="">yangcs907@gmail.com</a></p>
        <p><span style={{fontWeight:"bold"}}>Chris Yang</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Supreme Leader</span> -&nbsp;<a href="">yangcs907@gmail.com</a></p>
        <br></br><br></br>
        <div className="contactForm">
          <form action="https://formspree.io/yangcs907@gmail.com"
            method="POST">
            <input type="text" name="Name" placeholder="Your Name (First and Last)" style={{fontFamily:"Avenir"}}/>
            <input type="email" name="Email" placeholder="Your Email" style={{fontFamily:"Avenir"}} />
            <textarea type="text" name="Message" placeholder="Message" style={{fontFamily:"Avenir"}} />
            <input type="submit" value="Send" style={{fontFamily:"Avenir"}} id="sendButton" />
          </form>
        </div>
        <a href="/Contact" id="backtotop" style={{marginTop:"40px"}}><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
    </div>
    )
  };
};

export default Contact;
