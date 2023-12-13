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
// import jestIcon from '../assets/icons/jest-icon.png';
import typescriptIcon from '../assets/icons/typescript-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';
import bootstrapIcon from '../assets/icons/bootstrap-icon.png';
import gitIcon from '../assets/icons/git-icon.png';
// import mongoIcon from '../assets/icons/mongo-icon.svg';
import webAccessibilityIcon from '../assets/icons/web-accessibility-icon.png';
import nestJsIcon from '../assets/icons/nest-js-icon.svg';
import sqlIcon from '../assets/icons/sql-icon.png';
import postgresIcon from '../assets/icons/postgres-icon.png';
import sqlServerIcon from '../assets/icons/sql-server-icon.png';

function AboutMe() {
  return (
    <section className="section about-me" id="about-me">
      <div className="section-decoration"></div>
      <AnimatedDiv elementClassName="about-me__heading-container center-content">
        <h1 className="section-heading">Hello, my name is <span>Joel Spinelli</span>.</h1>
      </AnimatedDiv>
      <AnimatedDiv elementClassName="about-me__text-container center-content">
        <p>
          <span>I'm a Full-Stack Web Developer</span> with over 3 years of professional experience, and a huge passion for programming.
          <br />
          I'm proficient in both JavaScript and TypeScript. In the front end I make use of <span>React and Angular (2+)</span>, 
          <br />
          and in the back end I use <span>NodeJS, Express and NestJS </span>. I also have some knowledge in <span>C# / .NET and Azure</span>.
        </p>
        
        <p>
          Currently working as a <span>Full-Stack developer</span> at
          {' '} <a className="simple-link focusable" href="https://www.ey.com/" target="_blank" rel="noreferrer" title="Visit the official EY website">EY GDS</a>, using <span>React, TypeScript, Angular, SPFx, NodeJS and NestJS</span>.
        </p>
        
        <p>
          In the past, <span>I worked as a front end developer</span> for the
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
        
        <p>I'm interested in learning mobile technologies in the future, such as <span>React Native and Swift</span>.</p>
      </AnimatedDiv>
      <div className="about-me__stack center-content">
        <AnimatedDiv>
          <h2>My stack:</h2>
        </AnimatedDiv>
        <div className="language-wrapper">
          <AnimatedDiv elementClassName="language"><img src={ reactIcon } alt="" /><span>React</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ angularIcon } alt="" /><span>Angular</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ nestJsIcon } alt="" /><span>NestJS</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ expressIcon } alt="" /><span>Express</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ nodeIcon } alt="" /><span>NodeJS</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ postgresIcon } alt="" /><span>PostgreSQL</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ sqlServerIcon } alt="" /><span>SQL Server</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ sqlIcon } alt="" /><span>SQL</span></AnimatedDiv>
          {/* <AnimatedDiv elementClassName="language"><img src={ mongoIcon } alt="" /><span>MongoDB</span></AnimatedDiv> */}
          {/* <AnimatedDiv elementClassName="language"><img src={ jestIcon } alt="" /><span>Jest</span></AnimatedDiv> */}
          <AnimatedDiv elementClassName="language"><img src={ reduxIcon } alt="" /><span>Redux</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ typescriptIcon } alt="" /><span>TypeScript</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ javascriptIcon } alt="" /><span>JavaScript</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ htmlIcon } alt="" /><span>HTML5</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ cssIcon } alt="" /><span>CSS3</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ sassIcon } alt="" /><span>Sass</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ gitIcon } alt="" /><span>Git</span></AnimatedDiv>
          <AnimatedDiv elementClassName="language"><img src={ webAccessibilityIcon } alt="" /><span>Web Accessibility</span></AnimatedDiv>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
