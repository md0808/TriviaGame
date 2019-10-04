// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option.
// After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer.
// Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option 
//and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart 
//the game (without reloading the page)

//=======================================================================================================================



//create function that shows only one question at a time. Use .show .hide


// create a for loop that moves through the questions within a timer

// if the user gets the answer right before the time is up, ++ score, congratulated (timed), and move onto new question
// if user gets the wrong answer or time runs out, --score , display correct answer and move on to new question.

// create a finalOutcome function that shows the number of correct answers, incorrect answers, and an option to restart 
//the game (without reloading the page)



// Questions and answers formatted as an objects within an object
// var triviaQuestions2 = {
//     one : 
//         { question : 
//         "Which of the following terms describe a genus of terrestrial fossils fungi dating from approximately 430 to 360 million years ago whose size reached up to 3 ft in diameter, and 25 ft in height? ",
//         answers : 
//         ["Prototaxites",
//          "Taxaprototies",
//          "Bingbangboom",
//          "Proboonotopotes",]},
//     two :
//         {question : 
//         "Which of the following is NOT fungi that grows on humans?",
//         answers :
//         ["Ringworm", 
//          "Candida Yeast", 
//          "Rosacea", 
//          "Athlete’s Foot"]},
//     three : 
//         {question :
//          "Which is the following is the common name of the mushroom produced by the fungi said to be the largest organism in the world, covering 2,200 acres of forest in eastern Oregon?",
//         answers : 
//         ["Chaga",
//         "Honey Mushroom",
//         "Turkeytail",
//         "Lion's Mane"]},
//     four : 
//         {question :
//         "Fill in the blank. By volume, mushrooms are composed of approximately 90%  ________________",
//         answers :
//         ["Manganese",
//         "Water",
//         "Unicorn Tears",
//         "Cotton"   
//         ]},
//     five : 
//         {question :
//         "Which of the following does NOT grow natively in Missouri?",
//         answers : 
//         ["Morchella angusticeps",
//         "Gyromitra caroliniana",
//         "Craterellus cornucopioides",
//         "Psilocybe Cubensis"]}
// }

// console.log(triviaQuestions2.one.question)





// Global Variables =================================================================
var userCorrectAnswers = 0;
var userWrongAnswers = 0;

 //formatted as a more simple array of objects

 var triviaQuestions = [
    {"Which of the following terms describe a genus of terrestrial fossils fungi dating from approximately 430 to 360 million years ago whose size reached up to 3 ft in diameter, and 25 ft in height?" : 
        ["Prototaxites",
         "Taxaprototies",
         "Bingbangboom",
         "Proboonotopotes"]},
    {"Which of the following is NOT fungi that grows on humans?" :
        ["Ringworm", 
         "Candida Yeast", 
         "Rosacea", 
         "Athlete’s Foot"]},
    {"Which is the following is the common name of the mushroom produced by the fungi said to be the largest organism in the world, covering 2,200 acres of forest in eastern Oregon?": 
        ["Chaga",
        "Honey Mushroom",
        "Turkeytail",
        "Lion's Mane"]},
        {"Fill in the blank. By volume, mushrooms are composed of approximately 90%  ________________":
        ["Manganese",
        "Water",
        "Unicorn Tears",
        "Cotton"   
        ]},
    {"Which of the following does NOT grow natively in Missouri?": 
        ["Morchella angusticeps",
        "Gyromitra caroliniana",
        "Craterellus cornucopioides",
        "Psilocybe Cubensis"]}
 ]


 
// this is the array of correct answers. If user answers match these answers, they get points
var correctAnswers = [Object.values(triviaQuestions[1])]

console.log(correctAnswers);
console.log(Object.keys(triviaQuestions))
console.log(Object.keys(triviaQuestions[2]))
console.log(Object.values(triviaQuestions[3]))


//Functions  =================================================================


//upon pressing start button, one question at a time appears, 
//the timer is shown, and the timer starts.
function startGame() {
    askQuestions();
    $("#timer-row").show();
   

    //timer starts - 25 seconds
    //time remaining shows in "#time-left"

    //on click function for buttons determineOutcome
    // if time runs out, "Time's up!" userWrongAnswers++
   
};

function askQuestions() {
    //for every question in the triviaQuestions object,
    //push question into ("#game-content")
   


    for (var i=0; i < triviaQuestions; i++){
        var questionToDisplay = Object.keys(triviaQuestions[i]);
        var answersToDisplay = Object.values(triviaQuestions[i]);
        
        
        console.log(Object.keys(triviaQuestions[i]));
        console.log(Object.values(triviaQuestions[i]));
        console.log(questionToDisplay);
        console.log("-------------------");
        console.log(answersToDisplay[i]);
       
        $("#game-content").html(Object.keys(triviaQuestions[i]));

        for (var j=0; j < Object.values(triviaQuestions[i]); i++ ) {
            console.log(Object.values(triviaQuestions[i])[j]);
        
            var answerBtn = $("<button>");
            answerBtn.addClass("answer-button");
            answerBtn.attr("data-answer", Object.values(triviaQuestions[i])[j]);
            answerBtn.text(Object.values(triviaQuestions[i])[j])
            }
        
    }
}
    // create buttons for the associated answers 



var timeLeft= 25;
setInterval( startTimer, 1000)

function startTimer() {
    
    timeLeft--
    $("#time-left").html(timeLeft);
    if (timeLeft <= 0) {
        userWrongAnswers++;
        clearInterval(startTimer);
        $("#timer-row").append("<div id='timesup'></div>");
        $("#timesup").text("Time's up!");
        $("#timer-row").hide();
        
    }
}

function determineOutcome () {
    //if the button clicked matches correct

};
// Main Process =================================================================

//content and timer are both hidden in the beginning.
$("#game-content").hide();
$("#timer-row").hide();

//upon pressing start, the game content appears, the button is hidden, and startGame function is executed.
$("#start-button").on("click", function(){
    $("#game-content").show();
    $("#start-button").hide();
    startGame();
    startTimer();
})