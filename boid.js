class Boid {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
    }



    show() {
        strokeWeight(16);
        stroke('white');
        point(this.position.x, this.position.y);
    }
}