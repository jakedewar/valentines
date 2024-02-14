import React from 'react';
import { useNavigate } from 'react-router-dom';

const Completion = () => {
  const navigate = useNavigate();

  const restartQuest = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Congratulations!</h1>
      <p className="mb-8">You have successfully navigated the puzzles and demonstrated your mastery of API integration. Project HeartSync is now operational, thanks to your efforts.</p>
      <button onClick={restartQuest} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Restart Mission
      </button>
    </div>
  );
};

export default Completion;
