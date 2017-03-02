var redValue = 0;
var greenValue = 0;
var blueValue = 0;

function setup() {
    createCanvas(1200, 700);
    background(255);
    fill(0);
}

function draw() {

    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);
    
    translate(redValue,greenValue,[blueValue]);
    
    stroke(redValue, greenValue, blueValue);
    strokeWeight(6);
    
    rotate(PI/9.0);
    
    if (mouseIsPressed == false) {
        triangle(mouseX, mouseY, height / 10, height / 20, width /10, width/ 20);
    } else {
        background(0);
        fill(255);
        

        
        
    }
}
