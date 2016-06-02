
var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	console.log("preload");

    loadAssets();

    console.log("finished preload");
}

function create() {
	console.log("create");

	createPhysics(1200);

	createBackground('#000000');

	createGroups();

	createPlayer();

	addMaps();
	setCurrentMap(maps.journeyVale)

	setupCamera(player.sprite);

	createInput();

	console.log("finished create");
}

function update() {
	// If we log here, it will spam the whole console, trust me, it works :)

	player.update();

}


function createBackground(color) {
	game.stage.backgroundColor = color;
}

function createPhysics(gravity) {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = gravity;
}

function setupCamera(followSprite) {
	game.camera.follow(followSprite, Phaser.Camera.FOLLOW_PLATFORMER);
}
