
// Groups
var groups = {};

// Characters
var player;


class Sprite {
    constructor(frameSize, sprite) {
        this.frameSize = frameSize;
        this.sprite = sprite;

        this.animations = [];
    }
}


function createGroups() {
	groups.players = game.add.group();
}

function createPlayer() {
	player = new Sprite(frameSizes["flare"], game.add.sprite(400, 400, 'flare', 1, groups.players));
    player.sprite.scale.set(1.5);
    player.sprite.smoothed = false;
    
    player.animations.push({"breath":player.sprite.animations.add('breath', [1,2,3,4], 120)});
    player.animations.push({"walk":player.sprite.animations.add('walk', [5,6,7,8], 60)});
}