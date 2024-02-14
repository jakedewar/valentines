// ClueContext.js
import React, { createContext, useContext, useState } from 'react';

const ClueContext = createContext();

export const useClues = () => useContext(ClueContext);

export const ClueProvider = ({ children }) => {
  const [clues, setClues] = useState([]);

  const addClue = (clue) => {
    setClues((prevClues) => [...prevClues, clue]);
  };

  return (
    <ClueContext.Provider value={{ clues, addClue }}>
      {children}
    </ClueContext.Provider>
  );
};
