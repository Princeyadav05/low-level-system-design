const Player = require("./Player");

class TicTacToe {
    constructor() {
        this.board = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ];
        this.currentPlayer = null;
        this.players = [];
        this.winner = null;
        this.isDraw = false;
    }

    initializePlayers(player1Name, player1Character, player2Name, player2Character) {
        const player1 = new Player(player1Name, player1Character || Player.DEFAULT_CHARACTERS[0]);
        const player2 = new Player(player2Name, player2Character || Player.DEFAULT_CHARACTERS[1]);

        if (player1.character === player2.character) {
            console.log("Players cannot have the same character.");
            return;
        }

        this.players = [player1, player2];
        this.currentPlayer = player1;
    }

    isValidMove(row, col) {
        return row >= 1 && row <= 3 && col >= 1 && col <= 3 && this.board[row - 1][col - 1] === " ";
    }

    makeMove(row, col) {
        this.board[row - 1][col - 1] = this.currentPlayer.character;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    }

    isBoardFull() {
        return this.board.every((row) => row.every((cell) => cell !== " "));
    }

    checkWin(row, col) {
        const playerChar = this.currentPlayer.character;

        const rowWin = this.board[row - 1].every((cell) => cell === playerChar);
        const colWin = this.board.every((row) => row[col - 1] === playerChar);
        const diagonalWin1 = this.board.every((row, i) => row[i] === playerChar);
        const diagonalWin2 = this.board.every((row, i) => row[2 - i] === playerChar);

        return rowWin || colWin || diagonalWin1 || diagonalWin2;
    }

    printBoard() {
        console.log("\n   1   2   3");
        console.log("1  " + this.board[0].join(" | "));
        console.log("  -----------");
        console.log("2  " + this.board[1].join(" | "));
        console.log("  -----------");
        console.log("3  " + this.board[2].join(" | "));
        console.log("\n");
    }
}

module.exports = TicTacToe;
