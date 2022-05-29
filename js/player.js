class Player {
    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.size = 70;
        this.color = color(165, 255, 0);
    }

    render() {
        noStroke();
        fill(this.color);
        circle(this.x, this.y, this.size);
    }
}