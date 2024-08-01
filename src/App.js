import React from 'react';
//import AudioVisualizer from './components/AudioVisualizer';
import './index.css';
import audioFile from './assets/audio/far6.mp3'; // Ensure the path to your MP3 file is correct
import AudioSketch from './components/AudioSketch.js'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
          <AudioSketch audioFile={audioFile}/>
      </div>
    </div>
  );
};

export default App;
