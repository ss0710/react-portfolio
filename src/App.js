import React from 'react';
import SideBar from './components/sidebar/SideBar';
import HomePage from './components/home/HomePage';
import {Route , Switch} from 'react-router-dom';
import About from './components/about/About';
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
      </Switch>
      </div>
    </div>
  );
}

export default App;
