const flock = [];

function setup() {
    createCanvas(500, 500);
    flock.push(new Boid());
}

function draw() {
    background('black');
    for (let boid of flock) {
        boid.show();
    }
}