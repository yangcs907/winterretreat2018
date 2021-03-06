import React, { Component } from 'react';
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="contentDiv" style={{paddingTop:"25px"}} id="top">
        <p><span id="break">|&nbsp;</span><span>What is Winter Retreat 2018?&nbsp;</span></p>
        <p id="textBody">
          Winter Retreat 2018 is youth retreat organized by the Atlanta Chinese Christian Churches. With musical worship, sermons, and activites, the retreat aims to
          glorify God by bringing youth together in spiritual fellowship. Youth will be able to interact with other youth, and counselors will help facilate their growth and
          walk with God.
        </p>
        <p><span id="break">|&nbsp;</span><span>Theme&nbsp;:</span>&nbsp;"Perseverance"</p>
        <p id="textBody">
          <span style={{fontStyle:"italic"}}>"I have fought the good fight, I have finished the race, I have kept the faith." -&nbsp;2&nbsp;Timothy 4:7</span>
          <br></br>
          Our walk with Christ isn't going to be easy. Trials and tribulations can be hard to deal with, but with the power of the Holy Spirit, we saints shall persevere.
        </p>
        <p><span id="break">|&nbsp;</span><span>When&nbsp;:</span>&nbsp;Friday, December 28th to Monday, December 31st 2018</p>
        <p id="textBody">
          <ul id="listStyle">
            <li>Check-in 3:00pm to 4:00pm on December 28th</li>
            <li>Check-out 6:30pm on December 31st</li>
          </ul>
        </p>
        <p><span id="break">|&nbsp;</span><span>Where&nbsp;:</span>&nbsp;<a href="http://cohuttasprings.com/">Cohutta Springs Conference Center</a></p>
        <p id="textBody">
          Directions:
          <br></br>
          <a href="https://www.google.com/maps/place/Cohutta+Springs+Conference+Center/@34.8930913,-84.728853,17z/data=!3m1!4b1!4m5!3m4!1s0x885fc5077ab4bd09:0x48b0638d12501702!8m2!3d34.8930913!4d-84.7266643">
            1175 Cohutta Springs Rd, Crandall, GA 30711
          </a>
        </p>
        <p><span id="break">|&nbsp;</span><span>Departure from Atlanta&nbsp;</span></p>
        <p id="textBody">
          Buses will depart from ACCCN (<a href="https://www.google.com/maps/place/Atlanta+Chinese+Christian+Church/@34.0400592,-84.2154116,17z/data=!3m1!4b1!4m5!3m4!1s0x88f59f1349a077e3:0x2e6bdc3d143963f9!8m2!3d34.0400548!4d-84.2132229">5055 E Morton Rd, Alpharetta, GA 30022</a>) and ACCCNW (<a href="https://www.google.com/maps/place/Atlanta+Chinese+Christian+Church+NW/@33.9941485,-84.446767,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5129caa945e31:0xd4c0e6f42199eb1d!8m2!3d33.9941441!4d-84.4445783">1837 Bill Murdock Rd, Marietta, GA 30062</a>)
          on December 28th.
        </p>
        <p><span id="break">|&nbsp;</span><span>Packing List (What to Bring)</span></p>
        <p id="textBody">
          <ul id="listStyle">
            <li>Bible</li>
            <li>Notepad & Pen</li>
            <li>Towel and Toiletries</li>
            <li>Backpack / Small bag to carry things around</li>
            <li>Sleeping bag & Pillow</li>
            <li>Proper clothing for winter weather (4 days)</li>
            <li>Closed-toed shoes</li>
            <li>Sandals for showers</li>
            <li>Snacks</li>
          </ul>
        </p>
        <p><span id="break">|&nbsp;</span><span>Do NOT bring</span></p>
        <p id="textBody">
          <ul id="listStyle">
            <li>Video Games</li>
            <li>Tobacco</li>
            <li>Alcohol</li>
            <li>Drugs (unless for medical purposes in which case you will indicate upon registering)</li>
            <li>Weapons</li>
          </ul>
        </p>
        <a href="/About" id="backtotop"><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
      </div>
    )
  };
};

export default About;
