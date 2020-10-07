class Rectangle {
    constructor(x, y, width, height, options) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.options = options;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        World.add(engine.world, this.body);
    }
}