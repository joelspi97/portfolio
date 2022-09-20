import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import '../scss/components/contact.scss';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-decoration"></div>
      <div className="section-decoration section-decoration--left"></div>
      <div className="section-decoration section-decoration--right"></div>
        <AnimatedDiv>
          <h1 className="section-heading">Get in touch!</h1>
        </AnimatedDiv>
        <AnimatedDiv elementClassName="contact__form-wrapper">
          <form className="contact__form">
            <label htmlFor="name">Name</label>
            <input 
              className="portfolio-input"
              id="name"
              name="name" 
              placeholder="e.g. Jhon Doe"
              type="text" 
              required
            />
            
            <label htmlFor="email">Email</label>
            <input 
              className="portfolio-input"
              id="email"
              name="email"
              placeholder="example@email.com" 
              type="email" 
              required
            />
            
            <label htmlFor="subject">Subject</label>
            <input 
              className="portfolio-input"
              id="subject"
              name="subject" 
              type="text" 
              required
            />
            
            <label htmlFor="body">Message</label>
            <textarea
              className="portfolio-input" 
              id="body"
              name="body" 
              rows={9}
              required
            ></textarea>

            <button className="portfolio-btn" type="submit">Send message</button>
          </form>
        </AnimatedDiv>
        <AnimatedDiv elementClassName="contact__links-container">
            <a 
              href="https://www.linkedin.com/in/joel-spinelli-497a1418b/" 
              title="Visit my LinkedIn profile" 
              target="_blank"
              rel="noreferrer" 
              aria-label="Visit my LinkedIn profile."
              className="focusable"
            >
              <span className="linkedin-icon"></span>
              LinkedIn
            </a>
            <a 
              href="https://github.com/joelspi97" 
              title="Visit my Github profile" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Visit my GitHub profile."
              className="focusable"
            >
              <span className="github-icon"></span>
              GitHub
            </a>
            <a 
              href="mailto:joelspi97@gmail.com" 
              title="Send me an email" 
              rel="noreferrer"
              className="focusable"
            >
                <span className="mail-icon"></span>
                Send me an email!
            </a>
        </AnimatedDiv>
    </section>
  );
}

export default Contact;
