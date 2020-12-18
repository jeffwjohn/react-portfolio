import React from "react";
import resume from "../../assets/documents/CV-Resume-2020-Jeffery-Johnston-TECH.pdf";

const Resume = () => {

  return (
<>
      <div>
      <a href={resume}>Resume</a>
        <ul>
          {" "}
          Front-end Proficiencies
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Mobile-responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <br></br>
        <ul>
          Back-end Proficiencies
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
        </ul>
      </div>
</>
  );
};

export default Resume;
