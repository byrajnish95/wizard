import React from "react";
import { useState } from "react";



const App = () => {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX + 'px', y: clientY + 'px' });
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); 

  return (
    <div className="wizard" style={{ left: position.x, top: position.y }}></div>
  );
};

export default App;
