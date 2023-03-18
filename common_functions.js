// BORDER COLOR // 

function changeBorderColor(element, color, duration) {
  element.style.borderColor = color;
  setTimeout(() => {
    element.style.borderColor = "black";
  }, duration);
}

// PROGRESS BAR //

function updateProgressBar(progress) {
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = progress + "%";
  progressBar.innerHTML = progress + "%";
}

// SECTION VISIBILITY CODE //

  function goToSection(fromSectionId, toSectionId) {
    document.getElementById(fromSectionId).classList.add('hidden');
    document.getElementById(toSectionId).classList.remove('hidden');
  }
