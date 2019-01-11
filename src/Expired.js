import React, { Component } from 'react';
import "./index.css";

const expiredStyle = {
  fontStyle: "italic",
  fontFamily: "Avenir",
  fontSize: "24px",
  height: "400px",
  padding: "20px",
  paddingTop: "50px",
  textAlign: "center"
};

const expiredParagraph = {
  fontSize: "18px"
}

const verticalLine = {
  color: "red",
  fontWeight: "bold"
}

class Expired extends Component {
  render() {
    return (
        <div style={expiredStyle}>
        <span><span style={verticalLine}>|&nbsp;</span>Registration for this event has closed</span>
        <br></br>
        <p style={expiredParagraph}>
          Due to the retreat having passed, registration and contact have been disabled for this site
          <br></br>
          <br></br>
          Sorry for the inconvenience!
        </p>

        </div>
    )
  };
};

export default Expired;
