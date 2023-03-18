// BALL ANIMATIONS CODE //

class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.dx = -this.dx;
    }

    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.dy = -this.dy;
    }
  }
}

function detectCollision(ball1, ball2) {
  const dx = ball1.x - ball2.x;
  const dy = ball1.y - ball2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < ball1.radius + ball2.radius;
}

const ball1 = new Ball(100, 100, 20, 2, 3, "red");
const ball2 = new Ball(200, 200, 20, -2, -3, "blue");
const ball3 = new Ball(300, 150, 20, 3, 2, "green");
const balls = [ball1, ball2, ball3];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      if (detectCollision(balls[i], balls[j])) {
        // Handle collision logic here
        console.log("Collision detected");
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();
