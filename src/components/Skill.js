import React from "react";
import "./Skill.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaJava, FaReact } from "react-icons/fa";
import img from "../assets/image/icon.png";
import { ImTrello } from "react-icons/im";
function Skill() {
  return (
    <div id="skill-section" className="skill-section">
      <div className="language">
        <div className="language-title">Language</div>
        <div className="language-descr">
          <div className="language-item">
            <i className="icon__language">
              <AiFillHtml5 />
            </i>
            <p className="name__language">HTML5</p>
          </div>
          <div className="language-item">
            <i className="icon__language">
              <IoLogoCss3 />
            </i>
            <p className="name__language">CSS3</p>
          </div>
          <div className="language-item">
            <i className="icon__language">
              <IoLogoJavascript />
            </i>
            <p className="name__language">JavaScript</p>
          </div>
          <div className="language-item">
            <i className="icon__language">
              <FaJava />
            </i>
            <p className="name__language">Java</p>
          </div>
        </div>
      </div>
      <div className="framework">
        <div className="framework-title">Framework</div>
        <div className="framework-descr">
          <div className="framework-item">
            <img src={img} alt="bootstrap4" />
            <p className="">Bootstrap4</p>
          </div>
          <div className="lib-title">Library</div>
          <div className="">
            <div className="framework-item">
              <i className="icon__framework">
                <FaReact />
              </i>
              <p className="">ReactJS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tool">
        <div className="tool-title">Tool</div>
        <div className="tool-descr">
          <div className="tool-item">
            <i className="">
              <ImTrello />
            </i>
            <p className="">Trello</p>
          </div>
          <div className="tool-item">
            <i className="">
              <AiFillGithub />
            </i>
            <p className="">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
