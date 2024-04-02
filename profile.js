var questions1 = ["Please enter your first name:", "Please enter your surname:", "Please enter your age:"];
var responses1 = ["First name:", "Surname:", "Age:"];
var totalQuestions1 = questions1.length;
var profile = [] // array for the answers inputted



var progressBar = document.getElementById("progressBar"); // the variable for the progress bar
var progressValue = 0; //variable for how much the progress bar is filled

var index = 0; // index to help keep track of the current question and answer

document.getElementById("promptButton").addEventListener("click", function() { 
    var userInput = document.getElementById("userInput"); 
    var backButton = document.getElementById("backButton");
    var firstPrompt = document.getElementById("firstPrompt");
    var answer = userInput.value;
    
    if (answer !== '') {
      
        profile.push(answer); // adds the answer to the array
        
        index++; // increments the index by 1 and moves to the next question
        progressValue += (100 / totalQuestions1); // fills it by a certain amount after each question
        progressBar.value = progressValue;
        document.getElementById("progressValue").innerText = Math.round(progressValue) + "%";
        bigProgressBar();
        
        if (index > 0) { // Display back button after the first question
            backButton.style.display = "inline"; // shows the back button
        } if (index === questions1.length) {
            displayAnswers();
            firstPrompt.style.display = "none"
            secondPrompt.style.display = "block"
        } else {
            document.getElementById("question").innerText = questions1[index]; //plays the next question
            userInput.value = ""; // clears the current input


        }
    } else {
        document.getElementById("answers").innerHTML = "<div>Please enter a valid answer.</div>";
    }
    
    displayAnswers(); 
      
});

function displayAnswers() { // displays the answers 
    var answers = "";
    for (var i = 0; i < index; i++) {
        if (profile[i] && profile[i] !== "") {
            answers += "<div>" + responses1[i] + " " + profile[i] + "</div>";
        } else {
            answers += "<div>" + responses1[i] + "</div>";
        }
    }
    document.getElementById("profile").innerHTML = answers;
}

document.getElementById("backButton").addEventListener("click", function() {
    
    if (index > 0) {
        profile.pop(); // removes the last answer from the array
        index--; // moves back to the previous question
        progressValue -= (100 / totalQuestions1); //takes away progress from the bar when back is clicked
        progressBar.value = progressValue;
        document.getElementById("progressValue").innerText = Math.round(progressValue) + "%";
        bigProgressBar();
        document.getElementById("question").innerText = questions1[index];
        displayAnswers();
    }   if (index === 0) { // checks if we are on the first question
            document.getElementById("backButton").style.display = "none"; //removes back if we are
        } 

    
});

document.getElementById("skipButton").addEventListener("click", function() {
    profile.push(""); // Adds a blank space to the profile array for skipped question
    index++; // Move to the next question
    progressValue += (100 / totalQuestions1);
    progressBar.value = progressValue;
    bigProgressBar();
    document.getElementById("progressValue").innerText = Math.round(progressValue) + "%";
    
    if (index === questions1.length) {
        document.getElementById("backButton").style.display = "inline";
        displayAnswers();
        firstPrompt.style.display = "none"
        secondPrompt.style.display = "inline"
    } else {
        document.getElementById("question").innerText = questions1[index];
        document.getElementById("userInput").value = "";
        document.getElementById("backButton").style.display = "inline"; // Display the next question
        displayAnswers(); // Display the answers
        
    }
});

var questions2 = ["Please enter your gender", "Please enter your field of study/work field:", "Please enter your University (None if necessary):"];
var responses2 = ["Gender:", "Field:", "University:"];
var totalQuestions2 = questions2.length;
var profile2 = [] 

var progressBar2 = document.getElementById("progressBar2"); 
var progressValue2 = 0; 

var index2 = 0; 

document.getElementById("promptButton2").addEventListener("click", function() { 
    var userInput2 = document.getElementById("userInput2"); 
    var backButton2 = document.getElementById("backButton2");
    var secondPrompt = document.getElementById("secondPrompt");
    var answer2 = userInput2.value;
    
    if (answer2 !== '') {
      
        profile2.push(answer2);
        
        index2++; 
        progressValue2 += (100 / totalQuestions2); 
        progressBar2.value = progressValue2;
        document.getElementById("progressValue2").innerText = Math.round(progressValue2) + "%";
        bigProgressBar();


        if (index2 > 0) { 
            backButton2.style.display = "inline";
        } if (index2 === questions2.length) {
            displayAnswers2();
            secondPrompt.style.display = "none"
            thirdPrompt.style.display = "inline"
        } else {
            document.getElementById("question2").innerText = questions2[index2]; 
            userInput2.value = ""; 
        }
    } else {
        document.getElementById("answers2").innerHTML = "<div>Please enter a valid answer.</div>";
    }
    
    displayAnswers2(); 
  
});

function displayAnswers2() { 
    var answers2 = "";
    for (var i = 0; i < index2; i++) {
        if (profile2[i] && profile2[i] !== "") {
            answers2 += "<div>" + responses2[i] + " " + profile2[i] + "</div>";
        } else {
            answers2 += "<div>" + responses2[i] + "</div>";
        }
    }
    document.getElementById("profile2").innerHTML = answers2;
}

document.getElementById("backButton2").addEventListener("click", function() {
    if (index2 > 0) {
        profile2.pop();
        index2--; 
        progressValue2 -= (100 / totalQuestions2); //takes away progress from the bar when back is clicked
        progressBar2.value = progressValue2;
        document.getElementById("progressValue2").innerText = Math.round(progressValue2) + "%";
        bigProgressBar();
        document.getElementById("question2").innerText = questions1[index2];
        displayAnswers2();
    }   
    if (index2 === 0) { 
        document.getElementById("backButton2").style.display = "none"; 
    } 
});

document.getElementById("skipButton2").addEventListener("click", function() {
    profile2.push(""); 
    index2++; 
    progressValue2 += (100 / totalQuestions2);
    progressBar2.value = progressValue2;
    document.getElementById("progressValue2").innerText = Math.round(progressValue2) + "%";
    bigProgressBar();
    if (index2 === questions2.length) {
        document.getElementById("backButton2").style.display = "inline";
        displayAnswers2();
        secondPrompt.style.display = "none"
        thirdPrompt.style.display = "inline"
    } else {
        document.getElementById("question2").innerText = questions2[index2];
        document.getElementById("userInput2").value = "";
        document.getElementById("backButton2").style.display = "inline"; 
        displayAnswers2(); 
    }
});

var questions3 = ["Please enter your way of finding this site:", "Please enter your reason for visiting(Healthcare, diet etc.):", "How Frequently do you visit this website?:"];
var responses3 = ["Method:", "Reason:", "Frequency:"];
var totalQuestions3 = questions3.length;
var profile3 = [] 

var progressBar3 = document.getElementById("progressBar3"); 
var progressValue3 = 0; 

var index3 = 0; 

document.getElementById("promptButton3").addEventListener("click", function() { 
    var userInput3 = document.getElementById("userInput3"); 
    var backButton3 = document.getElementById("backButton3");
    var firstPrompt3 = document.getElementById("firstPrompt3");
    var answer3 = userInput3.value;
    
    if (answer3 !== '') {
      
        profile3.push(answer3); 
        
        index3++; 
        progressValue3 += (100 / totalQuestions3); 
        progressBar3.value = progressValue3;
        document.getElementById("progressValue3").innerText = Math.round(progressValue3) + "%";
        bigProgressBar();


        if (index3 > 0) { // Display back button after the first question
            backButton3.style.display = "inline"; // shows the back button
        } if (index3 === questions3.length) {
            displayAnswers3();
            thirdPrompt.style.display = "none"
        } else {
            document.getElementById("question3").innerText = questions3[index3]; //plays the next question
            userInput3.value = ""; // clears the current input


        }
    } else {
        document.getElementById("answers3").innerHTML = "<div>Please enter a valid answer.</div>";
    }
    
    displayAnswers3(); 
  
});

function displayAnswers3() { 
    var answers3 = "";
    for (var i = 0; i < index3; i++) {
        if (profile3[i] && profile3[i] !== "") {
            answers3 += "<div>" + responses3[i] + " " + profile3[i] + "</div>";
        } else {
            answers3 += "<div>" + responses3[i] + "</div>";
        }
    }
    document.getElementById("profile3").innerHTML = answers3;
}

document.getElementById("backButton3").addEventListener("click", function() {
    
    if (index3 > 0) {
        profile3.pop(); 
        index3--;
        progressValue3 -= (100 / totalQuestions3); 
        progressBar3.value = progressValue3;
        document.getElementById("progressValue3").innerText = Math.round(progressValue3) + "%";
        bigProgressBar();
        document.getElementById("question3").innerText = questions3[index3];
        displayAnswers3();
    }   if (index3 === 0) { 
            document.getElementById("backButton3").style.display = "none"; 
        } 

    
});

document.getElementById("skipButton3").addEventListener("click", function() {
    profile3.push(""); 
    index3++; 
    progressValue3 += (100 / totalQuestions3);
    progressBar3.value = progressValue3;
    document.getElementById("progressValue3").innerText = Math.round(progressValue3) + "%";
    bigProgressBar();
    if (index3 === questions3.length) {
        document.getElementById("backButton3").style.display = "inline";
        displayAnswers3();
        thirdPrompt.style.display = "none"
    } else {
        document.getElementById("question3").innerText = questions3[index3];
        document.getElementById("userInput3").value = "";
        document.getElementById("backButton3").style.display = "inline"; 
        displayAnswers3(); 
    }
});

var totalQuestions = totalQuestions1 + totalQuestions2 + totalQuestions3; //for the overall progress bar

function calculateOverallProgress() {
    var totalProgress = (index + index2 + index3) / totalQuestions * 100;
    return totalProgress;
}

function bigProgressBar() {
    var overallProgress = calculateOverallProgress();
    var overallProgressBar = document.getElementById("overallProgressBar");
    var overallProgressValue = document.getElementById("overallProgressValue");
    overallProgressBar.value = overallProgress;
    overallProgressValue.innerText = Math.round(overallProgress) + "%";
}

document.getElementById("restart").addEventListener("click", function() {
    
    index = 0; // Resets the variables 
    profile = [];
    progressValue = 0;

    index2 = 0;  
    profile2 = [];
    progressValue2 = 0;

    index3 = 0; 
    profile3 = [];
    progressValue3 = 0;
    
   
    document.getElementById("profile").innerHTML = "";  // Clears answers and progress bar 
    progressBar.value = progressValue;
    document.getElementById("progressValue").innerText = Math.round(progressValue) + "%";
    

    document.getElementById("profile2").innerHTML = "";  
    progressBar2.value = progressValue2;
    document.getElementById("progressValue2").innerText = Math.round(progressValue2) + "%";
    
    document.getElementById("profile3").innerHTML = "";  
    progressBar3.value = progressValue3;
    document.getElementById("progressValue3").innerText = Math.round(progressValue3) + "%";
    bigProgressBar()

    
    document.getElementById("firstPrompt").style.display = "inline"; // Display the first prompt again
    document.getElementById("secondPrompt").style.display = "none"; 
    document.getElementById("thirdPrompt").style.display = "none"; 
});

