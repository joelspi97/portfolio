import React from 'react';
import '../scss/components/header.scss';

function Header() {
  return (
    <header className="header section">
        <nav className="header__nav">
            <label htmlFor="toggle">
                <div className="menu-btn" tabIndex="0" aria-label="Open menu">
                    <div className="menu-btn__burger"></div>
                </div>
            </label>
            <input type="checkbox" id="toggle" />
            <div className="menu">
                <a className="nav-link" href="#about-me">About me</a>
                <a className="nav-link" href="#projects">Projects</a>
                <a className="nav-link" href="#contact">Contact</a>
            </div>
        </nav>
        <div className="header__image-container center-content">
            <img src="./assets/self-portrait-mobile.jpg" alt="" />
        </div>
        <div className="header__text-container center-content">
            <h1 className="section-heading">Front-end development</h1>
            <p>My goal is to create websites that look as well as they work</p>
        </div>
    </header>
  );
}

export default Header;
