/* This is the principle score the user starts with, when we begin adding points for each function,
we will increase the score for each segement in the form*/
let finalScore = 0;
function calculateAge(){
let ageScore = 0;



    /*For this function we must compare the user's choice to the specified string chosen 
Once the comparison is done, we assign a value to the variable for the final calcualtion of 
The applicants score*/
}
function calculateEducation(){
    /* This is the function to calculate the e,.Mducation score
    *
    */
    const selectElement = document.getElementById('education');
    const selectedEducationValue = selectElement.value;
    
    let educationScore = 0;
    if(selectedEducationValue=="Secondary"){
        educationScore = 5;
    }
    else if(selectedEducationValue=="One-Year-Dip"){
        educationScore = 15;
    }
    else if(selectedEducationValue=="Two-Year-Dip"){
        educationScore = 19;
    }
    else if (selectedEducationValue=="Bachelor"){
        educationScore = 21;
    }
    else if (selectedEducationValue=="Two-Plus-Certi"){
        educationScore = 22;
    }
    else if(selectedEducationValue=="Proffesional"){
        educationScore = 23;
    }
    else if (selectedEducationValue=="Masters"){
        educationScore = 23;
    }
    else if (selectedEducationValue=="Doctoral"){
        educationScore = 25;
    }

    return educationScore;
}

function calculateArrangedEmployment(){
    let arrangedEmploymentScore = 0;
    let radioButtonValue = document.getElementById("arrangedEmployment").value;
    if(radioButtonValue === "Yes"){
        arrangedEmploymentScore = 10;
    }
    return arrangedEmploymentScore;
}

function calculatePrimaryLangauge(){
   let primaryLangaugeScore = 0;
   let additionalPoints = 4;
   let sliderValue1 = document.getElementById("sliderSpeak").value;
   let sliderValue2 = document.getElementById("sliderListen").value;
   let sliderValue3 = document.getElementById("sliderRead").value;
   let sliderValue4 = document.getElementById("sliderWrite").value;
   primaryLangaugeScore = sliderValue1 + sliderValue2 + sliderValue3 + sliderValue4;
   if(sliderValue1 && sliderValue2 && sliderValue3 && sliderValue4 >= 5){
     primaryLanguageScore += additionalPoints;
   }
}

function calculateSecondaryLangauge(){
    let secondaryLangaugeScore = 0;
    let radioButtonValue = document.getElementById("secondaryLangauge").value;
    if(radioButtonValue === "Yes"){
        secondaryLangaugeScore = 4;
    }
    return secondaryLangaugeScore;
}

function calculateWorkExperience(){
    const selectElement = document.getElementById('experience');
    const selectedEducationValue = selectElement.value;
    secondaryLangaugeScore = 0;
    if(selectedEducationValue=="under_1"){
        secondaryLangaugeScore = 0;
    }
    else if(selectedEducationValue=="1_year"){
        secondaryLangaugeScore = 9;
    }
    else if(selectedEducationValue=="2-3_years"){
        secondaryLangaugeScore = 11;
    }
    else if(selectedEducationValue=="=4-5_years"){
        secondaryLangaugeScore = 13;
    }
    else if(selectedEducationValue=="6_or_more"){
        secondaryLangaugeScore = 15;
    }
    return secondaryLangaugeScore;
}

function calculateAdaptability(){
    const selectElement = document.getElementById('conditionalPart');
    const selectedAdaptabilityValue = selectElement.value;
    const selectElement2 = document.getElementById('adaptabilityNiche');
    const selectedAdaptabilityValue2 = selectElement2.value;

    adaptabilityScore = 0;
    while (adaptabilityScore <=10){
        if(selectedAdaptabilityValue=="Yes"){
            adaptabilityScore +=5;
        }
        else if(selectedAdaptabilityValue=="No"){
            adaptabilityScore = 0;
        }
        if(selectedAdaptabilityValue2=="Yes"){
            adaptabilityScore +=10;
        }
        else if(selectedAdaptabilityValue2=="No"){
            adaptabilityScore = 0;
        }
    }
    return adaptabilityScore;
}

function toggleFormParts() {
    const yesSelected = document.querySelector('input[name="question"]:checked').value === 'yes';
    const conditionalPart = document.getElementById('conditionalPart');
    
    if (yesSelected) {
        conditionalPart.classList.remove('hidden');
    } else {
        conditionalPart.classList.add('hidden');
    }
}

function checkLanguage() {
    const yesSelected = document.querySelector('input[name="question"]:checked').value === 'yes';
    if(yesSelected){
        document.getElementById()
    }
};

