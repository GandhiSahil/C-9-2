var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;
var box

function setup() {
  createCanvas(400, 400);  

   //box=createSprite(200,200,30,30)
   background(50);

}

function draw() {
  

  if (keyIsDown(LEFT_ARROW)) { background("green"); }
  if (keyIsDown(RIGHT_ARROW)) { background("red"); }
  if (keyIsDown(UP_ARROW)) { background("blue"); }
  if (keyIsDown(DOWN_ARROW)) { background("orange"); }
  
}

