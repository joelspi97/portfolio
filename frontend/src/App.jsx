import React from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import AnimatedDiv from "./components/AnimatedDiv";
import './scss/core/resets.scss';
import './scss/core/generic-classes.scss';
import './scss/components/footer.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <ProjectsSection />
        <Contact />
      </main>
      <footer className="footer">
        <AnimatedDiv>
          <p>
            Want to see the code of this website? {' '} 
            <a 
              aria-label="Visit this website Github repository." 
              className="simple-link focusable" 
              href="https://github.com/joelspi97/portfolio" 
              target="_blank" rel="noreferrer" 
              title="Visit this website's Github repository"
            >
              Click here!
            </a>
          </p>
          <p>Made with React, NodeJS, Express and <span aria-label="love">❤️️</span> by Joel Spinelli.</p>
        </AnimatedDiv>
      </footer>
    </>
  );
}

export default App;
