import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
<div className="social-container  text-center" >
      <a href="https://github.com/jeffwjohn"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/jeff-johnston-coder"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/jeffwjohn"
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
</div>

  );
}