import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoveLetterPage = () => {
  const navigate = useNavigate();

  const handleAcceptProposal = () => {
    // Redirect to the landing page
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-8">
      <div className="max-w-lg p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Toots,</h1>
        <p className="mb-6 text-gray-700">
          Congratulations on conquering the Solutions Architects escape room. On Thursday, I'll proudly sing your praises to our internal team. Your expertise would be a tremendous asset.
        </p>
        <p className="mb-6 text-gray-700">
          Much like the intricate workings of code and the internet, I'm continuously awed by your complexity. Your determination, your resilience, and your ability to craft the perfect pasta dish – it all leaves me in awe. I know it's a recipe I'll cherish, just like I cherish you, for as long as I live.
        </p>
        <p className="mb-6 text-gray-700">
          Every day with you feels like an adventure, and I eagerly anticipate the adventures that lie ahead.
        </p>
        <p className="mb-6 text-gray-700">
          On this Valentine’s Day, will you be my Valentine?
        </p>
        <p className="text-gray-700 italic">With all my love,</p>
        <p className="text-gray-700 italic">Jake</p>
        <button onClick={handleAcceptProposal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
          Accept Proposal
        </button>
      </div>
    </div>
  );
};

export default LoveLetterPage;
