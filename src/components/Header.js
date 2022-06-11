import React, { useEffect, useState } from "react";
import "./Header.css";
import bgImage from "../assets/video/bgvideo.mp4";
import { IoSendSharp } from "react-icons/io5";
function Header() {
  const [headerColor, setHeaderColor] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor(true) : setHeaderColor(false);
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <header className="header" id="header">
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
      <nav className={`nav responsive ${headerColor ? "active" : ""}`}>
        <a href="#" className="nav__logo">
          Dona Nguyen
        </a>

        <div className="nav__menu " id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about-section" className="nav__link">
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skill-section" className="nav__link">
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#project-section" className="nav__link">
                My projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact-section" className="nav__link">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="center__banner">
        <div className="welcome-title">
          <span class="block-1"></span>
          <p>
            Hi, I am Dona<span></span>
          </p>
        </div>
        <div className="sub-title">
          <div class="block-2"></div>
          <p>
            A third-year Software Engineer student. I have great interested in
            web design and development knowledge
          </p>
        </div>
        <a href="#contact-section">
          <div className="contact-btn">
            Contact Me
            <i>
              <IoSendSharp />
            </i>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
