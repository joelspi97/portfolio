import React, { useEffect, useState } from 'react';
import AnimatedArticle from './AnimatedArticle';
import '../scss/components/project.scss';

function Project(props) {
  const { name,
          stack,
          description,
          iconClassName,
          demoUrl,
          repositoryUrl,
          left,
          features } = props;

  const [showMore, setShowMore] = useState(false);
  const [hideInformation, setHideInformation] = useState(false);

  useEffect(() => {
    setHideInformation(false);
    setTimeout(() => {
      setHideInformation(true);
    }, 1);
  }, [showMore]);

  return (
    <AnimatedArticle elementClassName="project" left={left}>
      <div className="project__heading-wrapper">
        <span className={iconClassName}></span>
        <h2>{name}</h2>
      </div>
      <section>
        <h3 className="sr-only">Technologies used in the {name} project:</h3>
        <ul className="project__stack">
          {
            stack.map((language, index) => {
              if (index === 0) {
                return <li key={language}>{language} |</li>
              } else if (stack.length > index + 1) {
                return <li key={language}>{" "}{language} |</li>
              } else {
                return <li key={language}> {language}</li>
              }
            })
          }
        </ul>
      </section>

      <p>{description}</p>

      {
        features && (
          <>
            {
              showMore && (
                <section className="project__show-more">
                  <span className="sr-only" aria-live="assertive" aria-hidden={hideInformation}>Extra information about the {name} project has been displayed above the button.</span>
                  <h3 aria-label={`The ${name} project features:`}>This project features:</h3>
                  
                  <ol>
                    { features.map(feature => <li key={feature}>{feature}</li>)}
                  </ol>
                </section>
              )
            }

            <button
              aria-label={showMore ? `Show less information about the ${name} project.` : `Show more information about the ${name} project.`}
              className="project__button project__button--show-more focusable"
              onClick={() => setShowMore(prevValue => !prevValue)}
              type="button"
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </>
        )
      }


      <div className="project__link-wrapper">
        <a
          className="project__button project__button--repository focusable"
          href={repositoryUrl}
          target="_blank"
          aria-label={`Go to the ${name} project Github repository.`}
          title={`Visit ${name} Github repository`}
          rel="noreferrer"
        >
          View code <span className="development-icon"></span>
        </a>

        <a
          className="project__button focusable"
          href={demoUrl}
          target="_blank"
          aria-label={`Go to the ${name} project webpage.`}
          rel="noreferrer"
        >
          View project <span className="arrow-icon"></span>
        </a>
      </div>
    </AnimatedArticle>
  );
}

export default Project;
