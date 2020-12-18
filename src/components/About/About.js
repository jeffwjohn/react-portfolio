import React from 'react';
import headerImage from "../../assets/images/JeffJohnston-img.png";

function About() {
  return (
    <>
        <section className="hero">
        </section>
        <h2 id="bio" className="section-title">About Me</h2>
        <section className="bio-wrapper">
        {/* <img src={headerImage} className="hero" style={{ width: "100%" }} alt="portfolio headshot" /> */}
        <div className="bio-text-container">
            <div>
                <p className="bio-text">The most interesting thing about me is that I wear many hats. Before I decided to
                    learn web development, I dreamt of being a rock star. Following a short stint playing local clubs
                    after high school, I enrolled in ACC's music program, eventually earning an Associate of Arts
                    degree. Shortly thereafter, I decided to become a nurse, and graduated from UT Austin with a
                    Bachelor's degree in 2010. However, I still longed for more knowledge, and eventually graduated from
                    Texas Wesleyan University in 2015, earning a Master's degree in nurse anesthesia.
                </p>
            </div>
    
            <div>
                <p className="bio-text">After four years of enjoying the fruits of my many years of labor, life was turned
                    upside down by a worldwide pandemic. I looked for a silver lining, and realized that the enormous
                    amount of time I now spent at home had presented the perfect opportunity to learn a new skill that's
                    always fascinated me--coding! The rest has yet to occur, and so far my current adventure has proven
                    every bit as challenging and rewarding as I'd hoped.
                </p>
            </div>
        </div>
    
    </section>
    </>
  );
}

export default About;