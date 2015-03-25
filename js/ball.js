define(function(require) {
	var config		= require('config'),
// 		ndgmr 		= require('libs/ndgmr.Collision'),
		Signal 		= require('libs/signals.min');
		PIXI 		= require("libs/pixi");
		
	var Ball = function(){ //call extend the createjs.Bitmap
		PIXI.DisplayObjectContainer.apply(this);
		this.x = config.canvas.width/2;
		this.y = config.canvas.height/2;
		this.speed = 1;
		this.direction = new PIXI.Point(-1,-1);
		this.radius = config.ball.radius;
		this.init();
	};

	Ball.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

// 	Ball.prototype.moveData = function(tailIndex){
// 		return {
// 			"x": 100 - this.direction.x * tailIndex * this.speed,
// 			"y": 100 - this.direction.y * tailIndex * this.speed,
// 			"radius":tailIndex
// 		};
// 	};

	Ball.prototype.init = function(){
		this.tails = [];
		for (var i=config.ball.tailCount,tail; i>0;i-=1){
			tail = this.addChild(new PIXI.Graphics());
			this.tails.push(tail);
			tail.beginFill(0xFFFFFF).drawCircle(0,0,this.radius-i);
		}
		this.main = this.tails.pop();
	};

	Ball.prototype.move = function(){
			if (this._pause){
				return;
			}
			this.x += this.direction.x * this.speed;
			this.y += this.direction.y * this.speed;
			if (this.x < 0 + config.ball.radius){
				this.direction.x *= -1;
			}
			if (this.x >= config.canvas.width - config.ball.radius){
				this.direction.x *= -1;
			}
			if (this.y < 0 + config.ball.radius){
				this.direction.y *= -1;
			}
			if (this.y >= config.canvas.height - config.ball.radius){
				this.direction.y *= -1;
			}

	};

	$.extend(Ball.prototype, {

		_move : function(e){
			if (this._pause){
				return;
			}


			// console.log(this.ball.y, this.ball.y - this.ball.regY * this.direction.y, config.stageHeight);
			// console.log(this.ball.y, this.ball.y + this.ball.regY * this.direction.y, config.stageHeight);

// 			if (this.ball.x >= this.graphics.stageWidth) {
// 				var s = this.graphics.scores['left'];
// 				s.num += 1;
// 				s.text = s.num.toString();
// 				this.ball.x = this.graphics.stageWidth/2;
// 				this.direction.x *= -1;
// 			}

// 			if (this.ball.x <= 0) {
// 				var s = this.graphics.scores['right'];
// 				s.num += 1;
// 				s.text = s.num.toString();
// 				this.ball.x = this.graphics.stageWidth/2;
// 				this.direction.x *= -1;
// 			}

// 			//wall hit test
// 			var intersection = ndgmr.checkPixelCollision(this.ball, this.graphics.borders, 0);
// 			if (intersection) {
// 				this.direction.y *= -1;
// 			}

// 			Object.keys(this.graphics.paddles).forEach(function(key){
// 				var paddle = this.graphics.paddles[key];
// 				intersection = ndgmr.checkPixelCollision(this.ball, paddle, 0);
// 				if ( intersection ) {
// 					if (key==='left') {
// 						this.direction.x = 1;
// 					} else if (key==='right'){
// 						this.direction.x = -1;
// 					}
// 				}
// 			}.bind(this));
		},

		reset: function(){
			this.graphics.center_object_on_screen(this.ball);
		},

		pause: function(){
			this._pause = true;
		},

		resume: function(){
			this._pause = false;
		},

		'init_ball': function() {
			this.ball = this.graphics.ball;
		}

	});
	return Ball; 
});

