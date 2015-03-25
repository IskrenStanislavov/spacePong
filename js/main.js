require.config({
    baseUrl: 'js',
});

define(function(require) {
	var PIXI 		= require("libs/pixi");

	var stage = new PIXI.Stage(0x000000);

	function animate() {
	    requestAnimFrame(animate);

	    // just for fun, let's rotate mr rabbit a little
	    bunny.rotation += 0.1;

	    // render the stage
	    renderer.render(stage);
	}

});
