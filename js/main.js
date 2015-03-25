require.config({
    baseUrl: 'js',
});

define(function(require) {
	var PIXI 		= require("libs/pixi");
	var Ball        = require("ball");

	var stage = new PIXI.Stage(0x000000);
	var ball = stage.addChild(new Ball());
    var renderer = PIXI.autoDetectRenderer(400, 300);
    document.body.appendChild(renderer.view);
    requestAnimFrame(animate);
	function animate() {
	    renderer.render(stage);
	    requestAnimFrame(animate);
	}

});
