class Ground {
    constructor(w, x, y, z) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color(82, 25, 102);

    }

    render() {
        stroke(0);
        fill(this.color);
        rect(this.w, this.x, this.y, this.z);
    }

}