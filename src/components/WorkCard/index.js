import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function WorkCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <a onClick={() => openInNewTab(`${props.deployed}`)}>
          <img className="card-img-top" alt={props.name} src={props.image} />
        </a>
      </div>
      <div className="content">
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            onClick={() => openInNewTab(`${props.deployed}`)}
          >
            {props.name}
          </li>

          <li
            className="list-group-item card-link" onClick={() => openInNewTab(`${props.repo}`)}>
            <a className="github social-card">
              <FontAwesomeIcon icon={faGithub} size="2x" /> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkCard;
