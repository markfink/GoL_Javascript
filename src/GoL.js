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
		return new Board(this.width, this.height);
	}
	
	return {'Board': Board}

}());
