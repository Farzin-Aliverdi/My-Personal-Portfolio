import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = ({ sketch }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const canvas = new p5(sketch, sketchRef.current);
    return () => canvas.remove();
  }, [sketch]);

  return <div ref={sketchRef}></div>;
};

export default P5Wrapper;