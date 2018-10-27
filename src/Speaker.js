import React, { Component } from 'react';
import "./index.css";
import face from "./images/face.jpg";

class Speaker extends Component {
  render() {
    return (
      <div className="contentDiv">
        <p id="contentTitle" style={{marginBottom:"30px",paddingBottom:"10px"}}>
          Jonathan Thompson
          <br></br>
          <sup style={{fontSize:"14px",fontStyle:"italic"}}>Church planter at Perimeter Church</sup>
        </p>
        <div className="row">
          <div className="col s12 m6" id="speakerFace">
            <img src={face} id="speakerFace" alt="speaker"/>
          </div>
          <div className="col s12 m6" id="speakerBio">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
              a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    )
  };
};

export default Speaker;
