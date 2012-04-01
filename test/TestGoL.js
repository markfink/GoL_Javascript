TestCase('GameOfLifeTest', {

	testCreateBoard: function() {
		var board = new gol.Board(5, 6);
		assertEquals(5, board.width);
		assertEquals(6, board.height);
	},

	testDefaultCellStateOfANewBoardIsDead: function() {
		var board = new gol.Board(5, 6);
		assertTrue(board.isDead(1, 1));
	},
	
	testCellStateOfAAliveCellIsAlive: function() {
		var board = new gol.Board(5, 6);
		board.birth(1, 2);
		assertTrue(board.isAlive(1, 2));
	},
	
	testDefaultCellStateOfANewBoardIsNotAlive: function() {
		var board = new gol.Board(5, 6);
		assertFalse(board.isAlive(1, 1));
	},
	
	testNextGenerationOfEmptyBoardIsEmpty: function() {
		var board = new gol.Board(5, 6);
		var newBoard = board.nextGeneration();
		for (var x = 0; x < 5; x++) {
			for (var y = 0; y < 6; y++) {
				assertTrue(board.isDead(x, y));
			}
		}
	}

});
