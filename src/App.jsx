import React from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
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
        <p>Made by Joel Spinelli with <span aria-label="love">❤️️</span> and <span aria-label="porcine power">🐷</span></p>
        <br />
        <p>Want to see the code of this website? <a href="https://github.com/joelspi97/portfolio" target="_blank" aria-label="Visit this website Github repository.">Click here!</a></p>
      </footer>
    </>
  );
}

export default App;
