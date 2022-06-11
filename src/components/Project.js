import React from "react";
import "../components/Project.css";
import mvc from "../assets/image/mvc.png";
import reac from "../assets/image/reactjs.png";
function Project() {
  return (
    <div className="project-section" id="project-section">
      <div className="project-title">My Project</div>
      <div className="project__list">
        <a href="https://github.com/covarom/RauCu" target="_blank">
          <div className="project__item">
            <div className="project__img">
              <img src={mvc} />
            </div>
            <div className="project_name">Java Web with MVC</div>
            <div className="project__descr">
              A simple CRUD Web application with usage MS SQL and Servlet/JSP
            </div>
          </div>
        </a>
        <a href="https://netflix-clone-2e6d5.web.app/" target="_blank">
          <div className="project__item">
            <div className="project__img">
              <img src={reac} />
            </div>
            <div className="project_name">Netflix clone</div>
            <div className="project__descr">
              React app with using API for Front-end
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
