const mySketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(0);
    };
  
    p.draw = () => {
      p.fill(255);
      p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
  };
  
  export default mySketch;