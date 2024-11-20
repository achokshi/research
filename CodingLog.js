/* This is the principle score the user starts with, when we begin adding points for each function,
we will increase the score for each segement in the form*/
function calculateScore() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;

    const age = parseInt(document.getElementById('age').value);
    let agePoints = 0;
    if (age >= 18 && age <= 35) agePoints = 12;
    else if (age >= 36 && age <= 47) agePoints = 12 - (age - 35);

    const educationPoints = parseInt(document.getElementById('education-level').value);

    const languageSliders = ['language-speak', 'language-listen', 'language-write', 'language-read'];
    let languagePoints = 0;
    for (const slider of languageSliders) {
      const value = parseInt(document.getElementById(slider).value);
      if (value >= 9) languagePoints += 6;
      else if (value === 8) languagePoints += 5;
      else if (value === 7) languagePoints += 4;
      else {
        alert("You are not eligible to apply due to an insufficient language proficiency.");
        return;
      }
    }

    const clbYes = document.getElementById('clb-yes').checked;
    if (clbYes) languagePoints += 4;

    const workExperiencePoints = parseInt(document.getElementById('work-experience').value);

    const employmentYes = document.getElementById('employment-yes').checked;
    const employmentPoints = employmentYes ? 10 : 0;

    const totalScore = agePoints + educationPoints + languagePoints + workExperiencePoints + employmentPoints;

    const eligibilityMessage = totalScore >= 67
      ? "You are eligible to move into the country based on your inputs."
      : "You are not eligible to move into the country based on your inputs.";

    alert(`Hello ${firstName} ${lastName}, we are pleased to assist you in your desire to move to the country. Your final score is ${totalScore}. ${eligibilityMessage}`);
  }

function toggleFormParts() {
    const yesSelected = document.querySelector('input[name="question"]:checked').value === 'yes';
    const conditionalPart = document.getElementById('conditionalPart');
    
    if (yesSelected) {
        conditionalPart.classList.remove('hidden');
    } else {
        conditionalPart.classList.add('hidden');
    }
};
