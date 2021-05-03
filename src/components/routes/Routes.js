import React from 'react';
import SideBar from '../sidebar/SideBar';
import HomePage from '../home/HomePage';
import {Route , Switch} from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import { useState } from 'react';

const Routes = () => {
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () =>{
      setNavToggle(!navToggle)
    }
  
    return (
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
          <SideBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
            <div className="content">
              <Switch>
                <Route exact path="/" component={() => <HomePage/>} />
                <Route exact path="/About" component={() => <About/> } />
                <Route exact path="/Projects" component={() => <Projects/> } />
                <Route exact path="/Contact" component={() => <Contact/> } />
              </Switch> 
            </div>
        </div>
      </div>
    )
}

export default Routes;