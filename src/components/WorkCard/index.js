import React from 'react';
import './style.css';

function WorkCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed App:</strong> {props.deployed}
          </li>
          <li>
            <strong>GitHub Repo:</strong> {props.repo}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkCard;
