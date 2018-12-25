var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scaleMode: 3,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
}

function create ()
{
    //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}

function update ()
{
}