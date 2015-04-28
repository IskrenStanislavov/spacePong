define(function(require) {
	var PIXI 		= require("libs/pixi");
	var Ball        = require("ball");
	var config      = require("config");

	var App = function(){
        PIXI.DisplayObjectContainer.call(this);
		this.ball = this.addChild(new Ball());

	};
    App.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

	return App;
});
