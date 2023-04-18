import React from 'react';
import '../scss/components/about-me.scss';
import AnimatedDiv from './AnimatedDiv';
import htmlIcon from '../assets/icons/html-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import javascriptIcon from '../assets/icons/javascript-icon.png';
import reactIcon from '../assets/icons/react-icon.png';
import nodeIcon from '../assets/icons/node-icon.png';
import expressIcon from '../assets/icons/express-icon.png';
import angularIcon from '../assets/icons/angular-icon.png';
import reduxIcon from '../assets/icons/redux-icon.png';
import jestIcon from '../assets/icons/jest-icon.png';
import typescriptIcon from '../assets/icons/typescript-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';
import bootstrapIcon from '../assets/icons/bootstrap-icon.png';
import gitIcon from '../assets/icons/git-icon.png';
import webAccessibilityIcon from '../assets/icons/web-accessibility-icon.png';

function AboutMe() {
  return (
    <section className="section about-me" id="about-me">
      <div className="section-decoration"></div>
      <AnimatedDiv elementClassName="about-me__heading-container center-content">
        <h1 className="section-heading">Hello, my name is <span>Joel Spinelli</span>.</h1>
      </AnimatedDiv>
      <AnimatedDiv elementClassName="about-me__text-container center-content">
        <p><span>I'm a Ssr. Full Stack Web Developer</span> with over 2 years of professional experience and passion for programming.</p>
        <p>
          Currently working as a <span>Front-end developer</span> at
          {' '} <a className="simple-link focusable" href="https://www.ey.com/" target="_blank" rel="noreferrer" title="Visit the official EY website">EY GDS</a>, using <span>React, TypeScript and Angular</span>.
        </p>
        <p>
          In the past, <span>I worked as a front-end developer</span> for the
          {' '} <a className="simple-link focusable" href="https://gba.gob.ar/" target="_blank" rel="noreferrer" title="Visit the official website of the Government of the Province of Buenos Aires">Buenos Aires Directorate of Online Government</a>
          <br />
          and also for the
          {' '} <a className="simple-link focusable" href="https://www.frba.utn.edu.ar/en/" target="_blank" rel="noreferrer" title="Visit the official website of the National University of Technology of Buenos Aires">National University of Technology of Buenos Aires</a>.
        </p>
        <p>
          I've learned to program websites by following multiple courses
          <br />
          from platforms such as
          {' '} <a className="simple-link focusable" href="https://platzi.com/p/joelspinelli/" target="_blank" rel="noreferrer" title="Visit my Platzi profile">Platzi</a>,
          {' '} <a className="simple-link focusable" href="https://www.udemy.com/" target="_blank" rel="noreferrer" title="Visit the Udemy">Udemy</a>,
          {' '} <a className="simple-link focusable" href="https://academind.com/" target="_blank" rel="noreferrer" title="Visit the Academind">Academind</a> and
          {' '} <a className="simple-link focusable" href="https://www.linkedin.com/learning/" target="_blank" rel="noreferrer" title="Visit my LinkedIn profile">LinkedIn Learning</a>.
        </p>
        <p>My goal is to make every website I work on fully responsive, pixel perfect and accessible.</p>
        <p>I currently find myself learning <span>React Native</span> for mobile development.</p>
      </AnimatedDiv>
      <div className="about-me__stack center-content">
        <AnimatedDiv>
          <h2>My stack:</h2>
        </AnimatedDiv>
        <div className="language-wrapper">
          <AnimatedDiv elementClassName="language"><img src={reactIcon} alt="" /><span>React</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={typescriptIcon} alt="" /><span>TypeScript</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={nodeIcon} alt="" /><span>Node.js</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={expressIcon} alt="" /><span>Express</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={jestIcon} alt="" /><span>Jest</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={angularIcon} alt="" /><span>Angular</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={reduxIcon} alt="" /><span>Redux</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={htmlIcon} alt="" /><span>HTML5</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={cssIcon} alt="" /><span>CSS3</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={javascriptIcon} alt="" /><span>JavaScript</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={sassIcon} alt="" /><span>Sass</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={bootstrapIcon} alt="" /><span>Bootstrap</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={gitIcon} alt="" /><span>Git</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={webAccessibilityIcon} alt="" /><span>Web Accessibility</span></AnimatedDiv>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
