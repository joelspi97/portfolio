import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/configParticles';
import { tsParticles } from "tsparticles-engine";
import { loadFull } from 'tsparticles';
import AnimatedDiv from './AnimatedDiv';
import NavigationBar from './NavigationBar';
import '../scss/components/header.scss';
import profilePicture from '../assets/profile-picture.jpg';

function Header() {
  tsParticles.load("tsparticles", particlesConfig);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  let enableAnimations = true;
  function pauseAnimations() {
    const animations = tsParticles.domItem(0);

    if (!enableAnimations) {
      animations.play();
    } else {
      animations.pause();
    }

    enableAnimations = !enableAnimations;
  }

  return (
    <header className="header section">
      <Particles
        className="animated-background"
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <AnimatedDiv elementClassName="header__menu">
        <button className="animation-btn portfolio-btn focusable" type="button" onClick={pauseAnimations}>Pause animation</button>
        <NavigationBar />
      </AnimatedDiv>
      <div className="header__heading-container center-content">
        <AnimatedDiv>
          <h1 className="section-heading">
            <span>Joel Spinelli</span>
            <br />
            <span>Full Stack Developer</span>
          </h1>
        </AnimatedDiv>
        <AnimatedDiv>
          <img src={profilePicture} alt="Joel Spinelli, front-end developer, coding in his laptop." />
        </AnimatedDiv>
      </div>
    </header>
  );
}

export default Header;
