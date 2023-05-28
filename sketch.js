function setup() {
    createCanvas(400, 400);
    background("#e6d021");
  }
  
  function draw() {
    push();
    translate(200, 200);
    rotate(frameCount * 1);
    fill("#646199");
    ellipse(0, 169, 190, 195);
    noStroke();
    pop();
  
    push();
    translate(200, 200);
    rotate(frameCount * 1);
    fill("#73a5a8");
    ellipse(189, 100, 165, 155);
    noStroke();
    pop();
  
    push();
    translate(200, 200);
    rotate(frameCount * 1);
    fill("#d7573b");
    ellipse(116, 50, 55, 50);
    noStroke();
    pop();
  
    push();
    translate(200, 200);
    rotate(frameCount * 1);
    fill("#e29e28");
    ellipse(210, 0, 100, 100);
    noStroke();
    pop();
  }
  