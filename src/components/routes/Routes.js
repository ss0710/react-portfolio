import React from 'react';
import SideBar from '../sidebar/SideBar';
import HomePage from '../home/HomePage';
import {Route , Switch} from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';

const Routes = () => {
    return(
        <div>
            <div className="sideBar">
            <SideBar />
            </div>
            <div className="mainBody">
            <div className="mainBody-content">
            <Switch>
              <Route exact path="/" component={() => <HomePage/>} />
              <Route exact path="/About" component={() => <About/> } />
              <Route exact path="/Projects" component={() => <Projects/> } />
              <Route exact path="/Contact" component={() => <Contact/> } />
            </Switch>
            </div>
        </div>
        </div>
    );
}

export default Routes;