define(function(){
	var squareSize = Math.min(window.innerWidth, window.innerHeight) *0.9;
	var PIXI 		= require("libs/pixi");
	var height = squareSize * 2 /3;
	return {
		"canvas": {
			"id": "game",
			"width": squareSize,
			"height": height,
		},
		"ball": {
			"speed":2,
			"radius": 10,
			"tailCount": 10,
			"direction": new PIXI.Point(-2,-1),
			"x": squareSize/2,
			"y": height/2,
		},
		"players":{
			"area":0,//width
		},
	};
})
