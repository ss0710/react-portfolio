import React from 'react';
import LinkIcon from '@material-ui/icons/Link';

const Achievements = () => {
    return (
        <div className="Achievements-div">
            <div className="Achievements-imfo">
                <div className="points">
                    <h4>6 stars on <span>hackerrank</span> (Problem Solving)</h4>
                    <h4>4 stars on <span>Codechef</span></h4>
                    <h4>Pupil (1220) at <span>codeforces</span></h4>
                    <h4>React js certificattion <span>Hackerrank</span> <LinkIcon className="certificate-links"/></h4>
                    <h4>Google Hash Code 2021 (qualification certificate) <LinkIcon className="certificate-links"/></h4>
            </div>
        </div>
        </div>
    );
}

export default Achievements;
