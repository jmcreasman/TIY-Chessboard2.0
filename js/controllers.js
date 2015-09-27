var currentMove = 0;
var totalMoves = 9;


$("#next").click(function() {
  var currentId = "#move_" + currentMove;
  var nextId = currentId;
  //makes sure it doesn't go over the total number of moves in this game
  // "I have another move to make"
  if (currentMove < totalMoves) {
    ++currentMove;
    nextId = "#move_" + currentMove;

    $(currentId).addClass("hideMove");
    $(nextId).removeClass("hideMove");
  }
});

$("#previous").click(function() {
  var currentId = "#move_" + currentMove;
  var previousId = currentId;
  //makes sure it doesn't go over the total number of moves in this game
  // "I have another move to make"
  if (currentMove > 0) {
    --currentMove;
    previousId = "#move_" + currentMove;

    $(currentId).addClass("hideMove");
    $(previousId).removeClass("hideMove");
  }
});

$("#rewind").click(function() {
  currentMove = 0;
  $("#move_0").removeClass("hideMove");
  $("#move_1").addClass("hideMove");
  $("#move_2").addClass("hideMove");
  $("#move_3").addClass("hideMove");
  $("#move_4").addClass("hideMove");
  $("#move_5").addClass("hideMove");
  $("#move_6").addClass("hideMove");
  $("#move_7").addClass("hideMove");
  $("#move_8").addClass("hideMove");
  $("#move_9").addClass("hideMove");
});

$("#fast_foward").click(function() {
  currentMove = 9;
  $("#move_0").addClass("hideMove");
  $("#move_1").addClass("hideMove");
  $("#move_2").addClass("hideMove");
  $("#move_3").addClass("hideMove");
  $("#move_4").addClass("hideMove");
  $("#move_5").addClass("hideMove");
  $("#move_6").addClass("hideMove");
  $("#move_7").addClass("hideMove");
  $("#move_8").addClass("hideMove");
  $("#move_9").removeClass("hideMove");
});
