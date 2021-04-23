import React from 'react';
import Profile from '../../assets/images/profile.jfif';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return(
        <div className="navBar">
            <div className="avatar-div">
                <img src={Profile} alt="profile-photo" />
            </div>
            <div className="side">
                <div className="sideBar=items">
                    <li className="items">
                        <NavLink to='/' exact activeClassName="active" >
                            Home
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/' exact activeClassName="active" >
                            About
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/' exact activeClassName="active" >
                            Projects
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/' exact activeClassName="active" >
                            Contact
                        </NavLink>
                    </li>
                    <footer className="footer">
                        <p>
                            @2021 SudheerSingh
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default SideBar;