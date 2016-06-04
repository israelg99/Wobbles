

var player;

class Player extends Sprite {
	constructor(width, height, sprite, speed, jump) {
		// Abstract class.
		abstractClass(new.target, Player);

		super(width, height, sprite);

		this._speed = speed;

		// Refactor the physics stuff.
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

		this.sprite.body.collideWorldBounds = true;
		// End of physics stuff.

		this._states = {idle:true, isJump:true};

		this._flip = 1;

		this.jump = jump;
		this.jump.start = 0;
	}

	get speed() { return this._speed; }
	set speed(speed) { this._speed = speed; }

	get flip() { return this._flip; }
	set flip(flip) { this._flip = flip; }

	get states() { return this._states; }

	applyFlip(side) {
		this.flip = side;
		this.sprite.scale.x = this.flip * Math.abs(this.sprite.scale.x);
	}
	flipPlayer() {
		this.applyFlip(this.flip);
	}

	playAnimation(name) {

		if(this.sprite.animations.getAnimation(name).isPlaying) {
			return;
		}

		this.sprite.animations.stop();
		this.sprite.animations.getAnimation(name).play();
	}

	update() {
		this.physicsUpdate();
		this.resetStates();

		this.updateInput();

		this.updateMidAir();

		this.updateIdle();
	}

	physicsUpdate() {
		game.physics.arcade.collide(this.sprite, currentMap.collisionLayer);
	}

	resetStates() {
		this.applyIdle();
	}

	updateInput() {
		this.sprite.body.velocity.x = 0;

		this.updateWalkInput();
		this.updateJumpInput();
	}

	updateIdle() {
		if(this.states.idle) {
			this.playAnimation("breath");
		}
	}

	updateWalkInput() {
		if(keys.cursors.left.isDown && keys.cursors.right.isDown) {
			return;
		}

		if(keys.cursors.right.isDown) {
			this.flip = 1;
		} else if(keys.cursors.left.isDown) {
			this.flip = -1;
		} else {
			return;
		}

		this.sprite.body.velocity.x = this.flip * this.speed.walkingSpeed;

		if(this.sprite.body.onFloor()) {
			if(keys.shift.isDown) {
				this.sprite.body.velocity.x = this.flip * this.speed.runningSpeed;
				this.playAnimation("run");
			} else {
				this.playAnimation("walk");
			}
		}

		this.flipPlayer();

		this.notIdle()
	}

	updateJumpInput() {
		if(!keys.cursors.up.isDown) {
			this.states.isJump = false;
		}

		if(this.sprite.body.onFloor() && this.sprite.body.velocity.y == 0) {
			this.sprite.body.velocity.y = -this.jump.speed;
			this.playAnimation("jumpUp");

			this.states.isJump = true;
			this.jump.start = game.time.now;

			this.notIdle()
		} else if(this.states.isJump && this.sprite.body.velocity.y < 0 && game.time.now < this.jump.start+this.jump.duration) {
			this.sprite.body.velocity.y = -this.jump.speed;

			this.notIdle()
		} else {
			this.states.isJump = false;
		}
	}

	updateMidAir() {

		console.log("Abstract updateMidAir() is called!!")

		if(this.sprite.body.onFloor() || this.sprite.animations.getAnimation("jumpUp").isPlaying) {
			return;
		}

		if(this.sprite.body.velocity.x == 0) {
			this.playAnimation("airUp");
		} else {
			this.playAnimation("airSides");
		}
	}

	notIdle() {
		this.states.idle = false;
	}

	applyIdle() {
		if(!this.sprite.body.onFloor()) {
			this.states.idle = false;
		} else {
			this.states.idle = true;
		}
	}
}

class Flare extends Player {
	constructor(width, height, sprite, speed) {
		super(width, height, sprite, speed, {speed:400, duration:300})

		// Refactor the physics stuff.
		this.sprite.body.bounce.y = 0;
		// End of physics stuff.

		this.sprite.scale.set(1.5);
		this.sprite.smoothed = false;

		this.sprite.body.setSize(this.sprite.body.width-this.sprite.body.width/1.5, this.sprite.body.height-this.sprite.body.height/6)

		this.setupAnimations();
		this.setupFrames();
	}

	setupAnimations() {
		this.sprite.animations.add('breath', [0,1,2,3,2,1], 7, true);
		this.sprite.animations.add('walk', [4,5,6,7,6,5], 9, true);
		this.sprite.animations.add('run', [20,21,22], 7, true);

		this.sprite.animations.add('jumpUp', [60,61,62], 13, false);
		this.sprite.animations.add('jumpSide', [60,61,63,112], 13, false);

		this.sprite.animations.add('punch1', [10,11,12], 8.5, false);
		this.sprite.animations.add('punch2', [51,52], 6, false);
		this.sprite.animations.add('uppercut', [12,13], 7, false);
		this.sprite.animations.add('round_kick', [49,39,29,19,18,17], 8.5, false);

		this.sprite.animations.add('fall_back', [30,31,32,33,35,34], 10, false);
		this.sprite.animations.add('fall_forward', [40,41,42,43,45,44], 10, false);

		this.sprite.animations.add('hurt', [46,47,48], 5, false);
	}

	setupFrames() {
		this.airUpFrame = 62;
		this.airSidesFrame = 112;
	}

	updateMidAir() {
		if(this.sprite.body.onFloor() || this.sprite.animations.getAnimation("jumpUp").isPlaying) {
			return;
		}

		if(this.sprite.body.velocity.x == 0) {
			this.sprite.frame = this.airUpFrame;
		} else {
			this.sprite.frame = this.airSidesFrame;
		}
	}
}


function createPlayer() {
	console.log("creating player");

	player = new Flare(frameSizes["flare"].width, frameSizes["flare"].height, game.add.sprite(100, 3300, 'flare', 1, groups.players), {walkingSpeed: 180, runningSpeed: 300});

	console.log("finished creating player");
}
