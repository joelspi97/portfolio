import React from 'react';
import '../scss/components/projects.scss';

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-decoration"></div>
      <h1 className="section-heading">Projects</h1>
      <div className="projects__grid-container center-content">
        <article className="batata-bit">
          <h2>Batata Bit</h2>
          <span className="batata-icon"></span>
          <a className="project-button" href="./projects/batata-bit/index.html" target="_blank" aria-label="Go to the Batata Bit project webpage">View project <span className="arrow-icon"></span></a>
        </article>
        <article className="platzi-video">
          <h2>PlatziVideo</h2>
          <span className="platzi-icon"></span>
          <a className="project-button" href="./projects/platzi-video/index.html" target="_blank" aria-label="Go to the Platzi Video project webpage">View project
            <span className="arrow-icon"></span></a>
        </article>
        <article className="generic-blog">
          <h2>Generic Blog</h2>
          <span className="blog-icon"></span>
          <a className="project-button" href="./projects/blog/index.html" target="_blank" aria-label="Go to the Generic Blog project webpage">View project <span
            className="arrow-icon"></span></a>
        </article>
        <article className="google-clone">
          <h2>Google Clone</h2>
          <span className="google-icon"></span>
          <a className="project-button" href="./projects/google-clone/index-eng.html" target="_blank" aria-label="Go to the Google Clone project webpage">View project
            <span className="arrow-icon"></span></a>
        </article>
      </div>
    </section>
  );
}

export default Projects;
