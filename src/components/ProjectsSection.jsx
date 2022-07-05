import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/configParticles';
import { tsParticles } from "tsparticles-engine";
import { loadFull } from 'tsparticles';
import '../scss/components/projects-section.scss';
import Project from './Project';

function Projects() {
  tsParticles.load("tsparticles-2", particlesConfig);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="section-decoration"></div>
      <Particles 
            className="animated-background" 
            id="tsparticles-2"
            init={particlesInit}
            options={particlesConfig} 
      />
      <h1 className="section-heading">Projects</h1>
      <div className="projects-section__grid-container center-content">
        <Project
          name='Movie Finder'
          stack={['React', 'TypeScript', 'Redux (+Thunk)', 'Bootstrap', 'Sass']}
          description='Movie Finder is a platform that lets user search for information about any movie they want. It also allows them to rate them using their TMDb account.'
          iconClassName='movie-finder-icon'
          route=''
          left={true}
        >
          <ol>
            <li>An infinite scroll list, which retrieves data from an API to display movies.</li>
            <li>An input which allows the user to search for specific titles.</li>
            <li>A details page for each movie that offers an option for users to be able to vote on movie ratings.</li>
            <li>An accessible UI that follows the Web Content Accessibility Guidelines (WCAG) 2.1.</li>
          </ol>
        </Project>

        <Project
          name='To-do List'
          stack={['React', 'Redux', 'Sass']}
          description='To-do List is a web application that allows users to make their own list of chores, and arrenge their tasks as they wish.'
          iconClassName='to-do-list-icon'
          route=''
          left={false}
        >
          <ol>
            <li>A menu for users to create their own to-do's, which can later be edited, marked as completed and/or deleted.</li>
            <li>Usage of a third party library to make to-do's draggable and droppable to rearrange them.</li>
            <li>Usage of local storage to save and display the user's to-do's.</li>
            <li>An input which allows the user to search for specific todos.</li>
            <li>A settings menu which allows the user to customize their experience on the webpage.</li>
            <li>An accessible UI that follows the Web Content Accessibility Guidelines (WCAG) 2.1.</li>
          </ol>

        </Project>

        <Project
          name='Batata Bit'
          stack={['HTML5', 'Sass']}
          description='Batata Bit is a crypto currency website. It consists of a fully responsive static layout that follows the Web Content Accessibility Guidelines (WCAG) 2.1.'
          iconClassName='batata-bit-icon'
          route=''
          left={true}
        />

        <Project
          name='MI Blog'
          stack={['HTML5', 'CSS3']}
          description='MI Blog is a generic blog website. It consists of a fully responsive static layout that follows the Web Content Accessibility Guidelines (WCAG) 2.1.'
          iconClassName='generic-blog-icon'
          route=''
          left={false}
        />
      </div>
    </section>
  );
}

export default Projects;
