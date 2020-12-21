import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { openInNewTab } from '../../utils/helpers';

function WorkCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <a onClick={() => openInNewTab(`${props.deployed}`)} href='/#portfolio'>
          <img className="card-img-top" alt={props.name} src={props.image} />
        </a>
      </div>
      <div className="content">
        <ul className="list-group list-group-flush">
          <li
            className="deployed list-group-item"
            onClick={() => openInNewTab(`${props.deployed}`)} href='/#portfolio'
          >
            <div className="app-name">{props.name}</div>
          </li>

          <li
            className="list-group-item" onClick={() => openInNewTab(`${props.repo}`)}>
            <a className="github social-card" href='/#portfolio'>
              <FontAwesomeIcon icon={faGithub} size="2x" /> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkCard;
