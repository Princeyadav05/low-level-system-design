from collections import deque
from PlayingPieceX import PlayingPieceX
from PlayingPieceO import PlayingPieceO
from Player import Player
from Board import Board


class TicTacToeGame:
    def initialize_game(self):
        self.players = deque()
        cross_piece = PlayingPieceX()
        player1 = Player("Player1", cross_piece)
        noughts_piece = PlayingPieceO()
        player2 = Player("Player2", noughts_piece)
        self.players.append(player1)
        self.players.append(player2)
        self.game_board = Board(3)

    def start_game(self):
        no_winner = True
        while no_winner:
            player_turn = self.players.popleft()
            self.game_board.print_board()
            free_spaces = self.game_board.get_free_cells()
            if not free_spaces:
                no_winner = False
                continue
            print(f"Player: {player_turn.name} Enter row,column: ")
            s = input()
            values = s.split(" ")
            input_row = int(values[0])
            input_column = int(values[1])
            piece_added_successfully = self.game_board.add_piece(
                input_row, input_column, player_turn.playing_piece)
            if not piece_added_successfully:
                print("Incorrect position chosen, try again")
                self.players.appendleft(player_turn)
                continue
            self.players.append(player_turn)
            winner = self.is_there_winner(
                input_row, input_column, player_turn.playing_piece.piece_type)
            if winner:
                self.game_board.print_board()
                return player_turn.name
        return "tie"

    def is_there_winner(self, row, column, piece_type):
        row_match = True
        column_match = True
        diagonal_match = True
        anti_diagonal_match = True
        for i in range(self.game_board.size):
            if self.game_board.board[row][i] is None or self.game_board.board[row][i].piece_type != piece_type:
                row_match = False
            if self.game_board.board[i][column] is None or self.game_board.board[i][column].piece_type != piece_type:
                column_match = False
            if self.game_board.board[i][i] is None or self.game_board.board[i][i].piece_type != piece_type:
                diagonal_match = False
            if self.game_board.board[i][self.game_board.size - 1 - i] is None or self.game_board.board[i][self.game_board.size - 1 - i].piece_type != piece_type:
                anti_diagonal_match = False
        return row_match or column_match or diagonal_match or anti_diagonal_match
