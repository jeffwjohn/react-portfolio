import React, {useState} from "react";
import WorkCard from '../../components/WorkCard';
import works from '../../works.json';
import Wrapper from "../Wrapper";

function Work(props) {

  
  const [worksList, setWorksList] = useState(works);

    return (
      <>
        <h2 id="work" className="section-title">
          Work
        </h2>

<Wrapper>
          {worksList.map(work => (
          <WorkCard 
          id = {work.id}
          name = {work.name}
          deployed = {work.deployed}
          image = {work.image}
          repo = {work.repo} 
          key = {work.id} 
          />
        ))}
</Wrapper>
              {/* <figure className="gallery__item gallery__item--1">
                <a href="https://team-7-hulk-smash.github.io/Crypto-Alarm/">
                  <div className="gallery__img gallery__item--1"></div>
                </a>

                <div className="bottom-left">
                  <a href="https://team-7-hulk-smash.github.io/Crypto-Alarm/">
                    <h3>Crypto Alarm</h3>
                  </a>
                </div>
              </figure>

              <figure className="gallery__item gallery__item--2">
                <a href="https://powerful-ravine-82745.herokuapp.com/">
                  <img
                    src="https://github.com/jeffwjohn/Portfolio/blob/master/assets/images/cloud-rolodex-shot.png?raw=true"
                    alt="Gallery image 2"
                    className="gallery__img"
                  />
                </a>
                <div className="bottom-left">
                  <a href="https://powerful-ravine-82745.herokuapp.com/">
                    <h3>Cloud Rolodex</h3>
                  </a>
                </div>
              </figure>

              <figure className="gallery__item gallery__item--3">
                <a href="https://jeffwjohn.github.io/House-Store/">
                  <img
                    src="https://github.com/jeffwjohn/Portfolio/blob/master/assets/images/house-store-hero.png?raw=true"
                    alt="Gallery image 3"
                    className="gallery__img"
                  ></img>
                </a>
                <div className="bottom-left">
                  <a href="https://jeffwjohn.github.io/House-Store/">
                    <h3>House Store</h3>
                  </a>
                </div>
              </figure> */}

              {/* <!-- <figure className="gallery__item gallery__item--4">
                <a href=" https://jeffwjohn.github.io/Tsunami-Coffee/"><img src="assets/images/Tsunami.png"
                        alt="Gallery image 4" className="gallery__img"></a>
                <div className="bottom-left">
                    <a href=" https://jeffwjohn.github.io/Tsunami-Coffee/">
                        <h3>Tsunami Coffee</h3>
                    </a>

                </div>
            </figure> --> */}

              {/* <figure className="gallery__item gallery__item--4">
                <a href="https://jeffwjohn.github.io/run-buddy">
                  <img
                    src="https://github.com/jeffwjohn/Portfolio/blob/master/assets/images/hero-bg.jpg?raw=true"
                    alt="Gallery image 5"
                    className="gallery__img"
                  ></img>
                </a>
                <div className="bottom-left">
                  <a href="https://jeffwjohn.github.io/run-buddy">
                    <h3>Run Buddy</h3>
                  </a>
                </div>
              </figure>

              <figure className="gallery__item gallery__item--5">
                <a href="https://jeffwjohn.github.io/Tea-Cozy/">
                  <img
                    src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-4/img-mission-background.jpg"
                    alt="Gallery image 6"
                    className="gallery__img"
                  />
                </a>
                <div className="bottom-left">
                  <a href="https://jeffwjohn.github.io/Tea-Cozy/">
                    <h3>Tea Cozy</h3>
                  </a>
                </div>
              </figure> */}
      </>
    );
  }

export default Work;