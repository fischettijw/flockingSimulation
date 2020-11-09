class Boid {
    static neighborRadius = 100;
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = p5.Vector.random2D().setMag(random(0.5, 1.5));
        // this.velocity = p5.Vector.fromAngle(PI / 4);  // set angle initially
        // let r = this.velocity.heading();   // read angle
        // this.velocity.rotate(-r + PI / 4);  // set angle afterwoods
        this.acceleration = createVector();
    }

    align(boids) {
        let sumNeighbors = createVector();
        let numNeighbors = 0;
        boids.forEach(boid => {
            if (boid != this && p5.Vector.dist(this.velocity, boid.velocity) < Boid.neighborRadius) {
                sumNeighbors.add(boid.velocity)
                numNeighbors++;
            }
        });
        if (numNeighbors > 0) {
            let avg = sumNeighbors.div(numNeighbors);
            this.velocity = avg;
        }
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    show() {
        strokeWeight(4);
        stroke('white');
        point(this.position.x, this.position.y);
    }
}