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
                <img src={Profile} alt="profile" />
            </div>

                <ul className="sideBar-items">
                    <li className="items">
                        <div className="link-container">
                        <NavLink to='/' exact activeClassName="active" >
                            <HomeIcon className="Icons" /> Home
                        </NavLink>
                        </div>
                    </li>
                    <li className="items">
                       <NavLink to='/projects' exact activeClassName="active" >
                           <AssignmentTurnedInIcon className="Icons" /> Projects
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/about' exact activeClassName="active" >
                            <AccountBoxIcon className="Icons" /> About
                        </NavLink>
                    </li>
                    <li className="items">
                        <NavLink to='/contact' exact activeClassName="active" >
                            <ContactMailIcon className="Icons" /> Contact
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