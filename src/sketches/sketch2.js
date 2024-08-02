const sketch2 = (p) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(0);
        p.strokeWeight(5);
        p.colorMode(p.HSB);
        
    };
  
    p.draw = () => {
      p.fill(0);
      p.ellipse(p.mouseX, p.mouseY, 25, 25);

    };

    p.mouseDragged = () => {
        let lineHue = p.mouseX - p.mouseY;
        p.stroke(lineHue, 90, 90);
        p.line(p.mouseX, p.mouseY);
    }
};

export default sketch2;