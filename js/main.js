let wnX = window.innerWidth;
let wnY = window.innerHeight;

//platforms variables
let plat = [];
let nbPlat = 20;
let ecart = 400;
let startTime = 420;

// ground variables
let ground;
let levelWidth = wnX * 20;

//player variables
let player;

function setup() {
    createCanvas(wnX, wnY);

    //generating platforms
    for (let i = 1; i < nbPlat; i++) {
        plat[i] = new Plat((((i * ecart) + (wnX - 39)) - wnX + startTime), random(300, 420));
    }
    //generating ground
    ground = new Ground(0, wnY - 200, levelWidth, wnY - 200);

    //generating player
    player = new Player(50, wnY - 236);
}

function draw() {
    background(51);

    ground.render();
    player.render();

    for (let j = 1; j < nbPlat; j++) {
        plat[j].render();
        plat[j].move();
    }


}