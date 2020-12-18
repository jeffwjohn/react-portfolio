import React, { useState } from "react";
import Nav from "./components/Nav";
// import About from "./components/About/About";
import Work from "./components/Work";
import ContactForm from "./components/Contact/Contact";
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "About",
      description: "A short bio.",
    },
    {
      name: "Portfolio",
      description:
        "A gallery of projects I've built alone or as a contributer.",
    },
    {
      name: "Resume",
      description: "A link to my resume.",
    },
  ]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

const [currentPage, handlePageChange] = useState('Home');

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

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//       {/* <ContactForm></ContactForm> */}
      
//         {!contactSelected ? (
//           <>
//             <setCurrentCategory() />
//           </>
//         ) : (
//           <ContactForm></ContactForm>
//         )}
//       </main>
//     </div>
//   );
// }
return (
  <div>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
      {
        // Render the component returned by 'renderPage()'
        // YOUR CODE HERE
        renderPage(currentPage)
      }
    </div>
  </div>
);
}

export default App;
