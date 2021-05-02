import React from 'react';
import Title from './Title';
import ImageDiv from './ImageDiv';
import Skills from './Skills';
import Education from './Education';

const About  = () => {
    return(
        <div>
            <Title title={"About Me"} span={"About me"} />
            <ImageDiv />
            <Title title={"Education"} span={"Education"} />
            <Education />
            <Title title={"My Skills"} span={"My skills"} />
            <Skills />
        </div>
    );
}

export default About;