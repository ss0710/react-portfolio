import React, { useState, useEffect } from 'react';
import Animation from './assets/gif/animation.gif';
import Routes from './components/routes/Routes';
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
        <img src={Animation} alt="loader"/>
        </div>

        :

        <Routes />
        
      }
    </div>
  );
}

export default App;
