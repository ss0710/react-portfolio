import React from 'react';
import SideBar from './components/sidebar/SideBar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainBody">
      mainbody
      </div>
    </div>
  );
}

export default App;
