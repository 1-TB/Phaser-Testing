var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
this.load.image("background", "src/img/background.png");
this.load.image("city", "src/img/foregroundcity.png")

}

function create ()
{
this.add.image(400, 300, "background").setScale(4);
this.add.image(400, 445, "city").setScale(3);

}

function update ()
{
}