class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(~~(w / 2), ~~(h / 2));
        this.deltaX = 0;
        this.deltaY = 0;
    }

    updateSnake() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.deltaX;
        head.y += this.deltaY;
        this.body.push(head);
    }

    drawSnake() {
        for (let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
    }

    eat({ x, y }) {
        let bodyXPosition = this.body[this.body.length - 1].x;
        let bodyYPosition = this.body[this.body.length - 1].y;

        if (bodyXPosition === x && bodyYPosition === y) {
            foodLocation();
            let tail = this.body[0].copy();
            this.body.unshift(tail);
        }
    }

    endGame() {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;

        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            background(255, 0, 0);
            noLoop();
            alert('GAME OVER');
        }

        for (let i = 0; i < this.body.length - 1; i++) {
            if (this.body[i].x === x && this.body[i].y === y) {
                background(255, 0, 0);
                noLoop();
                alert('GAME OVER');
            }
        }
    }
}