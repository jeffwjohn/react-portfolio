import React, { useEffect } from 'react';

function Nav(props) {

    const {
        workSelected,
        setWorkSelected,
        contactSelected,
        setContactSelected
      } = props;
      
  return (
    <header>
      <h1>Jeff Johnston</h1>
      <nav>
        <ul>
          <li>
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About Me
            </a>
          </li>
          <li className={`mx-1 ${!contactSelected && 'navActive'}`}>
            <a
              data-testid="work"
              href="#work"
              onClick={() => setContactSelected(false)}
            >
              Work
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a
              data-testid="contact"
              href="#contact"
              onClick={() => setContactSelected(true)}
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              data-testid="resume"
              href="../../assets/documents/CV-Resume-2020-Jeffery-Johnston-TECH.pdf"
              onClick={() => setContactSelected(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
