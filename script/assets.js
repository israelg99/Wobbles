

class FrameSize {
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }

    get height() { return this._height; }
    set height(height) { this._height = height; }

    get width() { return this._width; }
    set width(width) { this._width = width; }
}


var frameSizes = {
	"flare" : new FrameSize(80,80)
}


// Sprites
function loadSprites() {
    loadCharacters();
}

function loadCharacters() {
    loadFlare();
}

function loadFlare() {
    game.load.spritesheet('flare', '../assets/sprites/characters/flare/flare.png', frameSizes.flare.width, frameSizes.flare.height);
}


// Maps
function loadMaps() {
	load_JourneyVale();
}

function load_JourneyVale() {
	game.load.tilemap('journey_vale', '../assets/maps/journey_vale/journey_vale.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('journey_vale_tiles', '../assets/maps/journey_vale/Journey Vale Tiles.png');
}



// Genreal load assets function.
function loadAssets() {
	loadSprites();
	loadMaps();
}
