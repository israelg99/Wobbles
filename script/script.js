
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	console.log("preload");

    loadAssets();

    console.log("finished preload");
}

function create() {
	console.log("create");

	createGroups();

	createPlayer();

	player.animations.breath.play();

	console.log("finished create");
}

function update() {
	// If we log here, it will spam the whole console, trust me, it works :)

}