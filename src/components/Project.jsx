import React, { useState } from 'react';
import '../scss/components/project.scss';

function Project(props) {
    const { name,
            stack,
            description,
            iconClassName,
            route,
            children } = props;

    const [showMore, setShowMore] = useState(false);

    return (
        <article className="project">
            <div className="project__heading-wrapper">
                <span className={iconClassName}></span>
                <h2>{name}</h2>
            </div>
            <div className="project__stack">
                {
                    stack.map((language, index) => {
                        if (index === 0) {
                            return <span key={ language }>{ language } |</span>
                        } else if (stack.length > index + 1) {
                            return <span key={ language }>{" "}{ language } |</span>
                        } else {
                            return <span key={ language }> { language }</span>
                        }
                    })
                }
            </div>

            <p>{ description }</p>
            
            { showMore && <div className="project__show-more">{children}</div> }

            {
                children && (
                    <button
                        className="project__button project__button--show-more" 
                        onClick={() => setShowMore(prevValue => !prevValue)}
                    >
                        { showMore ? 'Show less' : 'Show more' }
                    </button>
                )
            }

            <a className="project__button" href="../projects/batata-bit/index.html" target="_blank" aria-label="Go to the Batata Bit project webpage">View project <span className="arrow-icon"></span></a>
        </article>
    );
}

export default Project;
