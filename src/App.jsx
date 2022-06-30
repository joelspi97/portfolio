import React from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
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
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>Made by Joel Spinelli with <span aria-label="love">❤️️</span> and <span aria-label="porcine power">🐷</span></p>
      </footer>
    </>
  );
}

export default App;
