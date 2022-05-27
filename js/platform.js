class Plat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 11;
        this.width = 40;
        this.color = color(random(70, 200));
    }

    render() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}