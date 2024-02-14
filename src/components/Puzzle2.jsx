import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClues } from '../contexts/ClueContexts';

const Puzzle2 = () => {
  const { addClue } = useClues();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    get: "",
    post: "",
    put: "",
    delete: ""
  });

  const isCorrect = () => {
    return answers.get === "retrieve data" &&
           answers.post === "submit data" &&
           answers.put === "update data" &&
           answers.delete === "remove data";
  };

  const handleSubmit = () => {
    if (isCorrect()) {
      addClue('Imagine the most heartfelt day of the year. What numbers make it unforgettable?');
      navigate('/puzzle3'); // Navigate to the completion or next puzzle
    } else {
      alert('Looks like some matches are not quite right. Remember, each method has a specific purpose.');
    }
  };

  const handleSelectChange = (method, event) => {
    setAnswers({...answers, [method]: event.target.value});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 px-4 py-8">
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">Puzzle 2: Mastering HTTP Methods</h2>
        <p className="mb-8 text-gray-700 text-lg leading-relaxed">
          Welcome to the world of HTTP methods, a cornerstone of my work as a Solution Architect at Klaviyo! As a Solution Architect, I design systems and applications that communicate over the internet, making HTTP methods fundamental to our work. In this puzzle, match each HTTP method to its correct purpose and unlock the door to deeper understanding.
        </p>
        <div className="mb-4">
          {Object.keys(answers).map((method) => (
            <div key={method} className="mb-2">
              <label className="mr-2">{method.toUpperCase()}:</label>
              <select value={answers[method]} onChange={(e) => handleSelectChange(method, e)} className="border rounded py-2 px-4">
                <option value="">Select purpose</option>
                <option value="retrieve data">Retrieve data</option>
                <option value="submit data">Submit data</option>
                <option value="update data">Update data</option>
                <option value="remove data">Remove data</option>
              </select>
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded">
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default Puzzle2;
