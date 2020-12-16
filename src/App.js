import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import ContactForm from "./components/Contact";

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

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {/* <ContactForm></ContactForm> */}
        {!contactSelected ? (
          <>
            <About></About>
            <Work></Work>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
