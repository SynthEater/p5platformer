let wnX = window.innerWidth;
let wnY = window.innerHeight;
let plat = [];
let nbPlat = 6;

function setup() {
    createCanvas(wnX, wnY);

    //generating platforms
    for (let i = 1; i < nbPlat; i++) {
        plat[i] = new Plat((i * 10) + (wnX - 39), 100);
    }
}

function draw() {
    background(51);
    for (let j = 0; j < nbPlat; j++) {
        /////////////////////////////////////////
        plat[j].render();
        plat[j].move();
    }
}