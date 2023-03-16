// KEYBOARD HANDLING CODE //

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    const currentTime = new Date().getTime();
    console.log("Spacebar pressed at:", currentTime);

    // Record the reaction time, trial ID, and other necessary data here
    // Send the data to your server if needed
  }
});

// SERVER CODE //
// Submit the data to JATOS //

jatos.submitResultData(data)
  .then(() => {
    console.log("Data submitted successfully");
  })
  .catch((error) => {
    console.error("Error submitting data:", error);
  });



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

// INFORMED CONSENT CODE //

function proceedFromInformedConsent() {
  // Hide the informed consent section and show the next section (e.g., example)
  document.getElementById("informedConsent").style.display = "none";
  document.getElementById("example").style.display = "block";
}

document.getElementById("consentButton").addEventListener("click", function () {
  // Proceed to the next part of the experiment (e.g., example)
  proceedFromInformedConsent();
});


// TRANSTIONING BETWEEN SECTIONS CODE //

function hideSection(id) {
  const section = document.getElementById(id);
  section.classList.add('hidden');
}

function showSection(id) {
  const section = document.getElementById(id);
  section.classList.remove('hidden');
}

function goToSection(currentId, nextId) {
  hideSection(currentId);
  showSection(nextId);
}

// Example usage:
// goToSection('welcome', 'consent');


// BUTTON EVENT LISTENERS CODE //

document.getElementById('start-consent').addEventListener('click', () => {
    goToSection('welcome', 'consent');
  });
  
  document.getElementById('consent-agree').addEventListener('click', () => {
    goToSection('consent', 'example'); // Proceed to the example section
  });
  
  document.getElementById('consent-disagree').addEventListener('click', () => {
    alert('You must agree to the informed consent to participate in this study.');
  });
  
  document.getElementById('start-training').addEventListener('click', () => {
    goToSection('instructions', 'training-trials');
  });
  
  let trainingTrialCount = 0;
  const totalTrainingTrials = 3; // Adjust this value based on your experimental design
  
  document.getElementById('next-training-trial').addEventListener('click', () => {
    trainingTrialCount++;
    if (trainingTrialCount >= totalTrainingTrials) {
      document.getElementById('next-training-trial').classList.add('hidden');
      document.getElementById('start-main-trials').classList.remove('hidden');
    }
  });
  
  document.getElementById('start-main-trials').addEventListener('click', () => {
    goToSection('training-trials', 'main-trials');
  });
  
  let mainTrialCount = 0;
  const totalMainTrials = 10; // Adjust this value based on your experimental design
  
  document.getElementById('next-main-trial').addEventListener('click', () => {
    mainTrialCount++;
    if (mainTrialCount >= totalMainTrials) {
      goToSection('main-trials', 'debrief'); // Proceed to the debrief section
    }
  });

  
  document.getElementById('submit-attention-check').addEventListener('click', () => {
    // Implement the logic to check if the participant passed the attention check
    const passedAttentionCheck = true; // Replace this with the actual logic
    
    if (passedAttentionCheck) {
      goToSection('attention-check', 'debrief');
    } else {
      // You can display an error message or restart the main trials section depending on your experimental design
      goToSection('attention-check', 'main-trials');
    }
  });
  
  document.getElementById('finish-experiment').addEventListener('click', () => {
    // Implement the logic to save the participant's data and exit the experiment
    console.log('Experiment finished');
  });

  
  document.getElementById('next-main-trial').addEventListener('click', () => {
    mainTrialCount++;
    if (mainTrialCount >= totalMainTrials) {
      goToSection('main-trials', 'attention-check');
    }
  });

  document.getElementById('start-experiment').addEventListener('click', () => {
    goToSection('welcome', 'informed-consent');
  });
  
  document.getElementById('agree-consent').addEventListener('click', () => {
    goToSection('informed-consent', 'example');
  });
  
  document.getElementById('next-example').addEventListener('click', () => {
    goToSection('example', 'training-trials');
  });
  
  document.getElementById('next-training-trial').addEventListener('click', () => {
    goToSection('training-trials', 'main-trials');
  });

  document.getElementById('submit-attention-check').addEventListener('click', () => {
    // Check if the answer provided by the participant is correct
    const attentionCheckInput = document.getElementById('attention-check-input').value;
    if (attentionCheckInput.toLowerCase() === 'your_correct_color_here') {
      // Proceed to the next section if the answer is correct
      goToSection('attention-check', 'main-trials');
    } else {
      alert('Incorrect answer. Please try again.');
    }
  });
  
  document.getElementById('finish-experiment').addEventListener('click', () => {
    // Close the experiment window or redirect the participant to another page
    window.close();
  });

  
// SECTION VISIBILITY CODE //

  function goToSection(fromSectionId, toSectionId) {
    document.getElementById(fromSectionId).classList.add('hidden');
    document.getElementById(toSectionId).classList.remove('hidden');
  }
  

// LOADING EXPERIMENT RESOURCES CODE //

  window.addEventListener('load', () => {
    // Load your experiment resources (stimuli, images, sounds, etc.) here
    // ...
  
    // When everything is loaded, transition from the loading screen to the welcome screen
    goToSection('loading', 'welcome');
  });
  


// TRANSTIONS BETWEEN SECTIONS CODE //

  function endMainTrial() {
    // Implement logic to end the main trial, save data, etc.
  
    // Transition to the attention check section
    goToSection('main-trials', 'attention-check');
  }
  
  function endAttentionCheck() {
    // Implement logic to end the attention check, save data, etc.
  
    // Transition to the debrief section
    goToSection('attention-check', 'debrief');
  }


// PROGRESS BAR CODE //

let currentTrial = 1;
const totalTrials = 10; // Replace with the actual number of trials

function nextTrial() {
  // Implement logic to handle the end of the current trial, save data, etc.

  if (currentTrial < totalTrials) {
    currentTrial++;
    updateProgressBar();

    // Implement logic to start the next trial
  } else {
    showDebrief();
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressPercentage = (currentTrial / totalTrials) * 100;
  progressBar.style.width = progressPercentage + "%";
}

function showDebrief() {
  // Hide the current section and show the debrief section
  showSection("debrief-section");
}

  
  
  function showDebrief() {
    // Hide the main trial section (replace "trial-section" with the ID of your trial section)
    document.getElementById("trial-section").style.display = "none";
  
    // Show the debrief section
    document.getElementById("debrief-section").style.display = "block";
  }
  
  document.getElementById("finish-button").addEventListener("click", function () {
    // Redirect participants to a completion page or implement any other logic for ending the experiment
    window.location.href = "https://example.com/completion";
  });

  

  function startExperiment() {
    // Hide the start section
    document.getElementById("start-section").style.display = "none";
  
    // Show the main trial section (replace "trial-section" with the ID of your trial section)
    document.getElementById("trial-section").style.display = "block";
  
    // Initialize the experiment (e.g., load the first trial)
    nextTrial();
  }

  document.getElementById("start-button").addEventListener("click", startExperiment);


  function showDebrief() {
    // Hide the main trial section (replace "trial-section" with the ID of your trial section)
    document.getElementById("trial-section").style.display = "none";
  
    // Show the debrief section
    document.getElementById("debrief-section").style.display = "block";
  }

  
  document.getElementById("finish-button").addEventListener("click", function() {
    // Perform any necessary cleanup (e.g., save data, close the window, etc.)
  });
