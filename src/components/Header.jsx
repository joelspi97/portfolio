import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/configParticles';
import { tsParticles } from "tsparticles-engine";
import { loadFull } from 'tsparticles';
import AnimatedDiv from './AnimatedDiv';
import '../scss/components/header.scss';

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
            <AnimatedDiv elementClassName="header__wrapper">
                <label htmlFor="toggle">
                    <nav className="menu-btn" tabIndex="0" aria-label="Open menu">
                        <div className="menu-btn__burger"></div>
                    </nav>
                </label>
                <input type="checkbox" id="toggle" />
                <div className="menu">
                    <button className="nav-link" type="button" onClick={pauseAnimations}>Pause animation</button>
                    <nav>
                        <a className="nav-link" href="#about-me">About me</a>
                        <a className="nav-link" href="#projects">Projects</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </nav>
                </div>
            </AnimatedDiv>
            <AnimatedDiv elementClassName="header__heading-container center-content">
                <h1 className="section-heading"><span>Front-end development</span> &amp; <span>Web Accessibility</span></h1>
            </AnimatedDiv>
        </header>
    );
}

export default Header;
