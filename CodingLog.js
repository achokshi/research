/* This is the principle score the user starts with, when we begin adding points for each function,
we will increase the score for each segement in the form*/
let finalScore = 0;
function calculateAge(){
/*For this function we must compare the user's choice to the specified string chosen 
Once the comparison is done, we assign a value to the variable for the final calcualtion of 
The applicants score*/
}
function calculateEducation(){
    const selectElement = document.getElementById('education');
    const selectedEducationValue = selectElement.value;
    
    let educationScore = 0;
    if(selectedEducationValue==="Secondary"){
        educationScore = 5;
    }
    else if(selectedEducationValue==="One-Year-Dip"){
        educationScore = 15;
    }
    else if(selectedEducationValue==="Two-Year-Dip"){
        educationScore = 19;
    }
    else if (selectedEducationValue==="Bachelor"){
        educationScore = 21;
    }
    else if (selectedEducationValue==="Two-Plus-Certi"){
        educationScore = 22;
    }
    else if(selectedEducationValue==="Proffesional"){
        educationScore = 23;
    }
    else if (selectedEducationValue==="Masters"){
        educationScore = 23;
    }
    else if (selectedEducationValue==="Doctoral"){
        educationScore = 25;
    }

    return educationScore;
}
function calculatePrimaryLangauge(){
    
}
function calculateSecondaryLangauge(){
    let secondaryLangaugeScore=0;
    let radioButtonValue = document.getElementById("secondaryLangauge").value;
    if(radioButtonValue==="Yes"){
        secondaryLangaugeScore =
    }
}
function calculateWorkExperience(){

}
function calculateSpouseAdaptability(){

}

