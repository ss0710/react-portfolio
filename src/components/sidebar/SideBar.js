import React from 'react';
import Profile from '../../assets/images/profile.jfif';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return(
        <div className="sideBar">
            <div className="side">

            <div className="avatar-div">
                <img src={Profile} alt="profile-photo" />
            </div>

                <ul className="sideBar-items">
                    <li className="items">
                        <div className="link-container">
                        <NavLink to='/' exact activeClassName="active" >
                            <HomeIcon/> Home
                        </NavLink>
                        </div>
                    </li>
                    <li className="items">
                       <NavLink to='/projects' exact activeClassName="active" >
                           <AssignmentTurnedInIcon /> Projects
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/about' exact activeClassName="active" >
                            <AccountBoxIcon /> About
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/contact' exact activeClassName="active" >
                            <ContactMailIcon /> Contact
                        </NavLink>
                    </li>
                </ul>

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