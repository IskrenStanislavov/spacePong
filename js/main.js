require.config({
    baseUrl: 'js',
});

define(function(require) {
	var PIXI 		= require("libs/pixi");
	var Ball        = require("ball");
	var config      = require("config");

	var stage = new PIXI.Stage(0x000000);
	var ball = stage.addChild(new Ball());
    var renderer = PIXI.autoDetectRenderer(config.canvas.width, config.canvas.height);
    document.body.appendChild(renderer.view);
    requestAnimFrame(animate);
	function animate() {
		ball.move();
	    renderer.render(stage);
	    requestAnimFrame(animate);
	}

});
