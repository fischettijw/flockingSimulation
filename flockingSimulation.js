//   https://www.youtube.com/watch?v=mhjuuHl6qHM&t=804s
//   https://www.youtube.com/watch?v=bqtqltqcQhw




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
        boid.align(flock);
        boid.update();
        boid.show();
    }
    if (frameCount > 120) { noLoop(); }
}