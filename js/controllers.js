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
    console.log("tracer bullet!");
    game.next();
  });

  $("#previous").click(function(){
    console.log("tracer bullet!");
    game.prev();
  });

  $("#fast_foward").click(function(){
    console.log("tracer bullet!");
    game.end();
  });

  $("#rewind").click(function(){
    console.log("tracer bullet!");
    game.reset();
  });
// Am I supposed to recognize this?
})(window || module && module.exports || this)
