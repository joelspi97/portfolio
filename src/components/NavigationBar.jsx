import React, { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';
import '../scss/components/navigation-bar.scss';

function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  
  const windowWidth = useWindowWidth();
  const bodyElement = document.body;
  const hamburgerButton = useRef(null);
  const focusableElements = Array.from(document.querySelectorAll('.focusable'));

  useEffect(() => {
    if (windowWidth >= 600) {
      setOpenMenu(true);
      setBackdrop(false);
      bodyElement.classList.remove('no-scroll');
    } else {
      setOpenMenu(false);
    }
    // eslint-disable-next-line
  }, [windowWidth]);
  
  function handleButton() {
    window.scrollTo(0, 0);
    setOpenMenu(prevValue => !prevValue);
    setBackdrop(prevValue => !prevValue);
    bodyElement.classList.toggle('no-scroll');
  }
  
  function closeMenu(e) {
    if (!backdrop) return;

    if (e.target.className === 'backdrop' | e.target.className === 'portfolio-btn') {
      setOpenMenu(false);
      setBackdrop(false);
      bodyElement.classList.remove('no-scroll');
    }
  }
  
  function closeMenuWithKeyboard(e) {
    if (e.key === 'Escape') {
      setOpenMenu(false);
      setBackdrop(false);
      bodyElement.classList.remove('no-scroll');
    }
  }

  useEffect(() => {
    if (backdrop) {
      focusableElements.forEach(e => {
        e.setAttribute('tabindex', -1);
      })
    } else {
      focusableElements.forEach(e => {
        e.removeAttribute('tabindex');
      })
    }

    document.addEventListener('click', closeMenu);
    document.addEventListener('keyup', closeMenuWithKeyboard);

    return () => {
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', closeMenuWithKeyboard);
    }
    // eslint-disable-next-line
  }, [backdrop]);

  return (
    <nav className="nav">
      <button 
        className="hamburger-menu focusable" 
        onClick={handleButton} 
        aria-expanded={backdrop}
        type="button"
        ref={hamburgerButton}
      >
          <span className="sr-only">Open navigation menu.</span>
          <span className="hamburger-icon"></span>
      </button>
      { backdrop && <div className="backdrop"></div> }
      {
        openMenu && (
          <div className="nav__link-wrapper">
            {
              backdrop && (
                <button 
                  className="close-btn" 
                  type="button" 
                  onClick={
                    (e) => { handleButton(); hamburgerButton.current.focus(); }}
                >
                  <span className="sr-only">Close navigation menu.</span>
                  <span className="close-icon"></span>
                </button>
              )
            }
            <a className="portfolio-btn" href="#about-me">About me</a>
            <a className="portfolio-btn" href="#projects">Projects</a>
            <a className="portfolio-btn" href="#contact">Contact</a>
          </div>
        )
      }

    </nav>
  );
}

export default NavigationBar;
