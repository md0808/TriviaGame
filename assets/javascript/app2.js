//by clicking start, content is shown, button is hidden

$("#game-content").hide();

$("#start-button").on("click", function(){
    $("#game-content").show();
    $("#start-button").hide();
    game.loadQuestion();
})

$(document).on("click", ".answer-button", function(e){
    game.clicked(e);
})

var triviaQuestions = [
     
        { question : 
        "Which of the following is a terrestrial fossi fungi thought to have lived between 430 to 360 million years, ago whose size reached up to 3 ft in diameter, and 25 ft in height? ",
        answers : 
        ["Prototaxites",
         "Taxaprototies",
         "Bingbangboom",
         "Proboonotopotes",],
         correctAnswer : "Prototaxites",
         image: "img src="
        },

        {question : 
        "Which of the following is NOT fungi that grows on humans?",
        answers :
        ["Ringworm", 
         "Candida Yeast", 
         "Rosacea", 
         "Athlete’s Foot"],
        correctAnswer : "Rosacea",
        image: "img src=",
        },

        {question :
         "Which is the following is the common name of the mushroom produced by the fungi said to be the largest organism in the world, covering 2,200 acres of forest in eastern Oregon?",
        answers : 
        ["Chaga",
        "Honey Mushroom",
        "Turkeytail",
        "Lion's Mane"],
        correctAnswer : "Honey Mushroom",
        image: "img src=",
        },

        {question :
        "Fill in the blank. By volume, mushrooms are composed of approximately 90%  ________________",
        answers :
        ["Manganese",
        "Water",
        "Unicorn Tears",
        "Cotton"],
        correctAnswer : "Water",
        image: "img src="
        },

        {question :
        "Which of the following does NOT grow natively in Missouri?",
        answers : 
        ["Morchella angusticeps",
        "Gyromitra caroliniana",
        "Craterellus cornucopioides",
        "Psilocybe Cubensis"],
        correctAnswer : "Psilocybe Cubensis",
        image: "img src=",

    }
 ]

var game = {
    //
    questions : triviaQuestions,
    //keeps track of which question we're on
    currentQuestion : 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown : function (){
        game.counter--;
        $("#time-left").html(game.counter);
        if (game.counter <= 0){
            game.timeUp();
            clearInterval();
        }
    },
    loadQuestion : function (){
        timer = setInterval(game.countdown, 1000);
        $("#questions").html("<h4>" + triviaQuestions[game.currentQuestion].question + "</h4>");
        for (var i =0; i < triviaQuestions[game.currentQuestion].answers.length; i++){
            $("#answers").append('<button class="answer-button" id="button-'+i+'" "data-name="'+triviaQuestions[game.currentQuestion].answers[i]+'">' 
            +triviaQuestions[game.currentQuestion].answers[i] + '</button>')
        }

    },
    nextQuestion : function (){
        $("#outcome").html("");
        game.counter= 30;
        $("#questions").html(" ");
        $("#answers").html(" ");
        game.currentQuestion++;
        game.countdown();
        game.loadQuestion();

    },
    timeUp : function () {
        clearInterval(timer)
        $("#questions").html(" ");
        $("#answers").html(" ");
        $("#outcome").html("<h4>Time's Up!</h4>");
        $("#outcome").append("<h4> The correct answer was: " +triviaQuestions[game.currentQuestion].correctAnswer + "</h4>" )
        game.unanswered++;
        if (game.currentQuestion == triviaQuestions.length-1){
            setTimeout(game.results, 3000);
        }
        else{
            setTimeout(game.nextQuestion, 3000);

        }


    },
    results : function () {
        clearInterval(timer);
        $("#questions").html(" ");
        $("#answers").html(" ");
        $("")
        $("#outcome").html("<h2>Results:</h2>");
        $("#outcome").append("<h4> Number of correct answers: " + game.correct + "</h4>");
        $("#outcome").append("<h4> Number of wrong answers: " + game.incorrect + "</h4>");
        $("#outcome").append("<h4> Number of questions unanswered: " + game.unanswered + "</h4>");
        $("#outcome").append("<button id='start-over'> Start Over </button>")
        $("#start-over").click(game.reset)
    },
    clicked : function (e) { 
        clearInterval();
        $("#answers").html(" ");
        if ($(e.target).attr("data-name") == triviaQuestions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        }
        else {
            game.answeredIncorrectly();
            console.log($(e.target).attr("data-name"));
            console.log($(e.target).data("name"));
        }
        //if $("data-name") of answer button == triviaQuestions[game.CurrentQuestion].correctAnswer]
        

    },
    answeredCorrectly : function () {
        console.log("Correctly! It worked!");
        clearInterval(timer);
        game.correct++;
        $("#outcome").html(" <h4> That's right! </h4>");
        if (game.currentQuestion == triviaQuestions.length-1){
            setTimeout(game.results, 3000);
        }
        else{
            setTimeout(game.nextQuestion, 3000);

        }

 
    },
    answeredIncorrectly : function () {
        console.log ("INCORRECT");
        clearInterval(timer);
        game.incorrect++;
        $("#outcome").html("<h4>Wrong Answer!</h4>")
        $("#outcome").append("<h4> The correct answer was: " +triviaQuestions[game.currentQuestion].correctAnswer + "</h4>" )
        if (game.currentQuestion == triviaQuestions.length-1){
            setTimeout(game.results, 3000);
        }
        else{
            setTimeout(game.nextQuestion, 3000);

        }

    },

    reset : function () {
        console.log("reset");
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct = 0;
        game.incorrect = 0;
        $("#outcome").html("");
        $("#start-over").hide();
        game.loadQuestion();

    }
 

}

