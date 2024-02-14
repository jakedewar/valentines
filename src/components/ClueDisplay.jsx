import React from 'react';
import { useClues } from '../contexts/ClueContexts';

const ClueDisplay = () => {
  const { clues } = useClues();

  return (
    <div className="bg-pink-100 shadow-lg rounded-lg p-6 m-4 max-w-sm">
      <h3 className="text-2xl font-bold text-pink-600 mb-4">Collected Clues</h3>
      {clues.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700">
          {clues.map((clue, index) => (
            <li key={index} className="mb-2">
              {clue}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">No clues collected yet. Let's solve some puzzles!</p>
      )}
    </div>
  );
};

export default ClueDisplay;
