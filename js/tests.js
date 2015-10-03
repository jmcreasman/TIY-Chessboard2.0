console.log(game.tracer());

(function(globals){ // IIFE
// Not this again...



var expect = chai.expect;

//test 1
it('should pass', function(){
  chai.expect(true).equals(true);
});

//test 2
it('should have a `game` in the `window`', function(){
  expect(window.game).to.be.equal(game);
  expect(game).to.be.an('object');
});

//test 3
it('should pass as a function', function(){
  expect(game.board).to.a('function');
  expect(game.reset).to.a('function');
  // initial did not make it pass
  // expect(initial).to.a('function');
});

//test 4
it('should give me a big array as the board', function(){
  var board = game.board();

  expect(board).to.be.an('array');
  expect(board).to.have.length(8);

  chai.expect(board[0]).to.be.a('array');
  chai.expect(board[0]).to.have.length(8);

  chai.expect(board[0][0]).to.be.a('string');
  chai.expect(board[0][0]).to.equal('R');

  chai.expect(board[0][0]).to.be.a('string');
  chai.expect(board[0][1]).to.equal('N');

  chai.expect(board[6][5]).to.be.a('string');
  chai.expect(board[6][5]).to.equal('p');

  chai.expect(board[4][5]).to.be.a('null');
  chai.expect(board[4][5]).to.be.null;

});

//test 5
it.skip('should move exactly one piece', function () {
    // Initialize the Environment...
    game.reset(); // Re-initialize the board...

    var board = game.board(); // Copy the board?

    // Test the Preconditions...
    expect(board[6][3]).to.equal('p');
    expect(board[4][3]).to.be.null;

    expect(game.tracer()).to.equal([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '|p|p|p|p|p|p|p|p|',
      '|r|n|b|q|k|b|n|r|',
    ].join('\n') + '\n');

    // Action to change the world...
    expect(game.applyMove(
      { rank: 6, file: 3 }, // from
      { rank: 4, file: 3 }  // to
    )).to.equal(undefined);

    var board = game.board(); // Re-copy the board?

    // Test the Postconditions...
    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.be.equal('p');

    expect(game.tracer()).to.equal([
      '|R|N|B|Q|K|B|N|R|',
      '|P|P|P|P|P|P|P|P|',
      '| | | | | | | | |',
      '| | | | | | | | |',
      '| | | |p| | | | |',
      '| | | | | | | | |',
      '|p|p|p| |p|p|p|p|',
      '|r|n|b|q|k|b|n|r|',
    ].join('\n') + '\n');

  }); // it should move a piece

  it.skip('should be able to move a different piece', function(){
      // Create the world anew (AKA Initialize Environment)
      game.reset();
      var board = game.board();

      function toTracer(rows){
        return rows.join('\n') + '\n';
      }
      // Test the Precondition...
      chai.expect(game.tracer()).to.equal(toTracer([
        '|R|N|B|Q|K|B|N|R|',
        '|P|P|P|P|P|P|P|P|',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '|p|p|p|p|p|p|p|p|',
        '|r|n|b|q|k|b|n|r|',
      ]));

      // Notes to self for later...
      // var secondMove = moves[1] = {
      //   from: { rank: 0, file: 6 },
      //   to: { rank: 2, file: 5 }
      // }

      // Action: applyMove for "Nf6" (Black kNight to f6)
      expect(game.applyMove(
        { rank: 0, file: 6 }, // from
        { rank: 2, file: 5 } // to
      )).to.be.undefined;

      // Test the Postconditions...
      chai.expect(game.tracer()).to.equal(toTracer([
        '|R|N|B|Q|K|B| |R|',
        '|P|P|P|P|P|P|P|P|',
        '| | | | | |N| | |',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '| | | | | | | | |',
        '|p|p|p|p|p|p|p|p|',
        '|r|n|b|q|k|b|n|r|',
      ]));
    });




// There's that crazy line again...
})(window || module && module.exports || this);
