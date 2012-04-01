TestCase('GameOfLifeTest', {

	testCreateBoard: function() {
		var board = new gol.Board(5, 6);
		assertEquals(5, board.width);
		assertEquals(6, board.height);
	},

	testDefaultCellStateOfANewBoardIsDead: function() {
		var board = new gol.Board(5, 6);
		for (var x = 0; x < 5; x++) {
			for (var y = 0; y < 6; y++) {
				assertTrue(board.isDead(x, y));
			}
		}
	},
	
	testIsAlive: function() {
		var board = new gol.Board(5, 6);
		assertFalse(board.isAlive(1, 1));
	},
	
	testCellStateOfAAliveCellIsAlive: function() {
		var board = new gol.Board(5, 6);
		board.birth(1, 2);
		assertTrue(board.isAlive(1, 2));
	},
	
	testNextGenerationOfEmptyBoardIsEmpty: function() {
		var board = new gol.Board(5, 6);
		var newBoard = board.nextGeneration();
		for (var x = 0; x < 5; x++) {
			for (var y = 0; y < 6; y++) {
				assertTrue(board.isDead(x, y));
			}
		}
	},
	
	testOneAliveCellWithoutNeighborsDiesInNextGeneration: function() {
		var board = new gol.Board(5, 6);
		board.birth(1, 2);
		var newBoard = board.nextGeneration();
    	assertTrue(newBoard.isDead(1, 2));
	},

    testCountNeighbors: function() {
        var board = new gol.Board(5, 6);
        board.batch([[1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1],
            [3, 2], [3, 3]]);
		assertEquals(8, board.countNeighbors(2, 2));
    },

    testCountNeighborsUpperLeftEdge: function() {
        var board = new gol.Board(5, 6);
        board.batch([[0, 1], [0, 5], [1, 0], [1, 1], [1, 5], [4, 0],
            [4, 1], [4, 5]]);
		assertEquals(8, board.countNeighbors(0, 0));
    },

    testCountNeighborsLowerRightEdge: function() {
        var board = new gol.Board(5, 6);
        board.batch([[0, 0], [0, 4], [0, 5], [3, 0], [3, 4], [3, 5],
            [4, 0], [4, 4]]);
		assertEquals(8, board.countNeighbors(4, 5));
    },

    testBatchWithOneElement: function() {
        var board = new gol.Board(5, 6);
		board.batch([[1, 2]]);
    	assertTrue(board.isAlive(1, 2));
    },

    testBatchWithNoElement: function() {
        var board = new gol.Board(5, 6);
		board.batch([]);
		for (var x = 0; x < 5; x++) {
			for (var y = 0; y < 6; y++) {
				assertTrue(board.isDead(x, y));
			}
		}
    },

    testBlinkerInNextGeneration: function() {
		var board = new gol.Board(5, 6);
		board.batch([[1, 2], [2, 2], [3, 2]]);
		var newBoard = board.nextGeneration();
        //jstestdriver.console.log('moin', newBoard.toString());
    	assertTrue(newBoard.isDead(1, 2));
    	assertTrue(newBoard.isDead(3, 2));
    	assertTrue(newBoard.isAlive(2, 1));
    	assertTrue(newBoard.isAlive(2, 2));
    	assertTrue(newBoard.isAlive(2, 3));
	},	


});
