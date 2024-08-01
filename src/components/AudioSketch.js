import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';

function AudioSketch({ audioFile }) {
  const [song, setSong] = useState(null);
  const [analyzer, setAnalyzer] = useState(null);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);

    // Load the sound file
    const sound = p5.loadSound(audioFile, () => {
      console.log('Sound loaded successfully');
      setSong(sound);
      const amplitude = new p5.Amplitude();
      amplitude.setInput(sound);
      setAnalyzer(amplitude);
      song.play();
    }, () => {
      console.log('Failed to load sound');
    });
  };

  const draw = (p5) => {
    p5.background(255, 120, 20);

    if (analyzer) {
      const vol = analyzer.getLevel();
      p5.ellipse(p5.width / 2, p5.height / 2, 200 + vol * 2000, 200 + vol * 2000);
    }
  };

  const handlePlay = () => {
    if (song) {
      song.play();
    }
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (song) {
        song.stop();
      }
    };
  }, [song]);

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <button onClick={handlePlay} className="mt-4 p-2 bg-blue-500 text-white rounded">Play Sound</button>
    </div>
  );
}

export default AudioSketch;
