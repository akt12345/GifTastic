
// Set up my variables for questions 10 questiona total

var question1 =
"<div id='firstQuestion' class='triviaQ' value='Great Horned Owl'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='no'>Brown</li> <li class='no'>White</li> <li class='yes'>Great Horned Owl</li> <li class='no'>Blue</li> </ul></div>";

var question2 =
"<div id='secondQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='no'>Bob</li> <li class='no'>George</li> <li class='yes'>Mexican Spotted Owl</li> <li class='no'>Sam</li> </ul></div>";

var question3 =
"<div id='thirdQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='no'>Terri</li> <li class='yes'>Spectacled Owl</li> <li class='no'>Susan</li> <li class='no'>Pat</li> </ul></div>";

var question4 =
"<div id='fourthQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='yes'>Long-eared Owl</li> <li class='no'>Sarah</li> <li class='no'>Jim</li> <li class='no'>Jack</li> </ul></div>";

var question5 =
"<div id='fifthQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='yes'>Barn Owl</li> <li class='no'>Sarah</li> <li class='no'>Jim</li> <li class='no'>Jack</li> </ul></div>";

var question6 =
"<div id='sixthQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='yes'>Eurasian Eagle Owl</li> <li class='no'>Sarah</li> <li class='no'>Jim</li> <li class='no'>Jack</li> </ul></div>";

var question7 =
"<div id='seventhQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='yes'>Flammulated</li> <li class='no'>Sarah</li> <li class='no'>Jim</li> <li class='no'>Jack</li> </ul></div>";

var question8 =
"<div id='eighthQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='yes'>Eastern Screech Owl</li> <li class='no'>Sarah</li> <li class='no'>Jim</li> <li class='no'>Jack</li> </ul></div>";

var question9 =
"<div id='ninthQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='yes'>Ural Owl</li> <li class='no'>Sarah</li> <li class='no'>Jim</li> <li class='no'>Jack</li> </ul></div>";

var question10 =
"<div id='tenthQuestion' class='triviaQ'><p>What is the name of this owl?</p> <ul id='trivia'> <li class='yes'>A Wise Owl</li> <li class='no'>Sarah</li> <li class='no'>Jim</li> <li class='no'>Jack</li> </ul></div>";


// set up my variables for - correctAnswers-incorrectAnswers-unansweredQuestions-timerNum
var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;
var answerIs;
var timerNum;

// JQuery
$(document).ready(function() {

initializeNewGame();

function initializeNewGame() {

// set to 0 very impt.
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = 0;

  $(".results").remove();

  clearInterval(timerNum);

  showQuestions();

}

function showQuestions() {

//remove here - 4 total - use # for youreCorrect-youreWrong-noAnswer- use . for triviaIQ
  $("#youreCorrect").remove();
  $("#youreWrong").remove();
  $(".triviaQ").remove();
  $("#noAnswer").remove();

  //if statements-make the first one and if it works use it for the reamining questions and edit accosding to the question
  //append it!
  if (correctAnswers + incorrectAnswers + unansweredQuestions === 0) {
    $("#game").append(question1);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/1_great_horned_owl.jpg' class='sidebar' /></div>");
    answerIs = "Great Horned Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 1) {
    $("#game").append(question2);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/2_mexican_spotted_owl.jpg' class='sidebar' /></div>");
    answerIs = "Mexican Spotted Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 2) {
    $("#game").append(question3);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/3_spectacled_owl.jpg' class='sidebar' /></div>");
    answerIs = "Spectacled Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 3) {
    $("#game").append(question4);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/4_long_eared_owl.jpg' class='sidebar' /></div>");
    answerIs = "Long-eared Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 4) {
    $("#game").append(question5);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/5_barn_owl.jpg' class='sidebar' /></div>");
    answerIs = "Barn Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 5) {
    $("#game").append(question6);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/6_eurasian_eagle_owl.jpg' class='sidebar' /></div>");
    answerIs = "Eurasian Eagle Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 6) {
    $("#game").append(question7);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/7_flammulated_owl.jpg' class='sidebar' /></div>");
    answerIs = "Flammulated Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 7) {
    $("#game").append(question8);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/8_eastern_screech_owl.jpg' class='sidebar' /></div>");
    answerIs = "Eastern Screech Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 8) {
    $("#game").append(question9);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/9_ural_owl.jpg' class='sidebar' /></div>");
    answerIs = "Ural Owl";
    responses();
  }

  if (correctAnswers + incorrectAnswers + unansweredQuestions === 9) {
    $("#game").append(question10);
    $(".sidebar").remove();
    $(".picture").append("<div class='pic'><img src='assets/images/10_wise_owl.jpg' class='sidebar' /></div>");
    answerIs = "A Wise Owl";
    responses();
  }


// end of game results here - tough part.. look up for reference - still not working properly
  if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
    if (correctAnswers === 10) {
      $("#game").append
      ("<div class='results'><h5>Correct answers: " + correctAnswers + "</h5> <h5>Incorrect answers: " + incorrectAnswers + "</h5> <h5>Unanswered questions: " + unansweredQuestions + "</h5> <h5>You Are Wise!</h5></div>");
      $("#theCount").remove();
      $(".sidebar").remove();
    }
    else if (correctAnswers > 10) {
      $("#game").append
      ("<div class='results'><h5>Correct answers: " + correctAnswers + "</h5> <h5>Incorrect answers: " + incorrectAnswers + "</h5> <h5>Unanswered questions: " + unansweredQuestions + "</h5> <h5>You Are Getting Wiser!</h5></div>");
      $("#theCount").remove();
      $(".sidebar").remove();
    }
    else {
      $("#game").append
      ("<div class='results'><h5>Correct answers: " + correctAnswers + "</h5> <h5>Incorrect answers: " + incorrectAnswers + "</h5> <h5>Unanswered questions: " + unansweredQuestions + "</h5> <h5>Please visit Audubon.org to become Wise!</h5></div>");
      $("#theCount").remove();
      $(".sidebar").remove();
    }
  }
//end game results
}

function responses() {

//variable for timeLeft
  var timeLeft = 25;
//set this to each second
  timerNum = setInterval(countdown, 1000);

// timeLeft
  $("#timer").html("<div id='theCount'><h5>Time Remaining: " + timeLeft + "</h5></div>");

//anserIs
  function countdown() {
    if (timeLeft < 0) {
      clearInterval(timerNum);
      $("#game").append("<div id='noAnswer'><h5>Sorry, your time is up! The answer was " + answerIs + ".</h5></div>")

      //$(".yes").off("click");
      //$(".no").off("click");
      $("li").off("click");
      unansweredQuestions++;
      setTimeout(showQuestions, 3000);

      console.log("unanswered questions: " + unansweredQuestions);
    }
    else {
      $("#timer").html("<div id='theCount'><h5>Time Remaining: " + timeLeft + "</h5></div>");
      timeLeft--;
    }
  }

  // responses here - use this as a function
  $(".yes").on("click", function(event) {

    clearInterval(timerNum);
    $("#game").append("<div id='youreCorrect'><h5>That's Correct!! Great Job Wise One!</h5></div>")
    correctAnswers++;
    $("li").off("click");
    setTimeout(showQuestions, 3000);
// console log the correct answers- make sure it works
    console.log("correct " + correctAnswers);
  })

  $(".no").on("click", function(event) {

    clearInterval(timerNum);
    $("#game").append("<div id='youreWrong'><h5>Sorry, the correct answer is " + answerIs + ".</h5></div>")
    incorrectAnswers++;
    $("li").off("click");
    setTimeout(showQuestions, 3000);

    console.log("incorrect " + incorrectAnswers);
  })

  $(".newGame").on("click", function(event) {
  $("#results").remove();
  initializeNewGame();
})
//close reponses
}






//close it all here

})
