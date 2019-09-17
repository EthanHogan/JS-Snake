let snake, food, w, h;
let scl = 20;

function setup() {
    createCanvas(600, 600);
    frameRate(10);

    w = ~~(width / scl);
    h = ~~(height / scl);

    snake = new Snake();
    foodLocation();
}

function draw() {
    scale(scl);
    background(51);

    snake.eat(food);
    snake.updateSnake();
    snake.drawSnake();
    snake.endGame()

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}

function foodLocation() {
    food = createVector(~~random(w), ~~random(h));
}

function keyPressed() {
    switch (keyCode) {
        case 38:
            snake.deltaX = 0;
            snake.deltaY = -1;
            break;
        case 40:
            snake.deltaX = 0;
            snake.deltaY = 1;
            break;
        case 39:
            snake.deltaX = 1;
            snake.deltaY = 0;
            break;
        case 37:
            snake.deltaX = -1;
            snake.deltaY = 0;
            break;
    }
}