import React from "react";
import "../components/Contact.css";
import {
  AiFillLinkedin,
  AiOutlinePhone,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineCopyright,
} from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
function Contact() {
  return (
    <div className="contact-section" id="contact-section">
      <div className="title-contact">Contact Me</div>
      <div className="sub-title">Get in touch</div>
      <div className="infor-contact">
        <div className="static-infor">
          <div className="contact-item">
            <i>
              <CgMail />
            </i>
            <p className="infor">huudoan.qna@gmail.com</p>
          </div>
          <div className="contact-item">
            <i>
              <AiOutlinePhone />
            </i>
            <p className="infor">0393626592</p>
          </div>
          <div className="contact-item">
            <i>
              <FaRegAddressCard />
            </i>
            <p className="infor">
              12B Street, Long Thanh My Ward, District 9, HCMC
            </p>
          </div>
        </div>
        <div className="link-infor">
          <a
            href="https://www.linkedin.com/in/dona-nguyen-70b915217/"
            target="_blank"
          >
            <i>
              <AiFillLinkedin />
            </i>
          </a>
          <a href="https://github.com/covarom" target="_blank">
            <i>
              <AiFillGithub />
            </i>
          </a>
          <a href="https://www.instagram.com/covarom/" target="_blank">
            <i>
              <AiOutlineInstagram />
            </i>
          </a>
        </div>
      </div>
      <div className="copy-right">
        <div className="name">Dona Nguyen</div>
        <div className="copy-writer">
          Dona Nguyen
          <AiOutlineCopyright /> 2022 All rights reserved{" "}
        </div>
      </div>
    </div>
  );
}

export default Contact;
