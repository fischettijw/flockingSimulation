const flock = [];

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 50; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background('black');
    for (let boid of flock) {
        boid.update();
        boid.show();
    }
}