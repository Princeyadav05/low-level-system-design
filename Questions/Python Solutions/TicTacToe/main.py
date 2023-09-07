from Game import TicTacToeGame

def main():
    game = TicTacToeGame()
    game.initialize_game()
    print("Game winner is:", game.start_game())

if __name__ == "__main__":
    main()
