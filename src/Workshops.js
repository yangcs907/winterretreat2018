import React, { Component } from 'react';
import "./index.css";

class Workshops extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle">Workshops</p>
          <p><span id="break">|&nbsp;</span><span>Love for the Universal Church</span></p>
          <p id="textBody">
            In our culture, it is very easy to become insular, focusing only on our needs and our hurts.
            But how much do we know of what is going on with the entire body of Christ?  How much do we even care?
            This workshop will center around focusing on the other parts of the body of Christ that we as the American
            church have often forgotten or neglected.  Let us listen to their stories and let us spend time in prayer for
            our brothers and sisters, many of whom are living for Christ in the midst of extreme persecution.
          </p>
          <p><span id="break">|&nbsp;</span><span>Love for the Locals</span></p>
          <p id="textBody">
            In Matthew 28, Jesus commands us, "Go therefore and make disciples of all nations..." For many of us, it is hard
            to contextualize this in our day-to-day lives. We tend to think that this is a task we can only accomplish when we are
            older, or something that can only be done by missionaries. In this workshop, we will understand how discipleship is an
            immediate necessity to love the local community God has given to us.
          </p>
          <p><span id="break">|&nbsp;</span><span>How to do triple bypass heart surgery</span></p>
          <p id="textBody">
            Have you ever wondered, "I sure wish I knew how to do triple bypass heart surgery right now"? Well this is your once
            in a lifetime opportunity to finally learn one of the most sought after skills in the world! Taught by one of our volunteer
            Political Science college students, you will learn all of the basics and essentials for becoming a true certified heart sugeon.
          </p>
          <p><span id="break">|&nbsp;</span><span>Bee Keeping</span></p>
          <p id="textBody">
            A workshop dedicated to teaching the fundamentals of bee keeping.
          </p>
          <a href="/Workshops" id="backtotop"><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
      </div>
    )
  };
};

export default Workshops;
