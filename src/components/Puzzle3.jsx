import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClues } from '../contexts/ClueContexts';

const Puzzle3 = () => {
  const navigate = useNavigate();
  const { addClue } = useClues();
  const [answers, setAnswers] = useState({
    '200': '',
    '404': '',
    '500': '',
    '403': ''
  });

  const questionBank = {
    '200': 'The request has succeeded.',
    '404': 'The server can not find the requested resource.',
    '500': 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
    '403': 'The client does not have access rights to the content.'
  };

  const handleSelectChange = (code, event) => {
    setAnswers({...answers, [code]: event.target.value});
  };

  const handleSubmit = () => {
    if (isCorrect()) {
      addClue('Think of a date filled with romance and happiness. What is its numeric significance?');
      navigate('/puzzle4'); // Navigate to the completion or the next puzzle
    } else {
      alert('Some answers are incorrect. Remember, each status code has a specific meaning.');
    }
  };

  const isCorrect = () => {
    return answers['200'] === 'Success' &&
           answers['404'] === 'Not Found' &&
           answers['500'] === 'Internal Server Error' &&
           answers['403'] === 'Forbidden';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-4">Puzzle 3: HTTP Status Codes</h2>
        <p className="mb-4">Match each HTTP status code to its meaning:</p>
        <div className="mb-4">
          {Object.keys(questionBank).map((code) => (
            <div key={code} className="mb-2">
              <label className="mr-2">{code}:</label>
              <select value={answers[code]} onChange={(e) => handleSelectChange(code, e)} className="border rounded py-2 px-4">
                <option value="">Select meaning</option>
                <option value="Success">Success</option>
                <option value="Not Found">Not Found</option>
                <option value="Internal Server Error">Internal Server Error</option>
                <option value="Forbidden">Forbidden</option>
              </select>
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Submit Answers
        </button>
        {/* Educational Content */}
        <div className="mt-4 px-4 py-4 bg-white rounded shadow text-left">
          <h3 className="text-xl font-semibold mb-2">Understanding HTTP Status Codes</h3>
          <p>Status codes are issued by a server in response to a client's request made to the server. They are grouped into five classes:</p>
          <ul className="list-disc pl-6">
            <li><strong>1xx (Informational):</strong> The request was received, continuing process.</li>
            <li><strong>2xx (Success):</strong> The request was successfully received, understood, and accepted.</li>
            <li><strong>3xx (Redirection):</strong> Further action needs to be taken in order to complete the request.</li>
            <li><strong>4xx (Client Error):</strong> The request contains bad syntax, was not found, cannot be fulfilled, <b>or</b> is otherwise forbidden.</li>
            <li><strong>5xx (Server Error):</strong> The server failed to fulfill an apparently valid request.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Puzzle3;
