

class TiledMap {
    constructor(tiled_map) {
        this._map = tiled_map
    }

    get map() { return this._map; }
    set map(map) { this._map = map; }
}

var maps = {};
var currentMap;

function addMaps() {
	console.log("adding maps");

	add_JourneyVale();

	console.log("finished adding maps");
}

function add_JourneyVale() {
	console.log("adding Joruney Vale");

	maps.journeyVale = new TiledMap(game.add.tilemap("journey_vale"));
	maps.journeyVale.map.addTilesetImage("Journey Vale Tiles", "journey_vale_tiles", 128, 128);
	maps.journeyVale.map.setCollisionByExclusion([]);
	maps.journeyVale.collisionLayer = maps.journeyVale.map.createLayer('Collision Layer');

	// Match world size to the collision layer.
	maps.journeyVale.collisionLayer.resizeWorld();

	// DEBUGGING.
	//maps.journeyVale.collisionLayer.debug = true;

	console.log("finished adding Joruney Vale");
}

function setCurrentMap(map) {
	currentMap = map;
}