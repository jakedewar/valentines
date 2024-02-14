import React from 'react';
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const navigate = useNavigate();

  const startQuest = () => {
    navigate('/puzzle1');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 px-4 py-8">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">💻❤️ Code & Hearts: A Valentine's Escape Room Experience 💻❤️</h1>
        <p className="mb-8 text-gray-700">
          Welcome, Toots, to a Valentine's Day adventure crafted just for you. Imagine a world where love meets logic, and heartfelt emotions intertwine with the binary of code. This isn't just any escape room; it's a gateway into my world, a playful exploration of what I do every day, translated into puzzles and challenges for you to solve.
        </p>
        <p className="mb-8 text-gray-700">
          Embark on this unique journey, 'Code & Hearts,' where each puzzle is a glimpse into the life of a Solution Architect. From deciphering codes to unraveling how systems integrate, you'll get a taste of the challenges and triumphs that fill my days. But worry not, for this quest is designed with love, making complex concepts accessible and fun, ensuring a splendid time.
        </p>
        <p className="mb-8 text-gray-700">
          Are you ready to dive into this virtual-Valentine's experience? To not just learn about my world, but to become an integral part of it for a day?
        </p>
        <p className="mb-8 text-gray-700">
          Click 'Start the Adventure' and let's unlock the mysteries of technology and love, one puzzle at a time. Together, we'll navigate this labyrinth, emerging closer and more connected than ever before.
        </p>
        <button onClick={startQuest} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1">
          Start the Adventure
        </button>
      </div>
    </div>
  );  
  
};

export default Introduction;
