$(document).ready(function() {
  $("#order").click(function() {
    $("#blanks").show();
    $("#submit2").show();
    event.preventDefault();
  });


  var baby = $("#submit2").click(function() {
    var things = [$("#name").val(), $("#lastName").val(), $("#address").val()];
    $(".list").append("<li>" + things + "</li>");
    window.print();
  });



});
