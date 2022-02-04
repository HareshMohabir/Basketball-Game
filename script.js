$(".start-button").click(function() {
   $(".clue-container").slideDown();
   $(".opening-screen").slideUp();
   $(".button").hide();
   
});

$(".image-1").click(function() {
  $(".clue-container2").slideDown();
  $(".clue-container").slideUp();
});

$(".second-button").click(function() {
    $(".clue-container3").slideDown();
    $(".clue-container").slideUp();
    $(".clue-container2").slideUp();
});

$(".third-button").click(function() {
    $(".clue-container5").slideDown();
    $(".clue-container3").slideUp();
    
});
$(".image-2").click(function() {
  $(".clue-container4").slideDown();
  $(".clue-container2").slideUp();
});

$(".image-3").click(function() {
  $(".conclusion").slideDown();
  $(".clue-container4").slideUp();
});

$(".image-4").click(function() {
  $(".conclusion").slideDown();
  $(".clue-container5").slideUp();
});