var canvas = document.querySelector('canvas');
var faster = document.getElementById('faster');
var points = document.getElementById("points")
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function random(min, max) {
  var num = Math.random() * (max - min + 1) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;

}

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  
  ctx.fill();
}

Ball.prototype.update = function() {
  
  
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }
  
  this.x += this.velX;
  this.y += this.velY;
  
};
 
 
  var balls = [];
ballnumber = 300
while (balls.length < ballnumber) {
  var size = 12;
  var ball = new Ball(

    random(1,200),
    random(1,200),
    random(1,2),
    random(1,2),
    'rgba(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ',' + 0.8 + ')',
    random(4,5)
  );

  balls.push(ball);
}
    
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, width, height);

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();

  }

  requestAnimationFrame(loop);
}

loop()



canvas.addEventListener('mousedown', function() {
  
  
  var xcoord = event.pageX;
  var ycoord = event.pageY;
 
  var balloon = new Ball(
    xcoord,
    ycoord,
    0,
    0,
    'rgba(255, 255, 255, 0.479)',
    random(10, 15)
  );
 
   balls.push(balloon)
   
   
})