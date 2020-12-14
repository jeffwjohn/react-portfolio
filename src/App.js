import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import ContactForm from "./components/Contact";

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
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
