import React, { useState, useEffect } from 'react';
import Animation from './components/loading animation/Animation';
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
        loading ? <Animation /> : <Routes />
      }
    </div>
  );
}

export default App;
