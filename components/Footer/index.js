import React from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Logo fill="#fff"></Logo>
      <div className="footer-nav">
        <div className="nav-card">
          <h4>Features</h4>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
        <div className="nav-card">
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>
        <div className="nav-card">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-card">
          <div className="social-links">
            <ul>
              <li>
                <a target="_blank" href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.twitter.com">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.pinterest.com">
                  <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
