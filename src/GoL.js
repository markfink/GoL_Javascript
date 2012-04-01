gol = (function() {

	var Board = function(width, height) {
		this.width = width;
		this.height = height;
		
		var array = [];
		for (var i = 0; i < height; i++) {
			var row = [];
			for (var j = 0; j < width; j++) {
				row.push(false);
			}
			array.push(row);
		}
		this.array = array;
	}
	
	Board.prototype.isAlive = function(x, y) {
		return this.array[y][x];
	}
	
	Board.prototype.isDead = function(x, y) {
		return !this.isAlive(x, y);
	}
	
	Board.prototype.birth = function(x, y) {
		this.array[y][x] = true;
	}

	Board.prototype.nextGeneration = function() {
		var newBoard = new Board(this.width, this.height);
		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
			    var non = this.countNeighbors(x, y);
			    if (non == 3 || (non == 2 && this.isAlive(x, y))) {
			        newBoard.birth(x, y);
			    }
			}
		}
		return newBoard;
	}
	
	Board.prototype.countNeighbors = function(x, y) {
	    var count = 0;
	    for (var i=-1; i<2; i++) {
	        for (var j=-1; j<2; j++) {
	            if (!(i == 0 && j == 0)) {
    	            a = x + i;
	                b = y + j;
	                if (a == -1) {a = this.width -1;}
	                if (b == -1) {b = this.height -1;}
	                if (a == this.width) {a = 0;}
	                if (b == this.height) {b = 0;}
	                if (this.isAlive(a, b)) {count++;}
	            }
	        }
	    }
		return count;
	}
	
	Board.prototype.batch = function(cells) {
        //jstestdriver.console.log('Moin, moin');
	    for (var i=0; i<cells.length; i++) {
	        this.birth(cells[i][0], cells[i][1]);
	    }
    }
    
    Board.prototype.toString = function() {
        return this.array.toString();
    }


	return {'Board': Board}

}());
