
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

    player.sprite.animations.add('punch1', [10,11,12], 8.5, false);
    player.sprite.animations.add('punch2', [51,52], 6, false);
    player.sprite.animations.add('uppercut', [12,13], 7, false);
    player.sprite.animations.add('round_kick', [49,39,29,19,18,17], 8.5, false);

    player.sprite.animations.add('fall_back', [30,31,32,33,35,34], 10, false);
    player.sprite.animations.add('fall_forward', [40,41,42,43,45,44], 10, false);

    player.sprite.animations.add('hurt', [46,47,48], 5, false);


    console.log("finished creating player");
}