import React, { useEffect } from "react";


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  // const [isHighlighted, setIsHighlighted] = useState(false);

  // const [highlightSelected, setHighlightSelected] = useState();

  // const toggleHighlight = (listItem, i) => {
  //     setHighlightSelected({listItem});
  //         setIsHighlighted
  //         (!isHighlighted);
  return (
    <header className="flex-row px-1">
      <h1>
        <a data-testid="link" href="/">
          Jeff Johnston
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About Me
            </a>
          </li> */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  props.handlePageChange(category);
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
                className={ props.currentPage === category ? 'nav-link active' : 'nav-link'}
              >
                {category.name}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
