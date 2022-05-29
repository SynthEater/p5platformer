class Plat {
    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.height = 11;
        this.width = 190;
        this.color = color(random(160, 220));
    }

    render() {

        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    move() {

        this.x -= 4;
    }
}