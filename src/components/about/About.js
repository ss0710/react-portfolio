import React from 'react';
import Title from './Title';
import ImageDiv from './ImageDiv';
import Skills from './Skills';
import Education from './Education';
import Achievements from './Achievements';
import Position from './Position';
import Profile from './Profile';

const About  = () => {
    return(
        <div data-aos="slide-right" data-aos-duration="2000">
            <Title title={"About Me"} span={"About me"} />
            <ImageDiv />
            <Title title={"Education"} span={"Education"} />
            <Education />
            <Title title={"Position Of Responsibility"} span={"Position Of Responsibility"} />
            <Position />
            <Title title={"My Skills"} span={"My Skills"} />
            <div className="SkillsContainer" data-aos="fade-in" data-aos-duration="2000">
                <Skills skill={'c++'} progress={'90%'} width={'90%'} />
                <Skills skill={'DS and Algo'} progress={'80%'} width={'80%'} />
                <Skills skill={'HTML'} progress={'80%'} width={'80%'} />
                <Skills skill={'Css'} progress={'70%'} width={'70%'} />
                <Skills skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <Skills skill={'React Js'} progress={'70%'} width={'70%'} />   
                <Skills skill={'Web Design'} progress={'80%'} width={'80%'} />
                <Skills skill={'Redux'} progress={'56%'} width={'56%'} />
            </div>
            <Title title={"Achievements"} span={"Achievements"} />
            <Achievements />
            <Title title={"Profiles"} span={"Profiles"} />
            <Profile />
            <Title title={"Funt Fact"} span={"Fun Fact"} />
            <div className="fun-fact-div" data-aos="fade-in" data-aos-duration="2000">
                <img src="https://media.giphy.com/media/m6OomwWCojfS8/giphy.gif" alt="min" />
                <h4>I love watching movies and web series</h4>
            </div>
        </div>
    );
}

export default About;