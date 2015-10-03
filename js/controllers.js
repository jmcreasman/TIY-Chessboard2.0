(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  // function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  // }


  $("#next").click(function(){
    // TODO: Fire tracer bullet!
    console.log("tracer bullet!");
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    game.next();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  $("#previous").click(function(){
    // TODO: Fire tracer bullet!
    console.log("tracer bullet!");
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    game.prev();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  $("#fast_foward").click(function(){
    // TODO: Fire tracer bullet!
    console.log("tracer bullet!");
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    game.end();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  $("#rewind").click(function(){
    // TODO: Fire tracer bullet!
    console.log("tracer bullet!");
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
