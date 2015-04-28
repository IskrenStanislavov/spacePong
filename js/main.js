require.config({
    baseUrl: 'js',
});

define(function(require){
    require("libs/TweenMax.min");

    var PIXI        = require("libs/pixi");
    var config      = require("config");
    var App         = require("app");


    var stage = new PIXI.Stage(0x39435E);
    var renderer = PIXI.autoDetectRenderer(config.canvas.width, config.canvas.height, {
        "roundPixels": true,
        "antialias": true
    });

    document.body.appendChild(renderer.view);

    var loader = new PIXI.AssetLoader([
        "images/spacer.png",
        ]);

    loader.onComplete = function(){
        requestAnimFrame(animate);
        var app = stage.addChild(new App());
        window.app = app;
        setTimeout(function(){
            app.ball._pause = true;
        }, 200);
        function animate(){
            app.ball.move();
            renderer.render(stage);
            requestAnimFrame(animate);
        }
    };

    loader.load();

});
