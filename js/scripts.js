var trackSuggest = function(apps, mobile, large, design,software) {
  if (apps === true) {
    if (mobile,software === true) {
      $("#java").show();
    } else if (large === true) {
      $("#c-sharp").show();
    } else {
      $("#ruby").show();
    }
  } else if (design === true) {
    $("#css").show();
  }  else {
    $("#php").show();
  }
};

$(document).ready(function() {

  $("#submit-survey").click(function() {
    $(".survey-result").hide();

    //click events */
    var apps = $('#apps').is(':checked');
    var mobile = $('#mobile').is(':checked');
    var large = $('#large').is(':checked');
    var design = $('#design').is(':checked');
    var problem = $('#problem').is(':checked');
    var software= $('#software').is(':checked');

    trackSuggest(apps, mobile, large, design,software);

  });

});
