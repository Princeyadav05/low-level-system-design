from collections import deque
from PlayingPiece import PlayingPiece
from Player import Player
from Board import Board
from PieceType import PieceType


class TicTacToeGame:
    def initialize_game(self):
        self.players = deque()
        self.piece_types = list(PieceType)  # Add more piece types here

        print(self.piece_types)
        piece_choices = set()  # To keep track of chosen piece types

        for i in range(1, len(self.piece_types) + 1):
            player = Player(f"Player {i}")
            available_pieces = [piece for piece in self.piece_types if piece.value not in piece_choices]

            if not available_pieces:
                print("All available piece types have been chosen.")
                break

            print("Available piece types:", [piece.value for piece in available_pieces])
            player_piece_type = input(f"{player.name}, choose your piece type: ")

            while player_piece_type not in [piece.value for piece in available_pieces]:
                print("Invalid piece type. Choose from available types.")
                player_piece_type = input(f"{player.name}, choose your piece type: ")

            piece_choices.add(player_piece_type)  # Add the chosen piece type to the set
            player.set_playing_piece(PlayingPiece(player_piece_type))
            self.players.append(player)

        self.game_board = Board(len(self.piece_types) + 1)

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

            if not (0 <= input_row < self.game_board.size) or not (0 <= input_column < self.game_board.size):
                print("Invalid position. Row and column values must be within the board's range.")
                self.players.appendleft(player_turn)
                continue

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
