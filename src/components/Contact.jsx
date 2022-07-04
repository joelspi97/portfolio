import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import '../scss/components/contact.scss';
import profilePicture from '../assets/profile-picture.jpg';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-decoration"></div>
        <AnimatedDiv>
          <h1 className="section-heading">Get in touch!</h1>
        </AnimatedDiv>
        <AnimatedDiv elementClassName="contact__image-container center-content">
            <img src={profilePicture} alt="" />
        </AnimatedDiv>
        <AnimatedDiv elementClassName="contact__links-container">
            <a href="https://www.linkedin.com/in/joel-spinelli-497a1418b/" title="Visit my LinkedIn profile" target="_blank"
                rel="noreferrer" aria-label="Visit my LinkedIn profile.">
                <span className="linkedin-icon"></span>
                LinkedIn
            </a>
            <a href="https://github.com/joelspi97" title="Visit my Github profile" target="_blank" rel="noreferrer" aria-label="Visit my GitHub profile.">
                <span className="github-icon"></span>
                GitHub
            </a>
            <a href="mailto:joelspi97@gmail.com" title="Send me an email" rel="noreferrer">
                <span className="mail-icon"></span>
                Send me an email!
            </a>
        </AnimatedDiv>
    </section>
  );
}

export default Contact;
