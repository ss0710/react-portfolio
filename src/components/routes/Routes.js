import React, { useState } from 'react';
import SideBar from '../sidebar/SideBar';
import HomePage from '../home/HomePage';
import {Route , Switch} from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import PreLoader from '../loading animation/PreLoader';

const Routes = () => {
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () =>{
      setNavToggle(!navToggle)
    }

    const [loading, setLoading] = useState(false);

    const Loader = (() => {
      navClick();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    })
  
    return (
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
          <SideBar fun={Loader}/>
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
            <div className="content">
            {
              loading ? 
              <div className="Preloader-div"><PreLoader /></div>
              :
              <Switch>
                <Route exact path="/" component={() => <HomePage />} onClick={Loader} />
                <Route exact path="/About" component={() => <About /> } />
                <Route exact path="/Projects" component={() => <Projects /> } />
                <Route exact path="/Contact" component={() => <Contact /> } />
              </Switch> 
            }
            </div>
        </div>
      </div>
    )
}

export default Routes;