let w, h, food;
let scl = 20;

function setup() {
    createCanvas(600, 600);

    w = ~~(width / scl);
    h = ~~(height / scl);

    foodLocation();
}

function draw() {
    background(51);
    scale(scl);

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}

function foodLocation() {
    food = createVector(~~random(w), ~~random(h))
}

/*
     =========================================================
     Snake Class
     =========================================================
*/

class Snake {
    constructor() {
        this.body = [];

        this.deltaX = 0;
        this.deltaY = 0;
    }

    update() {

    }

    show() {

    }
}