import React, { useEffect, useState } from 'react';
import AnimatedArticle from './AnimatedArticle';
import '../scss/components/project.scss';

function Project(props) {
    const { name,
            stack,
            description,
            iconClassName,
            route,
            left,
            children } = props;

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
                <h3 className="sr-only">Technologies used in the { name } project:</h3>
                <ul className="project__stack">
                    {
                        stack.map((language, index) => {
                            if (index === 0) {
                                return <li key={ language }>{ language } |</li>
                            } else if (stack.length > index + 1) {
                                return <li key={ language }>{" "}{ language } |</li>
                            } else {
                                return <li key={ language }> { language }</li>
                            }
                        })
                    }
                </ul>
            </section>

            <p>{ description }</p>
            
            { 
                showMore && (
                    <section className="project__show-more">
                        <span className="sr-only" aria-live="assertive" aria-hidden={hideInformation}>Extra information about the { name } project has been displayed above the button.</span>
                        <h3 aria-label={`The ${ name } project features:`}>This project features:</h3>
                        {children}
                    </section>
                ) 
            }

            {
                children && (
                    <button
                        aria-label={ showMore ? `Show less information about the ${ name } project.` : `Read more information about the ${ name } project.` }
                        className="project__button project__button--show-more" 
                        onClick={() => setShowMore(prevValue => !prevValue)}
                        type="button"
                    >
                        { showMore ? 'Show less' : 'Read more' }
                    </button>
                )
            }

            <a 
                className="project__button" 
                href="../projects/batata-bit/index.html" 
                target="_blank" 
                aria-label={`Go to the ${ name } project webpage.`}
            >
                View project <span className="arrow-icon"></span>
            </a>
        </AnimatedArticle>
    );
}

export default Project;
