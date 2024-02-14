import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClues } from '../contexts/ClueContexts';

const Puzzle1 = () => {
  const { addClue } = useClues();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const checkAnswer = () => {
    if (inputValue.toLowerCase() === 'connection') {
      addClue('A strong connection is key to our hearts.');
      navigate('/puzzle2');
    } else {
      alert('Hmm, seems like there’s a disconnect. Think about what binds us together.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 px-4 py-8">
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">Puzzle 1: The Key to Connection</h2>
        <p className="mb-8 text-gray-700 text-lg leading-relaxed w-full">
          Welcome to the first puzzle of our journey into the world of Code & Hearts! As a Solution Architect at Klaviyo, I've learned that in both love and technology, establishing a strong connection is paramount. Imagine you're crafting a message to send across the vast network of the internet, reaching out to touch another's heart. What's the essential element that ensures our messages find their way?
        </p>
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input bg-pink-50 border-pink-300 text-gray-700 mb-6 px-4 py-2 border rounded w-full max-w-md"
            placeholder="Enter your answer..."
          />
          <button onClick={checkAnswer} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition duration-200 ease-in-out transform hover:-translate-y-1">
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );  
};

export default Puzzle1;
