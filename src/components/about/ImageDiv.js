import React from 'react';
import SudheerSingh1 from '../../assets/images/sudheerSingh1.jpg';

const ImageDiv = () => {
    return (
        <div className="image-div" data-aos="fade-in" data-aos-duration="2000">
            <div className="img">
                <img src={SudheerSingh1} alt="about" />
            </div>
            <div className="about-imfo">
                <h4>I am <span> Sudheer Singh </span></h4>
                <p>I was born in 2000. I am persuing BTech from AKGEC (Computer Science and Information Technology). 
                I’ve mostly worked with C, C++ and Web Development languages such as HTML,CSS and JavaScript Frameworks.I like building new stuff and work with other people.</p>
                <button>Download Resume</button>
                <div className="about-details"> 
                    
                </div>
            </div>
        </div>
    )
}

export default ImageDiv;
