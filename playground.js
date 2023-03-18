const canvas = document.getElementById("attentionCheckCanvas");
const ctx = canvas.getContext("2d");

// Define the Ball class
class Ball {
  constructor(pos, vel, radius, color) {
    this.pos = pos; // vector for position
    this.vel = vel; // vector for velocity
    this.radius = radius;
    this.color = color;
  }

  // Helper function to draw the ball on the canvas
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Define the collision detection function
function detectCollision(ball1, ball2) {
  const dx = ball1.pos.x - ball2.pos.x;
  const dy = ball1.pos.y - ball2.pos.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < ball1.radius + ball2.radius;
}

// Define the collision resolution function
function resolveCollision(ball1, ball2) {
  const dx = ball2.pos.x - ball1.pos.x;
  const dy = ball2.pos.y - ball1.pos.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < ball1.radius + ball2.radius) {
    // Calculate the angle of collision
    const angle = Math.atan2(dy, dx);

    // Rotate ball1's velocity
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attention Check 1</title>
  <link rel="stylesheet" href="styles.css">
  <script src="data_manager.js"></script>
  <script src="ball.js"></script>
  <script src="common_functions.js"></script>
</head>
<body>
  <h1>Attention Check 1</h1>
  <div class="attention-check">
    <canvas id="attentionCheckCanvas" width="640" height="360"></canvas>
  </div>
  
  <script>
      
    const vel1 = {
      x: ball1.vel.x * Math.cos(angle) + ball1.vel.y * Math.sin(angle),
      y: ball1.vel.y * Math.cos(angle) - ball1.vel.x * Math.sin(angle),
    };

    // Rotate ball2's velocity
    const vel2 = {
      x: ball2.vel.x * Math.cos(angle) + ball2.vel.y * Math.sin(angle),
      y: ball2.vel.y * Math.cos(angle) - ball2.vel.x * Math.sin(angle),
    };

    // Calculate the new velocities
    const newVel1 = {
      x: ((ball1.radius - ball2.radius) * vel1.x + 2 * ball2.radius * vel2.x) / (ball1.radius + ball2.radius),
      y: vel1.y,
    };
    const newVel2 = {
      x: ((ball2.radius - ball1.radius) * vel2.x + 2 * ball1.radius * vel1.x) / (ball1.radius + ball2.radius),
      y: vel2.y,
    };

    // Rotate the velocities back
    ball1.vel.x = newVel1.x * Math.cos(angle) - newVel1.y * Math.sin(angle);
    ball1.vel.y = newVel1.y * Math.cos(angle) + newVel1.x * Math.sin(angle);
    ball2.vel.x = newVel2.x * Math.cos(angle) - newVel2.y * Math.sin(angle);
    ball2.vel.y = newVel2.y * Math.cos(angle) + newVel2.x * Math.sin(angle);

    // Separate the balls to avoid overlap
    const overlap = ball1.radius + ball2.radius - distance;
    const separationVector = { x: dx / distance, y: dy / distance };
    ball1.pos.x -= overlap * separationVector.x;
    ball1.pos.y -= overlap * separationVector.y;
    ball2.pos.x += overlap * separationVector.x;
    ball2.pos.y += overlap * separationVector.y;
  }
  </script>

  <div class="instructions">
<p>Press the spacebar when two balls collide</p>
  </div>
<button id="proceedToMainTrials2">Proceed to Main Trials 2</button>
  <div class="progress-bar-container">
    <div id="progressBar" class="progress-bar"></div>
  </div>
</body>
</html>
