import React from 'react';
import SideBar from './components/sidebar/SideBar';
import HomePage from './components/home/HomePage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainBody">
      <HomePage />
      </div>
    </div>
  );
}

export default App;
