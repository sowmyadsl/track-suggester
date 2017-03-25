$(document).ready(function() {
$("#question-form").submit(function(event){




  event.preventDefault();

  var answer1 = parseInt($("input[name=Question1]:checked").val());
  var answer2 = parseInt($("input[name=Question2]:checked").val());
  var answer3 = parseInt($("input[name=Question3]:checked").val());
  var answer4 = parseInt($("input[name=Question4]:checked").val());
  var answer5 = parseInt($("input[name=Question5]:checked").val());
  var result = answer1+ answer2+ answer3+ answer4+ answer5;

  var trackSuggest = function(answer) {
    if(answer >= 5 && answer <= 7){
      $("#track2").show();
    } else if (answer >= 8 && answer <= 11){
      $("#track1").show();
    } else if(answer >=12 && answer <=15){
      $("#track3").show();
    }
  }

  $("#question-form").hide();
  trackSuggest(result);
  $("#question.form").show();
  $('#question-form > input[type=reset]').trigger('click'); //with a reset button in the form set to display: none;

});
});
