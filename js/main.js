let wnX = window.innerWidth;
let wnY = window.innerHeight;

function setup() {

    createCanvas(wnX, wnY);
    background(51);

    //generating platforms
    plat = new Plat(wnX - 5, 100);

}

function loop() {
    render();
}