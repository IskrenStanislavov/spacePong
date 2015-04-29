define(function(require) {
	var config		= require('config'),
		Signal 		= require('libs/signals.min');
		PIXI 		= require("libs/pixi");
		
	var Paddle = function(){
		PIXI.DisplayObjectContainer.apply(this);
		this.color = 0xFFFFFF;
		this.r = config.ball.radius;
		this.d = 2*this.r;
		this.w = this.d;
		this.h = 100;
		this.alpha = 1;
		var p1 = new PIXI.Point(this.r, this.r);
		var p2 = new PIXI.Point(this.r, this.r+this.h);
		this.graphics = this.addChild(new PIXI.Graphics())
			.beginFill(this.color)
			.drawCircle(p1.x, p1.y, this.r)
			.drawCircle(p1.x, p2.y, this.r)
			.lineStyle(this.w, this.color, this.alpha)
			.moveTo(p1.x, p1.y).lineTo(p2.x,p2.y).endFill();

		this.x = 0;
		this.y = 0;
		this.speed = config.ball.speed;
		this.direction = config.ball.direction;
		this.radius = config.ball.radius;
		this._pause = false;
		
	};

	Paddle.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

	Paddle.prototype.move = function(){
		if (this._pause){
			return;
		}
		this.shadowPositions.push(new PIXI.Point(this.x, this.y));
		this.shadowPositions = this.shadowPositions.slice(-config.paddle.tailCount+1);
		this.shadowPositions.forEach(function(pos, i) {
			this.tails[i].x = -(this.x - pos.x);
			this.tails[i].y = -(this.y - pos.y);
		}.bind(this));
		this.x += this.direction.x * this.speed;
		this.y += this.direction.y * this.speed;
		if (this.x < 0 + config.paddle.radius + config.players.area){ //left
			this.direction.x *= -1;
		}
		if (this.x >= config.canvas.width - config.paddle.radius - config.players.area){ // right
			this.direction.x *= -1;
		}
		if (this.y < 0 + config.paddle.radius){//up
			this.direction.y *= -1;
		}
		if (this.y >= config.canvas.height - config.paddle.radius){//down
			this.direction.y *= -1;
		}
	};

	return Paddle;
});
