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
import typescriptIcon from '../assets/icons/typescript-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';
import gitIcon from '../assets/icons/git-icon.png';
import webAccessibilityIcon from '../assets/icons/web-accessibility-icon.png';
import nestJsIcon from '../assets/icons/nest-js-icon.svg';
import sqlIcon from '../assets/icons/sql-icon.png';
import postgresIcon from '../assets/icons/postgres-icon.png';

function AboutMe() {
  return (
    <section className="section about-me" id="about-me">
      <div className="section-decoration"></div>
      <AnimatedDiv elementClassName="about-me__heading-container center-content">
        <h1 className="section-heading">Hello, my name is <span>Joel Spinelli</span>.</h1>
      </AnimatedDiv>
      <AnimatedDiv elementClassName="about-me__text-container center-content">
        <p>
          <span>I'm a Frontend Web Developer</span> with 4 years of professional experience, and a huge passion for programming.
          <br />
          I'm proficient in both JavaScript and TypeScript, and I've built many apps using technologies such as <span>React, Angular (2+)</span> and <span>NodeJS</span>, 
        </p>
        
        <p>
          Currently working as a <span>Frontend Developer</span> at
          {' '} <a className="simple-link focusable" href="https://www.innovateod.com/" target="_blank" rel="noreferrer" title="Visit the official Innovate Group website">Innovate Group</a>, using <span>React</span> and <span>JavaScript</span>.
        </p>
        
        <p>My goal is to make every website I work on fully responsive, pixel perfect and accessible, and I'm interested in learning mobile technologies in the future, such as <span>React Native and Swift</span>.</p>
      </AnimatedDiv>
      <div className="about-me__stack center-content">
        <AnimatedDiv>
          <h2>My stack:</h2>
        </AnimatedDiv>
        <div className="language-wrapper">
          <AnimatedDiv elementClassName="language"><img src={ reactIcon } alt="" /><span>React</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ angularIcon } alt="" /><span>Angular</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ typescriptIcon } alt="" /><span>TypeScript</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ javascriptIcon } alt="" /><span>JavaScript</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ htmlIcon } alt="" /><span>HTML5</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ cssIcon } alt="" /><span>CSS3</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ sassIcon } alt="" /><span>Sass</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ gitIcon } alt="" /><span>Git</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ webAccessibilityIcon } alt="" /><span>Web Accessibility</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ nestJsIcon } alt="" /><span>NestJS</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ expressIcon } alt="" /><span>Express</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ nodeIcon } alt="" /><span>NodeJS</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ postgresIcon } alt="" /><span>PostgreSQL</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ sqlIcon } alt="" /><span>SQL</span></AnimatedDiv>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
