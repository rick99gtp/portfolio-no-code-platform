import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
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
      <Hero appWidth={width} />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default App;
