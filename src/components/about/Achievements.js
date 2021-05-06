import React from 'react';
import LinkIcon from '@material-ui/icons/Link';

const Achievements = () => {
    return (
        <div className="Achievements-div" data-aos="fade-in" data-aos-duration="2000">
            <div className="Achievements-imfo">
                <div className="points">
                    <h4>6 stars on <span>hackerrank</span> (Problem Solving)</h4>
                    <h4>4 stars on <span>Codechef</span></h4>
                    <h4>Pupil (1220) at <span>codeforces</span></h4>
                    <h4>React js certificattion <span>Hackerrank</span> <a href="https://www.hackerrank.com/certificates/b945af932aa0" target="_blank" rel="noreferrer"><LinkIcon className="certificate-links"/></a></h4>
                    <h4>Google Hash Code 2021 (qualification certificate) <a href="https://drive.google.com/file/d/1izOZv_6DJmoROYdisQ6Q9UhzCMw2KDON/view" target="_blank" rel="noreferrer"><LinkIcon className="certificate-links"/></a></h4>
            </div>
        </div>
        </div>
    );
}

export default Achievements;
