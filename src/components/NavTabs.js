import React from 'react';

function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact' ];
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">Jeff Johnston</a>
      <ul className="nav nav-tabs">
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
