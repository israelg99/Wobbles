
// Groups
var groups = {};


class Sprite extends FrameSize {
    constructor(width, height, sprite) {
        super(width, height);
        this._sprite = sprite;

        this.sprite.anchor.setTo(0.5);
    }

    get sprite() { return this._sprite; }
    set sprite(sprite) { this._sprite = sprite; }
}


function createGroups() {
	console.log("creating groups");

	groups.players = game.add.group();

	console.log("finished creating groups");
}