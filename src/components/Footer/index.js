import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
import { openInNewTab } from "../../utils/helpers"

export default function SocialFollow() {
  return (
<div className="social-container  text-center" >
      <a onClick={() => openInNewTab("https://github.com/jeffwjohn")} href='/#about'
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a onClick={() => openInNewTab("https://www.linkedin.com/in/jeff-johnston-coder")} href='/#about'
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a onClick={() => openInNewTab("https://twitter.com/jeffwjohn")} href='/#about'
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
</div>

  );
}