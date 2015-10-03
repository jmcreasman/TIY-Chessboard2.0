(function(globals){
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [
    { from: { rank: 6, file: 3 },
      to: { rank: 4, file: 3 } },
    { from: { rank: 0, file: 6 },
      to: { rank: 2, file: 5 } },
    { from: { rank: 6, file: 2 },
      to: { rank: 4, file: 2 } },
    { from: { rank: 1, file: 4 },
      to: { rank: 2, file: 4 } },
    { from: { rank: 6, file: 6 },
      to: { rank: 5, file: 6 } },
    { from: { rank: 1, file: 3 },
      to: { rank: 3, file: 3 } },
    { from: { rank: 7, file: 5 },
      to: { rank: 6, file: 6 } },
    { from: { rank: 0, file: 5 },
      to: { rank: 1, file: 4 } },
    { from: { rank: 7, file: 6 },
      to: { rank: 5, file: 5 } }
  ]; // END moves

// TODO: do we need this? Yes
  var current = 0;
  // var currentMove = 0;
  var totalMoves = 9;
  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();

      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      var currentMove = moves[current].from;
      var nextMove = moves[current].to;
      console.log(game.tracer(game.applyMove));
      if (current < totalMoves) {
        ++current;

      game.applyMove(currentMove, nextMove);
      }
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      // Another good place for code...
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function(from, to){
      board[to.rank][to.file] = board[from.rank][from.file];
      board[from.rank][from.file] = null;
      console.log(game.tracer(game.applyMove));
      // board[4][3] = board[6][3];
      // board[6][3] = null;
      // board[2][5] = board[0][6];
      // board[0][6] = null;
    } // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
