$(document).ready(function () {

  $(".submit form").submit(function (event) {
    var results = $("input#something").val().toUpperCase();
    $("#result").text(results);

    $(".results").show();

    event.preventDefault();
  });
});