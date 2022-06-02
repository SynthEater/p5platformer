class Decal {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.size = 70;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.width = 40;
        this.heigth = 50;
    }


    randomPick() {

        return random(1, 3);
    }

    render() {
        if (randomPick() === 1) {
            noStroke();
            fill(this.color);
            circle(this.x, this.y, this.size);

        } else if (randomPick() === 2) {
            noStroke();
            fill(this.color);
            square(this.x, this.y, this.size);

        } else if (randomPick() === 3) {
            noStroke();
            fill(this.color);
            ellipse(this.x, this.y, this.width, this.heigth);
        }
    }
}