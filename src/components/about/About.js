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
        <div>
            <Title title={"About Me"} span={"About me"} />
            <ImageDiv />
            <Title title={"Education"} span={"Education"} />
            <Education />
            <Title title={"Position Of Responsibility"} span={"Position Of Responsibility"} />
            <Position />
            <Title title={"My Skills"} span={"My Skills"} />
            <div className="SkillsContainer">
                <Skills skill={'c++'} progress={'90%'} width={'90%'} />
                <Skills skill={'DS and Algo'} progress={'80%'} width={'80%'} />
                <Skills skill={'HTML'} progress={'80%'} width={'80%'} />
                <Skills skill={'Css'} progress={'70%'} width={'70%'} />
                <Skills skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <Skills skill={'React Js'} progress={'70%'} width={'70%'} />   
                <Skills skill={'Web Design'} progress={'80%'} width={'80%'} />
                <Skills skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>
            <Title title={"Achievements"} span={"Achievements"} />
            <Achievements />
            <Title title={"Profiles"} span={"Profiles"} />
            <Profile />
        </div>
    );
}

export default About;