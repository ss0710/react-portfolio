import React from 'react';
import SideBar from './components/sidebar/SideBar';
import HomePage from './components/home/HomePage';
import {Route , Switch} from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainBody">
      <Switch>
        <Route exact path="/" component={() => <HomePage/>} />
        <Route exact path="/About" component={() => <About/> } />
        <Route exact path="/Projects" component={() => <Projects/> } />
        <Route exact path="/Contact" component={() => <Contact/> } />
      </Switch>
      </div>
    </div>
  );
}

export default App;
