$(document).ready(function(){

  $("#welcome").click(function(){
    $("#formInputSection").fadeIn(500);
    $("#welcome").hide();
  });

  $("#blanks form").submit(function(event){
    var companyInput = $("#company").val();
    var interestsInput = $("#interests").val();
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var addressInput = $("input#address").val();
    var commentsInput = $("input#comments").val();
    var importantInput = $("input#important").val();
    var styleInput = parseInt($("input:radio[name=style]:checked").val());
    var environmentInput = parseInt($("input:radio[name=environment]:checked").val());

    // adds name and email input into span for responses
    $(".name").text(nameInput);
    $(".email").text(emailInput);

    // makes try again buttons reload page
    $("#responses button").click(function(){
      location.reload();
    });

    // formulas to assign track based on form answers
    if (nameInput && emailInput) {

      if (companyInput === "start-up" && interestsInput === "apps" && styleInput + environmentInput === 9 || interestsInput === "apps" && styleInput + environmentInput === 9) {
      $("#ruby").slideDown();
      $("#formInputSection").hide();
    } else if (companyInput === "corp" && interestsInput === "business" && styleInput + environmentInput === 12 || interestsInput === "business" && styleInput === 5) {
      $("#csharp").slideDown();
      $("#formInputSection").hide();
    } else if (companyInput === "corp" && interestsInput === "android" && styleInput + environmentInput === 12 || importantInput === "job" && styleInput === 5 || interestsInput === "android" && styleInput === 5) {
      $("#java").slideDown();
      $("#formInputSection").hide();
    } else if (companyInput === "agency" && interestsInput === "websites" && styleInput + environmentInput === 9 || companyInput === "start-up" && interestsInput === "websites" && styleInput + environmentInput === 9 || interestsInput === "websites" && styleInput === 5) {
      $("#php").slideDown();
      $("#formInputSection").hide();
    } else if (interestsInput === "websites" && styleInput === 3 || interestsInput === "operate" && styleInput === 3 || interestsInput === "websites" && styleInput === 3) {
      $("#design").slideDown();
      $("#formInputSection").hide();
    } else {
      $("#trouble").slideDown();
      $("#formInputSection").hide();
    }

  } else if (nameInput){
    $("#formname").addClass("has-success");
    $("#formemail").effect("shake", { times:2 }).addClass("has-error");
  } else if (emailInput){
    $("#formemail").addClass("has-success");
    $("#formname").effect("shake", { times:2 }).addClass("has-error");
  } else {
    $("#formname").effect("shake", { times:2 }).addClass("has-error");
    $("#formemail").effect("shake", { times:2 }).addClass("has-error");
    return false;
  }
