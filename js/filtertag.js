$(document).ready(function() {


  $(".btn-tag").click(function(eventObject) {
    var tag = $(this).html();
    var totalPanel = document.getElementsByClassName("panel").length;
    eventObject.preventDefault();
    for (var x = 1; x <= totalPanel; x++  ){
      if(JSON.stringify($("#project" + x ).html()).indexOf(tag) >= 0 ){
        $("#project" + x ).hide();
        $("#project" + x ).fadeIn();
      } else {
        $("#project" + x ).hide();
      };
    }
  });
});