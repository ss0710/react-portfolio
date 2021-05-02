import React from 'react';
import SudheerSingh from '../../assets/images/sudheerSingh.PNG';

const ImageDiv = () => {
    return (
        <div className="image-div">
            <div className="img">
                <img src={SudheerSingh} alt="about" />
            </div>
            <div className="about-imfo">
                <h4>I am <span> Sudheer Singh </span></h4>
                <p>ksjbgk ksajdbi askdvjb j jd kljasdhbv lakdjbvlkj lhdbfldkb lKDJFBLDK LKDJ LKDBFLlkjsd lkajsbfl</p>
                <button>Download Resume</button>
                <div className="about-details"> 
                    
                </div>
            </div>
        </div>
    )
}

export default ImageDiv;
