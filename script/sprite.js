
// Groups
var groups = {};

// Characters
var player;


class Sprite {
    constructor(frameSize, sprite) {
        this.frameSize = frameSize;
        this.sprite = sprite;
    }
}


function createGroups() {
	console.log("creating groups");

	groups.players = game.add.group();

	console.log("finished creating groups");
}

function createPlayer() {
	console.log("creating player");

	player = new Sprite(frameSizes["flare"], game.add.sprite(400, 400, 'flare', 1, groups.players));
    player.sprite.scale.set(1.5);
    player.sprite.smoothed = false;
    
    player.sprite.animations.add('breath', [0,1,2,3,2,1], 7, true);
    player.sprite.animations.add('walk', [4,5,6,7,6,5], 9, true);
    player.sprite.animations.add('run', [20,21,22], 7, true);

    console.log("finished creating player");
}