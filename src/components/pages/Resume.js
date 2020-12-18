import React from "react";
import resume from "../../assets/documents/CV-Resume-2020-Jeffery-Johnston-TECH.pdf";

const Resume = () => {

  return (
<>
<h2 className="section-title">Resume</h2>
<section  className="resume-wrapper">
        <div>
        <p className="resume">View/download complete <a href={resume}>resume PDF</a></p>
        <h3 className="">Full-Stack Skill Summary</h3>
          <ul>
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
</section>
</>
  );
};

export default Resume;
