define(function(require) {
	var config		= require('config'),
// 		ndgmr 		= require('libs/ndgmr.Collision'),
		Signal 		= require('libs/signals.min');
		PIXI 		= require("libs/pixi");
		
	var Ball = function(){ //call extend the createjs.Bitmap
		PIXI.DisplayObjectContainer.apply(this);
		this.x = config.ball.x;
		this.y = config.ball.y;
		this.speed = config.ball.speed;
		this.direction = config.ball.direction;
		this.radius = config.ball.radius;
		this._pause = false;
		this.init();
	};

	Ball.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

	Ball.prototype.init = function(){
		this.tails = [];
		this.oldPositions = [];
		for (var i=config.ball.tailCount,tail; i>0;i-=1){
			tail = this.addChild(new PIXI.Graphics());
			this.tails.push(tail);
			tail.alpha = 0.05*(config.ball.tailCount-i);
			tail.beginFill(0xFFFFFF).drawCircle(0,0,this.radius-i);
			// tail.cacheAsBitmap = true;
		}
		this.main = this.tails.pop();
		this.main.alpha=1;
	};

	Ball.prototype.move = function(){
		if (this._pause){
			return;
		}
		this.oldPositions.push(new PIXI.Point(this.x, this.y));
		this.oldPositions = this.oldPositions.slice(-config.ball.tailCount+1);
		this.x += this.direction.x * this.speed;
		this.y += this.direction.y * this.speed;
		if (this.x < 0 + config.ball.radius + config.players.area){ //left
			this.direction.x *= -1;
			// console.log("hit:(", this.x, this.y,")",config.canvas.width);
		}
		if (this.x >= config.canvas.width - config.ball.radius - config.players.area){ // right
			this.direction.x *= -1;
		}
		if (this.y < 0 + config.ball.radius){//up
			this.direction.y *= -1;
		}
		if (this.y >= config.canvas.height - config.ball.radius){//down
			this.direction.y *= -1;
		}
		this.oldPositions.forEach(function(pos, i) {
			this.tails[i].x = -(this.x - pos.x);
			this.tails[i].y = -(this.y - pos.y);
		}.bind(this));
	};

	return Ball; 
});

