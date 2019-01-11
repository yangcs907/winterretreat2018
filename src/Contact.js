import React, { Component } from 'react';
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div className="contentDiv" style={{marginBottom:"20px"}}>
        <p id="contentTitle">Contact Us</p>
        <p>Have a question? Please fill out the form below to contact us, or send an email directly to one of the addresses below</p>
        <p><span style={{fontWeight:"bold"}}>Hee Sung Shin</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>English Minister - ACCCNW</span> -&nbsp;<a href="/Expired">n/a</a></p>
        <p><span style={{fontWeight:"bold"}}>Scott Lily</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Youth Director - ACCCN</span> -&nbsp;<a href="/Expired">n/a</a></p>
        <p><span style={{fontWeight:"bold"}}>Job Wong</span>&nbsp;&nbsp;<span style={{fontStyle:"italic",fontWeight:"normal",fontSize:"14px"}}>Youth Director - ACCC / EACF</span> -&nbsp;<a href="/Expired">n/a</a></p>
        <br></br><br></br>
        <div className="contactForm">
          <form action="https://formspree.io/yangcs907@gmail.com"
            method="POST">
            <input type="text" name="Name" placeholder="Your Name (First and Last)" style={{fontFamily:"Avenir"}}/>
            <input type="email" name="Email" placeholder="Your Email" style={{fontFamily:"Avenir"}} />
            <textarea type="text" name="Message" placeholder="Message" style={{fontFamily:"Avenir"}} />
          </form>
          <br></br>
          <a id="sendButton" href="/Expired">Send</a>
        </div>
        <a href="/Contact" id="backtotop" style={{marginTop:"40px"}}><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
      </div>
    )
  };
};

export default Contact;
