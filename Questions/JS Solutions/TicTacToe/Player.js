class Player {
    constructor(name, character) {
        this.name = name;
        this.character = character;
    }
}

Player.Builder = class PlayerBuilder {
    constructor() {
        this.name = undefined;
        this.character = undefined;
    }

    setName(value) {
        this.name = value;
        return this;
    }

    setCharacter(value) {
        this.character = value;
        return this;
    }

    build() {
        return new Player(this.name, this.character);
    }
};

Player.DEFAULT_CHARACTERS = ["X", "O"];

module.exports = Player;
