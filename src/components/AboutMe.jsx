import React from 'react';
import '../scss/components/about-me.scss';
import htmlIcon from '../assets/icons/html-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import javascriptIcon from '../assets/icons/javascript-icon.png';
import reactIcon from '../assets/icons/react-icon.png';
import reduxIcon from '../assets/icons/redux-icon.png';
import typescriptIcon from '../assets/icons/typescript-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';
import bootstrapIcon from '../assets/icons/bootstrap-icon.png';
import gitIcon from '../assets/icons/git-icon.png';
import webAccessibilityIcon from '../assets/icons/web-accessibility-icon.png';

function AboutMe() {
  return (
    <section className="section about-me" id="about-me">
            <div className="section-decoration"></div>
            <div className="about-me__heading-container center-content">
                <h1 className="section-heading">Hello, my name is <span>Joel Spinelli</span>.</h1>
            </div>
            <div className="about-me__text-container center-content">
                <p>I'm a Front-end developer with a soft spot for web accessibility.</p>
                <p>My goal is to make every website I create fully responsive, pixel perfect and accessible.</p>
            </div>
            <div className="about-me__stack center-content">
                <h2>My stack:</h2>
                <div className="language-wrapper">
                    <div className="language"><img src={htmlIcon} alt="" /><span>HTML5</span></div>
                    <div className="language"><img src={cssIcon} alt="" /><span>CSS3</span></div>
                    <div className="language"><img src={javascriptIcon} alt="" /><span>JavaScript</span></div>
                    <div className="language"><img src={reactIcon} alt="" /><span>React</span></div>
                    <div className="language"><img src={reduxIcon} alt="" /><span>Redux</span></div>
                    <div className="language"><img src={typescriptIcon} alt="" /><span>TypeScript</span></div>
                    <div className="language"><img src={sassIcon} alt="" /><span>Sass</span></div>
                    <div className="language"><img src={bootstrapIcon} alt="" /><span>Bootstrap</span></div>
                    <div className="language"><img src={gitIcon} alt="" /><span>Git</span></div>
                    <div className="language"><img src={webAccessibilityIcon} alt="" /><span>Web Accessibility</span></div>
                </div>
            </div>
        </section>
  );
}

export default AboutMe;
