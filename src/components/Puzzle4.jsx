import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Puzzle4 = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [hintRequested, setHintRequested] = useState(false);

  const verifyCode = () => {
    // Example final code "214" could be derived from the HTTP status code for "Success" (200 series),
    // the number of methods covered in Puzzle 2 (4), and the number of status codes in Puzzle 3 (4),
    // hence, "214" for February 14th, Valentine's Day.
    if (code === '214') {
      // Navigate to a special Valentine's Day completion screen or directly propose.
      navigate('/loveletterpage');
    } else {
      alert('The code seems incorrect. Remember, the key lies within our journey of puzzles.');
    }
  };

  const requestHint = () => {
    // Set hintRequested to true to indicate that the player has requested a hint
    setHintRequested(true);
    // You can add logic here to display a hint to the player
    // For example, show a modal with a hint message
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-4">The Final Code</h2>
        <p className="mb-4">Enter the final code to unlock the message:</p>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mb-4 px-4 py-2 border rounded"
          placeholder="Code"
        />
        {hintRequested && (
          <div className="mb-4">
            {/* Display hint here */}
            <p className="text-sm text-gray-600">Hint: Think about significant dates related to the puzzles.</p>
          </div>
        )}
        <div className="flex">
          <button onClick={verifyCode} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
            Unlock
          </button>
          <button onClick={requestHint} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Need a Hint?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Puzzle4;
