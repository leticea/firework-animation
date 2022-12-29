const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

let gravity = -0.1;

let fireworks = [];
let subFireworks = [];

class Firework {
  constructor(x, y, radius, velocityX, velocityY, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
  }

  update() {

  }

  draw() {
    
  }
}
