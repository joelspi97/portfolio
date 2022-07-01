import React from 'react';
import '../scss/components/header.scss';
import profilePicture from '../assets/profile-picture.jpg';

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
        <div className="header__content-container center-content">
            <h1 className="section-heading">Front-end development &amp; Web Accessibility</h1>
            <img src={profilePicture} alt="" />
            {/* <h2>Joel Spinelli</h2> */}
        </div>
    </header>
  );
}

export default Header;
