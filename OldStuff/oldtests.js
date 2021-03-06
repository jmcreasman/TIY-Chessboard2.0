(function(globals){ // IIFE
// Not this again...

  it('should totally fail', function(){
    chai.expect(false).equals(true);
  })
  var expect = chai.expect;

  it('should have a `game` in the `window`', function(){
    chai.expect(window.game).to.be.equal(game);
    chai.expect(game).to.be.an('object');
    chai.expect(game.board).to.a('function'); // ???
  });

  it('should give me a big array as the board', function(){
    var board = game.board();

    chai.expect(board).to.be.an('array');
    // chai.expect(game.board().length).to.be.equal(8);
    chai.expect(board).to.have.length(8);

    chai.expect(board[0]).to.be.a('array');
    chai.expect(board[0]).to.have.length(8);

    chai.expect(board[0][0]).to.be.a('string');
    chai.expect(board[0][0]).to.equal('R');

  }); // END it should be a big Array

  // it('should be able to move pieces', function(){
  //   //Pre conditions...
  //   game.reset(); //Re-initialize the board...
  //   var board = game.board();
  //   expect(board[6][3]).to.equal('p');
  //   expect(board[4][3]).to.be.null;
  //
  //   // Action to change the world...
  //   expect(game.applyMove(
  //     { rank: 6, file: 3 }, // from
  //     { rank: 4, file: 3 } // to
  //   ));.to.equal(undefined);
  //
  //   // Post conditions...
  //   var board = game.board();
  //
  //   chai.expect(board[6][3]).to.be.null;
  //   chai.expect(board[4][3]).to.be.equal('p');
  //
  //
  // });
  it('should be able to move pieces', function () {
    // won't pass yet until you update main.js acordingly
    // Pre conditions...
    game.reset(); // Re-initialize the board...
    var board = game.board();
    expect(board[6][3]).to.equal('p');
    expect(board[4][3]).to.be.null;

    // Action to change the world...
    expect(game.applyMove(
      { rank: 6, file: 3 }, // from
      { rank: 4, file: 3 }  // to
    )).to.equal(undefined);

    // Post conditions...
    var board = game.board();

    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.be.equal('p');
  });

  it.skip('should be able to assign the from piece to null', function() {
    chai.expect(game.applyMove()).to.deep.equal(null);
  });

  it.skip('should be able to advance to the next move', function(){
    // TODO: Maybe I should write some tests for this?
  });

// There's that crazy line again...
})(window || module && module.exports || this);
