class Player {
    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.vy = 0;
        this.ay = 0;
        this.size = 70;
        this.color = color(165, 255, 0);
    }

    render() {
        noStroke();
        fill(this.color);
        circle(this.x, this.y, this.size);
    }

    update() {
        this.vy -= this.ay
        this.vy = this.vy + 0.05;
        this.y = this.y + this.vy;
        this.ay *= 0;
    }
    jump() {
        this.ay = 3;

    }
}