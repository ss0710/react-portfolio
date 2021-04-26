import React, { useState, useEffect } from 'react';
import SideBar from './components/sidebar/SideBar';
import HomePage from './components/home/HomePage';
import {Route , Switch} from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        <div className="animation-div">
        <img src="https://miro.medium.com/max/875/1*i1yv42RrOYhvw7U2MM4qCg.gif" alt="loader"/>
        </div>

        :

        <div>
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
      }
    </div>
  );
}

export default App;
