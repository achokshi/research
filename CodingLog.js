/**
 * Calculates the total score for an immigration application based on the user's inputs.
 * The score is calculated based on factors such as age, education level, language proficiency, work experience, and employment status.
 * The function displays an alert message with the user's name, final score, and eligibility status.
 */
function calculateScore() {
    /**
     * Retrieves the first and last name of the user from the form.
     */
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;

    /**
     * Calculates the age points for an immigration application based on the user's age.
     * If the user's age is between 18 and 35 (inclusive), they receive 12 age points.
     * If the user's age is between 36 and 47 (inclusive), they receive a decreasing number of age points, starting from 12 and decreasing by 1 for each year over 35.
     */
    const age = parseInt(document.getElementById('age').value);
    let agePoints = 0;
    if (age >= 18 && age <= 35) agePoints = 12;
    else if (age >= 36 && age <= 47) agePoints = 12 - (age - 35);

    /**
     * Retrieves the education level points for the immigration application based on the user's input.
     * The education level points are determined by the value selected in the 'education-level' form field.
     */
    const educationPoints = parseInt(document.getElementById('education-level').value);

    /**
     * Defines an array of language slider IDs and initializes the language points to 0.
     * The language sliders represent the user's proficiency in speaking, listening, writing, and reading the language.
     * The language points will be calculated based on the values of these sliders.
     */
    const languageSliders = ['language-speak', 'language-listen', 'language-write', 'language-read'];
    let languagePoints = 0;
    /**
     * Calculates the language points for the immigration application based on the user's language proficiency scores.
     * The function iterates through the language sliders (speak, listen, write, read) and assigns points based on the user's input.
     * If any of the language proficiency scores are below 7, the function displays an alert and returns, indicating the user is not eligible to apply.
     */
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

    /**
     * Adds 4 points to the `languagePoints` variable if the user has selected 'yes' for the 'clb-yes' checkbox.
     * This is used to calculate the total score for the immigration application based on the user's language proficiency.
     */
    const clbYes = document.getElementById('clb-yes').checked;
    if (clbYes) languagePoints += 4;

    /**
     * Retrieves the work experience points for the immigration application based on the user's input.
     * The work experience points are determined by the value selected in the 'work-experience' form field.
     */
    const workExperiencePoints = parseInt(document.getElementById('work-experience').value);

    /**
     * Calculates the employment points for the immigration application based on the user's employment status.
     * If the user is employed, they receive 10 employment points. Otherwise, they receive 0 employment points.
     */
    const employmentYes = document.getElementById('employment-yes').checked;
    const employmentPoints = employmentYes ? 10 : 0;

    /**
     * Calculates the total score for the immigration application by summing the points from age, education, language proficiency, work experience, and employment status.
     */
    const totalScore = agePoints + educationPoints + languagePoints + workExperiencePoints + employmentPoints;

    /**
     * Displays an eligibility message based on the calculated total score for the immigration application.
     * If the total score is greater than or equal to 67, the message indicates the user is eligible to move into the country.
     * Otherwise, the message indicates the user is not eligible to move into the country.
     * The message is displayed in an alert dialog along with the user's name and the final total score.
     */
    const eligibilityMessage = totalScore >= 67
      ? "You are eligible to move into the country based on your inputs."
      : "You are not eligible to move into the country based on your inputs.";

    alert(`Hello ${firstName} ${lastName}, we are pleased to assist you in your desire to move to the country. Your final score is ${totalScore}. ${eligibilityMessage}`);
  }

  /**
 * Toggles the visibility of a conditional part of the form based on the user's selection.
 * If the user selects 'yes', the conditional part is shown. Otherwise, it is hidden.
 */
  function toggleFormParts() {
    const yesSelected = document.querySelector('input[name="question"]:checked').value === 'yes';
    const conditionalPart = document.getElementById('conditionalPart');
    
    if (yesSelected) {
        conditionalPart.classList.remove('hidden');
    } else {
        conditionalPart.classList.add('hidden');
    }
};
