// form submit function
$(document).ready(function() {

// form submit function
$("#question-form").submit(function(event){

  // stop form
  event.preventDefault();

  // Declaring variables and storing as integers
  var nameInput = $("#name").val();
  var answer1 = parseInt($("input[name=Question1]:checked").val());
  var answer2 = parseInt($("input[name=Question2]:checked").val());
  var answer3 = parseInt($("input[name=Question3]:checked").val());
  var answer4 = parseInt($("input[name=Question4]:checked").val());
  var answer5 = parseInt($("input[name=Question5]:checked").val());
  var result = answer1+ answer2+ answer3+ answer4+ answer5;

// Checks if the questions are all answered else give an alert message

  if (!$("input[name=Question1]:checked").val()) {
   alert('Question1 is not answered!');
   exit;
  }
  else if (!$("input[name=Question2]:checked").val()) {
   alert('Question2 is not answered!');
   exit;
  }
  else if (!$("input[name=Question3]:checked").val()) {
   alert('Question3 is not answered!');
   exit;
  }
  else if (!$("input[name=Question4]:checked").val()) {
   alert('Question4 is not answered!');
   exit;
  }
  else if (!$("input[name=Question5]:checked").val()) {
   alert('Question5 is not answered!');
   exit;
  }

// Functional logic to determine the result for which track to take
  var trackSuggest = function(answer) {
    if(answer >= 5 && answer <= 7){
      $("#track2").show();
    } else if (answer >= 8 && answer <= 11){
      $("#track1").show();
    } else if(answer >=12 && answer <=15){
      $("#track3").show();
    }
  }

  // Shows which track according to the answers provided
   trackSuggest(result);
  //  hides the question form
   $("#question-form").hide();
   // show answer-div
   $("#answer-div").fadeIn();

  //  Function when try again is clicked
 $("#try-again").click(function() {
   document.getElementById("question-form").reset();
   $("#answer-div .tracks").fadeOut();
   $("#try-again").hide();
   $("#question-form").fadeIn();
 });

});
});
