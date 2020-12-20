import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/Header/Navigation/About";
import Portfolio from "./components/Header/Navigation/Portfolio";
import Resume from "./components/Header/Navigation/Resume";
import Contact from "./components/Header/Navigation/Contact";
import SocialFollow from "./components/Footer";

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
          <Header
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
