// $("#rewind").click(function() {
//   console.log("rewind")
// });
//
// $("#step_back").click(function() {
//   console.log("stepback")
// });
//
// $("#play_pause").click(function() {
//   console.log("play/pause")
// });
//
// $("#step_foward").click(function() {
//   console.log("stepfoward")
// });
//
// $("#fast_foward").click(function() {
//   console.log("fastfoward")
// });
var currentMove = 0;
var totalMoves = 3;


$("#next").click(function() {
  var currentId = "#move_" + currentMove;
  var nextId = currentId;
  //makes sure it doesn't go over the total number of moves in this game
  // "I have another move to make"
  if (currentMove < totalMoves) {
    ++currentMove;
    nextId = "#move_" + currentMove;

    $(currentId).removeClass("showMove");
    $(currentId).addClass("hideMove");

    $(nextId).removeClass("hideMove");
    $(nextId).addClass("showMove");
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

    $(currentId).removeClass("showMove");
    $(currentId).addClass("hideMove");

    $(previousId).removeClass("hideMove");
    $(previousId).addClass("showMove");
  }
});

// $("#play_pause").click(function() {
//   $('#start').removeClass('start')
//   $('#move_1').addClass('white1')
// });
// $("#move_1").click(function() {
//   $('#start').addClass('start')
//   $('#move_1').removeClass('white1')
// });
