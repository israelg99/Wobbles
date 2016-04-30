

class FrameSize {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}


var frameSizes = {
	"flare" : new FrameSize(80,80)
}



function loadSprites() {
    loadCharacters();
}

function loadCharacters() {
    loadFlare();
}

function loadFlare() {
    game.load.spritesheet('flare', '../assets/sprites/characters/flare/flare_0.png', frameSizes.flare.width, frameSizes.flare.height);
    game.load.spritesheet('flare', '../assets/sprites/characters/flare/flare_1.png', frameSizes.flare.width, frameSizes.flare.height);
    game.load.spritesheet('flare', '../assets/sprites/characters/flare/flare_2.png', frameSizes.flare.width, frameSizes.flare.height);
}




function loadAssets() {
	loadSprites();
}