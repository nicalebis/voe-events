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

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
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

function animate(ctx) {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ballArray.forEach((ball) => {
    ball.update(ctx);
    ball.draw(ctx);
  });

  requestAnimationFrame(() => animate(ctx));
}

init();
animate();
