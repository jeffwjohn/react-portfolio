import React, { useState } from "react";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import SocialFollow from "./SocialFollow";

function App() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = (currentPage) => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div id="wrap">
        <div>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          </div>
<div className="main-content">
            
              {
                // Render the component returned by 'renderPage()'
                // YOUR CODE HERE
                renderPage(currentPage)
              }
            
            </div>
          <footer className="footer">
            <SocialFollow />
          </footer>
      </div>
    </>
  );
}

export default App;
