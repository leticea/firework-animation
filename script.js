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
};

let animate = () => {
  requestAnimationFrame(animate)
  update()
  draw()
};

let colors = ["Blue", "Orange", "Red", "Purple", "Green"];
let initializeCount = 0;
let maximumInitialize = 1;

let initDelay = 500 // ms;
let fireworkRadius = 5;
let particleCount = 20;
let speedMultiplier = 7;

let update = () => {
  canvasContext.fillStyle = "rgba(0, 0, 0, 0.5)"; // this will give tail effect
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  if (initializeCount < maximumInitialize) {

  }
  
  fireworks.forEach((firework, i) => {
    if (firework.opacity <= 0.1) {


    } else {

    }
  });
};

let draw = () => {

};


