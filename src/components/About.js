import React from "react";
import "./About.css";
const img = require("../assets/image/about2.jpg");
function About() {
  return (
    <div id="about-section" className="about__section">
      <div className="about__title" id="about-title">
        <p className="title">ABOUT ME</p>
        <p className="intro">My introduction</p>
      </div>
      <div className="about__descr">
        <div className="image__about">
          <img src={img}></img>
        </div>
        <div className="descr__welcome">
          <p className="welcome__web">Welcome to my personal website!</p>
          <p className="personal__descr">
            I am interested in front-end web development. I have a good grasp
            of: HTML5, CSS3, JavaScript. I also do Web Application with Java.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
