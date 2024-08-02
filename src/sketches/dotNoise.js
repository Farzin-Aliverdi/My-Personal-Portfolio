import p5 from 'p5';

const dotNoise = (p) => {
    let xScale = 0.015;
    let yScale = 0.22;

    let gap = 15;
    let inc = 0.1;
    let xOff = 0;
    let yOff = 0;
    let scale = 0.009;
    let z = 0;
    let diam = 0;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(255);
      p.noStroke();
      p.fill(0);
      p.pixelDensity(1);
    };
  
    p.draw = () => {
      for (let x = 0; x < 400; x += gap) {

        for (let y = 0; y < 400; y += gap) {
            let diameter = p.noise(x, y) * gap;
            p.circle(x, y, diameter);
        } 
      }
    };
  };
  
  export default dotNoise;