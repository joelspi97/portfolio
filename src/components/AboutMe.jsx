import React from 'react';
import '../scss/components/about-me.scss';

function AboutMe() {
  return (
    <section className="section about-me" id="about-me">
            <div className="section-decoration"></div>
                <div className="about-me__animation">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div className="center-content">
                <h1 className="about-me__heading-container section-heading">
                    Hello!
                    <br />
                    My name is Joel
                </h1>
            </div>
            <div className="about-me__image-container center-content">
                <img src="./assets/full-body-small.png" alt="Joel's caricature full-body drawing" />
            </div>
            <div className="about-me__text-container center-content">
                <p>I'm a front-end developer.</p>
                <p>My stack is ReactJS, HTML5, CSS3, SASS, Javascript (ES6+), git, Bootstrap and npm. I also have knowledge in web accessibility.
                <br />
                I'm currently learning how to use React Native.</p>
                <p>I'm constantly working to get better in whatever I'm doing, always trying to find the most logical way of solving problems.</p>
            </div>
        </section>
  );
}

export default AboutMe;
