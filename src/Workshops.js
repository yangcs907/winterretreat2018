import React, { Component } from 'react';
import "./index.css";

const italic = {
  fontStyle: "italic",
  fontSize: "14px"
};

class Workshops extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle">Workshops</p>
        <p>Students may choose two workshops to attend during the retreat</p>
        <p><span id="break">|&nbsp;</span><span>How To Kill Sin -</span><span style={italic}> Scott Lily</span></p>
        <p id="textBody">
          Sin, a little three letter word that wreaks havoc. Everyone sins, but not everyone sees the problem of sin, and even fewer takes the necessary steps to kill sin. For Christians, killing sin is not optional. In this workshop, we will explore the depths of our sin and how to kill it.
        </p>
        <p><span id="break">|&nbsp;</span><span>The Fourth Commandment -</span><span style={italic}> Hee Sung Shin</span></p>
        <p id="textBody">
          Exodus 20:8 says "Remember the Sabbath day, to keep it holy." What does this mean? In this workshop we will explore what the Sabbath is for, how to keep it holy, and why this is important for a life of faith. We will deal with practical questions such as whether or not it's okay to skip church, do work on Sundays, and whether or not Sundays are inherently different from other days of the week. Most of all, we will see how Jesus Christ is indeed the Lord of the Sabbath.
        </p>
        <p><span id="break">|&nbsp;</span><span>A Life of Worship</span><span style={italic}> Chris Yang</span></p>
        <p id="textBody">
          We will look at the principles of "worship as a lifestyle" vs "worship as an event".  Come listen to people who are currently serving on worship teams share from their own journey.  Listen to what it means for them to live a life of worship, both their successes and their failures.  Listen to them share how that in turn shapes the way they think about themselves as worship leaders and how it shapes the way they think about leading others into worship (the event).  Through this workshop, we hope that you will be able to hear and be encouraged by real life struggles and growth of real people.  We hope that it will challenge you all to strive to live a life of worship, and we hope that will encourage future worship leaders to begin to lay the correct foundations that will help them be effective in their ministry.  There will also be a time of Q&A at the end.
        </p>
        <a href="/Workshops" id="backtotop"><i className="fas fa-caret-up"></i>&nbsp;Back to top</a>
      </div>
    )
  };
};

export default Workshops;
