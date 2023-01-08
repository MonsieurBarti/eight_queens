const eightQueens = (board = [], queens = 0) => {
	if (queens == 8) {
		console.log(...board);
	} else {
		for (let column = 0; column < 8; column++) {
			if (!board.includes(column)) {
				const newBoard = board.slice();
				newBoard.push(column);
				if (isValid(newBoard)) {
					eightQueens(newBoard, queens + 1);
				}
			}
		}
	}
};

const isValid = board => {
	for (let i = 0; i < board.length; i++) {
		for (let j = i + 1; j < board.length; j++) {
			if (board[i] == board[j] || board[i] - board[j] == i - j || board[j] - board[i] == i - j) {
				return false;
			}
		}
	}
	return true;
};

eightQueens();
