function Cube(x, y, width, height, static = false) {

    var options = {
        friction: 0,
        restitution: 0,
        isStatic: static,
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.body.friction = 1;
    this.width = width;
    this.height = height;
    World.add(world, this.body);


    this.show = function () {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);

        rotate(angle);


        rectMode(CENTER); //permet de placer le point de physique au centre de l'objet

        strokeWeight(1);
        stroke(220);
        fill(220);


        rect(0, 0, this.width, this.height);


        pop();
    }
}