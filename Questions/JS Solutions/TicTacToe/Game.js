const fs = require("fs");
const TicTacToe = require("./TicTacToe");

class Game {
    constructor() {
        this.game = new TicTacToe();
    }

    start() {
        this.readInputFromFile("input.txt");
    }

    readInputFromFile(filename) {
        const inputLines = fs.readFileSync(filename, "utf-8").split("\n");

        let player1Name, player1Character, player2Name, player2Character;

        const player1Info = inputLines.shift().split(" ");
        const player2Info = inputLines.shift().split(" ");

        player1Name = player1Info[0];
        player1Character = player1Info[1];

        player2Name = player2Info[0];
        player2Character = player2Info[1];

        this.game.initializePlayers(player1Name, player1Character, player2Name, player2Character);

        for (const input of inputLines) {
            const parts = input.split(" ");

            if (parts.length === 2) {
                // This line contains row and column for a move
                const [row, col] = parts.map(Number);

                if (this.game.isValidMove(row, col)) {
                    this.game.makeMove(row, col);

                    if (this.game.checkWin(row, col)) {
                        this.game.printBoard();
                        console.log(`${this.game.currentPlayer.name} wins!`);
                    } else if (this.game.isBoardFull()) {
                        this.game.printBoard();
                        console.log("It's a draw!");
                    } else {
                        this.game.switchPlayer();
                        this.game.printBoard();
                    }
                } else {
                    console.log("Invalid Move");
                }
            }
        }
    }
}

module.exports = Game;
