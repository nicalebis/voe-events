canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


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
  const totalTrainingTrials = 2; // Adjust this value based on your experimental design
  
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
  const totalMainTrials = 18; // Adjust this value based on your experimental design
  
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


