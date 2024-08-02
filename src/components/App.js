import React from 'react';
//import AudioVisualizer from './components/AudioVisualizer';
import audioFile from '../assets/audio/far6.mp3'; // Ensure the path to your MP3 file is correct
import { mySketch, sketch2, dotNoise } from '../sketches';
import { P5Wrapper } from '../components';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <h1 className="text-2xl font-bold mb-4">Sketch 1</h1>
          <P5Wrapper sketch={mySketch}/>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <h1 className="text-2xl font-bold mb-4">Sketch 2</h1>
          <P5Wrapper sketch={sketch2}/>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <h1 className="text-2xl font-bold mb-4">Sketch 3</h1>
          <P5Wrapper sketch={dotNoise}/>
      </div>
    </div>
  );
};

export default App;
