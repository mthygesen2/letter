$(function(){

  $("form#userinfo").submit(function(event) {
    var nameInput = $("input#name").val();

    $("#namehere").text(nameInput);

    $("p").show();
    event.preventDefault();
  });

});
