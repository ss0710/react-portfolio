import React from 'react';
import Profile from '../../assets/images/profile.jfif';

const SideBar = () => {
    return(
        <div className="navBar">
            <div className="avatar-div">
                <img src={Profile} alt="profile-photo" />
            </div>
        </div>
    );
}

export default SideBar;