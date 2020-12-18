import React from 'react';

function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact' ];
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<span className="navbar-brand mb-0 h1"><h1 className="header pb-0 mb-0">Jeff Johnston</h1><small className="text-muted">Full-Stack Web Developer</small></span>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
</nav>
  );
}

export default NavTabs;
