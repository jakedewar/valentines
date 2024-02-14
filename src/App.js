import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClueProvider } from './contexts/ClueContexts';
import LandingPage from './components/LandingPage';
import Puzzle1 from './components/Puzzle1';
import Puzzle2 from './components/Puzzle2';
import Puzzle3 from './components/Puzzle3';
import Puzzle4 from './components/Puzzle4';
import LoveLetterPage from './components/LoveLetterPage';
import ClueDisplay from './components/ClueDisplay';

function App() {
  return (
    <ClueProvider>
      <Router>
        <div className="min-h-screen bg-valentine-pink text-valentine-dark font-sans">
          <div className="flex flex-col md:flex-row">
            <aside className="md:w-1/4 xl:w-1/5 bg-white p-4 md:p-8 shadow-lg">
              <ClueDisplay />
            </aside>
            <main className="flex-1">
              <div className="w-full">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/puzzle1" element={<Puzzle1 />} />
                  <Route path="/puzzle2" element={<Puzzle2 />} />
                  <Route path="/puzzle3" element={<Puzzle3 />} />
                  <Route path="/puzzle4" element={<Puzzle4 />} />
                  <Route path="/loveletterpage" element={<LoveLetterPage />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </Router>
    </ClueProvider>
  );
}

export default App;
