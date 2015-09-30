(function(globals){ // IIFF

it(‘should have a ‘game’ in the ‘window’’, function(){
	chai.expect(window.game).to.be.equal(game);
	chai.expect(game).an(‘object’);
	chai.expect(game.board).to.a(‘function’);
});

it(‘should give me a big array as the board’, function(){
	var = board = game.board();

	chai.expect(board()).to.be.an(‘array’);
	chai.expect(board()).to.have.length(8);
	chai.expect(board[0].to.be.a(‘array’);
	chai.expect(board[0][0].to.be.a(‘string’);
	chai.expect(board[0][0].to.equal(‘R’);
	board[0][0] = board[0][1];

it(‘should be able to move pieces’, function(){
  game.applyMove(
    {rank: ??, file: ?? },
    {rank: ??, file: ?? }
);

  chai.expect(board[0][0].to.equal('N');

  chai.expect(game.board()[0][0]).to.equal('N');
});

})(window || module && module.exports || this);
