import React, { createContext, useContext, useState, useEffect } from 'react';

const TimestampContext = createContext();

export const TimestampProvider = ({ children }) => {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());
  const [showTimestamp, setShowTimestamp] = useState(true);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  
    return (
      
    <TimestampContext.Provider value={ {timestamp, setTimestamp, showTimestamp, setShowTimestamp}  }>
      {children}
    </TimestampContext.Provider>
  );
};

export const useTimestamp = () => {
  return useContext(TimestampContext);
};
