import Header from './components/Header';
import "./styles/styles.css";
import { useState, useEffect } from 'react';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };

  }, []);

  return (
    <div className="App">
      <Header appWidth={width}/>
    </div>
  );
}

export default App;
