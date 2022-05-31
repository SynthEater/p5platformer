const wnX = window.innerWidth;
const wnY = window.innerHeight;

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
    for (let i = 0; i < nbPlat; i++) {

        plat.push(new Plat(((((i + 1) * ecart) + (wnX - 39)) - wnX + startTime), random(300, 420)));
    }

    //generating ground with a platform
    plat[nbPlat] = new Plat(0, wnY - 200);

    plat[nbPlat].width = levelWidth;
    plat[nbPlat].height = wnY - 200;


    //generating player
    player = new Player(50, wnY - 236);
}

function draw() {
    background(51);

    //ground.render();
    player.render();

    for (let i = 1; i < plat.length; i++) {
        plat[i].render();
        plat[i].move();
    }
}