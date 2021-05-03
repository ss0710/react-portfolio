import React from 'react';

const Skills = ({skill, progress, width}) => {
    return (
        <div className="Skills-container">
        <h5 className="skill-title">{skill}</h5>
        <div className="skill-bar">
            <p className="skill-text">{progress}</p>
            <div className="skill-progress">
                <div className="progress">
                    <div className="inner-pregress" style={{width:width}}></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skills;
