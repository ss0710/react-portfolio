import React from 'react';
import Profile from '../../assets/images/profile.jfif';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return(
        <div className="sideBar">
            <div className="side">

            <div className="avatar-div">
                <img src={Profile} alt="profile-photo" />
            </div>

                <div className="sideBar-items">
                    <li className="items">
                        <NavLink to='/' exact activeClassName="active" >
                            Home
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/about' exact activeClassName="active" >
                            About
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/projects' exact activeClassName="active" >
                            Projects
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/contact' exact activeClassName="active" >
                            Contact
                        </NavLink>
                    </li>
                </div>

                <footer className="footer">
                    <p>
                        @2021 SudheerSingh
                    </p>
                </footer>

            </div>
        </div>
    );
}

export default SideBar;