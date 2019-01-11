import React, { Component } from 'react';
import "./index.css";


class Register extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle">Registration Instructions</p>
        <p><span id="break">|&nbsp;</span><span>Fees</span></p>
        <p id="textBody">
          <span style={{fontWeight:"bold"}}>$180</span> - Youth registration price (before December 9th 2018)
            <br></br>
            <span style={{fontWeight:"bold"}}>$210</span> - Youth registration price (after December 9th 2018, T-Shirt not guaranteed)
              <br></br>
              <span style={{fontWeight:"bold"}}>$50</span> - Counselor / Staff / Praise Team registration price
                </p>
                <p><span id="break">|&nbsp;</span><span>Registration</span></p>
                <p id="textBody">
                  <a id="registerButton" href="/Expired">Youth Registration</a>
                  <br></br><br></br><br></br>
                  <a id="registerButton" href="/Expired">Counselor / Staff Registration</a>
                </p>
                <p><span id="break">|&nbsp;</span><span>Cancellation Policy</span></p>
                <p id="textBody">
                  Cancellations will be accepted until December 27th 2018, but will be subject to a $40,000 cancellation fee. No cancellations after Decemver 27th 2018
                  and no refunds will be issued.
                  <br></br><br></br>
                  Cancellation requests must be made in writing (handwritten, notarized, endorsed by a member of Congress). Please check the <a href="/Contact">CONTACT</a> page.
                  Please provide:
                  <br></br>
                  <ul id="listStyle">
                    <li>Name of youth</li>
                    <li>Name of church</li>
                  </ul>
                </p>
                <p><span id="break">|&nbsp;</span><span>Waiver Form</span></p>
                <p id="textBody">
                  <a id="registerButton" href="/Expired">Waiver Form</a>
                  <br></br><br></br>
                  You MUST bring a signed copy of this waiver form to the check-in.
                </p>
                <a href="/Register" id="backtotop"><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
              </div>
            )
          };
        };

        export default Register;
